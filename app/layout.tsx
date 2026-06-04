import Navbar from "@/src/component/navbar";
import Footer from "@/src/component/footer";
import "./globals.css";

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
