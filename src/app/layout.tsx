import "@/app/styles/globals.css";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/png" href="/assets/solara.png" />
        <title>Solara</title>
      </head>
      <body className="bg-sky-600 min-h-screen overflow-hidden">
        <main className="p-10">{children}</main>
        <footer className="text-white text-center py-4 mt-8 pt-20">
          <p>© 2024 Solara. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
