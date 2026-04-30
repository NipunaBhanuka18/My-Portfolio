import './globals.css';

export const metadata = {
  title: 'Nipuna Bhanuka | AI & Full-Stack Engineer',
  description: 'Portfolio of Nipuna Bhanuka - Specialized in MERN, React Native, and AI Automation.',
  manifest: '/manifest.json', // PWA ready
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
