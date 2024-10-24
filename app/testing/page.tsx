import React from "react";
import { AppSidebar } from "@/components/main/app-sidebar";
import { Progressbar } from "@/components/main/progressbar";
import Topbar from "@/components/main/topbar";
import PricingCards from '@/components/main/pricingCards'
import VideoPlayer from '@/components/main/videoPlayer'
import PhotoGrid from "@/components/main/photoGrid";
 


function page() {

  return (
     <div>
      {/* <Topbar />
      <Progressbar /> */}
      {/* <AppSidebar /> */}
      {/* <VideoPlayer /> */}
      {/* <PricingCards /> */}
      <PhotoGrid photos={[]} />
    </div>
  );
}

export default page;
