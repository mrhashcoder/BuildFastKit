import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { HeroData } from "@/config/content";

function Hero({ type, image, title, desciption }: any) {
  switch (type) {
    case 1:
      return (
        <div className="container p-2 m-2">
          <div className="flex flex-col gap-8 justify-center items-center text-center">
            <div className="" id="title-image">
              <Image
                src={HeroData.image}
                width={600}
                height={600}
                alt="hero-title-image"
              />
            </div>
            <div className="font-bold text-5xl md:text-8xl" id="heading-text">
              {HeroData.title}
            </div>
            <div
              className="font-thin text-2xl flex flex-col justify-center items-center"
              id="heading-desciption"
            >
              {HeroData.description.semi}
              <div className="font-black">{HeroData.description.main}</div>
            </div>
            <div className="" id="action-items">
              <Button variant="default" className="font-black text-xl">
                {HeroData.buttonTitle}
              </Button>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="container p-2 m-2">
          <div className="flex flex-col gap-8 justify-center items-center text-center">
            <div className="font-bold text-5xl md:text-8xl" id="heading-text">
              {HeroData.title}
            </div>
            <div className="flex justify-center flex-wrap items-center">
              <div className="min-w-md" id="title-image">
                <Image
                  src={HeroData.image}
                  width={600}
                  height={600}
                  alt="hero-title-image"
                />
              </div>
              <div
                className="font-thin text-2xl flex flex-col justify-center items-center"
                id="heading-desciption"
              >
                {HeroData.description.semi}
                <div className="font-black">{HeroData.description.main}</div>
                <div className="" id="action-items">
                  <Button variant="default" className="font-black text-xl">
                    {HeroData.buttonTitle}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="container p-2 m-2">
          <div className="flex flex-col gap-8 justify-center items-center text-center">
            <div className="font-bold text-5xl md:text-8xl" id="heading-text">
              {HeroData.title}
            </div>
            <div className="" id="title-image">
              <Image
                src={HeroData.image}
                width={600}
                height={600}
                alt="hero-title-image"
              />
            </div>
            <div
              className="font-thin text-2xl flex flex-col justify-center items-center"
              id="heading-desciption"
            >
              {HeroData.description.semi}
              <div className="font-black">{HeroData.description.main}</div>
            </div>
            <div className="" id="action-items">
              <Button variant="default" className="font-black text-xl">
                {HeroData.buttonTitle}
              </Button>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="container p-2 m-2">
          <div className="flex flex-col gap-8 justify-center items-center text-center">
            <div className="" id="title-image">
              <Image
                src={HeroData.image}
                width={600}
                height={600}
                alt="hero-title-image"
              />
            </div>
            <div className="font-bold text-5xl md:text-8xl" id="heading-text">
              {HeroData.title}
            </div>
            <div
              className="font-thin text-2xl flex flex-col justify-center items-center"
              id="heading-desciption"
            >
              {HeroData.description.semi}
              <div className="font-black">{HeroData.description.main}</div>
            </div>
            <div className="" id="action-items">
              <Button variant="default" className="font-black text-xl">
                {HeroData.buttonTitle}
              </Button>
            </div>
          </div>
        </div>
      );
  }
}

export default Hero;
