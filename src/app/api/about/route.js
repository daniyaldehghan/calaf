import About from "@/src/models/About";
import ConnectDB from "@/src/utils/ConnectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await ConnectDB();
    const { name, email, message, phone } = await req.json();
    if (!name) {
      return NextResponse.json(
        { error: "نام خود راوارد کنید" },
        { status: 401 }
      );
    }
    if (!email) {
      return NextResponse.json(
        { error: "ایمیل خود راوارد کنید" },
        { status: 401 }
      );
    }

    if (!message) {
      return NextResponse.json(
        { error: "موضوع پیام خود راوارد کنید" },
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
