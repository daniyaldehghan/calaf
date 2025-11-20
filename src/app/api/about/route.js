import About from "@/src/models/About";
import ConnectDB from "@/src/utils/ConnectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await ConnectDB();
    const { name, email, message, phone } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "اسم, ایمیل , نام خودرا وارد کنید." },
        { status: 401 }
      );
    }
    const newtext = await About.create({
      email,
      name,
      message,
      phone: +phone,
    });
    console.log(newtext);
    return NextResponse.json(
      { message: "پیام شما با موفقیت ارسال شد." },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است!" },
      { status: 500 }
    );
  }
}
