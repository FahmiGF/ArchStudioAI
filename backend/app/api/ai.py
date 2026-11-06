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
    """Return pre-configured architectural maps & templates."""
    templates = [
        {
            "id": "minimalist-house",
            "name": "Minimalist Modern House",
            "category": "Interior & Residensi",
            "description": "Rumah 1 lantai konsep terbuka (open-plan) dengan ruang tamu lapang, pencahayaan alami maksimal, dan perabot lengkap.",
            "room": {
                "name": "Ruang Tamu & Keluarga",
                "width": 6.0,
                "length": 5.0,
                "height": 3.2,
                "wall_material": "white",
                "floor_material": "parquet",
            },
            "objects": [
                {"type": "sofa_l", "x": -0.8, "z": 1.2, "rotation": 0},
                {"type": "table", "x": -0.8, "z": 0.1, "rotation": 0},
                {"type": "rug", "x": -0.8, "z": 0.6, "rotation": 0},
                {"type": "tv", "x": -0.8, "z": -2.1, "rotation": 180},
                {"type": "bookshelf", "x": 2.5, "z": 0.0, "rotation": -90},
                {"type": "floor_lamp", "x": -2.3, "z": 1.8, "rotation": 0},
                {"type": "plant", "x": 2.4, "z": -2.0, "rotation": 0},
            ],
            "lighting": "noon",
        },
        {
            "id": "scandinavian-bedroom",
            "name": "Scandinavian Cozy Bedroom",
            "category": "Interior",
            "description": "Kamar tidur bergaya Nordik dengan palet warna kayu hangat, furnitur fungsional, meja rias, dan sudut kerja ergonomis.",
            "room": {
                "name": "Master Bedroom",
                "width": 5.0,
                "length": 4.5,
                "height": 3.0,
                "wall_material": "cream",
                "floor_material": "parquet",
            },
            "objects": [
                {"type": "bed", "x": 0.0, "z": -0.8, "rotation": 0},
                {"type": "nightstand", "x": -1.4, "z": -0.8, "rotation": 0},
                {"type": "nightstand", "x": 1.4, "z": -0.8, "rotation": 0},
                {"type": "wardrobe", "x": 1.9, "z": 0.8, "rotation": -90},
                {"type": "desk", "x": -1.8, "z": 1.3, "rotation": 90},
                {"type": "office_chair", "x": -1.2, "z": 1.3, "rotation": 90},
                {"type": "dressing_table", "x": 0.5, "z": 1.8, "rotation": 0},
            ],
            "lighting": "morning",
        },
        {
            "id": "corporate-office",
            "name": "Perkantoran Modern (Corporate Office)",
            "category": "Komersial & Kantor",
            "description": "Studio perkantoran eksekutif modern dengan meja konferensi dewan, ruang kerja modular, rak server sentral, dan area meeting.",
            "room": {
                "name": "Corporate Open Office",
                "width": 9.0,
                "length": 7.0,
                "height": 3.6,
                "wall_material": "white",
                "floor_material": "marble",
            },
            "objects": [
                {"type": "meeting_table", "x": 0.0, "z": -0.5, "rotation": 0},
                {"type": "office_chair", "x": -1.0, "z": -0.5, "rotation": 90},
                {"type": "office_chair", "x": 1.0, "z": -0.5, "rotation": -90},
                {"type": "desk", "x": -3.0, "z": 2.0, "rotation": 0},
                {"type": "office_chair", "x": -3.0, "z": 2.6, "rotation": 0},
                {"type": "desk", "x": 3.0, "z": 2.0, "rotation": 0},
                {"type": "office_chair", "x": 3.0, "z": 2.6, "rotation": 0},
                {"type": "whiteboard", "x": 0.0, "z": -3.2, "rotation": 180},
                {"type": "server_rack", "x": 3.8, "z": -2.8, "rotation": 0},
                {"type": "water_dispenser", "x": -3.8, "z": -2.8, "rotation": 0},
                {"type": "plant", "x": -3.8, "z": 3.0, "rotation": 0},
            ],
            "lighting": "noon",
        },
        {
            "id": "industrial-warehouse",
            "name": "Industri & Gudang Logistik",
            "category": "Industri & Manufaktur",
            "description": "Fasilitas pergudangan dan logistik industri dengan struktur kolom masif, sirkulasi forklift, tumpukan pallet, dan tangki penyimpanan.",
            "room": {
                "name": "Industrial Logistics Hub",
                "width": 11.0,
                "length": 9.0,
                "height": 4.5,
                "wall_material": "concrete",
                "floor_material": "concrete",
            },
            "objects": [
                {"type": "forklift", "x": 0.0, "z": 1.0, "rotation": 25},
                {"type": "pallet_stack", "x": -3.5, "z": -2.5, "rotation": 0},
                {"type": "pallet_stack", "x": -3.5, "z": 0.0, "rotation": 0},
                {"type": "pallet_stack", "x": -3.5, "z": 2.5, "rotation": 0},
                {"type": "storage_tank", "x": 3.5, "z": -2.5, "rotation": 0},
                {"type": "storage_tank", "x": 3.5, "z": 0.0, "rotation": 0},
                {"type": "hvac_unit", "x": 3.8, "z": 3.0, "rotation": -90},
            ],
            "lighting": "noon",
        },
        {
            "id": "retail-mall",
            "name": "Distrik Mall & Retail Boutique",
            "category": "Komersial & Mall",
            "description": "Butik retail shopping mall modern dengan rak gondola etalase, meja kasir checkout pos, display manekin fesyen, dan pencahayaan dramatis.",
            "room": {
                "name": "Lifestyle Boutique Store",
                "width": 8.0,
                "length": 6.5,
                "height": 3.4,
                "wall_material": "charcoal",
                "floor_material": "marble",
            },
            "objects": [
                {"type": "shelf_gondola", "x": -1.8, "z": -0.8, "rotation": 0},
                {"type": "shelf_gondola", "x": 1.8, "z": -0.8, "rotation": 0},
                {"type": "display_case", "x": 0.0, "z": 1.2, "rotation": 0},
                {"type": "mannequin", "x": -2.8, "z": 2.2, "rotation": 15},
                {"type": "mannequin", "x": -2.0, "z": 2.2, "rotation": -15},
                {"type": "cashier_counter", "x": 2.5, "z": 2.0, "rotation": 180},
                {"type": "plant", "x": 3.2, "z": -2.6, "rotation": 0},
            ],
            "lighting": "sunset",
        },
        {
            "id": "tropical-villa",
            "name": "Villa Tropis & Kolam Renang Resort",
            "category": "Exterior & Lanskap",
            "description": "Paviliun terbuka menghadap teras luar, kolam renang tropis dengan kanopi kayu, pohon palem, bangku taman, dan mobil santai.",
            "room": {
                "name": "Living Pavilion & Resort Terrace",
                "width": 8.5,
                "length": 6.0,
                "height": 3.4,
                "wall_material": "white",
                "floor_material": "marble",
            },
            "objects": [
                {"type": "sofa_l", "x": -2.0, "z": 0.0, "rotation": 0},
                {"type": "table", "x": -2.0, "z": -1.0, "rotation": 0},
                {"type": "pool", "x": 2.2, "z": 0.0, "rotation": 0},
                {"type": "tree", "x": 3.5, "z": -2.4, "rotation": 0},
                {"type": "tree", "x": 3.5, "z": 2.4, "rotation": 0},
                {"type": "park_bench", "x": -3.2, "z": 2.2, "rotation": -45},
                {"type": "street_lamp", "x": -3.5, "z": -2.2, "rotation": 0},
            ],
            "lighting": "sunset",
        },
    ]
    return {"success": True, "templates": templates}
