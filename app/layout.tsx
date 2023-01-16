import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PersonalCard from "@/components/PersonalCard";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="justify-items-center bg-zinc-900 grid grid-cols-1 p-8 h-screen">
        <div className="flex w-8/12 relative">
          <div className="flex fixed h-screen left-0">
            <div className="m-auto">
              <PersonalCard />
            </div>
          </div>
          <div className="flex-1 grid grid-cols-1 space-y-4 bg-zinc-800 m-4 p-4 rounded-lg shadow-sm shadow-black justify-items-center place-content-between">
            <div className="absolute -top-4 -right-4">
              <Navbar />
            </div>
            {children}
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
