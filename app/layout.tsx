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
    <html lang="en" className="scroll-smooth">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="h-screen w-screen justify-items-center bg-zinc-900">
        <div className="sticky flex h-full justify-center">
          <div className="container relative overflow-y-scroll">
            <div className="m-8 grid min-h-[93%] grid-cols-1 place-content-between space-y-4 rounded-lg border-2 border-zinc-800 bg-zinc-900 p-8 shadow-lg shadow-black">
              <div className="absolute top-4 right-4">
                <Navbar />
              </div>
              <main className="pt-2">{children}</main>
              <Footer />
            </div>
          </div>
          <div className="flex h-screen">
            <div className="m-auto">
              <PersonalCard />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
