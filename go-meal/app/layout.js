"use client";
import "./globals.css";
import SideBar from "@/components/sidebar";
import RightsideBar from "@/components/rightsideBar";
import GoTopComponent from "@/components/goTop";
import Search from "@/components/Search/page";
import Advertise from "@/components/advertise";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GoTopComponent />
        <Provider store={store}>
          <div className={"main-container"}>
            <SideBar />
            <div className={"main-wrapper"}>
              <Search />
              <Advertise />
              {children}
            </div>
            <RightsideBar />
          </div>
        </Provider>
      </body>
    </html>
  );
}
