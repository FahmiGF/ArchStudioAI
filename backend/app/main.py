"""ArchStudio AI — FastAPI Main Application."""
from __future__ import annotations

import logging
from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles

from app.api.ai import router as ai_router

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(name)s: %(message)s")
logger = logging.getLogger("archstudio-ai")

STATIC_DIR = Path(__file__).resolve().parent / "static"

app = FastAPI(
    title="ArchStudio AI — Interior & Exterior Architecture Simulator",
    description="Interactive 3D/2D Architecture Simulator with Liquid AI LFM 8B Assistant and Design Critic.",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ai_router)

if STATIC_DIR.exists():
    app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")


@app.get("/", include_in_schema=False)
async def root():
    """Serve ArchStudio 3D Web Studio."""
    index_file = STATIC_DIR / "index.html"
    if index_file.exists():
        return FileResponse(index_file)
    return RedirectResponse(url="/docs")


@app.get("/masterplan", include_in_schema=False)
async def masterplan():
    """Serve ArchStudio Masterplan Studio."""
    masterplan_file = STATIC_DIR / "masterplan.html"
    if masterplan_file.exists():
        return FileResponse(masterplan_file)
    return RedirectResponse(url="/")


@app.get("/api/health", tags=["Health"])
async def health_check():
    """Service health check."""
    return {
        "status": "healthy",
        "service": "ArchStudio AI Architecture Engine",
        "version": "1.0.0",
        "ai_model": "Liquid-LFM2.5-8B-A1B",
    }
