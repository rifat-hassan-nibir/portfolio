import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto min-h-[calc(100vh-116px)] px-4 lg:px-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
