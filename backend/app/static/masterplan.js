/**
 * Archstudio AI — Masterplan Studio
 * Interactive 2D Macro-Scale Masterplan CAD with 15 Presets & 62+ Detailed Architectural Assets
 * Features: Undo/Redo, Multi-Select, Interactive Resize Handles, Ruler Tool, Minimap, CSV/JSON Export.
 */

// ========================================================
// 1. ASSET CATALOG (62 ASSETS ACROSS 7 CATEGORIES)
// ========================================================
const ASSET_CATALOG = {
  // --- 1. EDUCATION (10 assets) ---
  education: [
    { type: 'high_school', name: 'High School', w: 60, d: 24, h: 14, roof: 'flat_parapet', color: '#8c4f3e', rooftop: ['hvac', 'skylights'], category: 'Education' },
    { type: 'elementary_school', name: 'Elementary School', w: 42, d: 20, h: 9, roof: 'hip', color: '#a05c3b', rooftop: ['skylights'], category: 'Education' },
    { type: 'kindergarten', name: 'Kindergarten', w: 26, d: 16, h: 6, roof: 'gable', color: '#c27d38', rooftop: ['skylights'], category: 'Education' },
    { type: 'university_hall', name: 'University Hall', w: 58, d: 24, h: 18, roof: 'solar_flat', color: '#4a6572', rooftop: ['solar', 'hvac'], category: 'Education' },
    { type: 'library', name: 'Library', w: 32, d: 22, h: 13, roof: 'dome', color: '#34495e', rooftop: ['dome', 'skylights'], category: 'Education' },
    { type: 'science_lab', name: 'Science Lab', w: 36, d: 18, h: 14, roof: 'solar_flat', color: '#3b5998', rooftop: ['solar', 'chillers'], category: 'Education' },
    { type: 'dormitory', name: 'Dormitory', w: 48, d: 14, h: 17, roof: 'hip', color: '#7a4e48', rooftop: ['hvac'], category: 'Education' },
    { type: 'gymnasium', name: 'Gymnasium', w: 42, d: 30, h: 12, roof: 'barrel_vault', color: '#546e7a', rooftop: ['skylights'], category: 'Education' },
    { type: 'auditorium', name: 'Auditorium', w: 36, d: 28, h: 14, roof: 'barrel_vault', color: '#455a64', rooftop: ['hvac'], category: 'Education' },
    { type: 'cafeteria', name: 'Cafeteria', w: 30, d: 18, h: 6, roof: 'flat_parapet', color: '#8d6e63', rooftop: ['hvac', 'patio'], category: 'Education' },
  ],

  // --- 2. HEALTH & CIVIC (8 assets) ---
  health_civic: [
    { type: 'hospital', name: 'Hospital', w: 68, d: 34, h: 28, roof: 'helipad_flat', color: '#2e7d32', rooftop: ['helipad', 'hvac', 'chillers'], category: 'Health & Civic' },
    { type: 'clinic', name: 'Clinic', w: 30, d: 18, h: 9, roof: 'flat_parapet', color: '#388e3c', rooftop: ['hvac'], category: 'Health & Civic' },
    { type: 'town_hall', name: 'Town Hall', w: 48, d: 26, h: 18, roof: 'hip', color: '#5d4037', rooftop: ['cupola', 'flag'], category: 'Health & Civic' },
    { type: 'fire_station', name: 'Fire Station', w: 32, d: 20, h: 10, roof: 'flat_parapet', color: '#c62828', rooftop: ['hvac', 'hose_tower'], category: 'Health & Civic' },
    { type: 'police_station', name: 'Police Station', w: 30, d: 20, h: 10, roof: 'flat_parapet', color: '#1565c0', rooftop: ['antenna', 'hvac'], category: 'Health & Civic' },
    { type: 'museum', name: 'Museum', w: 44, d: 28, h: 14, roof: 'glass_atrium', color: '#455a64', rooftop: ['skylights', 'atrium'], category: 'Health & Civic' },
    { type: 'church', name: 'Church', w: 38, d: 22, h: 18, roof: 'church_gable', color: '#6d4c41', rooftop: ['cross', 'bell_tower'], category: 'Health & Civic' },
    { type: 'mosque', name: 'Mosque', w: 42, d: 34, h: 18, roof: 'mosque_dome', color: '#2e7d32', rooftop: ['dome', 'minarets'], category: 'Health & Civic' },
  ],

  // --- 3. COMMERCIAL (6 assets) ---
  commercial: [
    { type: 'mall', name: 'Shopping Mall', w: 85, d: 48, h: 16, roof: 'glass_atrium', color: '#1565c0', rooftop: ['skylights', 'hvac', 'solar'], category: 'Commercial' },
    { type: 'office_tower', name: 'Office Tower', w: 38, d: 30, h: 42, roof: 'helipad_flat', color: '#1e88e5', rooftop: ['helipad', 'chillers'], category: 'Commercial' },
    { type: 'hotel', name: 'Hotel', w: 50, d: 24, h: 26, roof: 'flat_parapet', color: '#6a1b9a', rooftop: ['pool_deck', 'hvac'], category: 'Commercial' },
    { type: 'supermarket', name: 'Supermarket', w: 38, d: 26, h: 7, roof: 'flat_parapet', color: '#00897b', rooftop: ['hvac'], category: 'Commercial' },
    { type: 'restaurant', name: 'Restaurant', w: 22, d: 16, h: 6, roof: 'gable', color: '#d84315', rooftop: ['chimney', 'patio'], category: 'Commercial' },
    { type: 'bank', name: 'Bank', w: 26, d: 18, h: 9, roof: 'flat_parapet', color: '#37474f', rooftop: ['hvac'], category: 'Commercial' },
  ],

  // --- 4. RESIDENTIAL (4 assets) ---
  residential: [
    { type: 'house', name: 'House', w: 14, d: 12, h: 7, roof: 'hip', color: '#bf360c', rooftop: ['chimney'], category: 'Residential' },
    { type: 'villa', name: 'Villa', w: 22, d: 16, h: 8, roof: 'hip', color: '#d84315', rooftop: ['patio', 'balcony'], category: 'Residential' },
    { type: 'townhouses', name: 'Townhouses', w: 36, d: 12, h: 9, roof: 'gable_multi', color: '#ad1457', rooftop: ['chimneys'], category: 'Residential' },
    { type: 'apartment_block', name: 'Apartment Block', w: 42, d: 18, h: 20, roof: 'flat_parapet', color: '#455a64', rooftop: ['hvac', 'solar'], category: 'Residential' },
  ],

  // --- 5. INDUSTRIAL (5 assets) ---
  industrial: [
    { type: 'warehouse', name: 'Warehouse', w: 75, d: 40, h: 12, roof: 'barrel_vault', color: '#424242', rooftop: ['solar', 'vents'], category: 'Industrial' },
    { type: 'factory', name: 'Factory', w: 65, d: 38, h: 14, roof: 'sawtooth', color: '#37474f', rooftop: ['chimneys', 'vents'], category: 'Industrial' },
    { type: 'data_center', name: 'Data Center', w: 70, d: 38, h: 10, roof: 'chiller_flat', color: '#263238', rooftop: ['chillers', 'generators'], category: 'Industrial' },
    { type: 'parking_garage', name: 'Parking Garage', w: 55, d: 36, h: 15, roof: 'open_deck', color: '#616161', rooftop: ['cars_deck'], category: 'Industrial' },
    { type: 'airport_terminal', name: 'Airport Terminal', w: 110, d: 38, h: 16, roof: 'glass_atrium', color: '#0277bd', rooftop: ['skylights', 'hvac'], category: 'Industrial' },
  ],

  // --- 6. INDIVIDUAL ITEMS (10 assets) ---
  individual: [
    { type: 'server_cabinet', name: 'Server Cabinet', w: 2, d: 1.5, h: 2.2, roof: 'cabinet', color: '#1a202c', category: 'Individual items' },
    { type: 'server_rack_row', name: 'Server Rack Row', w: 10, d: 2, h: 2.4, roof: 'rack_row', color: '#1a202c', category: 'Individual items' },
    { type: 'server_room', name: 'Server Room', w: 16, d: 12, h: 4, roof: 'server_room', color: '#1e293b', category: 'Individual items' },
    { type: 'generator', name: 'Generator', w: 6, d: 3, h: 3, roof: 'generator', color: '#e65100', category: 'Individual items' },
    { type: 'transformer', name: 'Transformer', w: 5, d: 4, h: 3.5, roof: 'transformer', color: '#00695c', category: 'Individual items' },
    { type: 'water_tank', name: 'Water Tank', w: 8, d: 8, h: 8, roof: 'tank_dome', color: '#00838f', category: 'Individual items' },
    { type: 'cell_tower', name: 'Cell Tower', w: 4, d: 4, h: 35, roof: 'tower', color: '#b0bec5', category: 'Individual items' },
    { type: 'guard_house', name: 'Guard House', w: 4, d: 4, h: 3, roof: 'hip', color: '#37474f', category: 'Individual items' },
    { type: 'bus_stop', name: 'Bus Stop', w: 6, d: 2.5, h: 2.8, roof: 'canopy', color: '#455a64', category: 'Individual items' },
    { type: 'bench', name: 'Bench', w: 2.5, d: 1, h: 0.8, roof: 'bench', color: '#8d6e63', category: 'Individual items' },
  ],

  // --- 7. SPORTS AND LANDSCAPE (19 assets) ---
  sports_landscape: [
    { type: 'stadium', name: 'Stadium', w: 105, d: 80, h: 26, roof: 'stadium_bowl', color: '#2e7d32', category: 'Sports and landscape' },
    { type: 'football_field', name: 'Football Field', w: 70, d: 44, h: 0, roof: 'field', color: '#2e7d32', category: 'Sports and landscape' },
    { type: 'running_track', name: 'Running Track', w: 95, d: 58, h: 0, roof: 'track', color: '#b71c1c', category: 'Sports and landscape' },
    { type: 'basketball_court', name: 'Basketball Court', w: 28, d: 15, h: 0, roof: 'bball', color: '#d84315', category: 'Sports and landscape' },
    { type: 'tennis_court', name: 'Tennis Court', w: 24, d: 11, h: 0, roof: 'tennis', color: '#00695c', category: 'Sports and landscape' },
    { type: 'pool', name: 'Swimming Pool', w: 25, d: 12, h: 0, roof: 'pool', color: '#0288d1', category: 'Sports and landscape' },
    { type: 'playground', name: 'Playground', w: 20, d: 16, h: 2, roof: 'playground', color: '#f57f17', category: 'Sports and landscape' },
    { type: 'fountain', name: 'Fountain', w: 10, d: 10, h: 1.5, roof: 'fountain', color: '#00acc1', category: 'Sports and landscape' },
    { type: 'pond', name: 'Pond', w: 28, d: 18, h: 0, roof: 'pond', color: '#00695c', category: 'Sports and landscape' },
    { type: 'garden', name: 'Garden', w: 24, d: 18, h: 0, roof: 'garden', color: '#33691e', category: 'Sports and landscape' },
    { type: 'plaza', name: 'Plaza', w: 35, d: 25, h: 0, roof: 'plaza', color: '#78909c', category: 'Sports and landscape' },
    { type: 'parking_lot', name: 'Parking Lot', w: 80, d: 26, h: 0, roof: 'parking', color: '#37474f', category: 'Sports and landscape' },
    { type: 'road', name: 'Road', w: 380, d: 12, h: 0, roof: 'road', color: '#263238', category: 'Sports and landscape' },
    { type: 'runway', name: 'Runway', w: 180, d: 28, h: 0, roof: 'runway', color: '#212121', category: 'Sports and landscape' },
    { type: 'solar_farm', name: 'Solar Farm', w: 45, d: 25, h: 2, roof: 'solar_array', color: '#1a237e', category: 'Sports and landscape' },
    { type: 'tree', name: 'Tree', w: 7, d: 7, h: 9, roof: 'tree', color: '#2e7d32', category: 'Sports and landscape' },
    { type: 'palm', name: 'Palm Tree', w: 6, d: 6, h: 8, roof: 'palm', color: '#388e3c', category: 'Sports and landscape' },
    { type: 'lamp', name: 'Street Lamp', w: 1, d: 1, h: 7, roof: 'lamp', color: '#fbc02d', category: 'Sports and landscape' },
    { type: 'flagpole', name: 'Flagpole', w: 1.5, d: 1.5, h: 12, roof: 'flagpole', color: '#cfd8dc', category: 'Sports and landscape' },
  ]
};

// Flattened Asset Map
const ASSET_TYPE_MAP = {};
Object.values(ASSET_CATALOG).flat().forEach(item => {
  ASSET_TYPE_MAP[item.type] = item;
});

// ========================================================
// 2. STATE MANAGEMENT & UNDO/REDO
// ========================================================
let assets = [];
let selectedAssetIds = new Set();
let showLabels = true;
let nextId = 1;
let gridSnapMode = 1; // 1 = 1m, 5 = 5m, 0 = free

// Camera (Pan & Zoom)
let camera = {
  x: 0,
  y: 0,
  zoom: 3.5
};

// Canvas references
const canvas = document.getElementById('masterplanCanvas');
const ctx = canvas.getContext('2d');
const container = document.getElementById('canvasContainer');
const minimapCanvas = document.getElementById('minimapCanvas');
const minimapCtx = minimapCanvas ? minimapCanvas.getContext('2d') : null;

// Dragging and resizing interaction state
let isDraggingAsset = false;
let isPanning = false;
let isResizing = false;
let resizeHandle = null; // 'nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'
let initialResizeState = null;
let dragStartX = 0;
let dragStartY = 0;
let assetDragOffsets = new Map();
let hoveredAssetId = null;

// Ruler Tool State
let rulerMode = false;
let rulerStart = null;
let rulerCurrent = null;

// Undo & Redo History Stacks
const undoStack = [];
const redoStack = [];
const MAX_HISTORY = 40;

function pushHistoryState() {
  undoStack.push(JSON.stringify(assets));
  if (undoStack.length > MAX_HISTORY) undoStack.shift();
  redoStack.length = 0; // Clear redo on new action
  updateUndoRedoButtons();
}

function undoAction() {
  if (undoStack.length === 0) return;
  redoStack.push(JSON.stringify(assets));
  const prevState = undoStack.pop();
  assets = JSON.parse(prevState);
  selectedAssetIds.clear();
  updatePropertiesPanel();
  updateScheduleTable();
  updateUndoRedoButtons();
}

function redoAction() {
  if (redoStack.length === 0) return;
  undoStack.push(JSON.stringify(assets));
  const nextState = redoStack.pop();
  assets = JSON.parse(nextState);
  selectedAssetIds.clear();
  updatePropertiesPanel();
  updateScheduleTable();
  updateUndoRedoButtons();
}

function updateUndoRedoButtons() {
  const btnUndo = document.getElementById('btnUndo');
  const btnRedo = document.getElementById('btnRedo');
  if (btnUndo) btnUndo.disabled = (undoStack.length === 0);
  if (btnRedo) btnRedo.disabled = (redoStack.length === 0);
}

// ========================================================
// 3. 15 FULL PRESETS IMPLEMENTATION
// ========================================================
const PRESETS = {
  // 1. Campus (Reference Design)
  campus: () => [
    // Roads with dimension markers
    { type: 'road', x: 0, y: 0, w: 12, d: 380, h: 0, rot: 0, customDimLabel: '170 m' },
    { type: 'road', x: 0, y: 100, w: 380, d: 12, h: 0, rot: 0, customDimLabel: '380 × 12 m' },

    // Left academic zone
    { type: 'university_hall', x: -65, y: -70, w: 58, d: 24, h: 18, rot: 0 },
    { type: 'cafeteria', x: -55, y: -25, w: 30, d: 18, h: 6, rot: 0 },
    { type: 'dormitory', x: -65, y: 15, w: 48, d: 14, h: 17, rot: 0 },
    { type: 'dormitory', x: -65, y: 40, w: 48, d: 14, h: 17, rot: 0 },
    { type: 'pool', x: -30, y: 55, w: 25, d: 12, h: 0, rot: 0 },

    // Center near road
    { type: 'library', x: 22, y: -38, w: 32, d: 22, h: 13, rot: 0 },

    // Right academic & sports zone
    { type: 'science_lab', x: 60, y: -75, w: 36, d: 18, h: 14, rot: 0 },
    { type: 'auditorium', x: 62, y: -20, w: 36, d: 28, h: 14, rot: 0 },
    { type: 'gymnasium', x: 65, y: 65, w: 42, d: 30, h: 12, rot: 0 },
    { type: 'football_field', x: 120, y: -65, w: 70, d: 44, h: 0, rot: 90 },
    { type: 'basketball_court', x: 108, y: -10, w: 28, d: 15, h: 0, rot: 0 },
    { type: 'tennis_court', x: 108, y: 10, w: 24, d: 11, h: 0, rot: 0 },

    // Parking & Infrastructure
    { type: 'parking_lot', x: -85, y: 135, w: 80, d: 26, h: 0, rot: 0 },
    { type: 'guard_house', x: 14, y: 92, w: 4, d: 4, h: 3, rot: 0 },
    { type: 'fountain', x: -35, y: -60, w: 10, d: 10, h: 1.5, rot: 0 },

    // Street Lamps along roads
    ...[-80, -40, 0, 40, 80].map(y => ({ type: 'lamp', x: -8, y, w: 1, d: 1, h: 7, rot: 0 })),
    ...[-80, -40, 0, 40, 80].map(y => ({ type: 'lamp', x: 8, y, w: 1, d: 1, h: 7, rot: 0 })),

    // Trees line
    ...[-100, -80, -60, -40, -20, 20, 40, 60, 80].map(x => ({ type: 'tree', x, y: 88, w: 7, d: 7, h: 9, rot: 0 }))
  ],

  // 2. High School
  high_school: () => [
    { type: 'road', x: 0, y: 90, w: 300, d: 12, h: 0, rot: 0 },
    { type: 'high_school', x: -30, y: 20, w: 60, d: 24, h: 14, rot: 0 },
    { type: 'gymnasium', x: -85, y: 15, w: 42, d: 30, h: 12, rot: 0 },
    { type: 'auditorium', x: 35, y: 20, w: 36, d: 28, h: 14, rot: 0 },
    { type: 'cafeteria', x: -20, y: -25, w: 30, d: 18, h: 6, rot: 0 },
    { type: 'library', x: 25, y: -25, w: 32, d: 22, h: 13, rot: 0 },
    { type: 'running_track', x: 105, y: -20, w: 95, d: 58, h: 0, rot: 0 },
    { type: 'football_field', x: 105, y: -20, w: 70, d: 44, h: 0, rot: 0 },
    { type: 'basketball_court', x: 45, y: -70, w: 28, d: 15, h: 0, rot: 0 },
    { type: 'tennis_court', x: 15, y: -70, w: 24, d: 11, h: 0, rot: 0 },
    { type: 'parking_lot', x: -80, y: 60, w: 70, d: 24, h: 0, rot: 0 },
    { type: 'bus_stop', x: -10, y: 82, w: 6, d: 2.5, h: 2.8, rot: 0 },
    { type: 'garden', x: -40, y: -65, w: 24, d: 18, h: 0, rot: 0 },
    { type: 'flagpole', x: 0, y: 55, w: 1.5, d: 1.5, h: 12, rot: 0 },
    ...[-60, -30, 0, 30, 60].map(x => ({ type: 'tree', x, y: -85, w: 7, d: 7, h: 9, rot: 0 }))
  ],

  // 3. Elementary School
  elementary_school: () => [
    { type: 'road', x: 0, y: 80, w: 260, d: 12, h: 0, rot: 0 },
    { type: 'elementary_school', x: -25, y: 25, w: 42, d: 20, h: 9, rot: 0 },
    { type: 'kindergarten', x: 30, y: 25, w: 26, d: 16, h: 6, rot: 0 },
    { type: 'cafeteria', x: -30, y: -15, w: 30, d: 18, h: 6, rot: 0 },
    { type: 'playground', x: 30, y: -15, w: 26, d: 20, h: 2, rot: 0 },
    { type: 'football_field', x: 95, y: 0, w: 55, d: 35, h: 0, rot: 0 },
    { type: 'basketball_court', x: -80, y: 15, w: 28, d: 15, h: 0, rot: 0 },
    { type: 'garden', x: -80, y: -25, w: 24, d: 18, h: 0, rot: 0 },
    { type: 'pond', x: -30, y: -55, w: 24, d: 16, h: 0, rot: 0 },
    { type: 'guard_house', x: 0, y: 72, w: 4, d: 4, h: 3, rot: 0 },
    { type: 'bus_stop', x: 15, y: 72, w: 6, d: 2.5, h: 2.8, rot: 0 },
    ...[-70, -40, -10, 20, 50, 80].map(x => ({ type: 'tree', x, y: 58, w: 7, d: 7, h: 9, rot: 0 }))
  ],

  // 4. University
  university: () => [
    { type: 'road', x: 0, y: 0, w: 14, d: 320, h: 0, rot: 0 },
    { type: 'plaza', x: -45, y: 0, w: 50, d: 40, h: 0, rot: 0 },
    { type: 'fountain', x: -45, y: 0, w: 14, d: 14, h: 2, rot: 0 },
    { type: 'university_hall', x: -105, y: 0, w: 65, d: 28, h: 22, rot: 90 },
    { type: 'library', x: -45, y: -65, w: 45, d: 30, h: 16, rot: 0 },
    { type: 'science_lab', x: -45, y: 65, w: 55, d: 25, h: 18, rot: 0 },
    { type: 'auditorium', x: 50, y: -65, w: 42, d: 30, h: 15, rot: 0 },
    { type: 'dormitory', x: 55, y: 15, w: 48, d: 16, h: 22, rot: 0 },
    { type: 'dormitory', x: 55, y: 55, w: 48, d: 16, h: 22, rot: 0 },
    { type: 'stadium', x: 125, y: -20, w: 90, d: 70, h: 24, rot: 0 },
    { type: 'parking_garage', x: -115, y: 80, w: 55, d: 35, h: 15, rot: 0 },
    { type: 'solar_farm', x: -115, y: -75, w: 45, d: 25, h: 2, rot: 0 }
  ],

  // 5. Hospital Complex
  hospital_complex: () => [
    { type: 'road', x: 0, y: 70, w: 280, d: 12, h: 0, rot: 0 },
    { type: 'road', x: 0, y: -20, w: 10, d: 180, h: 0, rot: 0 },
    { type: 'hospital', x: -50, y: 0, w: 68, d: 34, h: 28, rot: 0 },
    { type: 'clinic', x: 45, y: 15, w: 32, d: 20, h: 12, rot: 0 },
    { type: 'science_lab', x: 45, y: -25, w: 32, d: 20, h: 10, rot: 0 },
    { type: 'parking_garage', x: -55, y: 95, w: 55, d: 35, h: 15, rot: 0 },
    { type: 'generator', x: -100, y: -15, w: 8, d: 4, h: 3, rot: 0 },
    { type: 'transformer', x: -100, y: 5, w: 6, d: 5, h: 3.5, rot: 0 },
    { type: 'water_tank', x: -100, y: 25, w: 8, d: 8, h: 8, rot: 0 },
    { type: 'garden', x: 95, y: 0, w: 30, d: 30, h: 0, rot: 0 },
    { type: 'fountain', x: 95, y: 0, w: 10, d: 10, h: 1.5, rot: 0 },
    { type: 'guard_house', x: -15, y: 62, w: 4, d: 4, h: 3, rot: 0 }
  ],

  // 6. Shopping Mall
  shopping_mall: () => [
    { type: 'road', x: 0, y: 90, w: 320, d: 14, h: 0, rot: 0 },
    { type: 'mall', x: 0, y: 0, w: 85, d: 48, h: 16, rot: 0 },
    { type: 'supermarket', x: -75, y: 0, w: 40, d: 30, h: 8, rot: 0 },
    { type: 'restaurant', x: 75, y: -15, w: 30, d: 20, h: 7, rot: 0 },
    { type: 'plaza', x: 0, y: 50, w: 50, d: 25, h: 0, rot: 0 },
    { type: 'fountain', x: 0, y: 50, w: 12, d: 12, h: 1.5, rot: 0 },
    { type: 'parking_lot', x: -80, y: 130, w: 80, d: 26, h: 0, rot: 0 },
    { type: 'parking_lot', x: 40, y: 130, w: 80, d: 26, h: 0, rot: 0 },
    { type: 'bus_stop', x: -15, y: 81, w: 6, d: 2.5, h: 2.8, rot: 0 },
    { type: 'bus_stop', x: 15, y: 81, w: 6, d: 2.5, h: 2.8, rot: 0 },
    ...[-30, -15, 15, 30].map(x => ({ type: 'palm', x, y: 50, w: 6, d: 6, h: 8, rot: 0 }))
  ],

  // 7. Residential Neighborhood
  residential: () => [
    { type: 'road', x: 0, y: 0, w: 260, d: 10, h: 0, rot: 0 },
    { type: 'apartment_block', x: -80, y: -45, w: 42, d: 18, h: 20, rot: 0 },
    { type: 'apartment_block', x: -80, y: 45, w: 42, d: 18, h: 20, rot: 0 },
    { type: 'townhouses', x: -20, y: -40, w: 36, d: 12, h: 9, rot: 0 },
    { type: 'townhouses', x: -20, y: 40, w: 36, d: 12, h: 9, rot: 0 },
    { type: 'house', x: 30, y: -35, w: 14, d: 12, h: 7, rot: 0 },
    { type: 'house', x: 55, y: -35, w: 14, d: 12, h: 7, rot: 0 },
    { type: 'villa', x: 30, y: 40, w: 22, d: 16, h: 8, rot: 0 },
    { type: 'villa', x: 65, y: 40, w: 22, d: 16, h: 8, rot: 0 },
    { type: 'pond', x: 105, y: -30, w: 28, d: 18, h: 0, rot: 0 },
    { type: 'playground', x: 105, y: 30, w: 20, d: 16, h: 2, rot: 0 },
    ...[-100, -50, 0, 50, 100].map(x => ({ type: 'lamp', x, y: -7, w: 1, d: 1, h: 7, rot: 0 }))
  ],

  // 8. Industrial Park
  industrial_park: () => [
    { type: 'road', x: 0, y: 0, w: 320, d: 14, h: 0, rot: 0 },
    { type: 'warehouse', x: -75, y: -55, w: 75, d: 40, h: 12, rot: 0 },
    { type: 'factory', x: 65, y: -55, w: 65, d: 38, h: 14, rot: 0 },
    { type: 'warehouse', x: -75, y: 55, w: 75, d: 40, h: 12, rot: 0 },
    { type: 'transformer', x: 30, y: 45, w: 8, d: 6, h: 4, rot: 0 },
    { type: 'water_tank', x: 55, y: 45, w: 10, d: 10, h: 10, rot: 0 },
    { type: 'water_tank', x: 75, y: 45, w: 10, d: 10, h: 10, rot: 0 },
    { type: 'solar_farm', x: 110, y: 50, w: 45, d: 25, h: 2, rot: 0 },
    { type: 'guard_house', x: -140, y: 12, w: 4, d: 4, h: 3, rot: 0 },
    { type: 'parking_lot', x: 50, y: 95, w: 70, d: 24, h: 0, rot: 0 }
  ],

  // 9. Data Center Campus
  data_center: () => [
    { type: 'road', x: 0, y: 80, w: 300, d: 12, h: 0, rot: 0 },
    { type: 'data_center', x: -55, y: 20, w: 70, d: 38, h: 10, rot: 0 },
    { type: 'data_center', x: 55, y: 20, w: 70, d: 38, h: 10, rot: 0 },
    { type: 'server_room', x: -55, y: -30, w: 30, d: 20, h: 5, rot: 0 },
    { type: 'server_room', x: 55, y: -30, w: 30, d: 20, h: 5, rot: 0 },
    { type: 'generator', x: -115, y: 10, w: 8, d: 4, h: 3, rot: 0 },
    { type: 'generator', x: -115, y: 25, w: 8, d: 4, h: 3, rot: 0 },
    { type: 'transformer', x: 115, y: 15, w: 8, d: 6, h: 4, rot: 0 },
    { type: 'water_tank', x: 115, y: 35, w: 10, d: 10, h: 10, rot: 0 },
    { type: 'cell_tower', x: 0, y: -45, w: 5, d: 5, h: 35, rot: 0 },
    { type: 'guard_house', x: -15, y: 72, w: 4, d: 4, h: 3, rot: 0 },
    { type: 'parking_lot', x: 40, y: 115, w: 60, d: 20, h: 0, rot: 0 }
  ],

  // 10. Resort & Hotel
  resort_hotel: () => [
    { type: 'road', x: 0, y: 85, w: 260, d: 12, h: 0, rot: 0 },
    { type: 'hotel', x: 0, y: 25, w: 65, d: 25, h: 24, rot: 0 },
    { type: 'pool', x: 0, y: -25, w: 40, d: 20, h: 0, rot: 0 },
    { type: 'villa', x: -65, y: -25, w: 22, d: 16, h: 8, rot: 0 },
    { type: 'villa', x: -65, y: 15, w: 22, d: 16, h: 8, rot: 0 },
    { type: 'villa', x: 65, y: -25, w: 22, d: 16, h: 8, rot: 0 },
    { type: 'villa', x: 65, y: 15, w: 22, d: 16, h: 8, rot: 0 },
    { type: 'tennis_court', x: 105, y: 0, w: 24, d: 11, h: 0, rot: 0 },
    { type: 'fountain', x: 0, y: 60, w: 10, d: 10, h: 1.5, rot: 0 },
    ...[-30, -15, 15, 30].map(x => ({ type: 'palm', x, y: -5, w: 6, d: 6, h: 8, rot: 0 })),
    ...[-45, 45].map(x => ({ type: 'palm', x, y: 60, w: 6, d: 6, h: 8, rot: 0 }))
  ],

  // 11. Religious Complex
  religious_complex: () => [
    { type: 'road', x: 0, y: 80, w: 260, d: 12, h: 0, rot: 0 },
    { type: 'mosque', x: -50, y: 15, w: 45, d: 35, h: 18, rot: 0 },
    { type: 'church', x: 50, y: 15, w: 42, d: 24, h: 20, rot: 0 },
    { type: 'plaza', x: 0, y: 15, w: 35, d: 30, h: 0, rot: 0 },
    { type: 'fountain', x: 0, y: 15, w: 10, d: 10, h: 1.5, rot: 0 },
    { type: 'garden', x: 0, y: -40, w: 45, d: 30, h: 0, rot: 0 },
    { type: 'pond', x: 0, y: -40, w: 20, d: 14, h: 0, rot: 0 },
    { type: 'parking_lot', x: -60, y: 110, w: 60, d: 22, h: 0, rot: 0 },
    { type: 'parking_lot', x: 60, y: 110, w: 60, d: 22, h: 0, rot: 0 },
    ...[-75, -25, 25, 75].map(x => ({ type: 'tree', x, y: 55, w: 7, d: 7, h: 9, rot: 0 }))
  ],

  // 12. Stadium Complex
  stadium_complex: () => [
    { type: 'road', x: 0, y: 90, w: 340, d: 14, h: 0, rot: 0 },
    { type: 'stadium', x: -60, y: -10, w: 110, d: 85, h: 28, rot: 0 },
    { type: 'running_track', x: 80, y: -30, w: 95, d: 58, h: 0, rot: 0 },
    { type: 'football_field', x: 80, y: -30, w: 70, d: 44, h: 0, rot: 0 },
    { type: 'pool', x: 80, y: 35, w: 50, d: 25, h: 0, rot: 0 },
    { type: 'basketball_court', x: 130, y: 35, w: 28, d: 15, h: 0, rot: 0 },
    { type: 'tennis_court', x: 160, y: 35, w: 24, d: 11, h: 0, rot: 0 },
    { type: 'parking_lot', x: -70, y: 130, w: 90, d: 28, h: 0, rot: 0 },
    { type: 'parking_lot', x: 50, y: 130, w: 90, d: 28, h: 0, rot: 0 },
    { type: 'flagpole', x: -60, y: 50, w: 1.5, d: 1.5, h: 12, rot: 0 }
  ],

  // 13. Civic Center
  civic_center: () => [
    { type: 'road', x: 0, y: 75, w: 300, d: 12, h: 0, rot: 0 },
    { type: 'town_hall', x: 0, y: 0, w: 55, d: 30, h: 20, rot: 0 },
    { type: 'library', x: -70, y: 0, w: 38, d: 26, h: 12, rot: 0 },
    { type: 'museum', x: 70, y: 0, w: 45, d: 28, h: 14, rot: 0 },
    { type: 'police_station', x: -75, y: -50, w: 32, d: 22, h: 10, rot: 0 },
    { type: 'fire_station', x: 75, y: -50, w: 35, d: 20, h: 9, rot: 0 },
    { type: 'plaza', x: 0, y: -45, w: 50, d: 35, h: 0, rot: 0 },
    { type: 'fountain', x: 0, y: -45, w: 14, d: 14, h: 2, rot: 0 },
    { type: 'flagpole', x: 0, y: 35, w: 1.5, d: 1.5, h: 12, rot: 0 },
    ...[-40, -20, 20, 40].map(x => ({ type: 'bench', x, y: 40, w: 2.5, d: 1, h: 0.8, rot: 0 }))
  ],

  // 14. Airport
  airport: () => [
    { type: 'runway', x: 0, y: -80, w: 220, d: 32, h: 0, rot: 0 },
    { type: 'road', x: 0, y: 70, w: 280, d: 14, h: 0, rot: 0 },
    { type: 'airport_terminal', x: 0, y: 0, w: 110, d: 40, h: 16, rot: 0 },
    { type: 'cell_tower', x: -85, y: -20, w: 8, d: 8, h: 42, rot: 0 },
    { type: 'warehouse', x: 85, y: -20, w: 50, d: 35, h: 15, rot: 0 },
    { type: 'water_tank', x: 125, y: -20, w: 10, d: 10, h: 10, rot: 0 },
    { type: 'water_tank', x: 140, y: -20, w: 10, d: 10, h: 10, rot: 0 },
    { type: 'parking_garage', x: -60, y: 95, w: 65, d: 40, h: 16, rot: 0 },
    { type: 'hotel', x: 50, y: 95, w: 45, d: 24, h: 18, rot: 0 }
  ],

  // 15. Downtown Mixed-Use
  downtown: () => [
    { type: 'road', x: 0, y: 0, w: 280, d: 14, h: 0, rot: 0 },
    { type: 'road', x: 0, y: 0, w: 14, d: 240, h: 0, rot: 0 },
    { type: 'office_tower', x: -55, y: -50, w: 40, d: 32, h: 45, rot: 0 },
    { type: 'hotel', x: 55, y: -50, w: 38, d: 28, h: 32, rot: 0 },
    { type: 'mall', x: -55, y: 55, w: 55, d: 38, h: 15, rot: 0 },
    { type: 'apartment_block', x: 55, y: 55, w: 42, d: 26, h: 24, rot: 0 },
    { type: 'bank', x: -105, y: -50, w: 28, d: 20, h: 10, rot: 0 },
    { type: 'supermarket', x: 105, y: 55, w: 35, d: 25, h: 7, rot: 0 },
    { type: 'plaza', x: -105, y: 55, w: 30, d: 25, h: 0, rot: 0 },
    { type: 'fountain', x: -105, y: 55, w: 10, d: 10, h: 1.5, rot: 0 },
    { type: 'bus_stop', x: -25, y: -9, w: 6, d: 2.5, h: 2.8, rot: 0 },
    { type: 'bus_stop', x: 25, y: 9, w: 6, d: 2.5, h: 2.8, rot: 0 }
  ]
};

// ========================================================
// 4. COORDINATE TRANSFORMS & RENDER LOOP
// ========================================================
function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) return;
  canvas.width = Math.round(rect.width * dpr);
  canvas.height = Math.round(rect.height * dpr);
}

function worldToScreen(wx, wy) {
  const rect = canvas.getBoundingClientRect();
  const cx = rect.width / 2;
  const cy = rect.height / 2;
  return {
    x: cx + (wx - camera.x) * camera.zoom,
    y: cy + (wy - camera.y) * camera.zoom
  };
}

function screenToWorld(sx, sy) {
  const rect = canvas.getBoundingClientRect();
  const cx = rect.width / 2;
  const cy = rect.height / 2;
  return {
    x: camera.x + (sx - cx) / camera.zoom,
    y: camera.y + (sy - cy) / camera.zoom
  };
}

function render() {
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;

  ctx.save();
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  // Clear Canvas Background
  ctx.fillStyle = '#0f1712';
  ctx.fillRect(0, 0, rect.width, rect.height);

  // Draw CAD Grid
  drawGrid(rect.width, rect.height);

  const now = Date.now();

  // 1. Draw Ground Elements first (h = 0)
  assets.filter(a => a.h === 0).forEach(asset => {
    drawAsset(asset, now);
  });

  // 2. Draw Elevated Buildings & Structures (h > 0)
  assets.filter(a => a.h > 0).forEach(asset => {
    drawAsset(asset, now);
  });

  // 3. Draw Selection & Dimension Lines & Interactive Handles
  if (selectedAssetIds.size > 0) {
    selectedAssetIds.forEach(id => {
      const sel = assets.find(a => a.id === id);
      if (sel) {
        drawSelectionAndDimensions(sel);
      }
    });
  }

  // 4. Draw Active Ruler Tool
  if (rulerMode && rulerStart && rulerCurrent) {
    drawRulerMeasurement();
  }

  ctx.restore();

  // Update Dynamic Scale Bar & Minimap
  updateScaleBar();
  drawMinimap();

  requestAnimationFrame(render);
}

function drawGrid(w, h) {
  const topLeft = screenToWorld(0, 0);
  const bottomRight = screenToWorld(w, h);

  const startX = Math.floor(topLeft.x / 10) * 10;
  const endX = Math.ceil(bottomRight.x / 10) * 10;
  const startY = Math.floor(topLeft.y / 10) * 10;
  const endY = Math.ceil(bottomRight.y / 10) * 10;

  ctx.lineWidth = 1;
  for (let x = startX; x <= endX; x += 10) {
    const s = worldToScreen(x, 0);
    ctx.strokeStyle = (x % 50 === 0) ? '#1f3426' : '#142319';
    ctx.beginPath();
    ctx.moveTo(s.x, 0);
    ctx.lineTo(s.x, h);
    ctx.stroke();
  }
  for (let y = startY; y <= endY; y += 10) {
    const s = worldToScreen(0, y);
    ctx.strokeStyle = (y % 50 === 0) ? '#1f3426' : '#142319';
    ctx.beginPath();
    ctx.moveTo(0, s.y);
    ctx.lineTo(w, s.y);
    ctx.stroke();
  }
}

// ========================================================
// 5. DETAILED PROCEDURAL ASSET DRAWING (NO WHITE BOXES!)
// ========================================================
function drawAsset(item, time) {
  const center = worldToScreen(item.x, item.y);
  const pw = item.w * camera.zoom;
  const pd = item.d * camera.zoom;
  const isSelected = selectedAssetIds.has(item.id);
  const isHovered = (item.id === hoveredAssetId);

  ctx.save();
  ctx.translate(center.x, center.y);
  if (item.rot) {
    ctx.rotate((item.rot * Math.PI) / 180);
  }

  // A. Drop Shadow (calculated from building height)
  if (item.h > 0) {
    const shadowDist = Math.max(3, item.h * camera.zoom * 0.12);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.48)';
    ctx.beginPath();
    ctx.roundRect(-pw / 2 + shadowDist, -pd / 2 + shadowDist, pw, pd, 3);
    ctx.fill();
  }

  // B. Specific Procedural Visuals
  switch (item.type) {
    case 'road':
      drawRoad(pw, pd, item);
      break;
    case 'runway':
      drawRunway(pw, pd);
      break;
    case 'football_field':
      drawFootballField(pw, pd);
      break;
    case 'running_track':
      drawRunningTrack(pw, pd);
      break;
    case 'basketball_court':
      drawBasketballCourt(pw, pd);
      break;
    case 'tennis_court':
      drawTennisCourt(pw, pd);
      break;
    case 'pool':
      drawSwimmingPool(pw, pd, time);
      break;
    case 'parking_lot':
      drawParkingLot(pw, pd, item.id);
      break;
    case 'fountain':
      drawFountain(pw, pd, time);
      break;
    case 'pond':
      drawPond(pw, pd);
      break;
    case 'garden':
      drawGarden(pw, pd);
      break;
    case 'plaza':
      drawPlaza(pw, pd);
      break;
    case 'solar_farm':
      drawSolarFarm(pw, pd);
      break;
    case 'tree':
      drawTree(pw, pd);
      break;
    case 'palm':
      drawPalm(pw, pd);
      break;
    case 'lamp':
      drawStreetLamp(pw, pd, time);
      break;
    case 'flagpole':
      drawFlagpole(pw, pd);
      break;
    case 'server_cabinet':
    case 'server_rack_row':
      drawServerCabinet(pw, pd, item.type, time);
      break;
    case 'server_room':
      drawServerRoom(pw, pd, time);
      break;
    case 'generator':
      drawGenerator(pw, pd);
      break;
    case 'transformer':
      drawTransformer(pw, pd);
      break;
    case 'water_tank':
      drawWaterTank(pw, pd);
      break;
    case 'cell_tower':
      drawCellTower(pw, pd);
      break;
    case 'guard_house':
      drawGuardHouse(pw, pd);
      break;
    case 'bus_stop':
      drawBusStop(pw, pd);
      break;
    case 'bench':
      drawBench(pw, pd);
      break;
    case 'stadium':
      drawStadium(pw, pd);
      break;
    default:
      drawArchitecturalBuilding(pw, pd, item);
      break;
  }

  // C. Selection or Hover Stroke
  if (isSelected) {
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.strokeRect(-pw / 2, -pd / 2, pw, pd);
  } else if (isHovered) {
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(-pw / 2, -pd / 2, pw, pd);
  }

  // D. Label Tags
  if (showLabels && camera.zoom > 1.2 && item.type !== 'tree' && item.type !== 'lamp' && item.type !== 'bench') {
    drawAssetLabel(pw, pd, item);
  }

  ctx.restore();
}

function drawArchitecturalBuilding(pw, pd, item) {
  const facadeHeight = Math.min(pd * 0.28, 14 * camera.zoom);
  const roofHeight = pd - facadeHeight;

  // 1. Roof Body
  ctx.fillStyle = item.color || '#455a64';
  ctx.fillRect(-pw / 2, -pd / 2, pw, roofHeight);

  // Roof Styles
  if (item.roof === 'dome') {
    // Spheroid dome with radial specular gleam
    const grad = ctx.createRadialGradient(0, -pd / 2 + roofHeight / 2, 2, 0, -pd / 2 + roofHeight / 2, Math.min(pw, roofHeight) * 0.4);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.3, '#90caf9');
    grad.addColorStop(1, '#2c3e50');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(0, -pd / 2 + roofHeight / 2, Math.min(pw, roofHeight) * 0.38, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#1e293b';
    ctx.stroke();
  } else if (item.roof === 'barrel_vault') {
    // Corrugated ribbed barrel roof
    const ribs = Math.max(4, Math.floor(pw / 10));
    const step = pw / ribs;
    for (let i = 0; i < ribs; i++) {
      const rx = -pw / 2 + i * step;
      const rgrad = ctx.createLinearGradient(rx, 0, rx + step, 0);
      rgrad.addColorStop(0, 'rgba(255,255,255,0.25)');
      rgrad.addColorStop(0.5, 'rgba(255,255,255,0.02)');
      rgrad.addColorStop(1, 'rgba(0,0,0,0.3)');
      ctx.fillStyle = rgrad;
      ctx.fillRect(rx, -pd / 2, step, roofHeight);
      ctx.strokeStyle = 'rgba(255,255,255,0.15)';
      ctx.strokeRect(rx, -pd / 2, step, roofHeight);
    }
  } else if (item.roof === 'hip' || item.roof === 'gable') {
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(-pw / 2, -pd / 2);
    ctx.lineTo(-pw / 4, -pd / 2 + roofHeight / 2);
    ctx.lineTo(pw / 4, -pd / 2 + roofHeight / 2);
    ctx.lineTo(pw / 2, -pd / 2);
    ctx.moveTo(-pw / 2, -pd / 2 + roofHeight);
    ctx.lineTo(-pw / 4, -pd / 2 + roofHeight / 2);
    ctx.moveTo(pw / 4, -pd / 2 + roofHeight / 2);
    ctx.lineTo(pw / 2, -pd / 2 + roofHeight);
    ctx.stroke();
  } else if (item.roof === 'glass_atrium') {
    ctx.fillStyle = 'rgba(56, 189, 248, 0.28)';
    ctx.fillRect(-pw * 0.35, -pd / 2 + roofHeight * 0.15, pw * 0.7, roofHeight * 0.7);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1;
    ctx.strokeRect(-pw * 0.35, -pd / 2 + roofHeight * 0.15, pw * 0.7, roofHeight * 0.7);
  } else if (item.roof === 'mosque_dome') {
    const grad = ctx.createRadialGradient(0, -pd / 2 + roofHeight / 2, 2, 0, -pd / 2 + roofHeight / 2, Math.min(pw, roofHeight) * 0.4);
    grad.addColorStop(0, '#fff59d');
    grad.addColorStop(0.5, '#fbc02d');
    grad.addColorStop(1, '#b78103');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(0, -pd / 2 + roofHeight / 2, Math.min(pw, roofHeight) * 0.35, 0, Math.PI * 2);
    ctx.fill();
    const mr = 3 * camera.zoom;
    ctx.fillStyle = '#ffffff';
    [[-pw/2, -pd/2], [pw/2, -pd/2], [-pw/2, -pd/2+roofHeight], [pw/2, -pd/2+roofHeight]].forEach(([mx, my]) => {
      ctx.beginPath();
      ctx.arc(mx, my, mr, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fbc02d';
      ctx.stroke();
    });
  } else {
    // Flat Parapet Edge
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 2;
    ctx.strokeRect(-pw / 2 + 2, -pd / 2 + 2, pw - 4, roofHeight - 4);
  }

  // 2. Rooftop Equipment (HVAC, Solar, Helipad, Chimneys, Cross)
  if (item.rooftop) {
    if (item.rooftop.includes('solar')) {
      ctx.fillStyle = '#0f172a';
      const sx = -pw * 0.3;
      const sy = -pd / 2 + 4;
      const sw = pw * 0.6;
      const sh = Math.max(6, roofHeight * 0.4);
      ctx.fillRect(sx, sy, sw, sh);
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 0.5;
      ctx.strokeRect(sx, sy, sw, sh);
    }
    if (item.rooftop.includes('helipad')) {
      const hr = Math.min(pw, roofHeight) * 0.3;
      const hy = -pd / 2 + roofHeight / 2;
      ctx.fillStyle = '#b91c1c';
      ctx.beginPath();
      ctx.arc(0, hy, hr, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = '#ffffff';
      ctx.font = `bold ${Math.max(10, hr * 1.1)}px monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('H', 0, hy);
    }
    if (item.rooftop.includes('hvac')) {
      ctx.fillStyle = '#94a3b8';
      const hw = Math.max(6, pw * 0.15);
      const hd = Math.max(4, roofHeight * 0.2);
      ctx.fillRect(pw / 4, -pd / 2 + 6, hw, hd);
      ctx.strokeStyle = '#475569';
      ctx.strokeRect(pw / 4, -pd / 2 + 6, hw, hd);
    }
    if (item.rooftop.includes('cross')) {
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2.5;
      const cy = -pd / 2 + roofHeight / 2;
      ctx.beginPath();
      ctx.moveTo(0, cy - 8); ctx.lineTo(0, cy + 8);
      ctx.moveTo(-6, cy - 2); ctx.lineTo(6, cy - 2);
      ctx.stroke();
    }
  }

  // 3. Facade with Window Grids & Canopy
  const facadeY = -pd / 2 + roofHeight;
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(-pw / 2, facadeY, pw, facadeHeight);

  const windowCols = Math.max(3, Math.floor(pw / 12));
  const winW = (pw - (windowCols + 1) * 3) / windowCols;
  ctx.fillStyle = '#38bdf8';
  for (let c = 0; c < windowCols; c++) {
    const wx = -pw / 2 + 3 + c * (winW + 3);
    ctx.fillRect(wx, facadeY + 2, winW, Math.max(2, facadeHeight * 0.45));
  }

  const doorW = Math.max(6, pw * 0.18);
  const canopyD = Math.max(3, facadeHeight * 0.35);
  ctx.fillStyle = '#f59e0b';
  ctx.fillRect(-doorW / 2, facadeY + facadeHeight - canopyD, doorW, canopyD);
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(-doorW / 3, facadeY + facadeHeight - 3, doorW * 0.66, 3);
}

function drawRoad(pw, pd, item) {
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(-pw / 2, -pd / 2, pw, pd);
  ctx.strokeStyle = '#64748b';
  ctx.lineWidth = 1;
  ctx.strokeRect(-pw / 2, -pd / 2, pw, pd);

  ctx.strokeStyle = '#f59e0b';
  ctx.setLineDash([8, 8]);
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  if (pw > pd) {
    ctx.moveTo(-pw / 2, 0); ctx.lineTo(pw / 2, 0);
  } else {
    ctx.moveTo(0, -pd / 2); ctx.lineTo(0, pd / 2);
  }
  ctx.stroke();
  ctx.setLineDash([]);

  // Dimension marker along road (as seen in screenshot: e.g. 170m)
  if (item.customDimLabel && camera.zoom > 1.5) {
    ctx.save();
    ctx.fillStyle = 'rgba(249, 115, 22, 0.9)';
    ctx.beginPath();
    ctx.roundRect(-24, -8, 48, 16, 8);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 9px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(item.customDimLabel, 0, 0);
    ctx.restore();
  }
}

function drawRunway(pw, pd) {
  ctx.fillStyle = '#18181b';
  ctx.fillRect(-pw / 2, -pd / 2, pw, pd);

  ctx.fillStyle = '#ffffff';
  for (let i = 0; i < 8; i++) {
    const ky = -pd / 2 + 3 + i * (pd - 6) / 8;
    ctx.fillRect(-pw / 2 + 4, ky, 12, (pd - 6) / 12);
    ctx.fillRect(pw / 2 - 16, ky, 12, (pd - 6) / 12);
  }

  ctx.setLineDash([12, 12]);
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(-pw / 2 + 25, 0); ctx.lineTo(pw / 2 - 25, 0);
  ctx.stroke();
  ctx.setLineDash([]);
}

function drawFootballField(pw, pd) {
  const stripes = 8;
  const sw = pw / stripes;
  for (let i = 0; i < stripes; i++) {
    ctx.fillStyle = (i % 2 === 0) ? '#2e7d32' : '#388e3c';
    ctx.fillRect(-pw / 2 + i * sw, -pd / 2, sw, pd);
  }
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(-pw / 2 + 2, -pd / 2 + 2, pw - 4, pd - 4);
  ctx.beginPath();
  ctx.moveTo(0, -pd / 2 + 2); ctx.lineTo(0, pd / 2 - 2);
  ctx.arc(0, 0, Math.min(pw, pd) * 0.16, 0, Math.PI * 2);
  ctx.stroke();
  const boxW = pw * 0.15;
  const boxD = pd * 0.45;
  ctx.strokeRect(-pw / 2 + 2, -boxD / 2, boxW, boxD);
  ctx.strokeRect(pw / 2 - 2 - boxW, -boxD / 2, boxW, boxD);
}

function drawRunningTrack(pw, pd) {
  ctx.fillStyle = '#b71c1c';
  ctx.beginPath();
  ctx.roundRect(-pw / 2, -pd / 2, pw, pd, pd / 2);
  ctx.fill();
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.roundRect(-pw / 2 + 4, -pd / 2 + 4, pw - 8, pd - 8, (pd - 8) / 2);
  ctx.stroke();
  ctx.setLineDash([]);
}

function drawBasketballCourt(pw, pd) {
  ctx.fillStyle = '#d84315';
  ctx.fillRect(-pw / 2, -pd / 2, pw, pd);
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(-pw / 2 + 1, -pd / 2 + 1, pw - 2, pd - 2);
  ctx.beginPath();
  ctx.moveTo(0, -pd / 2 + 1); ctx.lineTo(0, pd / 2 - 1);
  ctx.arc(0, 0, pd * 0.18, 0, Math.PI * 2);
  ctx.stroke();
}

function drawTennisCourt(pw, pd) {
  ctx.fillStyle = '#00695c';
  ctx.fillRect(-pw / 2, -pd / 2, pw, pd);
  ctx.fillStyle = '#00897b';
  ctx.fillRect(-pw * 0.4, -pd * 0.4, pw * 0.8, pd * 0.8);
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1;
  ctx.strokeRect(-pw * 0.4, -pd * 0.4, pw * 0.8, pd * 0.8);
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, -pd / 2); ctx.lineTo(0, pd / 2);
  ctx.stroke();
}

function drawSwimmingPool(pw, pd, time) {
  ctx.fillStyle = '#0288d1';
  ctx.fillRect(-pw / 2, -pd / 2, pw, pd);
  const lanes = 5;
  const lh = pd / lanes;
  ctx.strokeStyle = '#01579b';
  ctx.lineWidth = 1;
  for (let i = 1; i < lanes; i++) {
    ctx.beginPath();
    ctx.moveTo(-pw / 2 + 2, -pd / 2 + i * lh);
    ctx.lineTo(pw / 2 - 2, -pd / 2 + i * lh);
    ctx.stroke();
  }
  ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
  const waveX = Math.sin(time / 600) * (pw * 0.2);
  ctx.fillRect(waveX - 10, -pd / 4, 20, pd / 2);
  ctx.strokeStyle = '#e0f2fe';
  ctx.lineWidth = 2;
  ctx.strokeRect(-pw / 2, -pd / 2, pw, pd);
}

function drawParkingLot(pw, pd, id) {
  ctx.fillStyle = '#37474f';
  ctx.fillRect(-pw / 2, -pd / 2, pw, pd);
  const stallW = Math.max(6, 4.5 * camera.zoom);
  const stallD = pd * 0.38;
  const cols = Math.floor(pw / stallW);
  const carColors = ['#e53935', '#1e88e5', '#fdd835', '#ffffff', '#757575', '#43a047', '#00acc1'];

  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1;
  for (let c = 0; c < cols; c++) {
    const sx = -pw / 2 + 2 + c * stallW;
    ctx.strokeRect(sx, -pd / 2 + 1, stallW, stallD);
    ctx.strokeRect(sx, pd / 2 - 1 - stallD, stallW, stallD);

    if ((c + id) % 7 !== 0) {
      ctx.fillStyle = carColors[(c * 3 + id) % carColors.length];
      ctx.fillRect(sx + 2, -pd / 2 + 3, stallW - 4, stallD - 5);
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(sx + 3, -pd / 2 + 7, stallW - 6, 2);
    }
    if ((c * 2 + id) % 5 !== 0) {
      ctx.fillStyle = carColors[(c * 5 + id) % carColors.length];
      ctx.fillRect(sx + 2, pd / 2 - stallD + 2, stallW - 4, stallD - 5);
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(sx + 3, pd / 2 - stallD + 5, stallW - 6, 2);
    }
  }
}

function drawFountain(pw, pd, time) {
  const r = Math.min(pw, pd) / 2;
  ctx.fillStyle = '#00acc1';
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2;
  ctx.stroke();

  const ripple = (time / 300) % r;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.beginPath();
  ctx.arc(0, 0, ripple, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(0, 0, Math.max(2, r * 0.2), 0, Math.PI * 2);
  ctx.fill();
}

function drawPond(pw, pd) {
  ctx.fillStyle = '#00695c';
  ctx.beginPath();
  ctx.ellipse(0, 0, pw / 2, pd / 2, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#2e7d32';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fillStyle = '#4caf50';
  ctx.beginPath();
  ctx.arc(-pw * 0.2, -pd * 0.1, 4, 0, Math.PI * 2);
  ctx.arc(pw * 0.25, pd * 0.15, 3.5, 0, Math.PI * 2);
  ctx.fill();
}

function drawGarden(pw, pd) {
  ctx.fillStyle = '#33691e';
  ctx.fillRect(-pw / 2, -pd / 2, pw, pd);
  ctx.strokeStyle = '#689f38';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(-pw / 2 + 2, -pd / 2 + 2, pw - 4, pd - 4);
  const colors = ['#e91e63', '#ffeb3b', '#9c27b0', '#ff9800'];
  for (let i = 0; i < 6; i++) {
    ctx.fillStyle = colors[i % colors.length];
    ctx.beginPath();
    ctx.arc(-pw * 0.3 + (i % 3) * (pw * 0.3), -pd * 0.2 + Math.floor(i / 3) * (pd * 0.4), 3, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawPlaza(pw, pd) {
  ctx.fillStyle = '#78909c';
  ctx.fillRect(-pw / 2, -pd / 2, pw, pd);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.lineWidth = 1;
  const step = Math.max(8, 6 * camera.zoom);
  for (let x = -pw / 2; x <= pw / 2; x += step) {
    ctx.beginPath(); ctx.moveTo(x, -pd / 2); ctx.lineTo(x, pd / 2); ctx.stroke();
  }
  for (let y = -pd / 2; y <= pd / 2; y += step) {
    ctx.beginPath(); ctx.moveTo(-pw / 2, y); ctx.lineTo(pw / 2, y); ctx.stroke();
  }
}

function drawSolarFarm(pw, pd) {
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(-pw / 2, -pd / 2, pw, pd);
  const rows = 4;
  const rh = pd / rows;
  ctx.fillStyle = '#1e3a8a';
  for (let r = 0; r < rows; r++) {
    ctx.fillRect(-pw / 2 + 2, -pd / 2 + r * rh + 2, pw - 4, rh - 4);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 0.5;
    ctx.strokeRect(-pw / 2 + 2, -pd / 2 + r * rh + 2, pw - 4, rh - 4);
  }
}

function drawTree(pw, pd) {
  const r = Math.min(pw, pd) / 2;
  ctx.fillStyle = '#1b5e20';
  ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#2e7d32';
  ctx.beginPath(); ctx.arc(-r * 0.2, -r * 0.2, r * 0.75, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#43a047';
  ctx.beginPath(); ctx.arc(-r * 0.35, -r * 0.35, r * 0.45, 0, Math.PI * 2); ctx.fill();
}

function drawPalm(pw, pd) {
  const r = Math.min(pw, pd) / 2;
  ctx.strokeStyle = '#2e7d32';
  ctx.lineWidth = 3;
  for (let a = 0; a < 6; a++) {
    const angle = (a * Math.PI) / 3;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
    ctx.stroke();
  }
  ctx.fillStyle = '#795548';
  ctx.beginPath(); ctx.arc(0, 0, 3, 0, Math.PI * 2); ctx.fill();
}

function drawStreetLamp(pw, pd, time) {
  const glow = ctx.createRadialGradient(0, 0, 1, 0, 0, 14 * camera.zoom);
  glow.addColorStop(0, 'rgba(253, 224, 71, 0.4)');
  glow.addColorStop(1, 'rgba(253, 224, 71, 0)');
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(0, 0, 14 * camera.zoom, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#fef08a';
  ctx.beginPath(); ctx.arc(0, 0, 2.5, 0, Math.PI * 2); ctx.fill();
}

function drawFlagpole(pw, pd) {
  ctx.fillStyle = '#e2e8f0';
  ctx.beginPath(); ctx.arc(0, 0, 3, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#ef4444';
  ctx.fillRect(0, -6, 12, 8);
}

function drawServerCabinet(pw, pd, type, time) {
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(-pw / 2, -pd / 2, pw, pd);
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 1;
  ctx.strokeRect(-pw / 2, -pd / 2, pw, pd);

  const leds = (type === 'server_rack_row') ? 10 : 3;
  const ledStep = pw / (leds + 1);
  for (let i = 0; i < leds; i++) {
    const lx = -pw / 2 + (i + 1) * ledStep;
    const isBlinking = Math.sin(time / 150 + i * 2) > 0;
    ctx.fillStyle = isBlinking ? '#22c55e' : (i % 2 === 0 ? '#38bdf8' : '#eab308');
    ctx.beginPath();
    ctx.arc(lx, 0, Math.max(1, 1.2 * camera.zoom), 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawServerRoom(pw, pd, time) {
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(-pw / 2, -pd / 2, pw, pd);
  const rows = 3;
  const rh = pd / 5;
  for (let r = 0; r < rows; r++) {
    const ry = -pd / 2 + (r + 1) * rh;
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(-pw * 0.4, ry, pw * 0.8, rh * 0.7);
    for (let l = 0; l < 5; l++) {
      ctx.fillStyle = (Math.sin(time / 200 + l + r) > 0) ? '#22c55e' : '#38bdf8';
      ctx.fillRect(-pw * 0.35 + l * (pw * 0.15), ry + 2, 3, 2);
    }
  }
}

function drawGenerator(pw, pd) {
  ctx.fillStyle = '#d97706';
  ctx.fillRect(-pw / 2, -pd / 2, pw, pd);
  ctx.fillStyle = '#78350f';
  ctx.fillRect(-pw * 0.3, -pd * 0.3, pw * 0.6, pd * 0.6);
}

function drawTransformer(pw, pd) {
  ctx.fillStyle = '#047857';
  ctx.fillRect(-pw / 2, -pd / 2, pw, pd);
  ctx.strokeStyle = '#10b981';
  ctx.strokeRect(-pw / 2 + 1, -pd / 2 + 1, pw - 2, pd - 2);
}

function drawWaterTank(pw, pd) {
  const r = Math.min(pw, pd) / 2;
  const grad = ctx.createRadialGradient(-r * 0.3, -r * 0.3, 1, 0, 0, r);
  grad.addColorStop(0, '#e0f2fe');
  grad.addColorStop(0.6, '#0284c7');
  grad.addColorStop(1, '#0369a1');
  ctx.fillStyle = grad;
  ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = '#ffffff'; ctx.stroke();
}

function drawCellTower(pw, pd) {
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(-pw / 2, -pd / 2); ctx.lineTo(pw / 2, pd / 2);
  ctx.moveTo(pw / 2, -pd / 2); ctx.lineTo(-pw / 2, pd / 2);
  ctx.stroke();
  ctx.fillStyle = '#ef4444';
  ctx.beginPath(); ctx.arc(0, 0, 3, 0, Math.PI * 2); ctx.fill();
}

function drawGuardHouse(pw, pd) {
  ctx.fillStyle = '#334155';
  ctx.fillRect(-pw / 2, -pd / 2, pw, pd);
  ctx.fillStyle = '#38bdf8';
  ctx.fillRect(-pw * 0.35, -pd * 0.35, pw * 0.7, pd * 0.7);
}

function drawBusStop(pw, pd) {
  ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
  ctx.fillRect(-pw / 2, -pd / 2, pw, pd);
  ctx.strokeStyle = '#38bdf8';
  ctx.strokeRect(-pw / 2, -pd / 2, pw, pd);
}

function drawBench(pw, pd) {
  ctx.fillStyle = '#854d0e';
  ctx.fillRect(-pw / 2, -pd / 2, pw, pd);
}

function drawStadium(pw, pd) {
  ctx.fillStyle = '#1e293b';
  ctx.beginPath();
  ctx.ellipse(0, 0, pw / 2, pd / 2, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.ellipse(0, 0, pw * 0.42, pd * 0.42, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(0, 0, pw * 0.32, pd * 0.32, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = '#2e7d32';
  ctx.beginPath();
  ctx.ellipse(0, 0, pw * 0.24, pd * 0.24, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawAssetLabel(pw, pd, item) {
  ctx.save();
  const fontSize = Math.max(9, Math.min(12, 10 * Math.sqrt(camera.zoom / 3)));
  ctx.font = `600 ${fontSize}px sans-serif`;

  const nameText = item.name;
  const dimText = `${item.w} × ${item.d} m`;

  const textWidth = Math.max(ctx.measureText(nameText).width, ctx.measureText(dimText).width);
  const badgeW = textWidth + 12;
  const badgeH = fontSize * 2.3 + 4;

  ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
  ctx.beginPath();
  ctx.roundRect(-badgeW / 2, -badgeH / 2, badgeW, badgeH, 4);
  ctx.fill();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.textAlign = 'center';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(nameText, 0, -fontSize * 0.3);
  ctx.fillStyle = '#38bdf8';
  ctx.font = `bold ${fontSize * 0.9}px monospace`;
  ctx.fillText(dimText, 0, fontSize * 0.9);

  ctx.restore();
}

// --------------------------------------------------------
// Dimension Lines & Resize Handles for Selected Asset
// --------------------------------------------------------
function drawSelectionAndDimensions(item) {
  const center = worldToScreen(item.x, item.y);
  const pw = item.w * camera.zoom;
  const pd = item.d * camera.zoom;

  ctx.save();
  ctx.translate(center.x, center.y);
  if (item.rot) {
    ctx.rotate((item.rot * Math.PI) / 180);
  }

  const offset = 14;

  // 1. Horizontal Width Dimension Line (Bottom)
  const yLine = pd / 2 + offset;
  ctx.strokeStyle = '#f97316';
  ctx.lineWidth = 1.5;

  ctx.beginPath();
  ctx.moveTo(-pw / 2, pd / 2 + 4); ctx.lineTo(-pw / 2, yLine + 6);
  ctx.moveTo(pw / 2, pd / 2 + 4); ctx.lineTo(pw / 2, yLine + 6);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(-pw / 2, yLine); ctx.lineTo(pw / 2, yLine);
  ctx.moveTo(-pw / 2 + 4, yLine - 3); ctx.lineTo(-pw / 2, yLine); ctx.lineTo(-pw / 2 + 4, yLine + 3);
  ctx.moveTo(pw / 2 - 4, yLine - 3); ctx.lineTo(pw / 2, yLine); ctx.lineTo(pw / 2 - 4, yLine + 3);
  ctx.stroke();

  ctx.fillStyle = '#f97316';
  ctx.beginPath();
  ctx.roundRect(-24, yLine - 8, 48, 16, 8);
  ctx.fill();
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 10px monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`${item.w} m`, 0, yLine);

  // 2. Vertical Depth Dimension Line (Right)
  const xLine = pw / 2 + offset;
  ctx.beginPath();
  ctx.moveTo(pw / 2 + 4, -pd / 2); ctx.lineTo(xLine + 6, -pd / 2);
  ctx.moveTo(pw / 2 + 4, pd / 2); ctx.lineTo(xLine + 6, pd / 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(xLine, -pd / 2); ctx.lineTo(xLine, pd / 2);
  ctx.moveTo(xLine - 3, -pd / 2 + 4); ctx.lineTo(xLine, -pd / 2); ctx.lineTo(xLine + 3, -pd / 2 + 4);
  ctx.moveTo(xLine - 3, pd / 2 - 4); ctx.lineTo(xLine, pd / 2); ctx.lineTo(xLine + 3, pd / 2 - 4);
  ctx.stroke();

  ctx.fillStyle = '#f97316';
  ctx.beginPath();
  ctx.roundRect(xLine - 24, -8, 48, 16, 8);
  ctx.fill();
  ctx.fillStyle = '#ffffff';
  ctx.fillText(`${item.d} m`, xLine, 0);

  // 3. Height Indicator (Top-Left Badge)
  if (item.h > 0) {
    ctx.fillStyle = '#0284c7';
    ctx.beginPath();
    ctx.roundRect(-pw / 2 - 32, -pd / 2 - 18, 56, 16, 4);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`H: ${item.h}m`, -pw / 2 - 4, -pd / 2 - 10);
  }

  // 4. Interactive Resize Handles (8 Points: Corners & Edges)
  const handles = [
    [-pw / 2, -pd / 2], [0, -pd / 2], [pw / 2, -pd / 2],
    [pw / 2, 0], [pw / 2, pd / 2], [0, pd / 2],
    [-pw / 2, pd / 2], [-pw / 2, 0]
  ];
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#0284c7';
  ctx.lineWidth = 1.5;
  handles.forEach(([hx, hy]) => {
    ctx.fillRect(hx - 3.5, hy - 3.5, 7, 7);
    ctx.strokeRect(hx - 3.5, hy - 3.5, 7, 7);
  });

  ctx.restore();
}

// --------------------------------------------------------
// Distance Measurement Ruler Drawing
// --------------------------------------------------------
function drawRulerMeasurement() {
  const s1 = worldToScreen(rulerStart.x, rulerStart.y);
  const s2 = worldToScreen(rulerCurrent.x, rulerCurrent.y);

  ctx.strokeStyle = '#f97316';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(s1.x, s1.y);
  ctx.lineTo(s2.x, s2.y);
  ctx.stroke();
  ctx.setLineDash([]);

  // End ticks
  ctx.fillStyle = '#f97316';
  ctx.beginPath();
  ctx.arc(s1.x, s1.y, 4, 0, Math.PI * 2);
  ctx.arc(s2.x, s2.y, 4, 0, Math.PI * 2);
  ctx.fill();

  // Distance Calculation
  const dist = Math.hypot(rulerCurrent.x - rulerStart.x, rulerCurrent.y - rulerStart.y);
  const midX = (s1.x + s2.x) / 2;
  const midY = (s1.y + s2.y) / 2;

  ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
  ctx.beginPath();
  ctx.roundRect(midX - 35, midY - 12, 70, 24, 6);
  ctx.fill();
  ctx.strokeStyle = '#f97316';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 11px monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`${dist.toFixed(1)} m`, midX, midY);
}

// ========================================================
// 6. SCALE BAR & MINIMAP
// ========================================================
function updateScaleBar() {
  const line = document.getElementById('scaleBarLine');
  const label = document.getElementById('scaleBarLabel');
  if (!line || !label) return;

  // Adapt scale bar to zoom level: 5m, 10m, 20m, 50m, 100m
  let targetMeters = 10;
  if (camera.zoom > 8) targetMeters = 5;
  else if (camera.zoom < 1.2) targetMeters = 50;
  else if (camera.zoom < 2.2) targetMeters = 20;

  const pixels = targetMeters * camera.zoom;
  line.style.width = `${Math.max(15, Math.round(pixels))}px`;
  label.innerText = `${targetMeters} m`;
}

function drawMinimap() {
  if (!minimapCtx || !minimapCanvas) return;
  const mw = minimapCanvas.width;
  const mh = minimapCanvas.height;

  minimapCtx.fillStyle = '#08100b';
  minimapCtx.fillRect(0, 0, mw, mh);

  if (assets.length === 0) return;

  let minX = -100, maxX = 100, minY = -100, maxY = 100;
  assets.forEach(a => {
    minX = Math.min(minX, a.x - a.w / 2);
    maxX = Math.max(maxX, a.x + a.w / 2);
    minY = Math.min(minY, a.y - a.d / 2);
    maxY = Math.max(maxY, a.y + a.d / 2);
  });

  const spanX = Math.max(80, (maxX - minX) * 1.25);
  const spanY = Math.max(60, (maxY - minY) * 1.25);
  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2;

  const mScale = Math.min(mw / spanX, mh / spanY);

  // Draw Asset Footprints on Minimap
  assets.forEach(a => {
    const mx = mw / 2 + (a.x - centerX) * mScale;
    const my = mh / 2 + (a.y - centerY) * mScale;
    const mwid = Math.max(2, a.w * mScale);
    const mdep = Math.max(2, a.d * mScale);

    minimapCtx.fillStyle = a.color || (a.h > 0 ? '#455a64' : '#263238');
    minimapCtx.fillRect(mx - mwid / 2, my - mdep / 2, mwid, mdep);
  });

  // Draw Viewport Frustum on Minimap
  const rect = canvas.getBoundingClientRect();
  const vTopLeft = screenToWorld(0, 0);
  const vBottomRight = screenToWorld(rect.width, rect.height);

  const vx1 = mw / 2 + (vTopLeft.x - centerX) * mScale;
  const vy1 = mh / 2 + (vTopLeft.y - centerY) * mScale;
  const vx2 = mw / 2 + (vBottomRight.x - centerX) * mScale;
  const vy2 = mh / 2 + (vBottomRight.y - centerY) * mScale;

  minimapCtx.strokeStyle = '#38bdf8';
  minimapCtx.lineWidth = 1.5;
  minimapCtx.strokeRect(vx1, vy1, vx2 - vx1, vy2 - vy1);
}

function toggleMinimap() {
  const mc = document.getElementById('minimapCanvas');
  if (mc) {
    mc.classList.toggle('hidden');
  }
}

// ========================================================
// 7. USER INTERACTION & CONTROLS
// ========================================================
function setupCanvasEvents() {
  canvas.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
  canvas.addEventListener('wheel', onWheel, { passive: false });

  // Minimap click to pan
  if (minimapCanvas) {
    minimapCanvas.addEventListener('click', (e) => {
      const rect = minimapCanvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      // Convert to world
      let minX = -100, maxX = 100, minY = -100, maxY = 100;
      assets.forEach(a => {
        minX = Math.min(minX, a.x - a.w / 2);
        maxX = Math.max(maxX, a.x + a.w / 2);
        minY = Math.min(minY, a.y - a.d / 2);
        maxY = Math.max(maxY, a.y + a.d / 2);
      });
      const spanX = Math.max(80, (maxX - minX) * 1.25);
      const spanY = Math.max(60, (maxY - minY) * 1.25);
      const centerX = (minX + maxX) / 2;
      const centerY = (minY + maxY) / 2;
      const mScale = Math.min(minimapCanvas.width / spanX, minimapCanvas.height / spanY);

      camera.x = centerX + (mx - minimapCanvas.width / 2) / mScale;
      camera.y = centerY + (my - minimapCanvas.height / 2) / mScale;
    });
  }

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

    if (e.key === 'z' || e.key === 'Z') {
      if (e.ctrlKey) {
        e.preventDefault();
        if (e.shiftKey) redoAction();
        else undoAction();
      }
    } else if (e.key === 'y' || e.key === 'Y') {
      if (e.ctrlKey) {
        e.preventDefault();
        redoAction();
      }
    } else if (e.key === 'r' || e.key === 'R') {
      rotateSelectedAsset();
    } else if (e.key === 'Delete' || e.key === 'Backspace') {
      deleteSelectedAsset();
    } else if (e.key === 'd' || e.key === 'D') {
      if (e.ctrlKey) {
        e.preventDefault();
        duplicateSelectedAsset();
      }
    } else if (e.key === 'Escape') {
      if (rulerMode) toggleRulerTool();
      selectedAssetIds.clear();
      updatePropertiesPanel();
      updateScheduleHighlight();
    } else if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.preventDefault();
      nudgeSelectedAssets(e.key, e.shiftKey ? 5 : 1);
    }
  });

  window.addEventListener('resize', () => {
    resizeCanvas();
  });
}

// Robust Hit Testing with minimum 10px screen padding for small objects
function findAssetAt(wx, wy) {
  for (let i = assets.length - 1; i >= 0; i--) {
    const a = assets[i];
    let dx = wx - a.x;
    let dy = wy - a.y;
    if (a.rot) {
      const rad = (-a.rot * Math.PI) / 180;
      const rx = dx * Math.cos(rad) - dy * Math.sin(rad);
      const ry = dx * Math.sin(rad) + dy * Math.cos(rad);
      dx = rx;
      dy = ry;
    }
    // Pad target size so small assets (lamps, benches, trees) are easily clickable
    const padW = Math.max(a.w / 2, 8 / camera.zoom);
    const padD = Math.max(a.d / 2, 8 / camera.zoom);

    if (Math.abs(dx) <= padW && Math.abs(dy) <= padD) {
      return a;
    }
  }
  return null;
}

function findResizeHandleAt(item, sx, sy) {
  const center = worldToScreen(item.x, item.y);
  const pw = item.w * camera.zoom;
  const pd = item.d * camera.zoom;

  let localX = sx - center.x;
  let localY = sy - center.y;
  if (item.rot) {
    const rad = (-item.rot * Math.PI) / 180;
    const rx = localX * Math.cos(rad) - localY * Math.sin(rad);
    const ry = localX * Math.sin(rad) + localY * Math.cos(rad);
    localX = rx;
    localY = ry;
  }

  const handlePositions = {
    nw: [-pw / 2, -pd / 2], n: [0, -pd / 2], ne: [pw / 2, -pd / 2],
    e: [pw / 2, 0], se: [pw / 2, pd / 2], s: [0, pd / 2],
    sw: [-pw / 2, pd / 2], w: [-pw / 2, 0]
  };

  for (const [name, [hx, hy]] of Object.entries(handlePositions)) {
    if (Math.hypot(localX - hx, localY - hy) <= 8) {
      return name;
    }
  }
  return null;
}

function onMouseDown(e) {
  const rect = canvas.getBoundingClientRect();
  const sx = e.clientX - rect.left;
  const sy = e.clientY - rect.top;
  const world = screenToWorld(sx, sy);

  // Ruler tool handling
  if (rulerMode) {
    if (!rulerStart) {
      rulerStart = world;
      rulerCurrent = world;
    } else {
      // Completed measurement
      rulerCurrent = world;
    }
    return;
  }

  if (e.button === 0) { // Left Click
    // Check if clicking resize handle on selected item
    if (selectedAssetIds.size === 1) {
      const selectedId = [...selectedAssetIds][0];
      const selectedAsset = assets.find(a => a.id === selectedId);
      if (selectedAsset) {
        const handle = findResizeHandleAt(selectedAsset, sx, sy);
        if (handle) {
          isResizing = true;
          resizeHandle = handle;
          initialResizeState = {
            w: selectedAsset.w,
            d: selectedAsset.d,
            x: selectedAsset.x,
            y: selectedAsset.y,
            startX: world.x,
            startY: world.y
          };
          pushHistoryState();
          return;
        }
      }
    }

    const hit = findAssetAt(world.x, world.y);
    if (hit) {
      if (e.shiftKey || e.ctrlKey) {
        // Multi-select toggle
        if (selectedAssetIds.has(hit.id)) selectedAssetIds.delete(hit.id);
        else selectedAssetIds.add(hit.id);
      } else {
        if (!selectedAssetIds.has(hit.id)) {
          selectedAssetIds.clear();
          selectedAssetIds.add(hit.id);
        }
      }

      isDraggingAsset = true;
      pushHistoryState();

      // Record offsets for all selected items
      assetDragOffsets.clear();
      selectedAssetIds.forEach(id => {
        const a = assets.find(item => item.id === id);
        if (a) {
          assetDragOffsets.set(id, { x: a.x - world.x, y: a.y - world.y });
        }
      });

      updatePropertiesPanel();
      updateScheduleHighlight();
    } else {
      if (!e.shiftKey && !e.ctrlKey) {
        selectedAssetIds.clear();
      }
      isPanning = true;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      updatePropertiesPanel();
      updateScheduleHighlight();
    }
  } else if (e.button === 1 || e.button === 2) { // Middle or Right click to pan
    isPanning = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
  }
}

function onMouseMove(e) {
  const rect = canvas.getBoundingClientRect();
  const sx = e.clientX - rect.left;
  const sy = e.clientY - rect.top;
  const world = screenToWorld(sx, sy);

  // Update coordinate text
  const coordText = document.getElementById('cursorCoordsText');
  if (coordText) {
    coordText.innerText = `${Math.round(world.x)}m, ${Math.round(world.y)}m`;
  }

  if (rulerMode && rulerStart) {
    rulerCurrent = world;
    return;
  }

  if (isResizing && selectedAssetIds.size === 1) {
    const asset = assets.find(a => a.id === [...selectedAssetIds][0]);
    if (asset && initialResizeState) {
      const dx = world.x - initialResizeState.startX;
      const dy = world.y - initialResizeState.startY;

      if (resizeHandle.includes('e')) asset.w = Math.max(2, Math.round(initialResizeState.w + dx * 2));
      if (resizeHandle.includes('w')) asset.w = Math.max(2, Math.round(initialResizeState.w - dx * 2));
      if (resizeHandle.includes('s')) asset.d = Math.max(2, Math.round(initialResizeState.d + dy * 2));
      if (resizeHandle.includes('n')) asset.d = Math.max(2, Math.round(initialResizeState.d - dy * 2));

      updatePropertiesPanel();
      updateScheduleTable();
    }
  } else if (isDraggingAsset && selectedAssetIds.size > 0) {
    selectedAssetIds.forEach(id => {
      const asset = assets.find(a => a.id === id);
      const offset = assetDragOffsets.get(id);
      if (asset && offset) {
        let newX = world.x + offset.x;
        let newY = world.y + offset.y;

        // Apply Snap to grid
        if (gridSnapMode > 0) {
          newX = Math.round(newX / gridSnapMode) * gridSnapMode;
          newY = Math.round(newY / gridSnapMode) * gridSnapMode;
        }

        asset.x = Math.round(newX);
        asset.y = Math.round(newY);
      }
    });
    updateScheduleTable();
    updatePropertiesPanel();
  } else if (isPanning) {
    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;
    camera.x -= dx / camera.zoom;
    camera.y -= dy / camera.zoom;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
  } else {
    // Hover detection & cursor updates
    if (selectedAssetIds.size === 1) {
      const selAsset = assets.find(a => a.id === [...selectedAssetIds][0]);
      if (selAsset) {
        const handle = findResizeHandleAt(selAsset, sx, sy);
        if (handle) {
          canvas.style.cursor = `${handle}-resize`;
          return;
        }
      }
    }

    const hit = findAssetAt(world.x, world.y);
    hoveredAssetId = hit ? hit.id : null;
    canvas.style.cursor = rulerMode ? 'crosshair' : (hit ? 'move' : 'grab');
  }
}

function onMouseUp() {
  isDraggingAsset = false;
  isPanning = false;
  isResizing = false;
  resizeHandle = null;
  initialResizeState = null;
}

function onWheel(e) {
  e.preventDefault();
  const rect = canvas.getBoundingClientRect();
  const sx = e.clientX - rect.left;
  const sy = e.clientY - rect.top;
  const mouseBefore = screenToWorld(sx, sy);

  const zoomFactor = e.deltaY < 0 ? 1.15 : 0.87;
  const newZoom = Math.max(0.4, Math.min(25, camera.zoom * zoomFactor));

  camera.zoom = newZoom;

  const mouseAfter = screenToWorld(sx, sy);
  camera.x += (mouseBefore.x - mouseAfter.x);
  camera.y += (mouseBefore.y - mouseAfter.y);

  const zoomText = document.getElementById('zoomLevelText');
  if (zoomText) {
    zoomText.innerText = `${Math.round(camera.zoom * 30)}%`;
  }
}

function nudgeSelectedAssets(key, step = 1) {
  if (selectedAssetIds.size === 0) return;
  pushHistoryState();

  let dx = 0, dy = 0;
  if (key === 'ArrowUp') dy = -step;
  if (key === 'ArrowDown') dy = step;
  if (key === 'ArrowLeft') dx = -step;
  if (key === 'ArrowRight') dx = step;

  selectedAssetIds.forEach(id => {
    const a = assets.find(item => item.id === id);
    if (a) {
      a.x += dx;
      a.y += dy;
    }
  });

  updatePropertiesPanel();
  updateScheduleTable();
}

// ========================================================
// 8. HEADER ACTIONS & ADVANCED TOOLS
// ========================================================
function rotateSelectedAsset() {
  if (selectedAssetIds.size === 0) return;
  pushHistoryState();
  selectedAssetIds.forEach(id => {
    const asset = assets.find(a => a.id === id);
    if (asset) {
      asset.rot = ((asset.rot || 0) + 90) % 360;
    }
  });
  updatePropertiesPanel();
}

function duplicateSelectedAsset() {
  if (selectedAssetIds.size === 0) return;
  pushHistoryState();
  const newSelected = new Set();
  selectedAssetIds.forEach(id => {
    const asset = assets.find(a => a.id === id);
    if (asset) {
      const clone = {
        ...asset,
        id: nextId++,
        x: asset.x + 8,
        y: asset.y + 8
      };
      assets.push(clone);
      newSelected.add(clone.id);
    }
  });
  selectedAssetIds = newSelected;
  updatePropertiesPanel();
  updateScheduleTable();
}

function deleteSelectedAsset() {
  if (selectedAssetIds.size === 0) return;
  pushHistoryState();
  assets = assets.filter(a => !selectedAssetIds.has(a.id));
  selectedAssetIds.clear();
  updatePropertiesPanel();
  updateScheduleTable();
}

function toggleGridSnap() {
  if (gridSnapMode === 1) gridSnapMode = 5;
  else if (gridSnapMode === 5) gridSnapMode = 0;
  else gridSnapMode = 1;

  const snapText = document.getElementById('snapText');
  if (snapText) {
    snapText.innerText = gridSnapMode === 0 ? 'Snap: Off' : `Snap: ${gridSnapMode}m`;
  }
}

function toggleRulerTool() {
  rulerMode = !rulerMode;
  rulerStart = null;
  rulerCurrent = null;

  const btn = document.getElementById('btnRuler');
  const badge = document.getElementById('modeStatusBadge');
  if (btn) {
    btn.className = rulerMode 
      ? 'px-2.5 py-1.5 rounded-lg bg-cyan-950/60 text-cyan-300 border border-cyan-500/40 font-medium flex items-center gap-1'
      : 'btn-header px-2.5 py-1.5 rounded-lg flex items-center gap-1';
  }
  if (badge) {
    badge.innerText = rulerMode ? 'Ruler Active (Click 2 points)' : 'Select Mode';
    badge.className = rulerMode ? 'text-amber-400 font-bold' : 'text-cyan-400 font-semibold';
  }
}

function toggleLabels() {
  showLabels = !showLabels;
  const btn = document.getElementById('btnLabels');
  const labelText = document.getElementById('labelStateText');
  if (showLabels) {
    btn.className = 'px-2.5 py-1.5 rounded-lg bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 font-medium flex items-center gap-1 transition';
    labelText.innerText = 'Labels: on';
  } else {
    btn.className = 'btn-header px-2.5 py-1.5 rounded-lg text-slate-400 flex items-center gap-1 transition';
    labelText.innerText = 'Labels: off';
  }
}

function fitView() {
  if (assets.length === 0) {
    camera.x = 0; camera.y = 0; camera.zoom = 3.5;
    return;
  }
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  assets.forEach(a => {
    minX = Math.min(minX, a.x - a.w / 2);
    maxX = Math.max(maxX, a.x + a.w / 2);
    minY = Math.min(minY, a.y - a.d / 2);
    maxY = Math.max(maxY, a.y + a.d / 2);
  });

  const spanW = Math.max(20, maxX - minX);
  const spanD = Math.max(20, maxY - minY);
  camera.x = (minX + maxX) / 2;
  camera.y = (minY + maxY) / 2;

  const rect = canvas.getBoundingClientRect();
  const zoomX = (rect.width * 0.82) / spanW;
  const zoomY = (rect.height * 0.82) / spanD;
  camera.zoom = Math.max(0.5, Math.min(10, Math.min(zoomX, zoomY)));

  const zoomText = document.getElementById('zoomLevelText');
  if (zoomText) zoomText.innerText = `${Math.round(camera.zoom * 30)}%`;
}

function clearCanvasPrompt() {
  if (assets.length === 0) return;
  if (confirm('Clear all assets from current masterplan?')) {
    pushHistoryState();
    assets = [];
    selectedAssetIds.clear();
    updatePropertiesPanel();
    updateScheduleTable();
  }
}

// --------------------------------------------------------
// Export & Save / Load Handlers
// --------------------------------------------------------
function toggleExportMenu() {
  const d = document.getElementById('exportDropdown');
  if (d) d.classList.toggle('hidden');
}

function closeExportMenu() {
  const d = document.getElementById('exportDropdown');
  if (d) d.classList.add('hidden');
}

function saveProjectJSON() {
  const data = {
    version: '1.2.0',
    title: 'ArchStudio AI Masterplan',
    timestamp: new Date().toISOString(),
    camera,
    assets
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.download = `ArchStudio_Masterplan_${new Date().toISOString().slice(0, 10)}.json`;
  a.href = url;
  a.click();
}

function triggerLoadJSON() {
  const fileIn = document.getElementById('fileInputJSON');
  if (fileIn) fileIn.click();
}

function loadProjectJSON(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (Array.isArray(data.assets)) {
        pushHistoryState();
        assets = data.assets;
        if (data.camera) camera = data.camera;
        selectedAssetIds.clear();
        fitView();
        updateScheduleTable();
        updatePropertiesPanel();
      }
    } catch (err) {
      alert('Error parsing JSON plan file: ' + err.message);
    }
  };
  reader.readAsText(file);
}

function exportScheduleCSV() {
  let csv = 'ID,Asset Name,Category,Width (m),Depth (m),Height (m),Footprint (m2),Est. Floors,Gross Floor Area (m2),Position X,Position Y\n';
  let totalFootprint = 0, totalGFA = 0;

  assets.forEach(a => {
    const fp = Math.round(a.w * a.d);
    const fl = Math.max(1, Math.round(a.h / 3.5));
    const gfa = (a.h > 0) ? fp * fl : fp;
    totalFootprint += fp;
    totalGFA += gfa;
    csv += `${a.id},"${a.name}","${a.category}",${a.w},${a.d},${a.h},${fp},${fl},${gfa},${a.x},${a.y}\n`;
  });

  csv += `\nTOTALS,,,,,,${totalFootprint},,${totalGFA},,\n`;

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.download = `Masterplan_Schedule_${new Date().toISOString().slice(0, 10)}.csv`;
  a.href = url;
  a.click();
}

function exportPlanPNG() {
  selectedAssetIds.clear();
  render();
  const link = document.createElement('a');
  link.download = `ArchStudio_Masterplan_${new Date().toISOString().slice(0, 10)}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

// ========================================================
// 9. PRESET LOADER
// ========================================================
function loadSelectedPreset() {
  const select = document.getElementById('presetSelect');
  const presetKey = select.value;
  if (!PRESETS[presetKey]) return;

  pushHistoryState();
  const template = PRESETS[presetKey]();
  assets = template.map(item => {
    const meta = ASSET_TYPE_MAP[item.type] || {};
    return {
      id: nextId++,
      type: item.type,
      name: meta.name || item.type,
      w: item.w || meta.w || 20,
      d: item.d || meta.d || 15,
      h: item.h !== undefined ? item.h : (meta.h !== undefined ? meta.h : 10),
      rot: item.rot || 0,
      roof: item.roof || meta.roof || 'flat_parapet',
      color: item.color || meta.color || '#455a64',
      rooftop: item.rooftop || meta.rooftop || [],
      category: meta.category || 'General',
      customDimLabel: item.customDimLabel,
      x: item.x,
      y: item.y
    };
  });

  selectedAssetIds.clear();
  fitView();
  updateScheduleTable();
  updatePropertiesPanel();
}

// ========================================================
// 10. PROPERTIES PANEL & INSPECTION
// ========================================================
function checkCollisions(asset) {
  if (asset.h === 0) return false; // Skip landscape/roads
  return assets.some(other => {
    if (other.id === asset.id || other.h === 0) return false;
    const overlapX = Math.abs(asset.x - other.x) < (asset.w + other.w) / 2;
    const overlapY = Math.abs(asset.y - other.y) < (asset.d + other.d) / 2;
    return overlapX && overlapY;
  });
}

function updatePropertiesPanel() {
  const noSelMsg = document.getElementById('noSelectionMessage');
  const form = document.getElementById('propertiesForm');
  const title = document.getElementById('propTitle');
  const catBadge = document.getElementById('propCategoryBadge');
  const overlapBadge = document.getElementById('overlapWarningBadge');
  const statusDot = document.getElementById('selectionStatusDot');

  if (selectedAssetIds.size === 0) {
    if (noSelMsg) noSelMsg.classList.remove('hidden');
    if (form) form.classList.add('hidden');
    if (title) title.innerText = 'Asset Inspector';
    if (catBadge) catBadge.innerText = 'None selected';
    if (overlapBadge) overlapBadge.classList.add('hidden');
    if (statusDot) statusDot.className = 'w-2.5 h-2.5 rounded-full bg-slate-500';
    return;
  }

  if (noSelMsg) noSelMsg.classList.add('hidden');
  if (form) form.classList.remove('hidden');
  if (statusDot) statusDot.className = 'w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse';

  if (selectedAssetIds.size > 1) {
    if (title) title.innerText = `${selectedAssetIds.size} Assets Selected`;
    if (catBadge) catBadge.innerText = 'Multiple';
    if (overlapBadge) overlapBadge.classList.add('hidden');
    return;
  }

  const assetId = [...selectedAssetIds][0];
  const asset = assets.find(a => a.id === assetId);
  if (!asset) return;

  if (title) title.innerText = asset.name;
  if (catBadge) catBadge.innerText = asset.category || 'Asset';

  // Overlap Warning
  const isOverlapping = checkCollisions(asset);
  if (overlapBadge) {
    overlapBadge.classList.toggle('hidden', !isOverlapping);
  }

  const footprint = Math.round(asset.w * asset.d);
  const perimeter = Math.round(2 * (asset.w + asset.d));
  const floorCount = Math.max(1, Math.round(asset.h / 3.5));
  const gfa = (asset.h > 0) ? footprint * floorCount : footprint;

  document.getElementById('propFootprint').innerText = `${footprint.toLocaleString()} m²`;
  document.getElementById('propPerimeter').innerText = `${perimeter.toLocaleString()} m`;
  document.getElementById('propFloors').innerText = (asset.h > 0) ? `${floorCount} Floors` : 'Ground';
  document.getElementById('propGFA').innerText = `${gfa.toLocaleString()} m²`;

  document.getElementById('propInputW').value = asset.w;
  document.getElementById('propInputD').value = asset.d;
  document.getElementById('propInputH').value = asset.h;
  document.getElementById('propInputX').value = asset.x;
  document.getElementById('propInputY').value = asset.y;
}

function updateSelectedDimensions() {
  if (selectedAssetIds.size !== 1) return;
  const asset = assets.find(a => a.id === [...selectedAssetIds][0]);
  if (!asset) return;

  const w = parseFloat(document.getElementById('propInputW').value);
  const d = parseFloat(document.getElementById('propInputD').value);
  const h = parseFloat(document.getElementById('propInputH').value);

  if (!isNaN(w) && w > 0) asset.w = Math.round(w);
  if (!isNaN(d) && d > 0) asset.d = Math.round(d);
  if (!isNaN(h) && h >= 0) asset.h = Math.round(h);

  updatePropertiesPanel();
  updateScheduleTable();
}

function updateSelectedPosition() {
  if (selectedAssetIds.size !== 1) return;
  const asset = assets.find(a => a.id === [...selectedAssetIds][0]);
  if (!asset) return;

  const x = parseFloat(document.getElementById('propInputX').value);
  const y = parseFloat(document.getElementById('propInputY').value);

  if (!isNaN(x)) asset.x = Math.round(x);
  if (!isNaN(y)) asset.y = Math.round(y);

  updateScheduleTable();
}

function setRotationAngle(angle) {
  if (selectedAssetIds.size === 0) return;
  pushHistoryState();
  selectedAssetIds.forEach(id => {
    const asset = assets.find(a => a.id === id);
    if (asset) asset.rot = angle;
  });
  updatePropertiesPanel();
}

// ========================================================
// 11. SCHEDULE TABLE
// ========================================================
let scheduleFilterQuery = '';

function filterScheduleTable(query) {
  scheduleFilterQuery = query.toLowerCase().trim();
  updateScheduleTable();
}

function updateScheduleTable() {
  const tbody = document.getElementById('scheduleTableBody');
  const countText = document.getElementById('scheduleRowCount');
  const assetCount = document.getElementById('assetCountText');
  const totalFootprint = document.getElementById('totalFootprintText');
  const totalGFA = document.getElementById('totalGFAText');

  if (!tbody) return;

  let sumFootprint = 0;
  let sumGFA = 0;

  tbody.innerHTML = '';
  assets.forEach(asset => {
    const fp = Math.round(asset.w * asset.d);
    const floors = Math.max(1, Math.round(asset.h / 3.5));
    const gfa = (asset.h > 0) ? fp * floors : fp;
    sumFootprint += fp;
    sumGFA += gfa;

    if (scheduleFilterQuery && !asset.name.toLowerCase().includes(scheduleFilterQuery)) {
      return;
    }

    const isSel = selectedAssetIds.has(asset.id);
    const tr = document.createElement('tr');
    tr.id = `sched-row-${asset.id}`;
    tr.className = `cursor-pointer hover:bg-[#1a2d1f] transition ${isSel ? 'bg-emerald-950/60 text-emerald-300 font-bold' : ''}`;
    tr.onclick = (e) => {
      if (e.shiftKey || e.ctrlKey) {
        if (selectedAssetIds.has(asset.id)) selectedAssetIds.delete(asset.id);
        else selectedAssetIds.add(asset.id);
      } else {
        selectedAssetIds.clear();
        selectedAssetIds.add(asset.id);
        camera.x = asset.x;
        camera.y = asset.y;
      }
      updatePropertiesPanel();
      updateScheduleHighlight();
    };

    tr.innerHTML = `
      <td class="py-1.5 px-2 truncate max-w-[140px]">${asset.name}</td>
      <td class="py-1.5 px-2 text-right text-slate-400 font-mono">${asset.w}×${asset.d}×${asset.h}</td>
    `;
    tbody.appendChild(tr);
  });

  if (countText) countText.innerText = `${assets.length} items`;
  if (assetCount) assetCount.innerText = assets.length;
  if (totalFootprint) totalFootprint.innerText = `${sumFootprint.toLocaleString()} m²`;
  if (totalGFA) totalGFA.innerText = `${sumGFA.toLocaleString()} m²`;
}

function updateScheduleHighlight() {
  document.querySelectorAll('#scheduleTableBody tr').forEach(tr => {
    tr.classList.remove('bg-emerald-950/60', 'text-emerald-300', 'font-bold');
  });
  selectedAssetIds.forEach(id => {
    const row = document.getElementById(`sched-row-${id}`);
    if (row) {
      row.classList.add('bg-emerald-950/60', 'text-emerald-300', 'font-bold');
      row.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

// ========================================================
// 12. LEFT SIDEBAR ASSET PALETTE
// ========================================================
function buildAssetPalette() {
  const container = document.getElementById('paletteCategoriesContainer');
  if (!container) return;

  const categoryTitles = {
    education: 'EDUCATION',
    health_civic: 'HEALTH & CIVIC',
    commercial: 'COMMERCIAL',
    residential: 'RESIDENTIAL',
    industrial: 'INDUSTRIAL',
    individual: 'INDIVIDUAL ITEMS',
    sports_landscape: 'SPORTS AND LANDSCAPE'
  };

  container.innerHTML = '';

  Object.entries(ASSET_CATALOG).forEach(([catKey, items]) => {
    const catDiv = document.createElement('div');
    catDiv.className = 'space-y-1.5';
    catDiv.setAttribute('data-category', catKey);

    const heading = document.createElement('h4');
    heading.className = 'text-[10px] font-bold text-slate-400 tracking-wider uppercase flex items-center justify-between';
    heading.innerHTML = `<span>${categoryTitles[catKey]}</span><span class="text-[9px] font-mono text-slate-500">${items.length}</span>`;
    catDiv.appendChild(heading);

    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-2 gap-1.5';

    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'asset-card rounded-lg p-2 flex flex-col items-center justify-between cursor-pointer';
      card.setAttribute('data-asset-name', item.name.toLowerCase());
      card.setAttribute('data-asset-type', item.type);
      card.title = `Add ${item.name} (${item.w}×${item.d}m)`;

      card.onclick = () => addAssetFromPalette(item);

      const miniCanvas = document.createElement('canvas');
      miniCanvas.width = 64;
      miniCanvas.height = 42;
      miniCanvas.className = 'rounded w-full h-10 mb-1';
      drawAssetThumbnail(miniCanvas, item);

      const label = document.createElement('span');
      label.className = 'text-[10px] font-medium text-slate-300 text-center truncate w-full leading-tight';
      label.innerText = item.name;

      card.appendChild(miniCanvas);
      card.appendChild(label);
      grid.appendChild(card);
    });

    catDiv.appendChild(grid);
    container.appendChild(catDiv);
  });
}

function drawAssetThumbnail(miniCanvas, item) {
  const mctx = miniCanvas.getContext('2d');
  mctx.fillStyle = '#0f1712';
  mctx.fillRect(0, 0, 64, 42);

  const maxDim = Math.max(item.w, item.d);
  const scale = 28 / maxDim;
  const pw = item.w * scale;
  const pd = item.d * scale;

  mctx.save();
  mctx.translate(32, 21);

  mctx.fillStyle = item.color || '#455a64';
  mctx.fillRect(-pw / 2, -pd / 2, pw, pd);
  mctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  mctx.strokeRect(-pw / 2, -pd / 2, pw, pd);

  if (item.roof === 'dome') {
    mctx.fillStyle = '#90caf9';
    mctx.beginPath();
    mctx.arc(0, 0, Math.min(pw, pd) * 0.35, 0, Math.PI * 2);
    mctx.fill();
  } else if (item.roof === 'barrel_vault') {
    mctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    mctx.beginPath();
    mctx.moveTo(-pw / 4, -pd / 2); mctx.lineTo(-pw / 4, pd / 2);
    mctx.moveTo(pw / 4, -pd / 2); mctx.lineTo(pw / 4, pd / 2);
    mctx.stroke();
  } else if (item.type === 'pool') {
    mctx.fillStyle = '#0288d1';
    mctx.fillRect(-pw / 2, -pd / 2, pw, pd);
  } else if (item.type === 'football_field') {
    mctx.fillStyle = '#2e7d32';
    mctx.fillRect(-pw / 2, -pd / 2, pw, pd);
    mctx.strokeStyle = '#ffffff';
    mctx.strokeRect(-pw / 2 + 1, -pd / 2 + 1, pw - 2, pd - 2);
  } else if (item.type === 'tree') {
    mctx.fillStyle = '#2e7d32';
    mctx.beginPath();
    mctx.arc(0, 0, Math.min(pw, pd) / 2, 0, Math.PI * 2);
    mctx.fill();
  } else if (item.type === 'lamp') {
    mctx.fillStyle = '#fef08a';
    mctx.beginPath(); mctx.arc(0, 0, 4, 0, Math.PI * 2); mctx.fill();
  }

  mctx.restore();
}

function addAssetFromPalette(item) {
  pushHistoryState();
  const newAsset = {
    id: nextId++,
    type: item.type,
    name: item.name,
    w: item.w,
    d: item.d,
    h: item.h,
    rot: 0,
    roof: item.roof,
    color: item.color,
    rooftop: item.rooftop || [],
    category: item.category,
    x: Math.round(camera.x),
    y: Math.round(camera.y)
  };
  assets.push(newAsset);
  selectedAssetIds.clear();
  selectedAssetIds.add(newAsset.id);
  updatePropertiesPanel();
  updateScheduleTable();
}

function filterAssetPalette(query) {
  const q = query.toLowerCase().trim();
  const cards = document.querySelectorAll('.asset-card');
  const catDivs = document.querySelectorAll('#paletteCategoriesContainer > div');
  const clearBtn = document.getElementById('btnClearSearch');

  if (clearBtn) clearBtn.classList.toggle('hidden', !q);

  cards.forEach(card => {
    const name = card.getAttribute('data-asset-name');
    const type = card.getAttribute('data-asset-type');
    const match = !q || name.includes(q) || type.includes(q);
    card.style.display = match ? 'flex' : 'none';
  });

  catDivs.forEach(div => {
    const visibleCards = div.querySelectorAll('.asset-card[style*="display: flex"], .asset-card:not([style*="display: none"])');
    div.style.display = (visibleCards.length > 0) ? 'block' : 'none';
  });
}

function clearSearchInput() {
  const input = document.getElementById('assetSearchInput');
  if (input) {
    input.value = '';
    filterAssetPalette('');
    input.focus();
  }
}

// ========================================================
// 13. INITIALIZATION
// ========================================================
window.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  // Close export dropdown when clicking outside
  window.addEventListener('click', (e) => {
    const exportMenu = document.getElementById('exportDropdown');
    const exportBtn = document.getElementById('btnExportMenu');
    if (exportMenu && !exportMenu.classList.contains('hidden')) {
      if (!exportMenu.contains(e.target) && !exportBtn.contains(e.target)) {
        exportMenu.classList.add('hidden');
      }
    }
  });

  resizeCanvas();
  setupCanvasEvents();
  buildAssetPalette();

  // Load default "Campus" preset
  loadSelectedPreset();

  // Start animated render loop
  requestAnimationFrame(render);
});
