import { Navbar } from "@/components/navbar/navbar.tsx";
import './styles.scss'
import Footer from "@/components/footer/Footer.tsx";
import { Outlet } from "react-router-dom";

export default function BaseLayout() {
  return (
    <div className="layout">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}
