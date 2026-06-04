import Navbar from "@/src/component/navbar";
import Footer from "@/src/component/footer";
import "./globals.css";

export const metadata = {
  title: "Nikhil Tiwari | FullStack Developer",
  description: "Official portfolio of Nikhil Tiwari, FullStack Developer. Specialized in Next.js, React, Node.js, WebSockets, Prisma, and AI Integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="top" className="min-h-screen flex flex-col">
        <div className="relative grow overflow-x-hidden">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

