
# Arch Linux Website

<div align="center">
  <img src= "public/images/arch-logo.png" alt="Arch Linux Logo" width="200" height="200">
  
  **A modern, responsive website showcasing Arch Linux**
  
  [![React](https://img.shields.io/badge/Built%20with-React-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
</div>

##  Quick Start

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/LucasZhang3/Arch-Linux-Webpage.git
   cd arch-linux-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

##  Built With

- **[React](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[Framer Motion](https://www.framer.com/motion/)** - Animations
- **[React Router](https://reactrouter.com/)** - Navigation
- **[Shadcn/ui](https://ui.shadcn.com/)** - UI components
- **[Lucide React](https://lucide.dev/)** - Icons

##  Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── download/        # Download page specific components
│   └── ui/              # Base UI components (shadcn/ui)
├── pages/               # Page components
│   ├── Index.tsx        # Homepage
│   ├── Download.tsx     # Download page
│   ├── LearnMore.tsx    # Learn more page
│   └── NotFound.tsx     # 404 page
├── lib/                 # Utility functions
├── hooks/               # Custom React hooks
└── store/               # State management (Zustand)
```

##  Design System

The project uses a custom design system based on Arch Linux branding:

- **Colors**: Blue (#1793d1), Cyan (#00d4aa), Purple (#8b5cf6)
- **Typography**: Inter font family
- **Components**: Glassmorphism panels with subtle borders

##  Pages

- **Home** - Landing page with animated logo
- **Download** - Download page with security information
- **Learn More** - Additional information about Arch Linux
- **404** - Custom not found page

##  Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

##  Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/Feature`)
3. Commit your changes (`git commit -m 'Add some Feature'`)
4. Push to the branch (`git push origin feature/Feature`)
5. Open a Pull Request

##  Demo
![image](https://github.com/user-attachments/assets/61fab6c9-3b08-466e-859a-2cedce18e936)
![image](https://github.com/user-attachments/assets/73955fa8-d72a-4ffa-b6da-21cd5e355661)
![image](https://github.com/user-attachments/assets/8a222af2-9902-4fff-b468-8bbd766cadf0)


##  Support

If you have any questions or need help, please open an issue on GitHub.

---

<div align="center">
</div>
