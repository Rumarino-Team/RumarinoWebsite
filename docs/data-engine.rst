===========
Data Engine
===========

Overview
========

Rumarino Data Engine is a tool for automatic video annotation and tracking.
Its task is to redefine the way we annotated data for robots.
Intead of manually annotatiing data,The Data Engine uses the Segment Anything Model (SAM) 2 to automatically segment objects in videos, and then tracks them across frames using CoTracker.



How to use it:
==============

1. Training Yolo models. Select the video data, annotated frames with the help of AI models.
2. Train Yolo models on the annotated data.
3. Use the trained Yolo models to automatically annotate new videos, 
4. Use your optimized model in inference in your robot.




How we do it:
==============

We made a video annotation backend that uses SAM 2 and CoTracker both state of the art mdoels  for segmenting
and tracking objects in videos.



What this means?

Dont depend on multiple annotators to annotate your thousands of videos, frames. Reduce hours of work
to minutes. Focus on training your models and not annotating data.


Pick a video, select the objects you want to track and let the Data Engine do the rest. It will automatically segment the objects in the first frame, and then track them across the video, giving you a complete annotation of the video in minutes.



Use it in combination with Tools like Ultralytics:

[Embed images of ultralytics]




Embed in Here a Video of the Data Engine in action:



Installation & Setup
====================

**Prerequisites**

- Python 3.12+
- Node.js / Bun (for frontend)
- Rust toolchain (for Tauri desktop builds)

**Backend Setup**

1. Clone with submodules::

    git clone --recursive https://github.com/Rumarino-Team/data-engine.git
    cd data-engine

2. Create Python virtual environment::

    python3.12 -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate

3. Install SAM 2::

    cd sam2
    pip install -e ".[notebooks]"
    cd ..

4. Install Data Engine dependencies::

    pip install -r requirements.txt

5. Run the backend::

    fastapi dev backend/api.py

   Backend will be available at ``http://localhost:8000``

**Frontend Setup (Web)**

1. Go to frontend directory::

    cd frontend-ng/data-engine

2. Install dependencies::

    bun install  # or npm install

3. Start development server::

    bun run start

   Access at ``http://localhost:4200``

