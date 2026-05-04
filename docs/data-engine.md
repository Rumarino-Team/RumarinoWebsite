# Data Engine - Complete Documentation

## Overview

**Data Engine** is a complete data annotation and tracking system designed specifically for underwater robotics research. It combines advanced computer vision models — Meta's SAM 2 for segmentation and CoTracker for point tracking — with an intuitive web interface to enable efficient annotation workflows.

### Key Features

- 🎬 **Video Object Segmentation** — Using Meta's SAM 2 (Segment Anything Model 2) for automatic object detection
- 🎯 **Point Tracking** — CoTracker integration for automatic object tracking across video frames
- 🖥️ **Desktop Application** — Tauri desktop frontend for standalone cross-platform deployment
- 🧠 **AI-Powered Labeling** — Foundation models enable faster, more accurate annotations
- 🔄 **Real-time Streaming** — Live tracking and segmentation capabilities
- 📊 **Job Management** — Queue-based processing system with status tracking
- 💾 **Session Management** — Interactive workflows with history and undo/redo support

---

## Architecture

The Data Engine uses a modern full-stack architecture optimized for data annotation workflows:

### Backend (Python FastAPI)

The backend provides a robust REST API with the following capabilities:

- **Video Processing**: Frame extraction, caching, and streaming
- **SAM 2 Integration**: Automatic object segmentation
- **CoTracker Integration**: Point-based object tracking
- **Job Queue System**: Asynchronous task processing
- **Session Management**: User state and annotation history
- **Guidance System**: Interactive refinement of segmentations
- **Results Caching**: Efficient result storage and retrieval

### Frontend (Angular)

Modern web interface featuring:

- Real-time video preview with annotations
- Interactive tracking interface
- Segmentation mask overlay and editing
- Job status monitoring
- Responsive design for desktop and tablet

### Desktop Application (Tauri)

Cross-platform desktop wrapper providing:

- Standalone deployment without web server
- Native file system access
- System integration
- Offline-first architecture

### C++ Interface Layer

Performance-critical components:

- System utilities
- Backend integration
- Optimized processing pipelines

---

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- **Python 3.12+** (tested and developed on 3.12.12)
- **Node.js 18+** or **Bun 1.0+** (for frontend)
- **Rust toolchain** (for Tauri desktop builds - only needed for desktop app)
- **Git** with submodule support

### Quick Start - Backend + Web Frontend

#### 1. Clone Repository

```bash
# Clone with submodules (important for SAM 2)
git clone --recursive https://github.com/Rumarino-Team/data-engine.git
cd data-engine
```

#### 2. Set Up Python Environment

```bash
# Create virtual environment
python3.12 -m venv venv

# Activate environment
source venv/bin/activate
# On Windows: venv\Scripts\activate
```

#### 3. Install SAM 2 Foundation Model

```bash
cd sam2
pip install -e ".[notebooks]"
cd ..
```

#### 4. Install Data Engine Dependencies

```bash
pip install -r requirements.txt
```

#### 5. Run Backend API

```bash
fastapi dev backend/api.py
```

Backend will be available at: `http://localhost:8000`

#### 6. In another terminal, run Frontend

```bash
cd frontend-ng/data-engine
bun install  # or npm install
bun run start
```

Frontend will be available at: `http://localhost:4200`

### Desktop Application Setup

#### Prerequisites for Desktop

1. **Install Rust**:
   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

2. **Install OS-specific dependencies**:
   - **macOS**: Xcode Command Line Tools (`xcode-select --install`)
   - **Linux**: See [Tauri docs](https://tauri.app/v1/guides/getting-started/prerequisites/)
   - **Windows**: Visual Studio Build Tools

#### Build & Run Desktop

```bash
cd frontend-ng/data-engine

# Install dependencies
bun install

# Run in development mode
bun run tauri:dev

# Build production binary
bun run tauri:build
```

**Important**: The Tauri app does not bundle the Python backend - you must run it separately!

---

## Core Concepts

### Video Processing Pipeline

1. **Upload** → Video file ingestion with validation
2. **Extract** → Frame extraction and preprocessing
3. **Cache** → Efficient frame caching system
4. **Process** → Segmentation and tracking
5. **Annotate** → User refinement and validation
6. **Export** → Results export in multiple formats

### Segmentation (SAM 2)

- **Automatic**: Run on all frames automatically
- **Interactive**: Click to refine segmentation
- **Streaming**: Process frames as video plays
- **Guided**: Use point prompts for steering model

### Tracking (CoTracker)

- **Point-based**: Track user-selected points
- **Automatic**: Propagate across frames
- **Bidirectional**: Forward and backward tracking
- **Refinement**: Adjust tracking with guidance

### Job Management

Jobs are assigned a unique ID and can be:

- **Queued** → Waiting for processing
- **Running** → Currently processing
- **Completed** → Ready for download
- **Failed** → Error during processing

---

## API Reference

### Base URL

```
http://localhost:8000
```

### Video Endpoints

#### Upload Video
```
POST /video/upload
Content-Type: multipart/form-data

Parameters:
  - file: Video file (MP4, MOV, AVI, etc.)

Response:
  {
    "video_id": "uuid",
    "filename": "example.mp4",
    "duration": 120.5,
    "fps": 30,
    "frame_count": 3615
  }
```

#### Get Video Metadata
```
GET /video/{video_id}

Response:
  {
    "video_id": "uuid",
    "filename": "example.mp4",
    "duration": 120.5,
    "fps": 30,
    "frame_count": 3615,
    "width": 1920,
    "height": 1080
  }
```

#### Get Frames
```
GET /video/{video_id}/frames?start=0&end=100

Response:
  [
    {
      "frame_id": 0,
      "timestamp": 0.0,
      "data": "base64_encoded_image_data"
    },
    ...
  ]
```

### Tracking Endpoints

#### Start Tracking Session
```
POST /tracking/start
Content-Type: application/json

{
  "video_id": "uuid",
  "model": "cotracker"
}

Response:
  {
    "session_id": "uuid",
    "video_id": "uuid",
    "model": "cotracker",
    "created_at": "2024-05-04T10:00:00Z"
  }
```

#### Track Points
```
POST /tracking/track
Content-Type: application/json

{
  "session_id": "uuid",
  "frame_id": 0,
  "points": [
    {"x": 100, "y": 200},
    {"x": 300, "y": 400}
  ]
}

Response:
  {
    "frame_id": 0,
    "points": [
      {"x": 100, "y": 200},
      {"x": 300, "y": 400}
    ],
    "confidence": 0.95,
    "tracked_frames": 50
  }
```

#### Get Tracking Results
```
GET /tracking/{session_id}/results

Response:
  {
    "session_id": "uuid",
    "total_frames": 3615,
    "points": [
      {
        "point_id": 0,
        "tracks": [
          {"frame": 0, "x": 100, "y": 200, "confidence": 0.98},
          {"frame": 1, "x": 102, "y": 198, "confidence": 0.97},
          ...
        ]
      }
    ]
  }
```

### Segmentation Endpoints

#### Run Segmentation
```
POST /segmentation/segment
Content-Type: application/json

{
  "video_id": "uuid",
  "frames": [0, 10, 20, 30],
  "prompts": [
    {"x": 100, "y": 200},
    {"x": 300, "y": 400}
  ]
}

Response:
  {
    "job_id": "uuid",
    "status": "processing",
    "progress": 0.25,
    "estimated_time": 45
  }
```

#### Get Segmentation Results
```
GET /segmentation/{job_id}/results

Response:
  {
    "job_id": "uuid",
    "status": "completed",
    "masks": [
      {
        "frame_id": 0,
        "mask": "base64_encoded_mask",
        "confidence": 0.94
      },
      ...
    ]
  }
```

---

## Testing

### Backend Tests

Run the comprehensive test suite:

```bash
source venv/bin/activate
python3 backend/tests/tester.py
```

**Test Coverage**:
- API endpoint validation
- Video processing pipeline
- Tracking accuracy
- Segmentation quality
- Job queue management
- Error handling

Results and logs will be saved to `backend/tests/`

### Manual API Testing

Use your preferred HTTP client:

```bash
# Using curl
curl -X POST http://localhost:8000/video/upload \
  -F "file=@example.mp4"

# Using httpie
http -f POST localhost:8000/video/upload file@example.mp4

# Using Python requests
python3 -c "
import requests
with open('example.mp4', 'rb') as f:
    response = requests.post(
        'http://localhost:8000/video/upload',
        files={'file': f}
    )
print(response.json())
"
```

---

## Configuration

### Backend Configuration

Edit `backend/core/config.py`:

```python
# Model paths
SAM2_MODEL_PATH = "path/to/sam2/model"
COTRACKER_MODEL_PATH = "path/to/cotracker/model"

# Processing parameters
MAX_FRAME_CACHE = 1000
BATCH_PROCESS_SIZE = 32
TIMEOUT_SECONDS = 300

# API settings
API_HOST = "0.0.0.0"
API_PORT = 8000
DEBUG = False
```

### Environment Variables

```bash
# Backend
export BACKEND_URL="http://localhost:8000"
export MODEL_CACHE_DIR="~/.cache/models"
export MAX_VIDEO_SIZE_MB=5000
export LOG_LEVEL="INFO"

# Frontend
export BACKEND_API_URL="http://localhost:8000"
export ENVIRONMENT="development"
```

### Frontend Configuration

Edit `frontend-ng/data-engine/src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000',
  maxVideoSize: 5000, // MB
  supportedFormats: ['mp4', 'mov', 'avi'],
};
```

---

## Deployment

### Docker

Build and run using Docker:

```bash
# Build image
docker build -t data-engine:latest .

# Run container
docker run -p 8000:8000 \
  -v $(pwd)/data:/app/data \
  -v $(pwd)/models:/root/.cache/models \
  data-engine:latest
```

### Docker Compose

For full stack deployment:

```yaml
version: '3.8'

services:
  backend:
    build:
      context: .
      dockerfile: Dockerfile.backend
    ports:
      - "8000:8000"
    volumes:
      - ./data:/app/data
      - model_cache:/root/.cache/models
    environment:
      - LOG_LEVEL=INFO

  frontend:
    build:
      context: ./frontend-ng/data-engine
      dockerfile: Dockerfile
    ports:
      - "4200:4200"
    depends_on:
      - backend

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf

volumes:
  model_cache:
```

### Desktop Distribution

Build standalone desktop application:

```bash
cd frontend-ng/data-engine
bun run tauri:build
```

Binary will be in `src-tauri/target/release/`

Supported platforms:
- **macOS** (Intel & Apple Silicon)
- **Linux** (AppImage)
- **Windows** (MSI installer)

---

## Development Guide

### Project Structure

```
data-engine/
├── backend/
│   ├── api.py                 # Main FastAPI application
│   ├── core/
│   │   ├── config.py         # Configuration management
│   │   ├── jobs.py           # Job queue system
│   │   ├── runtime.py        # Runtime management
│   │   └── state.py          # State management
│   ├── routers/
│   │   ├── jobs.py           # Job endpoints
│   │   ├── video.py          # Video endpoints
│   │   ├── tracking.py       # Tracking endpoints
│   │   └── root.py           # Root endpoints
│   ├── schemas/              # Pydantic data models
│   ├── tracking/             # Tracking logic
│   │   ├── service.py        # Tracking service
│   │   ├── guidance.py       # User guidance
│   │   └── results.py        # Result management
│   ├── video/                # Video processing
│   │   ├── service.py        # Video service
│   │   ├── io.py             # File I/O
│   │   └── masks.py          # Mask processing
│   └── tests/                # Test suite
│
├── frontend-ng/data-engine/
│   ├── src/
│   │   ├── app/
│   │   │   ├── app.component.ts
│   │   │   ├── services/     # API services
│   │   │   └── video-masker/ # Video annotation component
│   │   └── styles/           # Global styles
│   └── src-tauri/
│       ├── src/              # Rust code
│       └── tauri.conf.json   # Configuration
│
├── backend-interface-cpp/    # C++ integration
├── sam2/                      # SAM 2 submodule
└── README.md
```

### Adding Features

#### New API Endpoint

1. Create router file in `backend/routers/`:

```python
# backend/routers/custom.py
from fastapi import APIRouter, HTTPException
from ..schemas.custom import CustomRequest, CustomResponse

router = APIRouter(prefix="/custom", tags=["custom"])

@router.post("/process")
async def process(request: CustomRequest) -> CustomResponse:
    # Your logic here
    return CustomResponse(...)
```

2. Add to main API:

```python
# backend/api.py
from .routers import custom

app.include_router(custom.router)
```

#### Frontend Component

1. Create component:

```bash
ng generate component components/my-component
```

2. Use service to call API:

```typescript
// services/backend.service.ts
export class BackendService {
  processData(data: any) {
    return this.http.post('/custom/process', data);
  }
}
```

### Running Tests

```bash
# Python tests
python3 backend/tests/tester.py

# Frontend tests
cd frontend-ng/data-engine
bun run test
```

---

## Troubleshooting

### Backend Issues

#### Backend won't start
```bash
# Check Python version
python3 --version  # Should be 3.12+

# Verify dependencies
pip list | grep fastapi

# Check port availability
lsof -i :8000

# View full error
fastapi dev backend/api.py --log-level debug
```

#### SAM 2 Model Download Fails
```bash
# Check internet connection
ping huggingface.co

# Check disk space
df -h

# Manual download
python3 -c "from sam2.build_sam import build_sam2; build_sam2('vit_l')"

# Set custom cache directory
export HF_HOME=/path/to/cache
```

#### Out of Memory Errors
```bash
# Reduce batch size in config
BATCH_PROCESS_SIZE = 8  # Default 32

# Process frames one at a time
USE_STREAMING_MODE = True
```

### Frontend Issues

#### Frontend can't connect to backend
```bash
# Check if backend is running
curl http://localhost:8000/docs

# Check CORS settings in backend/api.py
# Should include frontend origin

# Check network tab in browser DevTools
# Look for failed API requests

# Use backend URL override in UI
# Top bar has "Backend URL" input
```

#### Build fails
```bash
# Clear node_modules and rebuild
rm -rf node_modules
bun install

# Clear build cache
rm -rf dist/

# Check Node version
node --version  # Should be 18+
```

### Desktop Application Issues

#### Tauri build fails on macOS
```bash
# Install Xcode Command Line Tools
xcode-select --install

# Update Rust
rustup update
```

#### Can't find Python backend from desktop app
```bash
# Desktop app doesn't bundle Python
# Must run backend separately: fastapi dev backend/api.py

# On some systems, use full path:
# /usr/local/bin/python3 -m fastapi dev backend/api.py
```

---

## Performance Optimization

### Video Processing

- **Batch processing**: Process multiple frames simultaneously
- **Frame caching**: Skip reprocessing cached frames
- **Streaming**: Process as video plays instead of all at once
- **Resolution**: Process at optimal resolution (not unnecessarily large)

### Model Inference

- **GPU acceleration**: Ensure CUDA is available for SAM 2
- **Model optimization**: Use TorchScript for faster inference
- **Batch predictions**: Group predictions when possible

### Database

- **Connection pooling**: Reduce connection overhead
- **Query optimization**: Use indexes on frequently queried fields
- **Result caching**: Cache common queries

---

## Contributing

We welcome contributions! To contribute:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/your-feature`
3. **Commit** changes: `git commit -am 'Add feature'`
4. **Push** to branch: `git push origin feature/your-feature`
5. **Submit** a Pull Request

### Code Style

- Python: Follow PEP 8 (use `black` for formatting)
- TypeScript: Use ESLint config provided
- C++: Follow LLVM style guide

### Before Submitting PR

```bash
# Python
black backend/
flake8 backend/

# TypeScript
npm run lint
npm run build

# Run tests
python3 backend/tests/tester.py
```

---

## License

Data Engine is part of the RUMarino project and is available under the MIT License.

---

## Support

- 📖 [Documentation](http://localhost:9003/autonomy-docs/data-engine.html)
- 🐛 [Report Issues](https://github.com/Rumarino-Team/data-engine/issues)
- 💬 [Discussions](https://github.com/Rumarino-Team/data-engine/discussions)
- 👥 [RUMarino Team](https://rumarino.org)
