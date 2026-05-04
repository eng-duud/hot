"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createProduct(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const image = formData.get("image") as string;
  const categoryId = formData.get("categoryId") as string;

  if (!name || !price || !categoryId) return { error: "الحقول الأساسية مطلوبة" };

  try {
    await db.product.create({
      data: { name, description, price, image, categoryId },
    });
    revalidatePath("/admin/products");
    revalidatePath("/menu");
    return { success: "تمت إضافة المنتج بنجاح" };
  } catch (error) {
    return { error: "حدث خطأ أثناء إضافة المنتج" };
  }
}

export async function deleteProduct(id: string) {
  try {
    await db.product.delete({ where: { id } });
    revalidatePath("/admin/products");
    revalidatePath("/menu");
    return { success: "تم حذف المنتج بنجاح" };
  } catch (error) {
    return { error: "حدث خطأ أثناء حذف المنتج" };
  }
}
