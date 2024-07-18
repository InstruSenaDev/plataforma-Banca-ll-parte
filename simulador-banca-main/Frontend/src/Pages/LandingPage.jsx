import React from "react";
import { TopNavbar } from "../Components/LandingPage/TopNavbar/TopNavbar";
import { MainContainer } from "../Components/LandingPage/Main Container/MainContainer";
import { Footer } from "../Components/LandingPage/Footer/Footer";
import { Banner } from "../Components/LandingPage/Banner/Banner";

export const LandingPage = () => {
  return (
    <>
      <div class="flex flex-col min-h-dvh">
        <TopNavbar />

        <div className="bg-slate-100">
          <div className="py-5">
            <Banner />
          </div>
          <div className="py-6">
            <MainContainer />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
