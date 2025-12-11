# 🚀 Social Media Image Resizer Pro

[![Live Demo](https://img.shields.io/badge/Live%20Demo-doodax.com-purple?style=for-the-badge&logo=rocket)](https://doodax.com)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

**The ultimate privacy-focused tool for social media visual optimization.**

Instantly resize, crop, and format images for Instagram, Twitter, Facebook, YouTube, LinkedIn, and more without ever uploading your files to a server.

---

## ✨ Features

- **🔒 100% Client-Side Privacy:** Images are processed locally in your browser using the HTML5 Canvas API. No data leaves your device.
- **⚡ Zero Latency:** Instant processing with no upload/download wait times.
- **📱 Smart Cropping:** Intelligent algorithms center-crop your images to fit specific social media aspect ratios perfectly.
- **🎨 Modern UX:** A stunning, galaxy-themed interface with smooth animations and intuitive controls.
- **📚 SEO Resource:** Includes a comprehensive built-in guide on social media dimensions and strategies.
- **📱 Responsive:** Fully functional on desktop, tablet, and mobile devices.

---

## 🚀 Live Demo

Experience the tool in action: **[https://doodax.com](https://doodax.com)**

---

## 🛠️ Project Structure

```bash
social-media-image-resizer/
├── public/
│   ├── favicon.svg      # Application icon
│   ├── robots.txt       # SEO crawler instructions
│   └── sitemap.xml      # SEO site map
├── src/
│   ├── components/
│   │   ├── ImageResizerTool.tsx  # Core processing logic & UI
│   │   └── ThemeLayout.tsx       # Galaxy theme, Layout, & Modals
│   ├── utils/
│   │   ├── imageProcessor.ts     # Pure JS Canvas manipulation logic
│   │   └── SeoArticle.tsx        # Long-form SEO content component
│   ├── constants.ts     # Social media dimension presets
│   ├── types.ts         # TypeScript interfaces
│   ├── App.tsx          # Main application entry
│   └── index.tsx        # React DOM rendering
├── index.html           # HTML entry point with Metadata & Schema
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 💻 Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS Animations
- **Core Logic:** HTML5 Canvas API + FileReader API
- **Build Tool:** Vite (Recommended for local dev)

## 🔧 Installation

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hsinidev/social-media-image-resizer.git
    cd social-media-image-resizer
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm start
    # or
    npm run dev
    ```

4.  Open `http://localhost:3000` in your browser.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 👨‍💻 Author

**HSINI MOHAMED**

- Website: [doodax.com](https://doodax.com)
- GitHub: [@hsinidev](https://github.com/hsinidev)
- Email: [hsini.web@gmail.com](mailto:hsini.web@gmail.com)

---

*Built with ❤️ for the open source community.*