import React from "react";

interface ResponsiveVideoProps {
  src: string;
  poster?: string;
  alt?: string;
}

export const ResponsiveVideo: React.FC<ResponsiveVideoProps> = ({
  src,
  poster,
  alt = "Academia Jiu-jitsu",
}) => (
  <div className="w-full aspect-video rounded-3xl overflow-hidden bg-black shadow-lg">
    <video
      className="w-full h-full object-cover"
      poster={poster}
      controls
      playsInline
    >
      <source src={src} type="video/mp4" />
      {alt}
    </video>
  </div>
);
