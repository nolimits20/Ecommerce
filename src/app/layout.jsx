import { Cabin } from "next/font/google";
import "./globals.css";
import {TopNavbar} from './components/TopNavbar'
import {ButtomNavbar} from './components/ButtomNavbar'
import Footer from './components/Footer'

const cabin = Cabin({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to my Addiction",
  description: "Everything is happening",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cabin.className}>
        <div className="bg-white fixed inset-x-0 z-[1] border-b-4 border-b-[#A8ADF0]">
          <TopNavbar/>
          <ButtomNavbar/>
        </div>
        
        
        
        <div>
          <div className="relative top-[160px] min-h-screen">{children}</div>
          <div className="bg-[#1B2AB1] min-h-[20vh]">
            <Footer/>
            </div>
        </div>
        </body>
    </html>
  );
}
