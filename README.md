# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Beautiful and intuitive UI design
- 📱 Fully responsive layout
- 🚀 Built with React and TypeScript
- 🎯 Smooth scrolling navigation
- 📂 Projects showcase section
- 💼 Experience section
- 📧 Contact form
- ⚡ Fast and optimized with Vite

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Update Personal Information

1. **Hero Section**: Edit `src/components/Hero.tsx` to update your name, title, and bio
2. **Projects**: Modify the `projects` array in `src/components/Projects.tsx`
3. **Experience**: Update the `experiences` array in `src/components/Experience.tsx`
4. **Contact**: Change contact information in `src/components/Contact.tsx`
5. **Social Links**: Update GitHub, LinkedIn, and email links in the Hero and Contact components

### Styling

The project uses Tailwind CSS. You can customize colors and styles in `tailwind.config.js`.

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   ├── types.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Icons

## License

MIT

