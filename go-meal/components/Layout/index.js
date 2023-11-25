"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";

import GoTopComponent from "@/components/goTop";
import SideBar from "@/components/sidebar";
import Search from "@/components/Search/page";
import Advertise from "@/components/advertise";
import RightsideBar from "@/components/rightsideBar";
import Login from "@/components/login";
import Modal from "@/components/Modal";
import {SkeletonTheme} from "react-loading-skeleton";

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
              <Search />
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
