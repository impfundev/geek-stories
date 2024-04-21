import { Dispatch, SetStateAction } from "react";

export type NavEditor = {
  handleForm?: () => void;
  handleBack?: () => void;
  setStatus: Dispatch<SetStateAction<"draft" | "upload">>;
};

export type Media = {
  asset_id: string;
  public_id: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  bytes: number;
  width: number;
  height: number;
  folder: string;
  access_mode: string;
  url: string;
  secure_url: string;
};

export type MediaData = {
  media: {
    resources: Media[];
  };
};

export type DialogMediaType = {
  media: {
    resources: Media[];
  };
  action: Dispatch<
    SetStateAction<{ src: string; width: string; height: string; alt: string }>
  >;
};
