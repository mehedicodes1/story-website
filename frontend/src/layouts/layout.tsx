import { Outlet } from "react-router";
import NavBar from "../components/navBar";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="flex flex-col gap-8 py-8 my-8">
        <Outlet />
      </main>
    </>
  );
};
