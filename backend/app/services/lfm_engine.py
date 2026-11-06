"""Liquid AI LFM 8B — Architecture Assistant & Design Critic Engine.

Translates natural language instructions into structured architectural actions
(JSON tool-calling) and performs architectural evaluation (Design Critic).
"""
from __future__ import annotations

import logging
import re
from typing import Any

logger = logging.getLogger(__name__)


class LFMAssistantEngine:
    """Simulates Liquid AI LFM2.5-8B-A1B Architecture reasoning model."""

    MODEL_NAME = "Liquid-LFM2.5-8B-A1B-ArchStudio"
    VERSION = "2.5.1"

    def process_instruction(self, prompt: str, current_scene: dict[str, Any] | None = None) -> dict[str, Any]:
        """Parse natural language command into structured JSON actions."""
        p = prompt.lower().strip()

        # 1. Check room creation / resizing
        dim_match = re.search(r"(\d+(?:[.,]\d+)?)\s*(?:x|×|kali)\s*(\d+(?:[.,]\d+)?)", p)
        if dim_match or "buatkan" in p or "ruang" in p or "kamar" in p or "room" in p:
            w = 5.0
            l = 4.0
            if dim_match:
                w = float(dim_match.group(1).replace(",", "."))
                l = float(dim_match.group(2).replace(",", "."))

            # Room type detection
            name = "Ruang Tamu"
            r_type = "living"
            if "tidur" in p or "bed" in p:
                name = "Kamar Tidur Utama"
                r_type = "bedroom"
                w = w if dim_match else 4.0
                l = l if dim_match else 3.5
            elif "dapur" in p or "kitchen" in p:
                name = "Dapur & Ruang Makan"
                r_type = "kitchen"
                w = w if dim_match else 4.5
                l = l if dim_match else 3.0
            elif "kerja" in p or "office" in p or "studio" in p:
                name = "Ruang Kerja / Studio"
                r_type = "office"
                w = w if dim_match else 3.5
                l = l if dim_match else 3.0
            elif "mandi" in p or "bath" in p:
                name = "Kamar Mandi"
                r_type = "bathroom"
                w = w if dim_match else 2.5
                l = l if dim_match else 2.0

            return {
                "model": self.MODEL_NAME,
                "action": "create_room",
                "explanation": f"LFM 8B merancang {name} dengan dimensi proporsional {w}m × {l}m sesuai standar ergonomi arsitektur.",
                "data": {
                    "name": name,
                    "type": r_type,
                    "width": w,
                    "length": l,
                    "height": 3.0,
                    "wall_material": "white_paint",
                    "floor_material": "wood_parquet" if r_type == "bedroom" else "ceramic_marble",
                },
                "recommended_furniture": self._get_default_furniture_for_type(r_type, w, l),
            }

        # 2. Material change instructions
        if "marmer" in p or "marble" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "set_material",
                "explanation": "LFM 8B menerapkan material marmer Carrara mewah pada lantai dengan refleksi lembut.",
                "data": {"target": "floor", "material": "marble", "color": "#f1f5f9"},
            }
        if "kayu" in p or "wood" in p or "parquet" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "set_material",
                "explanation": "LFM 8B menerapkan material kayu Oak alami untuk memberikan kehangatan ruang.",
                "data": {"target": "floor", "material": "wood", "color": "#92400e"},
            }
        if "beton" in p or "concrete" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "set_material",
                "explanation": "LFM 8B menerapkan tekstur beton ekspos industrial pada dinding.",
                "data": {"target": "wall", "material": "concrete", "color": "#64748b"},
            }

        # 3. Lighting mode instructions
        if "pagi" in p or "morning" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "set_lighting",
                "explanation": "Mengatur pencahayaan pagi hari (Golden Hour) dengan sinar matahari lembut dari arah timur.",
                "data": {"preset": "morning", "sun_intensity": 1.1, "ambient_color": "#fed7aa"},
            }
        if "sore" in p or "sunset" in p or "senja" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "set_lighting",
                "explanation": "Mengatur simulasi cahaya senja temaram dengan temperatur warna hangat 3200K.",
                "data": {"preset": "sunset", "sun_intensity": 0.8, "ambient_color": "#fdba74"},
            }
        if "malam" in p or "night" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "set_lighting",
                "explanation": "Mengatur simulasi malam hari dengan pencahayaan buatan (interior spotlights dan floor lamps).",
                "data": {"preset": "night", "sun_intensity": 0.05, "ambient_color": "#1e293b"},
            }

        # 4. Furniture add instructions
        for f_type, label in [
            ("sofa", "Sofa Modern"),
            ("bed", "Tempat Tidur King Size"),
            ("table", "Meja Makan"),
            ("desk", "Meja Kerja"),
            ("plant", "Tanaman Hias Monstera"),
            ("tv", "Konsol TV Minimalis"),
            ("wardrobe", "Lemari Pakaian"),
            ("bathtub", "Bathtub Akrilik"),
        ]:
            if f_type in p or label.lower() in p:
                return {
                    "model": self.MODEL_NAME,
                    "action": "add_furniture",
                    "explanation": f"LFM 8B menambahkan {label} pada posisi strategis dengan orientasi menghadap pusat ruang.",
                    "data": {
                        "type": f_type,
                        "label": label,
                        "position": [0.0, 0.0, 0.0],
                        "rotation": 0.0,
                    },
                }

        # 5. Fallback generic architectural advice
        return {
            "model": self.MODEL_NAME,
            "action": "chat_response",
            "explanation": (
                "LFM 8B menganalisis konsep arsitektur Anda: Disarankan memaksimalkan ventilasi silang (cross-ventilation), "
                "menggunakan jendela setinggi 2.1m di dinding utara/selatan, serta mempertahankan koridor sirkulasi minimal 90 cm."
            ),
            "data": {},
        }

    def evaluate_design(self, scene_data: dict[str, Any]) -> dict[str, Any]:
        """Perform Design Critic evaluation based on architectural fundamentals."""
        room = scene_data.get("room", {})
        objects = scene_data.get("objects", [])
        w = float(room.get("width", 5.0))
        l = float(room.get("length", 4.0))
        area = round(w * l, 2)

        obj_count = len(objects)
        density = round(obj_count / max(area, 1.0) * 10, 1)

        critiques = []
        score = 88

        # 1. Area evaluation
        if area < 6.0:
            critiques.append({
                "type": "warning",
                "aspect": "Ukuran Ruang",
                "message": f"Luas ruang ({area} m²) tergolong sangat kompak. Gunakan furniture multifungsi dan warna cat terang untuk kesan lega.",
            })
            score -= 5
        elif area > 35.0:
            critiques.append({
                "type": "info",
                "aspect": "Skala Ruang",
                "message": f"Luas ruang ({area} m²) cukup lapang. Pastikan pengelompokan zona aktivitas (zoning) jelas agar tidak terkesan kosong.",
            })
        else:
            critiques.append({
                "type": "good",
                "aspect": "Proporsi Ruang",
                "message": f"Dimensi ruang {w}m × {l}m ({area} m²) sangat ideal untuk sirkulasi dan penataan interior standar.",
            })

        # 2. Circulation & Furniture Density
        if obj_count > 8 and area < 16.0:
            critiques.append({
                "type": "warning",
                "aspect": "Kepadatan Sirkulasi",
                "message": "Jumlah perabot cukup padat terhadap luas lantai. Pastikan lebar jalur berjalan minimal 80-90 cm tetap terbuka.",
            })
            score -= 7
        else:
            critiques.append({
                "type": "good",
                "aspect": "Alur Sirkulasi",
                "message": "Kepadatan perabot seimbang, jalur lalu lintas manusia di dalam ruangan terpelihara dengan baik.",
            })

        # 3. Lighting & Ventilation advice
        critiques.append({
            "type": "suggestion",
            "aspect": "Pencahayaan Alami",
            "message": "Rasio bukaan jendela ideal adalah 10-15% dari luas lantai untuk efisiensi energi dan kenyamanan termal siang hari.",
        })

        return {
            "model": self.MODEL_NAME,
            "overall_score": score,
            "room_area_m2": area,
            "furniture_count": obj_count,
            "critiques": critiques,
            "summary": (
                f"Desain ruangan {room.get('name', 'Studio')} memiliki efisiensi ruang yang baik (Skor {score}/100). "
                "Sirkulasi fungsional dan proporsi struktural memenuhi kaidah perancangan arsitektur modern."
            ),
        }

    def _get_default_furniture_for_type(self, r_type: str, w: float, l: float) -> list[dict[str, Any]]:
        hw = w / 2.0
        hl = l / 2.0
        if r_type == "living":
            return [
                {"type": "sofa", "x": 0.0, "z": hl - 1.2, "rotation": 0},
                {"type": "table", "x": 0.0, "z": hl - 2.2, "rotation": 0},
                {"type": "tv", "x": 0.0, "z": -hl + 0.6, "rotation": 180},
                {"type": "plant", "x": hw - 0.7, "z": -hl + 0.7, "rotation": 0},
            ]
        elif r_type == "bedroom":
            return [
                {"type": "bed", "x": 0.0, "z": -hl + 1.6, "rotation": 0},
                {"type": "wardrobe", "x": hw - 0.8, "z": 0.0, "rotation": -90},
                {"type": "desk", "x": -hw + 1.0, "z": hl - 1.0, "rotation": 90},
            ]
        elif r_type == "kitchen":
            return [
                {"type": "table", "x": 0.0, "z": 0.0, "rotation": 0},
                {"type": "plant", "x": hw - 0.6, "z": hl - 0.6, "rotation": 0},
            ]
        return []
