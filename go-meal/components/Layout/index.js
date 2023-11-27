"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";

import GoTopComponent from "@/components/goTop";
import SideBar from "@/components/sidebar";
import Advertise from "@/components/advertise";
import RightsideBar from "@/components/rightsideBar";
import Modal from "@/components/Modal";
import { SkeletonTheme } from "react-loading-skeleton";
import Header from "@/components/Header/page";

export default function Layout({ children }) {
  return (
    <div>
      <GoTopComponent />
      <SessionProvider>
        <Provider store={store}>
          <div className={"main-container"}>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              <Modal />
              <SideBar />
              <div className={"main-wrapper"}>
                <Header />
                <Advertise />
                {children}
              </div>
              <RightsideBar />
            </SkeletonTheme>
          </div>
        </Provider>
      </SessionProvider>
    </div>
  );
}
