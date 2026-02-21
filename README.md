# UrbanEye UI

Real-time fleet monitoring dashboard for road-sign violation detection, powered by YOLO-based recognition.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Dev Server:** Turbopack

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
src/
├── app/                 # Next.js App Router pages & layouts
│   ├── dashboard/       # Dashboard page
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Landing page
│   └── globals.css      # Global styles & CSS variables
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── layout/          # Layout components (sidebar, header)
│   └── dashboard/       # Dashboard-specific components
├── hooks/               # Custom React hooks
├── lib/                 # Utilities & helpers
└── types/               # TypeScript type definitions
```

## License

Private
