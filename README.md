# 🏛️ ArchStudio AI — 3D Architecture & Interior Simulator

[![FastAPI](https://img.shields.io/badge/FastAPI-0.115+-009688.svg?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![Three.js](https://img.shields.io/badge/Three.js-r128-black.svg?logo=three.js&logoColor=white)](https://threejs.org/)
[![AI Model](https://img.shields.io/badge/Liquid_AI-LFM2.5--8B--A1B-blueviolet.svg)](https://liquid.ai)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**ArchStudio AI** adalah platform studio perancangan dan simulasi arsitektur interior & exterior virtual berbasis web 3D yang didukung oleh kecerdasan buatan **Liquid AI LFM 8B**. Aplikasi ini memungkinkan mahasiswa arsitektur, desainer interior, dan arsitek merancang, menyimulasikan konstruksi bertahap, mengevaluasi sirkulasi ruang, serta mengekspor desain dalam lingkungan 3D real-time dan 2D Floor Plan yang tersinkronisasi.

---

## 🌟 Fitur Utama

### 1. 🎮 Real-Time 3D WebGL Engine (Three.js)
- **Orbit Controls 360°**: Rotasi orbital, panning, dan zoom dengan pencahayaan dinamis dan bayangan soft-shadows.
- **First-Person Walkthrough (WASD)**: Mode jalan kaki orang pertama dengan crosshair interaktif untuk merasakan skala ruang secara langsung.
- **Katalog Perabot Prosedural**: Sofa modern, meja kopi, TV console, tempat tidur King size, lemari pakaian, meja kerja, bathtub akrilik, kolam renang tropis, pohon palem, dan tanaman hias Monstera.
- **Transformasi Objek**: Putar orientasi 90° atau hapus objek secara instan.

### 2. 📐 Synchronized 2D Floor Plan Editor
- Kanvas CAD top-down real-time yang tersinkronisasi langsung dengan model 3D.
- Anotasi dimensi dinamis dalam meter ($P \times L$) dan visualisasi bounding box perabot.
- Grid drafting arsitektur dengan panduan orientasi mata angin (Utara/Selatan/Timur/Barat).

### 3. 🧠 Liquid AI LFM 8B Architecture Assistant
- **Natural Language Command**: Ketik instruksi dalam bahasa Indonesia atau Inggris (contoh: *"Buatkan ruang tamu 6x5 meter"*, *"Ganti lantai ke marmer Carrara"*, *"Simulasikan cahaya senja"*).
- **Structured Action Parsing**: AI otomatis memetakan permintaan ke perubahan parameter ruang, penempatan furnitur, atau perubahan material secara presisi.

### 4. ⚖️ AI Design Critic & Spatial Evaluation
- Evaluasi otomatis tata letak ruang berdasarkan kaidah perancangan arsitektur modern:
  - **Skor Ergonomi & Efisiensi** (0–100)
  - **Analisis Kepadatan Sirkulasi** (lebar koridor minimal 80–90 cm)
  - **Rekomendasi Bukaan Alami** (rasio jendela terhadap luas lantai 10–15%)
  - **Saran Ventilasi Silang (Cross-Ventilation)**

### 5. 🏗️ Construction Stage Simulator
Simulasi tahapan pembangunan fisik secara bertahap:
1. **Tahap 1: Pondasi & Groundwork** (Footing & Ground Excavation)
2. **Tahap 2: Kolom & Balok** (Reinforced Concrete Structure)
3. **Tahap 3: Dinding & Partisi** (Brickwork & Glazing)
4. **Tahap 4: Atap & Plafon** (Roof Truss & Ceilings)
5. **Tahap 5: Finishing & Interior Furnishing** (Finishing & Perabot Lengkap)

### 6. ☀️ Lighting & Environment Simulator
- **Pagi (Morning / Golden Hour)**: Matahari terbit dari timur dengan cahaya keemasan hangat.
- **Siang (Noon 6000K)**: Cahaya matahari tegak lurus dengan intensitas tinggi dan bayangan tajam.
- **Sore (Sunset 3200K)**: Cahaya senja hangat dramatis.
- **Malam (Night Interior)**: Mode gelap dengan pencahayaan buatan interior (spotlights & accent lighting).

### 7. 🎨 Material & Texture Customizer
- **Lantai**: Parquet Kayu Oak Alami, Marmer Carrara Mewah, Semen Poles / Concrete, Keramik Putih.
- **Dinding**: Putih Minimalis, Krem Hangat, Beton Ekspos Industrial, Abu-abu Modern Arang.

### 8. 📸 HD Render Capture & Presets
- Ekspor tangkapan layar 3D resolusi tinggi dalam format PNG dengan satu klik.
- Galeri template arsitektur bawaan:
  - *Minimalist Modern House*
  - *Scandinavian Cozy Bedroom*
  - *Industrial Open Loft*
  - *Tropical Modern Villa*

---

## 🏗️ Arsitektur Sistem

```
archstudio-ai/
├── Buka_ArchStudio_AI.bat          # 1-Click Windows Launcher
├── README.md                       # Dokumentasi Lengkap
└── backend/
    ├── requirements.txt            # Dependensi FastAPI, Uvicorn, Pydantic
    ├── run.py                      # Port-safe Runner (Target: 8002)
    └── app/
        ├── main.py                 # FastAPI Web Server & Routing
        ├── api/
        │   └── ai.py               # REST Endpoints (/api/ai/instruction, /critic, /templates)
        ├── services/
        │   └── lfm_engine.py       # Liquid AI LFM 8B Reasoning & Critic Engine
        └── static/
            └── index.html          # Web Studio UI (Three.js 3D + 2D Floor Plan + Tailwind)
```

---

## 🚀 Panduan Memulai Cepat

### Cara 1: Menggunakan 1-Click Launcher (Windows)
Cukup klik ganda pada file:
```
Buka_ArchStudio_AI.bat
```
Script akan memeriksa dependensi, membuka browser di `http://localhost:8002`, dan menjalankan server secara otomatis.

---

### Cara 2: Menjalankan Manual via Terminal

1. **Masuk ke folder backend:**
   ```bash
   cd "C:\Kuliah Sisfor\Github Project\archstudio-ai\backend"
   ```

2. **Pasang dependensi Python:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Jalankan server ArchStudio AI:**
   ```bash
   python run.py
   ```

4. **Buka aplikasi di browser:**
   ```
   http://localhost:8002
   ```

---

## 📡 API Endpoints

| Method | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/` | Antarmuka Web Studio 3D/2D |
| `GET` | `/api/health` | Health check & info model LFM 8B |
| `POST` | `/api/ai/instruction` | Parsing perintah bahasa natural menjadi aksi 3D |
| `POST` | `/api/ai/critic` | Evaluasi tata letak ruang & saran arsitektur |
| `GET` | `/api/ai/templates` | Mendapatkan daftar template desain arsitektur |
| `GET` | `/docs` | Dokumentasi Interaktif Swagger UI |

---

## ⌨️ Kontrol Navigasi Studio

- **Rotasi Kamera 3D**: Klik Kiri + Geser mouse
- **Pan / Geser Kamera**: Klik Kanan + Geser mouse (atau tombol Pan)
- **Zoom In / Out**: Scroll roda mouse
- **Mode Walkthrough**:
  - `W / A / S / D`: Bergerak Maju / Kiri / Mundur / Kanan
  - `Gerakkan Mouse`: Melihat sekeliling (Look around)
  - `ESC`: Keluar dari mode Walkthrough

---

## 📄 Lisensi
Didistribusikan di bawah lisensi MIT. Silakan gunakan untuk keperluan akademik dan pengembangan kreatif.
