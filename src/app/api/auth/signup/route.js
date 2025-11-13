import User from "@/src/models/Uers";
import { hashdPassword } from "@/src/utils/auth";
import ConnectDB from "@/src/utils/ConnectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await ConnectDB();
    const { email, password } = await req.json();
    console.log(email, password);
    if (!email || !password) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 422 }
      );
    }
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { erro: "این حساب کاربری وجود دارد" },
        { status: 422 }
      );
    }
    const hashedPassword = await hashdPassword(password);
    const newUser = await User.create({
      email,
      password: hashedPassword,
    });
    console.log(newUser);
    return NextResponse.json(
      { success: "حساب کاربری ایجاد شد" },
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
