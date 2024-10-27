import React from "react";
import { AppSidebar } from "@/components/main/app-sidebar";
import { Progressbar } from "@/components/main/progressbar";
import Topbar from "@/components/main/topbar";
import PricingCards from '@/components/main/pricingCards'
import VideoPlayer from '@/components/main/videoPlayer'
import PhotoGrid from "@/components/main/photoGrid";
import ContactUs from "@/components/main/contact-us";
import Testimonial_1 from "@/components/main/testimonial_1";
import Testimonial_2 from "@/components/main/testimonial_2";
import Testimonial_3 from "@/components/main/testimonial_3";
import Faq from "@/components/main/faq";

 
function page() {

  return (
     <div>
      {/* <Topbar />
      <Progressbar /> */}
      {/* <AppSidebar /> */}
      {/* <VideoPlayer /> */}
      {/* <PricingCards /> */}
      {/* <PhotoGrid photos={[]} />*/}
      <ContactUs />
      {/* <Faq /> */}
      {/* <Testimonial_1 /> */}
      {/* <Testimonial_2 /> */}
      {/* <Testimonial_3 /> */}

    </div>
  );
}

export default page;
