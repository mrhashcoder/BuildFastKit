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
import FileUpload from "@/components/main/file-upload";
import Snippet from "@/components/main/code-snippet";

function page() {
  const [publicId, setPublicId] = useState("");

  return (
    <div className="">
      {/* <Topbar /> */}
      {/* <Progressbar /> */}
      {/* <VideoPlayer /> */}
      {/* <PricingCards /> */}
      {/* <PhotoGrid photos={[{url: publicId, alt: "" }]} /> */}
      {/* <ContactUs /> */}
      {/* <Faq /> */}
      {/* <Testimonial index={1} /> */}
      {/* <FileUpload uwConfig={{
        cloudName:process.env.NEXT_PUBLIC_CLOUDINARY_USERNAME || "",
        uploadPreset:"file-upload",
        multiple:false,
        maxImageFileSize:2000000,
        folder:"uploads"
      }}
      setPublicId={setPublicId}
       /> */}
      <Snippet />
    </div>
  );
}

export default page;
