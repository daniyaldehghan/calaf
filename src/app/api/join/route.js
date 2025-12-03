import Join from "@/src/models/Join";
import ConnectDB from "@/src/utils/ConnectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await ConnectDB();
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json(
        { error: " ایمیل خود را وارد کنید" },
        { status: 500 }
      );
    }
    const newuseremail = await Join.create({
      email,
    });
    console.log(newuseremail);
    return NextResponse.json(
      { success: "ایمیل شما با موفقیت ارسال شد." },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "خطایی در سررور رخ داده است!" },
      { status: 500 }
    );
  }
}
