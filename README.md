# RUMarino Website

Official website for RUMarino (Underwater Robotics Research Team) featuring the autonomy stack documentation, team information, and project showcase.

Built with **Next.js**, **Tailwind CSS**, **TypeScript**, and **Sphinx Documentation**.

---

## Quick Start

### Installation

1. **Clone the repository**

```sh
git clone https://github.com/Rumarino-Team/RumarinoWebsite.git

cd RumarinoWebsite

npm install


pip install -r docs/requirements.txt
```

### Development Server

Start the development server with automatic Sphinx documentation compilation:

```bash
npm run dev
```

**Note**: The first run will build Sphinx documentation before starting the Next.js server. This may take 1-2 minutes.

---

##  Documentation

### Building Sphinx Documentation

Build the documentation manually:

```bash
npm run docs:build
```
**Alternative commands:**

```bash
# Build Sphinx only (outputs to docs/_build/html)
npm run docs:sphinx

# Copy docs to public folder
npm run docs:copy

# Watch for changes and rebuild (for active development)
npm run dev:concurrent
```
