import Breadcrumbs from "@/shared/components/breadcrumbs";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen px-6 bg-gray-50">
        <Breadcrumbs />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
