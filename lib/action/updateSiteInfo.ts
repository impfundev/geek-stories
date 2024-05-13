"use server";

import fs from "fs";
import { prisma } from "../models/prisma";
import { revalidatePath } from "next/cache";

export async function updateSiteInfo(state: any, formData: FormData) {
  const user_id = formData.get("user_id") as string;
  const name = formData.get("site_name") as string;
  const description = formData.get("site_description") as string;
  const site_logo: File = formData.get("site_logo") as File;

  if (site_logo.name !== "undefined") {
    // check is logo file size exceed maximum
    const maxSize = 500000; // 500KB;
    const isSizeExceedMaximum = site_logo.size > maxSize;

    if (isSizeExceedMaximum) {
      return {
        status: "warning",
        message: "Update Failed: Logo file size exceeds 500KB",
      };
    }

    // upload logo to local directory
    const uploadDir = process.cwd() + "/public/media/";
    const buffer = Buffer.from(await site_logo.arrayBuffer());
    const uploadLogo = fs.writeFile(
      `${uploadDir}/${site_logo.name}`,
      buffer,
      (error) => {
        console.error(error?.message);
        return {
          status: "warning",
          message: "Upload Logo Failed: please try again later.",
        };
      }
    );

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
    const logo = `${baseUrl}/media/${site_logo.name}`;

    try {
      const updateSiteInfo = await prisma.site_Info.update({
        where: { user_id },
        data: {
          name,
          description,
          logo,
        },
      });
    } catch (error) {
      console.error(error);
      return {
        status: "warning",
        message: "Update Site Information Failed, please try again later.",
      };
    }

    revalidatePath("/dashboard/settings");
    return {
      status: "success",
      message: "Update Site Information Success.",
    };
  }

  try {
    const updateSiteInfo = await prisma.site_Info.update({
      where: { user_id },
      data: {
        name,
        description,
      },
    });
  } catch (error) {
    console.error(error);
    return {
      status: "warning",
      message: "Update Site Information Failed, please try again later.",
    };
  }

  console.log("Site Logo:", site_logo);
  revalidatePath("/dashboard/settings");
  return {
    status: "success",
    message: "Update Site Information Success.",
  };
}
