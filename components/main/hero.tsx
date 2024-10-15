import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

function Hero() {
  return (
    <div className="container p-2 m-2">
      <div className="flex flex-col gap-8 justify-center items-center text-center">
        <div className="" id="title-image">
          <Image
            src="/images/hero-title-image.svg"
            width={600}
            height={600}
            alt="hero-title-image"
          />
        </div>
        <div className="font-bold text-5xl md:text-8xl" id="heading-text">
          from 0 → 1, faster
        </div>
        <div
          className="font-thin text-2xl flex flex-col justify-center items-center"
          id="heading-desciption"
        >
          production-ready saas starter kits built with
          <div className="font-black">NextJS + Supabase + Stripe</div>
        </div>
        <div className="" id="action-items">
          <Button variant="default" className="font-black text-xl">
            purchase
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
