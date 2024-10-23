import { AppSidebar } from "@/components/main/app-sidebar";
import { Progressbar } from "@/components/main/progressbar";
import Topbar from "@/components/main/topbar";
import VideoPlayer from "@/components/main/videoPlayer";
import React from "react";

function page() {
  return (
    <div className="">
      {/* <Topbar />
        <Progressbar /> */}
      <AppSidebar />
    </div>
  );
}

export default page;
