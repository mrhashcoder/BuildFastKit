"use client";

import React, { useState } from "react";
import Progressbar from "@/components/main/progressbar";
import Topbar from "@/components/main/topbar";
import PricingCards from "@/components/main/pricingcards";
import VideoPlayer from "@/components/main/videoplayer";
import PhotoGrid from "@/components/main/photogrid";
import ContactUs from "@/components/main/contact-us";
import Testimonial from "@/components/main/testimonial";
import Faq from "@/components/main/faq";
import Snippet from "@/components/main/code-snippet";
import CodeEditor from "@/components/main/code-editor";
import TextEditor from "@/components/main/text-editor";

function page() {
  const [publicId, setPublicId] = useState("/images/levi.jpg");

  return (
    <div className="">
      <Topbar />
      <Progressbar />
      <VideoPlayer />
      <PricingCards />
      <PhotoGrid photos={[{ url: publicId, alt: "" }]} />
      <ContactUs />
      <Faq />
      <Testimonial index={1} />
      <Snippet />
      <CodeEditor />
      <TextEditor />
    </div>
  );
}

export default page;
