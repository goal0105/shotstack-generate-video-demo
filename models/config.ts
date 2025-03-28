export type VideoConfig = {
  platform: string;
  content: string;
  voice: string;
  videoTitle : string;
  caption: string;  // video subtitle
  videoFile : string;
  strFile ?: string;
};

export type ConfigProps = {
  config: VideoConfig;
  setConfig: React.Dispatch<React.SetStateAction<VideoConfig>>;
};
