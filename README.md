
# 🤖 AI Text Detector - Frontend

<div align="center">

A **production-ready** React.js frontend for detecting AI-generated text with advanced analysis and reporting.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=flat&logo=vite)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Production--Ready-brightgreen?style=flat)](#)

[🚀 Getting Started](#-installation) • [📚 Documentation](#-pages) • [🔌 API](#-api-endpoints) • [🎯 Features](#-features)

</div>

---

## ✨ Features

### 📝 Text Detection
- Paste text or upload files (TXT, PDF, DOCX)
- Real-time AI/Human verdict with confidence scores
- Minimum 20 words for analysis

### 📦 Batch Processing
- Process 20+ documents simultaneously
- Progress tracking with real-time updates
- Summary statistics and export options

### 🔄 Document Comparison
- Side-by-side comparison interface
- Text and file upload modes
- Similarity percentage and verdict comparison

### 📊 Advanced Analysis
- 4-model ensemble: Statistical, RoBERTa, Zero-Shot, Watermark
- Sentence-level AI content highlighting
- SHAP explainability (which words triggered detection)

### 📈 Analytics Dashboard
- Real-time statistics and metrics
- AI vs Human detection trends
- Confidence score distributions

### 📋 Submission History
- Track all past analyses with timestamps
- Filterable and sortable table
- Color-coded results for quick scanning

### 🎨 Modern UI
- Clean, minimalist light theme design
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and transitions

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18+ | UI Framework |
| **Vite** | 5+ | Build tool & Dev server |
| **React Router** | v6 | Page routing |
| **Axios** | 1+ | HTTP client |
| **React Hot Toast** | 2+ | Notifications |
| **Lucide React** | Latest | Icons |
| **Recharts** | 2+ | Charts & Analytics |

---

## 📋 Project Structure

```
src/
├── api/
│   └── detector.js              📡 17 API endpoints
├── components/
│   └── Navbar.jsx               🧭 Navigation + Health check
├── pages/
│   ├── Home.jsx                 🏠 Detection interface
│   ├── Compare.jsx              🔄 Comparison tool
│   ├── Batch.jsx                📦 Batch processor
│   ├── Dashboard.jsx            📊 Analytics
│   └── History.jsx              📋 Submissions log
├── App.jsx                      🎯 Router & config
├── main.jsx                     ⚡ Entry point
└── index.css                    🎨 Global styles
```

---

## 🚀 Installation

### Prerequisites
- **Node.js** 16+ and **npm/yarn**
- **Backend API** running at `http://localhost:8000`

### Quick Start

```bash
# 1️⃣ Clone the repository
git clone https://github.com/PremKrGuptaOp/Ai-Text-Generated-Detector.git
cd "App For FY"

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start dev server
npm run dev
```

**Frontend available at:** `http://localhost:3000`

### Production Build

```bash
npm run build        # Build for production
npm run preview      # Preview the build
```

---

## 🔌 API Endpoints

### Detection Operations
```
POST  /detect                Detection analysis
POST  /detect/sentences      Sentence-level breakdown
POST  /detect/file           Single file upload
POST  /detect/batch          Multiple files batch processing
```

### Advanced Features
```
POST  /compare               Compare two texts
POST  /compare/files         Compare two uploaded files
POST  /analyze/advanced      Deep analysis
POST  /plagiarism            Plagiarism detection
```

### Reports & Data
```
POST  /explain               SHAP explainability
POST  /report                PDF report generation
POST  /export                Export as PDF/DOCX
GET   /history               Past submissions
GET   /stats                 Analytics data
GET   /health                Backend status
GET   /status/{jobId}        Job processing status
```

---

## 📄 Pages Overview

### 🏠 Home Page (`/`)
- **Text Input Mode**: Paste and analyze text
- **File Upload Mode**: Upload documents for analysis
- **Results Display**:
  - Main verdict card with confidence circle
  - 4-model score breakdown with progress bars
  - Sentence-level highlighting
  - Explainability insights
  - Download PDF reports

### 🔄 Compare Page (`/compare`)
- Dual input areas (text or files)
- Side-by-side verdict comparison
- Similarity percentage display
- Confidence comparison metrics

### 📦 Batch Page (`/batch`)
- Drag & drop upload interface
- File list with size display
- Processing progress bar (0-100%)
- Results summary table
- Download results option

### 📊 Dashboard Page (`/dashboard`)
- 4 stat cards (Total, AI%, Human%, Confidence)
- Detection trend charts
- Feature highlights and tips

### 📋 History Page (`/history`)
- Sortable/filterable submissions table
- 20 rows per page pagination
- Color-coded verdict badges
- Confidence color coding

---

## 🎨 Design System

### Color Palette
```
🔵 Primary Blue      #3b82f6
🟢 Success Green     #10b981
🔴 Error Red         #ef4444
🟡 Warning Amber     #f59e0b
⚪ Background        #ffffff
⚫ Text Dark         #1f2937
```

### Typography
- **Headings**: Bold, clear hierarchy
- **Body Text**: 16px for readability
- **Monospace**: Code blocks and examples

### Spacing & Layout
- **Padding**: Consistent 16-24px margins
- **Border Radius**: 8-12px for modern look
- **Shadows**: Subtle depth (0 1px 3px)
- **Responsive**: Mobile-first grid system

---

## 📱 Responsive Breakpoints

```
📱 Mobile    < 640px    Single column, full width
📱 Tablet    640-1024px 2-column layout
🖥️  Desktop   > 1024px   3-4 column layout
```

---

## ⚙️ Configuration

### Environment Setup

Create `.env` file in root:
```env
VITE_API_BASE_URL=http://localhost:8000
VITE_APP_NAME=AI Text Detector
VITE_DEBUG=false
```

### Backend URL

Edit `src/api/detector.js`:
```javascript
const API_BASE_URL = process.env.VITE_API_BASE_URL || 'http://localhost:8000'
```

---

## 📦 Dependencies

```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "react-router-dom": "^6.0.0",
  "axios": "^1.0.0",
  "react-hot-toast": "^2.0.0",
  "lucide-react": "latest",
  "recharts": "^2.0.0"
}
```

---

## 🔧 Development

### Available Commands

```bash
npm run dev       🚀 Start dev server (hot reload)
npm run build     📦 Build for production
npm run preview   👀 Preview production build
npm run lint      🔍 Lint code
```

### Development Tips

**Change Backend URL:**
```javascript
// src/api/detector.js
const API_BASE_URL = 'http://your-backend:8000'
```

**Customize Colors:**
Edit inline styles in components or create CSS variables.

**Add New Pages:**
1. Create `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`
3. Update navbar links

---

## 🐛 Troubleshooting

### ❌ Backend Connection Error
```
✅ Check backend running: http://localhost:8000
✅ Verify CORS settings
✅ Test /health endpoint
```

### ❌ Port Already in Use
```bash
npm run dev -- --port 3001
```

### ❌ Blank Page / React Not Rendering
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### ❌ File Upload Issues
- Check file size (< 10MB recommended)
- Verify format: .txt, .pdf, .docx
- Ensure backend has upload handlers

---

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Latest |
| Firefox | ✅ Latest |
| Safari  | ✅ Latest |
| Edge    | ✅ Latest |
| Mobile  | ✅ iOS Safari, Chrome |

---

## 📄 License

**MIT License** - Open source and free to use

---

## 👤 Author

<div align="center">

**Prem Kumar Gupta**

📧 [premkrgupta.op@gmail.com](mailto:premkrgupta.op@gmail.com)

🔗 [GitHub](https://github.com/PremKrGuptaOp) • [LinkedIn](https://linkedin.com) • [Portfolio](https://portfolio.com)

</div>

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. 🍴 **Fork** the repository
2. 🌿 **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 **Commit** changes (`git commit -m 'Add AmazingFeature'`)
4. 📤 **Push** to branch (`git push origin feature/AmazingFeature`)
5. 🔀 **Open** a Pull Request

---

## 📚 Documentation

- [API Docs](./docs/API.md) - Detailed endpoint documentation
- [Setup Guide](./SETUP.md) - Step-by-step installation
- [Architecture](./docs/ARCHITECTURE.md) - System design overview

---

## 🎓 Final Year Project

This is a comprehensive **AI Text Detection System** built as a final year project. The frontend is **production-ready** and can integrate with any backend API following the specified endpoint structure.

### Key Achievements
✅ Fully responsive design
✅ Real-time detection and analysis
✅ Advanced explainability features
✅ Batch processing capabilities
✅ Production-grade error handling
✅ Modern UI/UX design

---

## ⭐ Acknowledgments

- React & Vite communities
- FastAPI framework
- All contributors and testers

---

<div align="center">

**Made with ❤️ by Prem Kumar Gupta**

⭐ If you find this helpful, please star the repo!

[⬆ back to top](#-ai-text-detector---frontend)

</div>
# AI Text Detector - Frontend

A production-ready React.js frontend for detecting AI-generated text. Analyze whether text was written by humans or generated by AI models.

## Features

### Text Detection
- Paste text directly or upload files (TXT, PDF, DOCX)
- Real-time AI/Human verdict with confidence scores
- Minimum 20 words for analysis

### Batch Processing
- Analyze multiple documents at once
- Progress tracking and results summary
- Export capabilities

### Document Comparison
- Compare two documents side-by-side
- Text or file upload modes
- Similarity scoring and dual verdicts

### Advanced Analysis
- 4-model ensemble breakdown (Statistical, RoBERTa, Zero-Shot, Watermark)
- Sentence-level highlighting for AI-generated content
- Explainability showing influential words

### Analytics Dashboard
- Real-time detection statistics
- AI vs Human percentages
- Confidence metrics and trends

### Submission History
- Track all past analyses
- Filter and search submissions
- Color-coded results

### Modern UI
- Clean, minimalist light theme
- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions

## Tech Stack

- React 18
- Vite 5+ (dev server & build tool)
- React Router v6 (routing)
- Axios (API client)
- Inline CSS (styling)
- React Hot Toast (notifications)
- Lucide React (icons)
- Recharts (charts)

## Project Structure

```
src/
├── api/
│   └── detector.js              # All API functions (17 endpoints)
├── components/
│   └── Navbar.jsx               # Navigation with health check
├── pages/
│   ├── Home.jsx                 # Text & file detection
│   ├── Compare.jsx              # Document comparison
│   ├── Batch.jsx                # Batch processing
│   ├── Dashboard.jsx            # Analytics
│   └── History.jsx              # Submission history
├── App.jsx                      # Main app with routing
├── main.jsx                     # Entry point
└── index.css                    # Global styles
```

## Installation

### Prerequisites
- Node.js 16+ and npm/yarn
- Backend running at `http://localhost:8000`

### Setup

```bash
# Clone repository
git clone https://github.com/PremKrGuptaOp/Ai-Text-Generated-Detector.git
cd "App For FY"

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend runs at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## API Endpoints

### Detection
- `POST /detect` - Text detection
- `POST /detect/sentences` - Sentence-level analysis
- `POST /detect/file` - Single file detection
- `POST /detect/batch` - Batch processing

### Advanced Features
- `POST /compare` - Compare documents
- `POST /analyze/advanced` - Deep analysis
- `POST /plagiarism` - Plagiarism detection
- `POST /export` - Export results

### Data & Status
- `POST /explain` - SHAP explainability
- `POST /report` - Generate PDF report
- `GET /history` - Past submissions
- `GET /stats` - Analytics data
- `GET /health` - Backend health
- `GET /status/{jobId}` - Job status

## Configuration

Backend URL in `src/api/detector.js`:

```javascript
const API_BASE_URL = 'http://localhost:8000'
```

## Pages Overview

### Home Page
- Text or file input modes
- Real-time word counter
- Color-coded results (Red/Green)
- Model score breakdown
- Confidence display

### Compare Page
- Dual input areas
- Side-by-side comparison
- Similarity percentage
- Verdict comparison

### Batch Page
- Drag & drop upload
- Progress tracking
- Results table
- Summary statistics

### Dashboard
- Stat cards (Total, AI%, Human%, Confidence)
- Detection trends
- Feature highlights

### History
- Submissions table
- Pagination (20 per page)
- Sortable/filterable
- Color-coded badges

## Design Colors

- **Primary:** Blue (#3b82f6)
- **Success:** Green (#10b981)
- **Error:** Red (#ef4444)
- **Warning:** Amber (#f59e0b)
- **Background:** White (#ffffff)
- **Text:** Dark gray (#1f2937)

## Development

### Available Commands

```bash
npm run dev      # Start dev server with hot reload
npm run build    # Build for production
npm run preview  # Preview production build
```

## Troubleshooting

### Backend Connection Issues
- Ensure backend is running at `http://localhost:8000`
- Check browser console for CORS errors
- Verify `/health` endpoint works

### File Upload Issues
- Check file size (< 10MB recommended)
- Verify file format (TXT, PDF, DOCX)
- Ensure backend has upload handlers

### Build Issues
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Dependencies

- react 18+
- react-dom 18+
- react-router-dom 6+
- axios 1+
- react-hot-toast 2+
- lucide-react (latest)
- recharts 2+

## License

MIT License - Open source

## Author

**Prem Kumar Gupta**
- GitHub: [@PremKrGuptaOp](https://github.com/PremKrGuptaOp)
- Email: premkrgupta.op@gmail.com

## Contributing

Contributions welcome!

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

## Notes

This is a final year project. Frontend is production-ready and integrates with any backend following the specified API structure.

---

**Last Updated:** April 2026
# AI Text Detector - Frontend

A production-ready React.js frontend for detecting AI-generated text. Analyze whether text was written by humans or generated by AI models.

## Features

### Text Detection
- Paste text directly or upload files (TXT, PDF, DOCX)
- Real-time AI/Human verdict with confidence scores
- Minimum 20 words for analysis

### Batch Processing
- Analyze multiple documents at once
- Progress tracking
- Summary statistics

### Document Comparison
- Compare two documents side-by-side
- Text or file upload modes
- Similarity scoring

### Analytics Dashboard
- Real-time detection statistics
- AI vs Human percentages
- Confidence metrics

### Submission History
- Track past analyses
- Filter and sort submissions
- Color-coded results

### Modern UI
- Clean, minimalist light theme
- Fully responsive design
- Smooth animations
- Works on mobile, tablet, desktop

## Tech Stack

- React 18
- Vite 5+ (build tool)
- React Router v6 (routing)
- Axios (API calls)
- Inline CSS (styling)
- React Hot Toast (notifications)

## Project Structure

```
src/
├── api/
│   └── detector.js
├── components/
│   └── Navbar.jsx
├── pages/
│   ├── Home.jsx
│   ├── Compare.jsx
│   ├── Batch.jsx
│   ├── Dashboard.jsx
│   └── History.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

### Prerequisites
- Node.js 16+
- npm or yarn
- Backend running at http://localhost:8000

### Setup

1. Clone repository
```bash
git clone https://github.com/PremKrGuptaOp/Ai-Text-Generated-Detector.git
cd "App For FY"
```

2. Install dependencies
```bash
npm install
```

3. Start dev server
```bash
npm run dev
```

Frontend runs at http://localhost:3000

4. Build for production
```bash
npm run build
```

## API Endpoints

### Detection
- POST /detect - Text detection
- POST /detect/file - Single file analysis
- POST /detect/batch - Batch processing
- POST /compare - Compare texts

### Data
- GET /history - Past submissions
- GET /stats - Analytics data
- GET /health - Backend health

## Configuration

Backend URL in `src/api/detector.js`:
```javascript
const API_BASE_URL = 'http://localhost:8000'
```

## Pages

### Home
- Text or file input
- Real-time word counter
- Detection results with confidence
- Model breakdown

### Compare
- Side-by-side comparison
- Similarity percentage
- Dual verdict display

### Batch
- Drag and drop upload
- Progress tracking
- Results table

### Dashboard
- Summary statistics
- Detection metrics
- Trend analysis

### History
- Past submissions table
- Pagination
- Color-coded verdicts

## Design

### Colors
- Primary: Blue (#3b82f6)
- Success: Green (#10b981)
- Error: Red (#ef4444)
- Warning: Amber (#f59e0b)
- Background: White (#ffffff)
- Text: Dark gray (#1f2937)

### Layout
- Mobile first responsive
- 2-4 column grids
- Subtle shadows and transitions

## Development

### Available Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview build
npm run lint     # Lint code
```

## Troubleshooting

### Backend Connection Error
- Ensure backend runs at http://localhost:8000
- Check CORS settings
- Verify /health endpoint

### File Upload Issues
- Check file size (< 10MB recommended)
- Verify file format (TXT, PDF, DOCX)
- Ensure backend has upload handlers

### Rendering Issues
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Check browser console
- Verify Node modules installed

## Dependencies

- react 18+
- react-dom 18+
- react-router-dom 6+
- axios 1+
- react-hot-toast 2+
- lucide-react (latest)

## License

MIT License - Open source

## Author

Prem Kumar Gupta
- GitHub: https://github.com/PremKrGuptaOp
- Email: premkrgupta.op@gmail.com

## Contributing

Contributions welcome! Submit pull requests or create issues for bugs.

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

## Notes

This is a final year project. Frontend is production-ready and can integrate with any backend following the specified API structure.

---

Last Updated: April 2026
# 🤖 AI Text Detector - Frontend

A production-ready React.js frontend for an AI-Generated Text Detection System. Detect whether text was written by humans or generated by AI models with detailed analysis and explainability.

---

## ✨ Features

### 📝 Text Detection
- Paste text directly or upload files (.txt, .pdf, .docx)
- Real-time AI/Human verdict with confidence scores
- Minimum 20 words for accurate analysis

### 📦 Batch Processing
- Analyze multiple documents at once
- Progress tracking and results table
- Summary statistics and export options

### 🔄 Document Comparison
- Compare two documents side-by-side
- Text mode: Paste and compare
- File mode: Upload and analyze
- Similarity scoring and verdict comparison

### 📊 Detailed Analysis
- 4-model ensemble breakdown (Statistical, RoBERTa, Zero-Shot, Watermark)
- Sentence-level highlighting for AI-generated content
- Explainability: Shows which words influenced the detection decision

### 📈 Analytics Dashboard
- Real-time detection statistics
- AI vs Human written percentages
- Confidence trends and metrics

### 📋 Submission History
- Track all past analyses with timestamps
- Filter and sort submissions
- Color-coded verdicts and confidence scores

### 🎨 Modern UI
- Clean, minimalist light theme
- Fully responsive (mobile, tablet, desktop)
- Smooth transitions and hover effects
- Dark mode ready (toggle available)

---

## 🛠 Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite 5+ (fast development server)
- **Routing:** React Router v6
- **API Client:** Axios
- **Styling:** Inline CSS (no external build dependencies)
- **UI Components:** React Hot Toast (notifications), Lucide React (icons)
- **Charts:** Recharts (ready to integrate)

---

## 📋 Project Structure

```
src/
├── api/
│   └── detector.js          # All API call functions (17 endpoints)
├── components/
│   └── Navbar.jsx           # Navigation bar with health check
├── pages/
│   ├── Home.jsx             # Main detection page (text & file)
│   ├── Compare.jsx          # Document comparison
│   ├── Batch.jsx            # Batch upload processing
│   ├── Dashboard.jsx        # Analytics dashboard
│   └── History.jsx          # Submission history
├── App.jsx                  # Main app with routing
├── main.jsx                 # React entry point
└── index.css               # Global styles
```

---

## 🚀 Installation

### Prerequisites
- Node.js 16+ and npm/yarn installed
- Backend running at `http://localhost:8000`

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/PremKrGuptaOp/Ai-Text-Generated-Detector.git
   cd "App For FY"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   - Frontend will run at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```
   - Production build will be in the `dist/` folder

---

## 🔌 API Integration

The frontend expects a FastAPI backend running at `http://localhost:8000`

### Available Endpoints

**Detection**
- `POST /detect` - Detect AI-generated text
- `POST /detect/sentences` - Sentence-level analysis
- `POST /detect/file` - Upload single file for analysis
- `POST /detect/batch` - Batch file processing

**Advanced Features**
- `POST /explain` - SHAP explanability
- `POST /compare` - Compare two texts
- `POST /compare/files` - Compare uploaded files
- `POST /plagiarism` - Plagiarism detection
- `POST /analyze/advanced` - Deep analysis

**Reports & Data**
- `POST /export` - Export results as PDF/DOCX
- `POST /report` - Generate PDF report
- `GET /history` - Past submissions
- `GET /stats` - Analytics data
- `GET /health` - Backend health check
- `GET /status/{jobId}` - Processing status

---

## 🎯 Features Breakdown

### Home Page
- Switch between Text and File input modes
- Real-time word counter
- Color-coded results (Red for AI, Green for Human)
- Model score breakdown with progress bars
- "Analyze Again" button for quick retry

### Compare Page
- Dual textarea or file upload
- Side-by-side verdict comparison
- Content similarity percentage
- Confidence scores for each document

### Batch Page
- Drag & drop upload interface
- File list with size display
- Processing progress bar
- Results table with summary stats
- Download results option

### Dashboard
- Summary stat cards (Total, AI%, Human%, Avg Confidence)
- Info boxes with tips and features
- Responsive grid layout

### History
- Sortable/filterable submission table
- Pagination (20 rows per page)
- Color-coded verdict badges
- Confidence color coding

---

## 🎨 Design System

### Colors
- **Primary:** Blue (#3b82f6)
- **Success:** Green (#10b981)
- **Error:** Red (#ef4444)
- **Warning:** Amber (#f59e0b)
- **Background:** White (#ffffff) with subtle gradient
- **Text:** Dark Gray (#1f2937)

### Typography
- **Font:** System-ui, -apple-system, sans-serif
- **H1:** 2.5rem, 800 weight
- **H2:** 1.875rem, 700 weight
- **Body:** 0.95-1rem, 400-500 weight

### Spacing & Radius
- **Padding:** 2-4rem
- **Border Radius:** 8-16px
- **Shadows:** Subtle (0 1px 3px rgba)
- **Transitions:** 0.2-0.3s smooth

---

## 📱 Responsive Design

- **Mobile:** Full width, single column
- **Tablet:** 2-column grid where applicable
- **Desktop:** 3-4 column grids, optimized for readability

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```
VITE_API_BASE_URL=http://localhost:8000
VITE_APP_NAME=AI Text Detector
```

### Backend URL

To change the backend URL, edit `src/api/detector.js`:

```javascript
const API_BASE_URL = 'http://your-backend-url:8000'
```

---

## 📦 Dependencies

```json
{
  "react": "18+",
  "react-dom": "18+",
  "react-router-dom": "6+",
  "axios": "1+",
  "react-hot-toast": "2+",
  "lucide-react": "latest",
  "recharts": "2+"
}
```

---

## 🚦 Development

### Available Scripts

```bash
# Start dev server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 🐛 Troubleshooting

### Backend Connection Error
- Ensure FastAPI backend is running at `http://localhost:8000`
- Check browser console for CORS errors
- Verify backend health endpoint: `/health`

### File Upload Issues
- Check file size (recommended < 10MB)
- Verify file format (.txt, .pdf, .docx)
- Ensure backend has file upload handlers

### Blank Page / React Not Rendering
- Clear browser cache and refresh
- Check console for JavaScript errors
- Verify hot module reloading is working

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👤 Author

**Prem Kumar Gupta**
- GitHub: [@PremKrGuptaOp](https://github.com/PremKrGuptaOp)
- Email: premkrgupta.op@gmail.com

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Steps to contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🎓 Final Year Project

This is a comprehensive AI Text Detection System built as a final year project. The frontend is production-ready and can be integrated with any backend API following the specified endpoint structure.

---

## ⭐ Acknowledgments

- React and Vite communities for excellent documentation
- FastAPI for backend framework excellence
- All contributors and testers

---

**Last Updated:** April 2026
# AI Text Detector - Frontend

A production-ready React.js frontend for an AI-Generated Text Detection System. Detect whether text was written by humans or generated by AI models with detailed analysis and explainability.

## 🚀 Features

- **Text Detection**: Paste text directly or upload files (`.txt`, `.pdf`, `.docx`)
- **Batch Processing**: Analyze multiple files at once
- **Detailed Analysis**: 4-model ensemble breakdown (Statistical, RoBERTa, Zero-Shot, Watermark)
- **Sentence-Level Highlighting**: See which sentences are flagged as AI-generated
- **Explainability**: Shows which words influenced the detection decision
- **PDF Reports**: Download detailed detection reports
- **Analytics Dashboard**: View trends and statistics of all detections
- **Submission History**: Track all past analyses with filtering
- **Dark Mode UI**: Modern, professional dark theme
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling
- **Recharts** - Charts and analytics visualizations
- **Axios** - API requests
- **React Router DOM** - Page navigation
- **React Dropzone** - File upload handling
- **React Hot Toast** - Notifications
- **Lucide React** - Icons

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm/yarn
- Backend API running at `http://localhost:8000`

### Setup

1. **Clone or download the project**

```bash
cd "App For FY"
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

This will start the Vite dev server, typically at `http://localhost:3000`.

4. **Build for production**

```bash
npm run build
```

The production build will be created in the `dist/` folder.

## 📁 Project Structure

```
src/
├── api/
│   └── detector.js              # All API call functions
├── components/
│   ├── Navbar.jsx              # Navigation bar with health check
│   ├── TextInput.jsx           # Text input tab
│   ├── FileUpload.jsx          # Single file upload
│   ├── BatchUpload.jsx         # Multiple file upload
│   ├── ResultCard.jsx          # Detection result display
│   ├── ScoreBreakdown.jsx      # Model scores breakdown
│   ├── SentenceHighlight.jsx   # Sentence-level highlighting
│   ├── ExplainabilityCard.jsx  # SHAP explanations
│   └── HistoryTable.jsx        # Past submissions table
├── pages/
│   ├── Home.jsx                # Main detection page
│   ├── Dashboard.jsx           # Analytics dashboard
│   └── History.jsx             # Submission history
├── App.jsx                     # Main app with routing
├── main.jsx                    # React entry point
└── index.css                   # Tailwind imports
```

## 🔌 API Integration

All API calls are managed in `src/api/detector.js`. The base URL is configured to `http://localhost:8000`.

### Available Endpoints

- `POST /detect` - Main text detection
- `POST /detect/sentences` - Sentence-level analysis
- `POST /detect/file` - Single file detection
- `POST /detect/batch` - Multiple file batch detection
- `POST /explain` - SHAP explainability
- `POST /report` - Generate PDF report
- `GET /history` - Past submissions
- `GET /stats` - Analytics data
- `GET /health` - Backend health check

To change the backend URL, edit the `API_BASE_URL` in `src/api/detector.js`.

## 🎨 Design & Styling

- **Dark Theme**: Slate/Navy background with modern accents
- **Color Coding**:
  - `#ef4444` (Red) = AI Generated / High AI Score
  - `#22c55e` (Green) = Human Written / Low AI Score
  - `#eab308` (Yellow) = Uncertain (40-70% range)
  - `#3b82f6` (Blue) = Primary UI elements
- **Responsive**: Mobile-first design using TailwindCSS grid
- **Animations**: Smooth fade-in and slide-up effects
- **Loading States**: Spinner indicators on all async operations

## 📊 Pages Overview

### Home Page (`/`)
- Three tabs: Text Input, File Upload, Batch Upload
- Shows detailed detection results with:
  - Main verdict card with confidence circle
  - Model score breakdown with color-coded bars
  - Sentence-level highlighting with tooltips
  - Explainability card showing influential words
  - PDF download and analysis reset buttons

### Dashboard Page (`/dashboard`)
- Statistics cards: Total Scans, AI Detected, Human Detected, Avg Confidence
- Daily Detection Trend bar chart
- Overall Distribution pie chart
- Confidence Score Distribution histogram

### History Page (`/history`)
- Table of all past submissions with filtering
- Sortable columns: ID, Text, Verdict, Confidence, Source, Timestamp
- Pagination for large datasets
- Color-coded badges for verdict and source type

## 🔔 Notifications

Uses React Hot Toast for user feedback:
- Success notifications for completed analyses
- Error notifications with API error messages
- Toast styling matches dark theme

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Error Handling

- Backend connectivity checks displayed in navbar
- User-friendly error messages for common issues
- Validation for text length (minimum 20 words)
- Validation for file types
- Try-catch blocks on all API calls

## 🚦 Development Tips

### Changing Backend URL
Edit `src/api/detector.js`:
```javascript
const API_BASE_URL = 'http://your-backend-url:8000'
```

### Customizing Colors
Edit `tailwind.config.js` to change theme colors:
```javascript
theme: {
  extend: {
    colors: {
      ai: '#ef4444',
      human: '#22c55e',
      // ... more colors
    }
  }
}
```

### Adding New Components
1. Create component file in `src/components/`
2. Import in the page where used
3. Follow the existing component patterns (React hooks, TailwindCSS styling)

## 🐛 Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3001
```

**Backend not connecting?**
- Check if backend is running at `http://localhost:8000`
- Check CORS settings on backend
- Verify firewall doesn't block connections

**Build errors?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📄 License

This project is part of the AI Text Detection System.

## 🤝 Support

For issues or questions, check the API documentation or contact the backend team to ensure the REST endpoints are running correctly.
#   A i - T e x t - G e n e r a t e d - D e t e c t o r 
 
 