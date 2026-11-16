# 🏛️ ArchStudio AI — 3D Architecture & 2D Blueprint CAD Simulator

[![FastAPI](https://img.shields.io/badge/FastAPI-0.115+-009688.svg?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![Three.js](https://img.shields.io/badge/Three.js-r128-black.svg?logo=three.js&logoColor=white)](https://threejs.org/)
[![AI Model](https://img.shields.io/badge/Liquid_AI-LFM2.5--8B--A1B-blueviolet.svg)](https://liquid.ai)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**ArchStudio AI** adalah platform studio perancangan dan simulasi arsitektur interior & exterior virtual berbasis web 3D dan 2D CAD yang didukung oleh kecerdasan buatan **Liquid AI LFM 8B**. Aplikasi ini dirancang untuk mahasiswa arsitektur, desainer interior, pengembang properti, dan perencana fasilitas industri untuk merancang, memvisualisasikan, menyimulasikan konstruksi fisik, mengevaluasi tata letak ruang, serta mengestimasi anggaran biaya konstruksi (RAB) secara interaktif.

---

## 🌟 Fitur-Fitur Utama & Pembaruan

### 1. 🖱️ Reposisi & Pemindahan Objek Penuh (Drag & Drop 3D & 2D)
- **Direct 3D Mouse Dragging**: Klik dan seret barang apa pun (sofa, meja, kasur, forklift, dsb.) secara bebas di lantai 3D. Kamera Orbit otomatis terkunci saat dragging untuk pergerakan presisi.
- **2D Floorplan Interactive Drag**: Seret titik perabot langsung di atas denah 2D interaktif untuk reposisi seketika.
- **Inspector Coordinate Sliders & Inputs**:
  - Slider Posisi X (Kiri-Kanan) dengan step $0.1\text{ m}$.
  - Slider Posisi Z (Maju-Mundur) dengan step $0.1\text{ m}$.
  - D-Pad Nudge Buttons (▲, ▼, ◀, ▶) untuk pergeseran halus $0.2\text{ m}$.
  - Slider Rotasi & Quick Rotate (-45°, +45°, 90°, 180°).
  - Tombol **Duplikat Objek** (Clone) dan **Hapus Objek**.
- **Floating 3D Coordinate Badge**: Label koordinat mengambang $(X: \dots\text{m}, Z: \dots\text{m})$ yang mengikuti posisi objek terpilih di layar.

---

### 2. 📐 Fullscreen 2D Blueprint CAD Drafting Studio
Mode denah arsitektur teknis lengkap dengan standar gambar ortogonal DIN 1356-1:
- **Grid CAD Teknis**: Latar belakang blueprint biru tua dengan kisi koordinat meteran ($0.5\text{ m}$).
- **Dinding Ganda Arsitektural (Double-Line Walls)**: Visualisasi ketebalan dinding struktur ($15\text{ cm}$).
- **Anotasi Dimensi Teknis**: Garis ukuran otomatis dengan panah dimensi ($P \times L$) di setiap sisi ruangan.
- **Simbol Blok CAD Arsitektur**: Simbol khusus untuk kasur, sofa, meja kerja, washtafel, kendaraan, forklift, dsb.
- **Kompas Mata Angin (North Arrow)**: Petunjuk arah orientasi utara bangunan.
- **Interactive Drafting**: Klik dan pindahkan perabot secara langsung di lembar denah blueprint.
- **Interactive Measurement Ruler**: Alat ukur jarak interaktif (klik 2 titik untuk mengetahui jarak real-world dalam meter).
- **Ekspor Blueprint PNG**: Simpan lembar gambar kerja denah ke file PNG siap cetak.

---

### 3. 🛋️ Katalog Lebih dari 40+ Perabot & Elemen Lengkap
Katalog aset prosedural 3D mencakup berbagai tipologi bangunan:
1. **Ruang Tamu & Keluarga**: Sofa 3-Seater, Sofa L-Shape Sudut, Armchair Single, Meja Kopi, Konsol TV, Rak Buku, Floor Lamp Standing, Karpet Rug Geometris.
2. **Kamar Tidur**: Kasur King Size, Kasur Single, Lemari Pakaian Wardrobe 3 Pintu, Meja Rias & Cermin, Meja Nakas.
3. **Dapur & Ruang Makan**: Meja Makan 6 Kursi, Kitchen Island Granit, Kitchen Cabinet & Kompor, Kulkas 2 Pintu Modern.
4. **Kamar Mandi**: Bathtub Akrilik Mewah, Shower Box Kaca Tempered, Toilet Duduk Modern, Washtafel & Cermin Vanity.
5. **Perkantoran & Studio**: Meja Kerja Eksekutif, Kursi Kantor Ergonomis, Meja Rapat Konferensi, Whiteboard Presentasi, Rak Server Komputer, Dispenser Air Galon.
6. **Distrik Mall & Komersial**: Rak Gondola Supermarket, Meja Kasir POS, Display Manekin Fesyen, Etalase Kaca Toko Perhiasan.
7. **Industri & Gudang Pabrik**: Tumpukan Pallet Kayu Bertingkat, Forklift Industri Kuning, Tangki Silo Penyimpanan Logistik, Unit AC Sentral HVAC.
8. **Eksterior, Lanskap & Outdoor**: Kolam Renang Tropis, Pohon Palem, Pohon Cemara (Pine Tree), Bangku Taman Kayu, Lampu Taman Tiang, Mobil Sedan Minimalis, Panel Surya Rooftop, Pagar Kayu Minimalis.

---

### 4. 🗺️ Masterplan Studio (15 Macro Presets & 62+ Assets CAD)
Mode perancangan skala makro dan site plan terpadu dengan detail arsitektur tingkat tinggi:
- **15 Presets 1-Klik**: Campus, High School, Elementary School, University, Hospital Complex, Shopping Mall, Residential Neighborhood, Industrial Park, Data Center Campus, Resort & Hotel, Religious Complex, Stadium Complex, Civic Center, Airport, dan Downtown Mixed-Use.
- **62+ Katalog Aset Beraneka Ragam** dalam 7 Kategori:
  1. *Education* (10): High School, Elementary School, Kindergarten, University Hall, Library, Science Lab, Dormitory, Gymnasium, Auditorium, Cafeteria.
  2. *Health & Civic* (8): Hospital, Clinic, Town Hall, Fire Station, Police Station, Museum, Church, Mosque.
  3. *Commercial* (6): Shopping Mall, Office Tower, Hotel, Supermarket, Restaurant, Bank.
  4. *Residential* (4): House, Villa, Townhouses, Apartment Block.
  5. *Industrial* (5): Warehouse, Factory, Data Center, Parking Garage, Airport Terminal.
  6. *Individual Items* (10): Server Cabinet, Server Rack Row, Server Room, Generator, Transformer, Water Tank, Cell Tower, Guard House, Bus Stop, Bench.
  7. *Sports & Landscape* (19): Stadium, Football Field, Running Track, Basketball Court, Tennis Court, Swimming Pool, Playground, Fountain, Pond, Garden, Plaza, Parking Lot, Road, Runway, Solar Farm, Trees, Palms, Lamps, Flagpoles.
- **Detail Arsitektural Presisi**:
  - Fasad bergrid jendela, pintu kanopi, dan bayangan jatuh (*drop shadow*) sesuai ketinggian.
  - Variasi atap: pelana/perisai bergenteng, barrel vault bergelombang, kubah radial mengkilap, atrium kaca, dan atap datar berparapet.
  - Peralatan atap: unit chiller HVAC, panel surya photovoltaic, helipad 'H', skylight, cerobong, salib, dan menara masjid.
  - Rak server dengan baris LED berkedip (*blinking animation*).
  - Pohon berlapis, lapangan olahraga berspesifikasi resmi, dan area parkir mobil berwarna-warni.
- **Pengukuran & Dimensi**:
  - Label ukuran meter ($W \times D\text{ m}$) pada setiap aset.
  - Garis dimensi CAD (panah, ekstensi, badge ukuran) saat aset dipilih.
  - Panel inspektur menampilkan keliling (*perimeter*), *footprint area* ($m^2$), estimasi jumlah lantai, dan *Gross Floor Area* (GFA $m^2$).
  - Input ukuran $W$, $D$, $H$ serta rotasi sudut yang dapat disunting langsung.
  - Tabel *Schedule* aset lengkap dengan total luas tapak site dan skala bar meter dinamis $10\text{ m}$.
- **Akses**: Klik tombol **Masterplan** di navigasi atas atau buka langsung via URL **`/masterplan`**.

---

### 5. 🛋️ Katalog Lebih dari 40+ Perabot & Elemen Lengkap

---

### 5. 💰 Kalkulator Estimasi Anggaran Biaya (RAB)
- Perhitungan otomatis estimasi biaya konstruksi fisik berdasarkan luas lantai ($m^2$) dan volume ruangan ($m^3$).
- Rincian biaya:
  - Pekerjaan Struktur & Pondasi
  - Dinding, Plesteran & Plafon
  - Finishing Lantai (Marmer/Parquet/Beton) & Cat
  - Pengadaan Furnitur & MEP
  - Total Estimasi Nilai Investasi Proyek (Rp)

---

### 6. 🧠 Liquid AI LFM 8B Copilot & Design Critic
- **Perintah Alami Cerdas**: Perintahkan AI untuk membangun ruangan, memuat map kantor/industri/mall, mengganti material, atau menambahkan furnitur secara otomatis.
- **Evaluasi Desain Arsitektur**: Analisis kepatuhan proporsi ruang, koridor sirkulasi minimum $90\text{ cm}$, rasio pencahayaan alami $12\text{--}15\%$, dan skor efisiensi ergonomi ($0\text{--}100$).

---

## 🚀 Panduan Memulai Cepat

### Cara 1: Menggunakan 1-Click Launcher (Windows)
Cukup klik ganda pada berkas:
```cmd
Buka_ArchStudio_AI.bat
```
Script akan memeriksa modul python, membuka browser secara otomatis di `http://localhost:8002`, dan mengaktifkan studio.

---

### Cara 2: Menjalankan Manual via Terminal
```bash
cd "C:\Kuliah Sisfor\Github Project\archstudio-ai\backend"
pip install -r requirements.txt
python run.py
```
Akses antarmuka melalui peramban web: **[http://localhost:8002](http://localhost:8002)**

---

## ⌨️ Kontrol Navigasi & Shortcut

| Aksi | Kontrol |
|---|---|
| **Pindahkan Perabot (Move)** | **Klik & Drag Objek langsung dengan Mouse** (3D atau 2D) |
| **Rotasi Kamera 3D** | Klik Kiri + Geser mouse |
| **Pan / Geser Sudut Pandang** | Klik Kanan + Geser mouse |
| **Zoom In / Out** | Scroll roda mouse |
| **Walkthrough Orang Pertama** | Tombol `W` (Maju), `S` (Mundur), `A` (Kiri), `D` (Kanan), `ESC` (Keluar) |
| **Penggaris Ukur (Ruler)** | Klik tombol **Ukur Jarak** di Mode Blueprint, lalu klik 2 titik |
| **Buka Denah CAD** | Klik tombol **2D Blueprint CAD** di navbar atas |
| **Buka Masterplan Studio** | Klik tombol **Masterplan** di navbar atas atau akses `/masterplan` |
| **Rotasi Objek Masterplan** | Tekan tombol `R` atau klik **Rotate 90°** |
| **Duplikat Aset Masterplan** | Tekan `Ctrl+D` atau klik tombol **Duplicate** |
| **Hapus Aset Masterplan** | Tekan tombol `Delete` atau klik tombol **Delete** |
| **Zoom & Pan Masterplan** | Scroll roda mouse untuk zoom; klik drag latar belakang untuk pan |

---

## 📄 Lisensi
Didistribusikan di bawah lisensi MIT untuk keperluan akademik, perancangan arsitektur, dan simulasi desain.
