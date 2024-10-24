import React from "react";
import { AppSidebar } from "@/components/main/app-sidebar";
import { Progressbar } from "@/components/main/progressbar";
import Topbar from "@/components/main/topbar";
import PricingCards from '@/components/main/pricingCards'
import VideoPlayer from '@/components/main/videoPlayer'
 


function page() {

  return (
     <div>
      {/* <Topbar />
        <Progressbar /> */}
      {/* <AppSidebar /> */}
      {/* <VideoPlayer /> */}
      <PricingCards />
    </div>
  );
}

export default page;
