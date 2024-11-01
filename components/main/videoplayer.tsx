"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  // to avoid hydration issue
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <main className="wrapper">
      <div className="flex mt-5">
        <div className="rounded-xl border-black border-[1px] overflow-hidden w-full">
          <ReactPlayer
            className="react-player"
            url={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
            controls
            width="100%"
            height="100%"
            pip
          />
        </div>
      </div>
    </main>
  ) : (
    <></>
  );
};

export default VideoPlayer;
