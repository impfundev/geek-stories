import { z } from "zod";

export const MediaSchema = z.array(
  z.object({
    asset_id: z.string(),
    public_id: z.string(),
    format: z.string(),
    version: z.number(),
    resource_type: z.string(),
    type: z.string(),
    created_at: z.string(),
    bytes: z.number(),
    width: z.number(),
    height: z.number(),
    folder: z.string(),
    access_mode: z.string(),
    url: z.string(),
    secure_url: z.string(),
  })
);
