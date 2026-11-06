"""AI Architecture Assistant API endpoints."""
from __future__ import annotations

from typing import Any, Optional
from fastapi import APIRouter
from pydantic import BaseModel, Field

from app.services.lfm_engine import LFMAssistantEngine

router = APIRouter(prefix="/api/ai", tags=["AI Architecture"])
lfm_engine = LFMAssistantEngine()


class InstructionRequest(BaseModel):
    prompt: str = Field(min_length=1, description="Instruksi arsitektur bahasa natural")
    current_scene: Optional[dict[str, Any]] = None


class CriticRequest(BaseModel):
    scene: dict[str, Any]


@router.post("/instruction")
async def process_instruction(req: InstructionRequest):
    """Process natural language architectural command via LFM 8B."""
    result = lfm_engine.process_instruction(req.prompt, req.current_scene)
    return {"success": True, "result": result}


@router.post("/critic")
async def evaluate_architecture(req: CriticRequest):
    """Run AI Design Critic on the current architectural layout."""
    evaluation = lfm_engine.evaluate_design(req.scene)
    return {"success": True, "evaluation": evaluation}


@router.get("/templates")
async def get_templates():
    """Return pre-configured architectural templates."""
    templates = [
        {
            "id": "minimalist-house",
            "name": "Minimalist Modern House",
            "category": "Interior & Exterior",
            "description": "Rumah 1 lantai konsep terbuka (open-plan) dengan ruang tamu lapang, pencahayaan alami maksimal, dan taman samping.",
            "room": {"name": "Ruang Tamu & Keluarga", "width": 6.0, "length": 5.0, "height": 3.2, "wall_material": "white_paint", "floor_material": "wood_parquet"},
            "objects": [
                {"type": "sofa", "x": 0.0, "z": 1.2, "rotation": 0},
                {"type": "table", "x": 0.0, "z": 0.2, "rotation": 0},
                {"type": "tv", "x": 0.0, "z": -2.0, "rotation": 180},
                {"type": "plant", "x": 2.2, "z": -1.8, "rotation": 0},
                {"type": "plant", "x": -2.2, "z": 1.8, "rotation": 0},
            ],
            "lighting": "noon",
        },
        {
            "id": "scandinavian-bedroom",
            "name": "Scandinavian Cozy Bedroom",
            "category": "Interior",
            "description": "Kamar tidur bergaya Nordik dengan palet warna kayu hangat, furnitur fungsional, dan sudut kerja ergonomis.",
            "room": {"name": "Master Bedroom", "width": 4.5, "length": 4.0, "height": 3.0, "wall_material": "cream_paint", "floor_material": "wood_parquet"},
            "objects": [
                {"type": "bed", "x": 0.0, "z": -0.8, "rotation": 0},
                {"type": "wardrobe", "x": 1.6, "z": 0.5, "rotation": -90},
                {"type": "desk", "x": -1.5, "z": 1.2, "rotation": 90},
                {"type": "plant", "x": -1.6, "z": -1.4, "rotation": 0},
            ],
            "lighting": "morning",
        },
        {
            "id": "industrial-loft",
            "name": "Industrial Open Loft",
            "category": "Interior",
            "description": "Konsep loteng urban dengan dinding aksen beton ekspos, lantai semen poles, dan pencahayaan aksen kontemporer.",
            "room": {"name": "Loft Studio", "width": 7.0, "length": 5.5, "height": 3.6, "wall_material": "concrete", "floor_material": "ceramic_marble"},
            "objects": [
                {"type": "sofa", "x": -1.0, "z": 1.0, "rotation": 0},
                {"type": "table", "x": -1.0, "z": 0.0, "rotation": 0},
                {"type": "tv", "x": -1.0, "z": -2.0, "rotation": 180},
                {"type": "desk", "x": 2.2, "z": 1.2, "rotation": 0},
                {"type": "plant", "x": 2.5, "z": -2.0, "rotation": 0},
            ],
            "lighting": "sunset",
        },
        {
            "id": "tropical-villa",
            "name": "Tropical Modern Villa",
            "category": "Exterior & Landscape",
            "description": "Paviliun terbuka menghadap teras luar dan kolam renang tropis dengan kanopi kayu dan vegetasi hijau.",
            "room": {"name": "Living Pavilion", "width": 6.5, "length": 5.0, "height": 3.4, "wall_material": "white_paint", "floor_material": "ceramic_marble"},
            "objects": [
                {"type": "sofa", "x": 0.0, "z": 0.5, "rotation": 0},
                {"type": "table", "x": 0.0, "z": -0.5, "rotation": 0},
                {"type": "plant", "x": 2.4, "z": 1.6, "rotation": 0},
                {"type": "plant", "x": -2.4, "z": 1.6, "rotation": 0},
                {"type": "pool", "x": 0.0, "z": 4.5, "rotation": 0},
            ],
            "lighting": "noon",
        },
    ]
    return {"success": True, "templates": templates}
