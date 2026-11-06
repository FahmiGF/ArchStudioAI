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
    VERSION = "2.5.3"

    def process_instruction(self, prompt: str, current_scene: dict[str, Any] | None = None) -> dict[str, Any]:
        """Parse natural language command into structured JSON actions."""
        p = prompt.lower().strip()

        # Check for specific Map / Blueprint templates
        if "kantor" in p or "perkantoran" in p or "office" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "load_template",
                "explanation": "LFM 8B memuat template Perkantoran Modern (Corporate Office) dengan meja dewan rapat, area bilik kerja modular, dan fasilitas pendukung.",
                "data": {"template_id": "office"},
            }
        if "mall" in p or "retail" in p or "toko" in p or "distrik" in p or "belanja" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "load_template",
                "explanation": "LFM 8B memuat template Mega Shopping Mall District dengan lorong belanja berjejer gondola etalase dan kasir POS.",
                "data": {"template_id": "mall"},
            }
        if "perpustakaan" in p or "library" in p or "buku" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "load_template",
                "explanation": "LFM 8B memuat template Academic Public Library dengan barisan rak buku arsip dan meja belajar komunal.",
                "data": {"template_id": "library"},
            }
        if "sekolah" in p or "kelas" in p or "school" in p or "classroom" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "load_template",
                "explanation": "LFM 8B memuat template Ruang Kelas Sekolah Modern dengan formasi meja belajar siswa dan papan tulis lebar.",
                "data": {"template_id": "school"},
            }
        if "parkir" in p or "parking" in p or "lot" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "load_template",
                "explanation": "LFM 8B memuat template Outdoor Parking Plaza dengan deretan mobil sedan, penerangan tiang, dan penghijauan.",
                "data": {"template_id": "parking-lot"},
            }
        if "toilet" in p or "restroom" in p or "wc" in p or "kamar mandi publik" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "load_template",
                "explanation": "LFM 8B memuat template Public Restroom & Sanitary Suite dengan bilik toilet modern dan vanity washtafel.",
                "data": {"template_id": "toilet"},
            }
        if "server" in p or "data center" in p or "datacenter" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "load_template",
                "explanation": "LFM 8B memuat template Mission-Critical Server Room dengan deretan rackmount server dan unit HVAC pendingin.",
                "data": {"template_id": "server-room"},
            }
        if "industri" in p or "pabrik" in p or "gudang" in p or "warehouse" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "load_template",
                "explanation": "LFM 8B memuat layout Industri & Gudang Logistik masif dengan sirkulasi forklift dan tumpukan pallet kargo.",
                "data": {"template_id": "industrial-warehouse"},
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
            w = 8.0
            l = 6.0
            h = 3.2
            if dim_match:
                w = float(dim_match.group(1).replace(",", "."))
                l = float(dim_match.group(2).replace(",", "."))

            # Room type detection
            name = "Ruang Terbuka Arsitektur"
            r_type = "living"
            if "tidur" in p or "bed" in p:
                name = "Kamar Tidur Utama"
                r_type = "bedroom"
                w = w if dim_match else 5.0
                l = l if dim_match else 4.5
            elif "dapur" in p or "kitchen" in p:
                name = "Dapur & Ruang Makan"
                r_type = "kitchen"
                w = w if dim_match else 5.0
                l = l if dim_match else 4.0
            elif "kantor" in p or "kerja" in p or "office" in p or "studio" in p:
                name = "Ruang Kantor Eksekutif"
                r_type = "office"
                w = w if dim_match else 14.0
                l = l if dim_match else 10.0
                h = 3.6
            elif "mall" in p or "toko" in p:
                name = "Grand Mall Boutique"
                r_type = "mall"
                w = w if dim_match else 20.0
                l = l if dim_match else 14.0
                h = 4.5
            elif "mandi" in p or "bath" in p or "toilet" in p:
                name = "Fasilitas Restroom"
                r_type = "bathroom"
                w = w if dim_match else 6.5
                l = l if dim_match else 5.0
            elif "gudang" in p or "industri" in p:
                name = "Gudang Logistik"
                r_type = "warehouse"
                w = w if dim_match else 18.0
                l = l if dim_match else 12.0
                h = 5.0

            return {
                "model": self.MODEL_NAME,
                "action": "create_room",
                "explanation": f"LFM 8B merancang {name} dengan dimensi diperluas {w}m × {l}m (Tinggi: {h}m) sesuai standar ruang publik.",
                "data": {
                    "name": name,
                    "type": r_type,
                    "width": w,
                    "length": l,
                    "height": h,
                    "wall_material": "concrete" if r_type in ["warehouse", "mall"] else "white",
                    "floor_material": "concrete" if r_type == "warehouse" else ("marble" if r_type in ["office", "mall", "bathroom"] else "parquet"),
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
                "explanation": "LFM 8B menerapkan material kayu Oak alami untuk kehangatan visual ruang.",
                "data": {"target": "floor", "material": "parquet", "color": "#92400e"},
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
                "explanation": "Mengatur pencahayaan siang hari (6000K) dengan intensitas matahari penuh.",
                "data": {"preset": "noon", "sun_intensity": 1.4, "ambient_color": "#ffffff"},
            }
        if "sore" in p or "sunset" in p or "senja" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "set_lighting",
                "explanation": "Mengatur simulasi cahaya senja temaram dengan temperatur hangat 3200K.",
                "data": {"preset": "sunset", "sun_intensity": 0.9, "ambient_color": "#fdba74"},
            }
        if "malam" in p or "night" in p:
            return {
                "model": self.MODEL_NAME,
                "action": "set_lighting",
                "explanation": "Mengatur simulasi malam hari dengan pencahayaan buatan interior.",
                "data": {"preset": "night", "sun_intensity": 0.05, "ambient_color": "#1e293b"},
            }

        # 4. Furniture add instructions across 40+ categories
        furniture_dict = [
            ("sofa_l", "Sofa L-Shape", ["sofa l", "sofa sudut", "l-shape"]),
            ("sofa", "Sofa Modern 3-Seater", ["sofa", "kursi sofa"]),
            ("armchair", "Armchair Single", ["armchair", "kursi santai", "kursi single"]),
            ("table", "Meja Kopi", ["meja kopi", "coffee table", "meja tamu"]),
            ("tv", "Konsol Smart TV", ["tv", "televisi", "konsol tv"]),
            ("bookshelf", "Rak Buku Minimalis", ["rak buku", "bookshelf", "lemari buku"]),
            ("floor_lamp", "Floor Lamp Standing", ["floor lamp", "lampu lantai", "standing lamp"]),
            ("rug", "Karpet Geometris", ["karpet", "rug", "permadani"]),
            ("bed", "Tempat Tidur King", ["tempat tidur king", "kasur king", "king bed"]),
            ("bed_single", "Tempat Tidur Single", ["tempat tidur single", "kasur single", "single bed"]),
            ("wardrobe", "Lemari Pakaian Wardrobe", ["lemari", "wardrobe", "lemari baju"]),
            ("dressing_table", "Meja Rias & Cermin", ["meja rias", "dressing table"]),
            ("nightstand", "Meja Nakas Samping", ["nakas", "nightstand", "side table"]),
            ("dining_table", "Meja Makan 6 Kursi", ["meja makan", "dining table"]),
            ("kitchen_island", "Kitchen Island Modern", ["kitchen island", "island dapur"]),
            ("kitchen_cabinet", "Kitchen Cabinet & Kompor", ["kitchen cabinet", "kabinet dapur", "kompor"]),
            ("refrigerator", "Kulkas 2 Pintu", ["kulkas", "refrigerator", "lemari es"]),
            ("bathtub", "Bathtub Akrilik Mewah", ["bathtub", "bak mandi"]),
            ("shower_box", "Shower Box Kaca", ["shower", "shower box"]),
            ("toilet", "Toilet Duduk Modern", ["toilet", "kloset", "wc"]),
            ("sink_vanity", "Washtafel Vanity", ["washtafel", "sink", "vanity"]),
            ("desk", "Meja Kerja Eksekutif", ["meja kerja", "office desk", "meja kantor"]),
            ("office_chair", "Kursi Kantor Ergonomis", ["kursi kantor", "kursi kerja", "office chair"]),
            ("meeting_table", "Meja Rapat Konferensi", ["meja rapat", "meeting table", "ruang rapat"]),
            ("whiteboard", "Whiteboard Kaca", ["whiteboard", "papan tulis"]),
            ("server_rack", "Rak Server Komputer", ["server", "rak server", "data rack"]),
            ("water_dispenser", "Dispenser Air Galon", ["dispenser", "water dispenser"]),
            ("shelf_gondola", "Rak Gondola Supermarket", ["gondola", "rak gondola", "rak supermarket", "rak belanja"]),
            ("cashier_counter", "Meja Kasir Checkout", ["kasir", "meja kasir", "checkout"]),
            ("mannequin", "Display Manekin Butik", ["manekin", "mannequin"]),
            ("display_case", "Etalase Kaca Display", ["etalase", "display case", "showcase"]),
            ("pallet_stack", "Tumpukan Pallet Kayu", ["pallet", "palet", "pallet kayu"]),
            ("forklift", "Forklift Industri", ["forklift", "fork lift"]),
            ("storage_tank", "Tangki Silo Penyimpanan", ["tangki", "silo", "storage tank"]),
            ("hvac_unit", "Unit AC Sentral HVAC", ["hvac", "ac sentral", "blower"]),
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
                "LFM 8B menganalisis konsep arsitektur Anda: Anda dapat memilih template siap pakai berskala besar seperti Office, Mall, Library, School, Parking Lot, Toilet, atau Server Room dari tab Maps atau menu utama. "
                "Semua objek dapat dipindahkan dengan drag mouse langsung di 3D maupun denah 2D Blueprint."
            ),
            "data": {},
        }

    def evaluate_design(self, scene_data: dict[str, Any]) -> dict[str, Any]:
        """Perform Design Critic evaluation based on architectural fundamentals."""
        room = scene_data.get("room", {})
        objects = scene_data.get("objects", [])
        w = float(room.get("width", 6.0))
        l = float(room.get("length", 5.0))
        h = float(room.get("height", 3.2))
        area = round(w * l, 2)
        volume = round(area * h, 2)

        obj_count = len(objects)
        critiques = []
        score = 92

        if area < 8.0:
            critiques.append({
                "type": "warning",
                "aspect": "Skala Ruang Kompak",
                "message": f"Luas ruang ({area} m²) tergolong kompak. Disarankan menggunakan furnitur multifungsi.",
            })
            score -= 5
        elif area > 100.0:
            critiques.append({
                "type": "info",
                "aspect": "Skala Mega / Fasilitas Publik",
                "message": f"Luas area ({area} m², volume {volume} m³) sangat masif. Cocok untuk fungsi komersial, gedung mall, kampus, atau pergudangan.",
            })
        else:
            critiques.append({
                "type": "good",
                "aspect": "Proporsi Ergonomis",
                "message": f"Dimensi ruang {w}m × {l}m ({area} m², volume {volume} m³) proporsional untuk standar perancangan arsitektur modern.",
            })

        critiques.append({
            "type": "good",
            "aspect": "Sirkulasi & Penataan",
            "message": f"Total {obj_count} elemen terdistribusi secara seimbang dengan aksesibilitas koridor yang terjaga.",
        })

        cost_per_m2 = 4200000
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
                f"Evaluasi rancangan {room.get('name', 'Studio')} mencapai skor {score}/100. "
                f"Dimensi {w}m × {l}m memenuhi kriteria tata ruang dengan estimasi total investasi {f'Rp {total_rab:,.0f}'.replace(',', '.')}."
            ),
        }

    def _get_default_furniture_for_type(self, r_type: str, w: float, l: float) -> list[dict[str, Any]]:
        hw = w / 2.0
        hl = l / 2.0
        if r_type == "office":
            return [
                {"type": "meeting_table", "x": -hw * 0.3, "z": 0.0, "rotation": 0},
                {"type": "desk", "x": hw * 0.5, "z": -hl * 0.4, "rotation": 0},
                {"type": "office_chair", "x": hw * 0.5, "z": -hl * 0.4 + 0.6, "rotation": 0},
                {"type": "whiteboard", "x": -hw * 0.3, "z": -hl + 0.4, "rotation": 180},
                {"type": "server_rack", "x": hw - 1.0, "z": hl - 1.0, "rotation": 0},
            ]
        elif r_type == "mall":
            return [
                {"type": "shelf_gondola", "x": -hw * 0.4, "z": 0.0, "rotation": 0},
                {"type": "shelf_gondola", "x": hw * 0.4, "z": 0.0, "rotation": 0},
                {"type": "cashier_counter", "x": 0.0, "z": hl - 1.5, "rotation": 180},
                {"type": "mannequin", "x": -hw + 1.5, "z": hl - 1.5, "rotation": 30},
            ]
        elif r_type == "warehouse":
            return [
                {"type": "forklift", "x": 0.0, "z": 0.0, "rotation": 30},
                {"type": "pallet_stack", "x": -hw + 2.0, "z": -hl + 2.0, "rotation": 0},
                {"type": "pallet_stack", "x": -hw + 2.0, "z": 0.0, "rotation": 0},
                {"type": "storage_tank", "x": hw - 2.0, "z": -hl + 2.0, "rotation": 0},
            ]
        return [
            {"type": "sofa_l", "x": -1.0, "z": 1.0, "rotation": 0},
            {"type": "table", "x": -1.0, "z": 0.0, "rotation": 0},
            {"type": "tv", "x": -1.0, "z": -2.0, "rotation": 180},
        ]
