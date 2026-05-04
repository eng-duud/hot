"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
  } catch (error) {
    return { error: "حدث خطأ أثناء إضافة المنتج" };
  }

  revalidatePath("/admin/products");
  revalidatePath("/menu");
  redirect("/admin/products");
}

export async function deleteProduct(id: string) {
  try {
    await db.product.delete({ where: { id } });
    revalidatePath("/admin/products");
    revalidatePath("/menu");
    revalidatePath("/");
    return { success: "تم حذف المنتج بنجاح" };
  } catch (error) {
    return { error: "حدث خطأ أثناء حذف المنتج" };
  }
}

export async function toggleProductFeature(id: string, currentState: boolean) {
  try {
    await db.product.update({
      where: { id },
      data: { isFeatured: !currentState }
    });
    revalidatePath("/admin/products");
    revalidatePath("/");
  } catch (error) {
    return { error: "فشل تحديث الحالة" };
  }
}

export async function toggleProductBestSeller(id: string, currentState: boolean) {
  try {
    await db.product.update({
      where: { id },
      data: { isBestSeller: !currentState }
    });
    revalidatePath("/admin/products");
    revalidatePath("/");
  } catch (error) {
    return { error: "فشل تحديث الحالة" };
  }
}

export async function updateProduct(id: string, formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const image = formData.get("image") as string;
  const categoryId = formData.get("categoryId") as string;

  if (!name || !price || !categoryId) return { error: "الحقول الأساسية مطلوبة" };

  try {
    await db.product.update({
      where: { id },
      data: { name, description, price, image, categoryId },
    });
  } catch (error) {
    return { error: "حدث خطأ أثناء تحديث المنتج" };
  }

  revalidatePath("/admin/products");
  revalidatePath("/menu");
  redirect("/admin/products");
}
