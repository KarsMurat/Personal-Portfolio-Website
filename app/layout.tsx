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
      <body className="grid h-screen grid-cols-1 justify-items-center bg-zinc-900 p-8">
        <div className="relative flex w-9/12">
          <div className="fixed left-0 flex h-screen">
            <div className="m-auto">
              <PersonalCard />
            </div>
          </div>
          <div className="m-4 grid flex-1 grid-cols-1 place-content-between justify-items-center space-y-4 rounded-lg bg-zinc-800 p-4 shadow-sm shadow-black">
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
