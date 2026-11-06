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
    """Return expanded scale-up architectural maps & templates."""
    templates = [
        {
            "id": "minimalist-house",
            "name": "Minimalist Modern House (Default)",
            "category": "Interior & Residensi",
            "description": "Desain standar kubus arsitektur terbuka (open-plan) dengan ruang tamu lapang, sofa L, karpet, dan pencahayaan alami.",
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
            "id": "office",
            "name": "Corporate Office & Conference Hub",
            "category": "Komersial & Kantor",
            "description": "Ruang kantor skala besar (14m × 10m) dengan meja rapat dewan, bilik kerja modular, kursi ergonomis, server rack, dan area kopi.",
            "room": {
                "name": "Corporate Open Office",
                "width": 14.0,
                "length": 10.0,
                "height": 3.6,
                "wall_material": "white",
                "floor_material": "marble",
            },
            "objects": [
                {"type": "meeting_table", "x": -3.0, "z": -1.5, "rotation": 0},
                {"type": "office_chair", "x": -4.2, "z": -1.5, "rotation": 90},
                {"type": "office_chair", "x": -1.8, "z": -1.5, "rotation": -90},
                {"type": "desk", "x": 3.5, "z": -2.5, "rotation": 0},
                {"type": "office_chair", "x": 3.5, "z": -1.8, "rotation": 0},
                {"type": "desk", "x": 3.5, "z": 1.5, "rotation": 0},
                {"type": "office_chair", "x": 3.5, "z": 2.2, "rotation": 0},
                {"type": "desk", "x": -3.0, "z": 2.5, "rotation": 0},
                {"type": "office_chair", "x": -3.0, "z": 3.2, "rotation": 0},
                {"type": "whiteboard", "x": -3.0, "z": -4.6, "rotation": 180},
                {"type": "server_rack", "x": 6.2, "z": -4.2, "rotation": 0},
                {"type": "water_dispenser", "x": 6.2, "z": 3.8, "rotation": 0},
                {"type": "plant", "x": -6.2, "z": -4.2, "rotation": 0},
                {"type": "plant", "x": -6.2, "z": 4.2, "rotation": 0},
            ],
            "lighting": "noon",
        },
        {
            "id": "mall",
            "name": "Mega Shopping Mall District",
            "category": "Komersial & Mall",
            "description": "Distrik pusat perbelanjaan masif (20m × 14m) dengan lorong belanja berjejer gondola etalase, kasir checkout POS, display manekin, dan area lounge.",
            "room": {
                "name": "Grand Mall Atrium & Boutiques",
                "width": 20.0,
                "length": 14.0,
                "height": 4.5,
                "wall_material": "charcoal",
                "floor_material": "marble",
            },
            "objects": [
                {"type": "shelf_gondola", "x": -5.5, "z": -3.0, "rotation": 0},
                {"type": "shelf_gondola", "x": -5.5, "z": 1.0, "rotation": 0},
                {"type": "shelf_gondola", "x": 0.0, "z": -3.0, "rotation": 0},
                {"type": "shelf_gondola", "x": 0.0, "z": 1.0, "rotation": 0},
                {"type": "display_case", "x": 5.0, "z": -3.0, "rotation": 0},
                {"type": "display_case", "x": 5.0, "z": 1.0, "rotation": 0},
                {"type": "cashier_counter", "x": 7.5, "z": 4.5, "rotation": 180},
                {"type": "mannequin", "x": -8.5, "z": 4.0, "rotation": 20},
                {"type": "mannequin", "x": -7.5, "z": 4.0, "rotation": -20},
                {"type": "sofa_l", "x": 0.0, "z": 5.0, "rotation": 0},
                {"type": "plant", "x": -9.0, "z": -6.0, "rotation": 0},
                {"type": "plant", "x": 9.0, "z": -6.0, "rotation": 0},
            ],
            "lighting": "sunset",
        },
        {
            "id": "library",
            "name": "Academic Public Library",
            "category": "Pendidikan & Publik",
            "description": "Perpustakaan skala besar (16m × 12m) dengan barisan rak buku arsip, meja baca komunal, meja belajar mandiri, dan pencahayaan tenang.",
            "room": {
                "name": "Central Reading Library",
                "width": 16.0,
                "length": 12.0,
                "height": 3.8,
                "wall_material": "cream",
                "floor_material": "parquet",
            },
            "objects": [
                {"type": "bookshelf", "x": -6.5, "z": -4.0, "rotation": 0},
                {"type": "bookshelf", "x": -4.5, "z": -4.0, "rotation": 0},
                {"type": "bookshelf", "x": -2.5, "z": -4.0, "rotation": 0},
                {"type": "bookshelf", "x": -6.5, "z": 0.0, "rotation": 0},
                {"type": "bookshelf", "x": -4.5, "z": 0.0, "rotation": 0},
                {"type": "bookshelf", "x": -2.5, "z": 0.0, "rotation": 0},
                {"type": "dining_table", "x": 3.5, "z": -3.0, "rotation": 0},
                {"type": "dining_table", "x": 3.5, "z": 2.0, "rotation": 0},
                {"type": "desk", "x": -6.0, "z": 4.5, "rotation": 0},
                {"type": "office_chair", "x": -6.0, "z": 5.2, "rotation": 0},
                {"type": "desk", "x": -3.5, "z": 4.5, "rotation": 0},
                {"type": "office_chair", "x": -3.5, "z": 5.2, "rotation": 0},
                {"type": "floor_lamp", "x": 6.8, "z": -4.8, "rotation": 0},
                {"type": "plant", "x": 6.8, "z": 4.8, "rotation": 0},
            ],
            "lighting": "morning",
        },
        {
            "id": "school",
            "name": "Modern School Classroom",
            "category": "Pendidikan & Sekolah",
            "description": "Ruang kelas modern (12m × 9m) dengan formasi meja belajar siswa berbaris rapi, podium pengajar, papan tulis lebar, dan loker buku.",
            "room": {
                "name": "Classroom Architecture",
                "width": 12.0,
                "length": 9.0,
                "height": 3.4,
                "wall_material": "white",
                "floor_material": "parquet",
            },
            "objects": [
                {"type": "whiteboard", "x": 0.0, "z": -4.0, "rotation": 180},
                {"type": "desk", "x": 3.5, "z": -3.2, "rotation": 180},
                {"type": "office_chair", "x": 3.5, "z": -3.8, "rotation": 0},
                {"type": "desk", "x": -3.5, "z": -1.0, "rotation": 0},
                {"type": "office_chair", "x": -3.5, "z": -0.4, "rotation": 0},
                {"type": "desk", "x": 0.0, "z": -1.0, "rotation": 0},
                {"type": "office_chair", "x": 0.0, "z": -0.4, "rotation": 0},
                {"type": "desk", "x": 3.5, "z": -1.0, "rotation": 0},
                {"type": "office_chair", "x": 3.5, "z": -0.4, "rotation": 0},
                {"type": "desk", "x": -3.5, "z": 1.8, "rotation": 0},
                {"type": "office_chair", "x": -3.5, "z": 2.4, "rotation": 0},
                {"type": "desk", "x": 0.0, "z": 1.8, "rotation": 0},
                {"type": "office_chair", "x": 0.0, "z": 2.4, "rotation": 0},
                {"type": "desk", "x": 3.5, "z": 1.8, "rotation": 0},
                {"type": "office_chair", "x": 3.5, "z": 2.4, "rotation": 0},
                {"type": "bookshelf", "x": -5.2, "z": 3.5, "rotation": 90},
                {"type": "plant", "x": -5.2, "z": -3.8, "rotation": 0},
            ],
            "lighting": "noon",
        },
        {
            "id": "parking-lot",
            "name": "Outdoor Parking & Plaza Lot",
            "category": "Eksterior & Infrastruktur",
            "description": "Area pelataran parkir luas (22m × 16m) dengan deretan kendaraan sedan, tiang lampu penerangan, kanopi pohon cemara, dan pagar pembatas.",
            "room": {
                "name": "Vehicle Parking Plaza",
                "width": 22.0,
                "length": 16.0,
                "height": 4.0,
                "wall_material": "concrete",
                "floor_material": "concrete",
            },
            "objects": [
                {"type": "car_sedan", "x": -7.0, "z": -4.0, "rotation": 0},
                {"type": "car_sedan", "x": -2.5, "z": -4.0, "rotation": 0},
                {"type": "car_sedan", "x": 2.5, "z": -4.0, "rotation": 0},
                {"type": "car_sedan", "x": 7.0, "z": -4.0, "rotation": 0},
                {"type": "car_sedan", "x": -5.0, "z": 4.0, "rotation": 180},
                {"type": "car_sedan", "x": 5.0, "z": 4.0, "rotation": 180},
                {"type": "street_lamp", "x": -9.5, "z": 0.0, "rotation": 0},
                {"type": "street_lamp", "x": 9.5, "z": 0.0, "rotation": 0},
                {"type": "pine_tree", "x": -9.5, "z": -6.5, "rotation": 0},
                {"type": "pine_tree", "x": 9.5, "z": -6.5, "rotation": 0},
                {"type": "pine_tree", "x": -9.5, "z": 6.5, "rotation": 0},
                {"type": "pine_tree", "x": 9.5, "z": 6.5, "rotation": 0},
                {"type": "fence", "x": 0.0, "z": -7.5, "rotation": 0},
            ],
            "lighting": "sunset",
        },
        {
            "id": "toilet",
            "name": "Public Restroom & Sanitary Suite",
            "category": "Fasilitas Sanitasi",
            "description": "Fasilitas toilet publik modern (6.5m × 5.0m) dengan deretan toilet cubicle, vanity washtafel ganda, cermin besar, dan lantai marmer higienis.",
            "room": {
                "name": "Sanitary Restroom Facility",
                "width": 6.5,
                "length": 5.0,
                "height": 3.0,
                "wall_material": "white",
                "floor_material": "marble",
            },
            "objects": [
                {"type": "toilet", "x": -2.2, "z": -1.8, "rotation": 0},
                {"type": "toilet", "x": -0.7, "z": -1.8, "rotation": 0},
                {"type": "toilet", "x": 0.8, "z": -1.8, "rotation": 0},
                {"type": "toilet", "x": 2.3, "z": -1.8, "rotation": 0},
                {"type": "sink_vanity", "x": -1.5, "z": 1.8, "rotation": 180},
                {"type": "sink_vanity", "x": 0.5, "z": 1.8, "rotation": 180},
                {"type": "plant", "x": 2.5, "z": 1.8, "rotation": 0},
            ],
            "lighting": "noon",
        },
        {
            "id": "server-room",
            "name": "Data Center & Mission-Critical Server Room",
            "category": "Teknologi & Infrastruktur",
            "description": "Ruang server data center (9.0m × 7.0m) dengan deretan rak rackmount server terpusat, pendingin presisi industri HVAC, dan dinding beton peredam.",
            "room": {
                "name": "Mission-Critical Server Room",
                "width": 9.0,
                "length": 7.0,
                "height": 3.5,
                "wall_material": "concrete",
                "floor_material": "concrete",
            },
            "objects": [
                {"type": "server_rack", "x": -2.5, "z": -1.5, "rotation": 0},
                {"type": "server_rack", "x": -1.0, "z": -1.5, "rotation": 0},
                {"type": "server_rack", "x": 0.5, "z": -1.5, "rotation": 0},
                {"type": "server_rack", "x": 2.0, "z": -1.5, "rotation": 0},
                {"type": "server_rack", "x": -2.5, "z": 1.5, "rotation": 180},
                {"type": "server_rack", "x": -1.0, "z": 1.5, "rotation": 180},
                {"type": "server_rack", "x": 0.5, "z": 1.5, "rotation": 180},
                {"type": "server_rack", "x": 2.0, "z": 1.5, "rotation": 180},
                {"type": "hvac_unit", "x": 3.6, "z": 0.0, "rotation": -90},
                {"type": "desk", "x": -3.6, "z": 2.5, "rotation": 90},
                {"type": "office_chair", "x": -3.0, "z": 2.5, "rotation": 90},
            ],
            "lighting": "night",
        },
        {
            "id": "industrial-warehouse",
            "name": "Industrial Logistics Hub & Warehouse",
            "category": "Industri & Manufaktur",
            "description": "Gudang logistik skala raksasa (18m × 12m, tinggi 5m) dengan forklift, tumpukan pallet kargo, tangki silo, dan sistem pendingin HVAC masif.",
            "room": {
                "name": "Industrial Logistics Warehouse",
                "width": 18.0,
                "length": 12.0,
                "height": 5.0,
                "wall_material": "concrete",
                "floor_material": "concrete",
            },
            "objects": [
                {"type": "forklift", "x": 0.0, "z": 1.5, "rotation": 30},
                {"type": "pallet_stack", "x": -6.0, "z": -3.5, "rotation": 0},
                {"type": "pallet_stack", "x": -6.0, "z": 0.0, "rotation": 0},
                {"type": "pallet_stack", "x": -6.0, "z": 3.5, "rotation": 0},
                {"type": "pallet_stack", "x": -3.5, "z": -3.5, "rotation": 0},
                {"type": "storage_tank", "x": 6.5, "z": -3.5, "rotation": 0},
                {"type": "storage_tank", "x": 6.5, "z": 0.0, "rotation": 0},
                {"type": "hvac_unit", "x": 7.0, "z": 4.0, "rotation": -90},
            ],
            "lighting": "noon",
        },
        {
            "id": "tropical-villa",
            "name": "Luxury Tropical Villa & Resort Pool",
            "category": "Exterior & Lanskap",
            "description": "Paviliun terbuka tropis (15m × 10m) terintegrasi dengan kolam renang tropis besar, dek santai, pohon palem kelapa, bangku taman, dan mobil sedan.",
            "room": {
                "name": "Tropical Resort Villa & Oasis",
                "width": 15.0,
                "length": 10.0,
                "height": 3.6,
                "wall_material": "white",
                "floor_material": "marble",
            },
            "objects": [
                {"type": "sofa_l", "x": -4.0, "z": -1.0, "rotation": 0},
                {"type": "table", "x": -4.0, "z": -2.2, "rotation": 0},
                {"type": "pool", "x": 3.5, "z": 0.0, "rotation": 0},
                {"type": "tree", "x": 6.2, "z": -3.8, "rotation": 0},
                {"type": "tree", "x": 6.2, "z": 3.8, "rotation": 0},
                {"type": "park_bench", "x": -5.5, "z": 3.0, "rotation": -45},
                {"type": "street_lamp", "x": -6.0, "z": -3.8, "rotation": 0},
                {"type": "car_sedan", "x": -3.5, "z": 3.8, "rotation": 90},
            ],
            "lighting": "sunset",
        },
    ]
    return {"success": True, "templates": templates}
