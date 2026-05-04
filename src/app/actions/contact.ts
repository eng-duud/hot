"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function submitContactForm(formData: FormData) {
  const senderName = formData.get("name") as string;
  const senderPhone = formData.get("phone") as string;
  const messageContent = formData.get("message") as string;

  if (!senderName || !senderPhone || !messageContent) {
    return { error: "جميع الحقول مطلوبة" };
  }

  try {
    await db.message.create({
      data: {
        senderName,
        senderPhone,
        messageContent,
      },
    });

    revalidatePath("/admin/messages");
    return { success: "تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا." };
  } catch (error) {
    console.error("Error saving message:", error);
    return { error: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة لاحقاً." };
  }
}
