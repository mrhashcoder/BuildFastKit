import React from "react";
import { Progressbar } from "@/components/main/progressbar";
import Topbar from "@/components/main/topbar";
import PricingCards from "@/components/main/pricingcards";
import VideoPlayer from "@/components/main/videoplayer";
import PhotoGrid from "@/components/main/photogrid";
import ContactUs from "@/components/main/contact-us";
import Testimonial from "@/components/main/testimonial";
import Faq from "@/components/main/faq";

function page() {
  return (
    <div>
      {/* <Topbar />
      <Progressbar /> */}
      {/* <VideoPlayer /> */}
      <PricingCards />
      {/* <PhotoGrid photos={} /> */}
      <ContactUs />
      <Faq />
      <Testimonial index={1} />
    </div>
  );
}

export default page;
