"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addSliderImage(url: string) {
  if (!url) return { error: "URL is required" };

  try {
    // @ts-ignore
    await db.aboutSliderImage.create({
      data: { url }
    });
    revalidatePath("/about");
    revalidatePath("/admin/about");
    return { success: "تمت إضافة الصورة بنجاح" };
  } catch (error) {
    console.error("Error adding slider image:", error);
    return { error: "حدث خطأ أثناء إضافة الصورة" };
  }
}

export async function deleteSliderImage(id: string) {
  try {
    // @ts-ignore
    await db.aboutSliderImage.delete({
      where: { id }
    });
    revalidatePath("/about");
    revalidatePath("/admin/about");
    return { success: "تم حذف الصورة بنجاح" };
  } catch (error) {
    console.error("Error deleting slider image:", error);
    return { error: "حدث خطأ أثناء حذف الصورة" };
  }
}

export async function getSliderImages() {
  try {
    // @ts-ignore
    return await db.aboutSliderImage.findMany({
      orderBy: { createdAt: "desc" }
    });
  } catch (error) {
    console.error("Error fetching slider images:", error);
    return [];
  }
}
