"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createCategory(formData: FormData) {
  const name = formData.get("name") as string;

  if (!name) return { error: "الاسم مطلوب" };

  try {
    await db.category.create({ data: { name } });
    revalidatePath("/admin/categories");
    revalidatePath("/menu");
    return { success: "تمت إضافة التصنيف بنجاح" };
  } catch (error) {
    return { error: "حدث خطأ ما" };
  }
}

export async function deleteCategory(id: string) {
  try {
    await db.category.delete({ where: { id } });
    revalidatePath("/admin/categories");
    revalidatePath("/menu");
    return { success: "تم حذف التصنيف" };
  } catch (error) {
    return { error: "لا يمكن حذف التصنيف إذا كان يحتوي على منتجات" };
  }
}
