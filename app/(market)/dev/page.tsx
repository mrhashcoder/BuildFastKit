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
import { Heading } from "@/components/main/heading";
import { stackConfig } from "@/config/content/stack";
import { StackBox } from "@/components/main/stack-box";

function page() {
  const [publicId, setPublicId] = useState("/images/levi.jpg");

  return (
    <main className="mx-auto w-full max-w-5xl p-4">
      <Heading
        title="My Stack"
        subtitle="Software and tools I use on a regular basis."
      />

      <div className="space-y-8">
        {stackConfig.map((stack) => (
          <StackBox key={stack.title} title={stack.title} items={stack.items} />
        ))}
      </div>
    </main>
  );
}

export default page;
