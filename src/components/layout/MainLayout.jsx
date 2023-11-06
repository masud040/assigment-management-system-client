import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Container from "../ui/Container";
import logo from "../../assets/images/logo.png";
import Footer from "../Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const MainLayout = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      <div className="flex flex-col">
        {/* Navbar */}
        <div className="bg-[#050618] mb-8">
          <div className="max-w-[1280px]  mx-auto  navbar ">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square text-white btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <img src={logo} className="w-10 h-10 rounded-md" alt="" />
            </div>

            <div className="flex-none hidden lg:block">
              <Navbar />
            </div>
          </div>
        </div>
        <Container>
          <Outlet />
          <Footer />
        </Container>
      </div>

      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay "
        ></label>
        <Sidebar />
      </div>
    </div>
  );
};

export default MainLayout;
