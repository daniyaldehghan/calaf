import Profile from "@/src/models/Profile";
import User from "@/src/models/User";
import ConnectDB from "@/src/utils/ConnectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req, context) {
  try {
    await ConnectDB();
    const { profileId } = await context.params;
    console.log(profileId);
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json({ error: "ابتدا به حساب کاربری وارد شورید " });
    }
    const user = await User.findOne({ email: session.user.email });
    //     console.log(user);
    if (!user) {
      return NextResponse.json(
        { error: "حساب با این نام کاربری یافت نشد" },
        { status: 401 }
      );
    }
    if (user.role !== "ADMIN") {
      return NextResponse.json({ error: "دسترسی محدود" }, { status: 401 });
    }
    const res = await Profile.deleteOne({ _id: profileId });
    console.log("res", res);
    return NextResponse.json(
      { message: "آگهی با موفقیت حذف شد" },
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
