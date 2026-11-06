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
    VERSION = "2.5.2"

    def process_instruction(self, prompt: str, current_scene: dict[str, Any] | None = None) -> dict[str, Any]:
        """Parse natural language command into structured JSON actions."""
        p = prompt.lower().strip()

        # Check for specific Map / Blueprint templates
        if "kantor" in p or "perkantoran" in p or "office" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "load_template",
                "explanation": "LFM 8B memuat arsitektur Perkantoran Modern dengan zona kerja open-plan, ruang rapat eksekutif, dan fasilitas pendukung.",
                "data": {"template_id": "corporate-office"},
            }
        if "industri" in p or "pabrik" in p or "gudang" in p or "warehouse" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "load_template",
                "explanation": "LFM 8B memuat layout Industri & Gudang Logistik dengan struktur plafon tinggi, sirkulasi forklift, dan penyimpanan pallet.",
                "data": {"template_id": "industrial-warehouse"},
            }
        if "mall" in p or "retail" in p or "toko" in p or "distrik" in p or "butik" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "load_template",
                "explanation": "LFM 8B memuat layout Distrik Mall & Retail Boutique dengan lorong belanja lebar, rak gondola, dan meja kasir.",
                "data": {"template_id": "retail-mall"},
            }
        if "villa" in p or "resort" in p or "tropis" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "load_template",
                "explanation": "LFM 8B memuat rancangan Villa Tropis Mewah dengan integrasi kolam renang lanskap dan paviliun terbuka.",
                "data": {"template_id": "tropical-villa"},
            }

        # 1. Check room creation / resizing
        dim_match = re.search(r"(\d+(?:[.,]\d+)?)\s*(?:x|×|kali)\s*(\d+(?:[.,]\d+)?)", p)
        if dim_match or "buatkan" in p or "ruang" in p or "kamar" in p or "room" in p:
            w = 6.0
            l = 5.0
            h = 3.2
            if dim_match:
                w = float(dim_match.group(1).replace(",", "."))
                l = float(dim_match.group(2).replace(",", "."))

            # Room type detection
            name = "Ruang Tamu & Keluarga"
            r_type = "living"
            if "tidur" in p or "bed" in p:
                name = "Kamar Tidur Utama"
                r_type = "bedroom"
                w = w if dim_match else 4.5
                l = l if dim_match else 4.0
            elif "dapur" in p or "kitchen" in p:
                name = "Dapur & Ruang Makan"
                r_type = "kitchen"
                w = w if dim_match else 5.0
                l = l if dim_match else 4.0
            elif "kantor" in p or "kerja" in p or "office" in p or "studio" in p:
                name = "Ruang Kantor Eksekutif"
                r_type = "office"
                w = w if dim_match else 6.0
                l = l if dim_match else 5.0
            elif "mandi" in p or "bath" in p:
                name = "Kamar Mandi Master"
                r_type = "bathroom"
                w = w if dim_match else 3.0
                l = l if dim_match else 2.5
            elif "gudang" in p or "industri" in p:
                name = "Gudang Logistik"
                r_type = "warehouse"
                w = w if dim_match else 10.0
                l = l if dim_match else 8.0
                h = 4.5

            return {
                "model": self.MODEL_NAME,
                "action": "create_room",
                "explanation": f"LFM 8B merancang {name} dengan dimensi proporsional {w}m × {l}m (Tinggi: {h}m) sesuai kaidah ergonomi ruang.",
                "data": {
                    "name": name,
                    "type": r_type,
                    "width": w,
                    "length": l,
                    "height": h,
                    "wall_material": "concrete" if r_type == "warehouse" else "white_paint",
                    "floor_material": "concrete" if r_type == "warehouse" else ("wood_parquet" if r_type == "bedroom" else "ceramic_marble"),
                },
                "recommended_furniture": self._get_default_furniture_for_type(r_type, w, l),
            }

        # 2. Material change instructions
        if "marmer" in p or "marble" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "set_material",
                "explanation": "LFM 8B menerapkan material marmer Carrara mewah pada lantai dengan pantulan cahaya elegan.",
                "data": {"target": "floor", "material": "marble", "color": "#f1f5f9"},
            }
        if "kayu" in p or "wood" in p or "parquet" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "set_material",
                "explanation": "LFM 8B menerapkan material kayu Oak alami untuk kehangatan akustik dan visual ruang.",
                "data": {"target": "floor", "material": "wood", "color": "#92400e"},
            }
        if "beton" in p or "concrete" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "set_material",
                "explanation": "LFM 8B menerapkan tekstur beton ekspos industrial pada dinding/lantai.",
                "data": {"target": "wall", "material": "concrete", "color": "#64748b"},
            }

        # 3. Lighting mode instructions
        if "pagi" in p or "morning" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "set_lighting",
                "explanation": "Mengatur pencahayaan pagi hari (Golden Hour) dengan sinar matahari lembut dari arah timur.",
                "data": {"preset": "morning", "sun_intensity": 1.2, "ambient_color": "#fed7aa"},
            }
        if "siang" in p or "noon" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "set_lighting",
                "explanation": "Mengatur pencahayaan siang hari (6000K) dengan intensitas matahari penuh dan bayangan tegas.",
                "data": {"preset": "noon", "sun_intensity": 1.4, "ambient_color": "#ffffff"},
            }
        if "sore" in p or "sunset" in p or "senja" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "set_lighting",
                "explanation": "Mengatur simulasi cahaya senja temaram dengan temperatur warna hangat 3200K.",
                "data": {"preset": "sunset", "sun_intensity": 0.9, "ambient_color": "#fdba74"},
            }
        if "malam" in p or "night" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "set_lighting",
                "explanation": "Mengatur simulasi malam hari dengan pencahayaan buatan interior (spotlights & accent lighting).",
                "data": {"preset": "night", "sun_intensity": 0.05, "ambient_color": "#1e293b"},
            }

        # 4. Furniture add instructions across 30+ categories
        furniture_dict = [
            # Ruang Tamu
            ("sofa_l", "Sofa L-Shape", ["sofa l", "sofa sudut", "l-shape"]),
            ("sofa", "Sofa Modern 3-Seater", ["sofa", "kursi sofa"]),
            ("armchair", "Armchair Single", ["armchair", "kursi santai", "kursi single"]),
            ("table", "Meja Kopi", ["meja kopi", "coffee table", "meja tamu"]),
            ("tv", "Konsol Smart TV", ["tv", "televisi", "konsol tv"]),
            ("bookshelf", "Rak Buku Minimalis", ["rak buku", "bookshelf", "lemari buku"]),
            ("floor_lamp", "Floor Lamp Standing", ["floor lamp", "lampu lantai", "standing lamp"]),
            ("rug", "Karpet Geometris", ["karpet", "rug", "permadani"]),
            # Kamar Tidur
            ("bed", "Tempat Tidur King", ["tempat tidur king", "kasur king", "king bed"]),
            ("bed_single", "Tempat Tidur Single", ["tempat tidur single", "kasur single", "single bed"]),
            ("wardrobe", "Lemari Pakaian Wardrobe", ["lemari", "wardrobe", "lemari baju"]),
            ("dressing_table", "Meja Rias & Cermin", ["meja rias", "dressing table"]),
            ("nightstand", "Meja Nakas Samping", ["nakas", "nightstand", "side table"]),
            # Dapur & Makan
            ("dining_table", "Meja Makan 6 Kursi", ["meja makan", "dining table"]),
            ("kitchen_island", "Kitchen Island Modern", ["kitchen island", "island dapur"]),
            ("kitchen_cabinet", "Kitchen Cabinet & Kompor", ["kitchen cabinet", "kabinet dapur", "kompor"]),
            ("refrigerator", "Kulkas 2 Pintu", ["kulkas", "refrigerator", "lemari es"]),
            # Kamar Mandi
            ("bathtub", "Bathtub Akrilik Mewah", ["bathtub", "bak mandi"]),
            ("shower_box", "Shower Box Kaca", ["shower", "shower box"]),
            ("toilet", "Toilet Duduk Modern", ["toilet", "kloset", "wc"]),
            ("sink_vanity", "Washtafel Vanity", ["washtafel", "sink", "vanity"]),
            # Kantor
            ("desk", "Meja Kerja Eksekutif", ["meja kerja", "office desk", "meja kantor"]),
            ("office_chair", "Kursi Kantor Ergonomis", ["kursi kantor", "kursi kerja", "office chair"]),
            ("meeting_table", "Meja Rapat Konferensi", ["meja rapat", "meeting table", "ruang rapat"]),
            ("whiteboard", "Whiteboard Kaca", ["whiteboard", "papan tulis"]),
            ("server_rack", "Rak Server Komputer", ["server", "rak server", "data rack"]),
            ("water_dispenser", "Dispenser Air Galon", ["dispenser", "water dispenser"]),
            # Komersial / Mall
            ("shelf_gondola", "Rak Gondola Supermarket", ["gondola", "rak gondola", "rak supermarket", "rak belanja"]),
            ("cashier_counter", "Meja Kasir Checkout", ["kasir", "meja kasir", "checkout"]),
            ("mannequin", "Display Manekin Butik", ["manekin", "mannequin"]),
            ("display_case", "Etalase Kaca Display", ["etalase", "display case", "showcase"]),
            # Industri / Gudang
            ("pallet_stack", "Tumpukan Pallet Kayu", ["pallet", "palet", "pallet kayu"]),
            ("forklift", "Forklift Industri", ["forklift", "fork lift"]),
            ("storage_tank", "Tangki Silo Penyimpanan", ["tangki", "silo", "storage tank"]),
            ("hvac_unit", "Unit AC Sentral HVAC", ["hvac", "ac sentral", "blower"]),
            # Eksterior & Lanskap
            ("pool", "Kolam Renang Tropis", ["kolam renang", "pool", "swimming pool"]),
            ("tree", "Pohon Palem Tropis", ["pohon palem", "palem", "palm tree"]),
            ("pine_tree", "Pohon Cemara Hijau", ["cemara", "pine tree", "pohon cemara"]),
            ("park_bench", "Bangku Taman Kayu", ["bangku taman", "park bench", "kursi taman"]),
            ("street_lamp", "Lampu Taman / Tiang", ["lampu taman", "street lamp", "lentera"]),
            ("car_sedan", "Mobil Sedan", ["mobil", "sedan", "car"]),
            ("solar_panel", "Panel Surya Rooftop", ["panel surya", "solar panel", "solar"]),
            ("fence", "Pagar Minimalis", ["pagar", "fence"]),
        ]

        for f_type, label, aliases in furniture_dict:
            if any(alias in p for alias in aliases):
                return {
                    "model": self.MODEL_NAME,
                    "action": "add_furniture",
                    "explanation": f"LFM 8B menambahkan {label} ke area desain dengan koordinat penempatan teroptimasi.",
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
                "menggunakan jendela setinggi 2.1m di dinding utara/selatan, serta mempertahankan koridor sirkulasi minimal 90 cm. "
                "Anda dapat memindahkan barang kapan saja dengan drag mouse di viewport 3D atau melalui mode 2D Blueprint CAD."
            ),
            "data": {},
        }

    def evaluate_design(self, scene_data: dict[str, Any]) -> dict[str, Any]:
        """Perform Design Critic evaluation based on architectural fundamentals."""
        room = scene_data.get("room", {})
        objects = scene_data.get("objects", [])
        w = float(room.get("width", 6.0))
        l = float(room.get("length", 5.0))
        h = float(room.get("height", 3.0))
        area = round(w * l, 2)
        volume = round(area * h, 2)

        obj_count = len(objects)
        critiques = []
        score = 90

        # 1. Area & Scale evaluation
        if area < 8.0:
            critiques.append({
                "type": "warning",
                "aspect": "Skala Ruang Kompak",
                "message": f"Luas ruang ({area} m²) tergolong mikro. Gunakan perabot multifungsi dan warna dinding terang untuk menghindari kesan klaustrofobik.",
            })
            score -= 5
        elif area > 60.0:
            critiques.append({
                "type": "info",
                "aspect": "Skala Makro / Industri",
                "message": f"Luas area ({area} m²) sangat masif. Cocok untuk fungsi perkantoran open-plan, komersial retail, atau gudang logistik.",
            })
        else:
            critiques.append({
                "type": "good",
                "aspect": "Proporsi Ergonomis",
                "message": f"Dimensi ruang {w}m × {l}m ({area} m², volume {volume} m³) sangat proporsional untuk sirkulasi manusia dan tata letak interior.",
            })

        # 2. Circulation & Furniture Density
        if obj_count > 15 and area < 25.0:
            critiques.append({
                "type": "warning",
                "aspect": "Kepadatan Sirkulasi",
                "message": "Kepadatan perabot tergolong padat. Pastikan koridor pergerakan minimal 90 cm tetap steril dari halangan furnitur.",
            })
            score -= 8
        elif obj_count == 0:
            critiques.append({
                "type": "suggestion",
                "aspect": "Ruangan Kosong",
                "message": "Ruangan belum diisi perabot. Gunakan palette perabot atau AI Copilot untuk mengisi elemen ruangan.",
            })
            score -= 10
        else:
            critiques.append({
                "type": "good",
                "aspect": "Alur Sirkulasi Jalur Manusia",
                "message": f"Kepadatan perabot ({obj_count} elemen) seimbang. Ruang bernapas visual (negative space) terjaga dengan baik.",
            })

        # 3. Daylight & Lighting Quality
        critiques.append({
            "type": "good",
            "aspect": "Pencahayaan & Ventilasi",
            "message": "Rasio bukaan optimal 12-15% dari luas lantai direkomendasikan untuk efisiensi energi dan sirkulasi udara bersih harian.",
        })

        # 4. Estimasi Biaya RAB Konstruksi & Interior
        cost_per_m2 = 4200000  # Rp 4.2jt / m2 konstruksi standar
        structure_cost = int(area * cost_per_m2)
        furnishing_cost = int(obj_count * 3500000)
        total_rab = structure_cost + furnishing_cost

        return {
            "model": self.MODEL_NAME,
            "overall_score": score,
            "room_area_m2": area,
            "room_volume_m3": volume,
            "furniture_count": obj_count,
            "critiques": critiques,
            "rab_estimate": {
                "structure_cost_idr": structure_cost,
                "furnishing_cost_idr": furnishing_cost,
                "total_cost_idr": total_rab,
                "formatted_total": f"Rp {total_rab:,.0f}".replace(",", "."),
            },
            "summary": (
                f"Evaluasi rancangan {room.get('name', 'Studio')} menunjukkan skor {score}/100. "
                f"Kaidah ergonomi dan tata ruang teroptimasi dengan estimasi total investasi {f'Rp {total_rab:,.0f}'.replace(',', '.')}."
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
                {"type": "bookshelf", "x": -hw + 0.5, "z": 0.0, "rotation": 90},
                {"type": "plant", "x": hw - 0.7, "z": -hl + 0.7, "rotation": 0},
            ]
        elif r_type == "bedroom":
            return [
                {"type": "bed", "x": 0.0, "z": -hl + 1.6, "rotation": 0},
                {"type": "wardrobe", "x": hw - 0.8, "z": 0.0, "rotation": -90},
                {"type": "desk", "x": -hw + 1.0, "z": hl - 1.0, "rotation": 90},
                {"type": "nightstand", "x": 1.4, "z": -hl + 1.6, "rotation": 0},
            ]
        elif r_type == "office":
            return [
                {"type": "meeting_table", "x": 0.0, "z": 0.0, "rotation": 0},
                {"type": "desk", "x": -hw + 1.2, "z": -hl + 1.2, "rotation": 0},
                {"type": "whiteboard", "x": 0.0, "z": -hl + 0.2, "rotation": 0},
                {"type": "water_dispenser", "x": hw - 0.8, "z": -hl + 0.8, "rotation": 0},
            ]
        elif r_type == "warehouse":
            return [
                {"type": "forklift", "x": 0.0, "z": 0.0, "rotation": 30},
                {"type": "pallet_stack", "x": -hw + 1.8, "z": -hl + 1.8, "rotation": 0},
                {"type": "pallet_stack", "x": -hw + 1.8, "z": 0.0, "rotation": 0},
                {"type": "storage_tank", "x": hw - 1.8, "z": -hl + 1.8, "rotation": 0},
            ]
        return []
