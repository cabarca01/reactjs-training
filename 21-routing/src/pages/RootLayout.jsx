import "./RootLayout.css";

import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
  return (
    <div>
      <MainNavigation />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
