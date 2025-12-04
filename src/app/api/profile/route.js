import Profile from "@/src/models/Profile";
import User from "@/src/models/User";
import ConnectDB from "@/src/utils/ConnectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    await ConnectDB();
    const profiles = await Profile.find({ published: true }).select("-userId");
    return NextResponse.json(
      {
        data: profiles,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "خطایی در سررور رخ داده است!" },
      { status: 500 }
    );
  }
}
export async function POST(req) {
  try {
    await ConnectDB();
    const body = await req.json();
    const {
      title,
      description,
      location,
      phone,
      price,
      constructionDate,
      category,
      name,
      story,
    } = body;
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا اول وارد حساب کاربری شوید" },
        { status: 402 }
      );
    }
    const user = await User.findOne({ email: session.user.email });
    console.log(user);
    if (!user) {
      return NextResponse.json(
        { error: "حساب با این نام کاربری یافت نشد" },
        { status: 401 }
      );
    }
    const nosabt = await Profile.find({ userId: user._id });
    // if (nosabt.length >= 3) {
    //   return NextResponse.json(
    //     { error: "شما اجازه ثبت  بیشتر از 3 آگهی را ندارید!" },
    //     { status: 500 }
    //   );
    // }
    const start = new Date();
    start.setHours(0, 0, 0, 0); // 00:00 روز

    const end = new Date();
    end.setHours(23, 59, 59, 999); // 23:59 روز

    const datas = await Profile.find({
      createdAt: {
        $gte: start,
        $lte: end,
      },
    });
    if (datas.length >= 2) {
      return NextResponse.json(
        { error: "شما اجازه ثبت  بیشتر از 2 آگهی در روز را ندارید!" },
        { status: 500 }
      );
    }
    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !constructionDate ||
      !category ||
      !name ||
      !story
    ) {
      return NextResponse.json(
        { error: "لطفا مقدار معتبر وارد کنید" },
        { status: 400 }
      );
    }
    const newProfile = await Profile.create({
      title,
      description,
      location,
      phone,
      name,
      price: +price,
      constructionDate,
      category,
      story,
      userId: new Types.ObjectId(user._id),
    });
    console.log(newProfile);
    return NextResponse.json(
      { message: "آگهی با موفقیت اضافه شد" },
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
export async function PATCH(req) {
  try {
    await ConnectDB();
    const body = await req.json();
    const {
      _id,
      title,
      description,
      location,
      phone,
      price,
      name,
      constructionDate,
      category,
      story,
    } = body;
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json({ error: "ابتدا به حساب کاربری وارد شورید " });
    }
    const user = await User.findOne({ email: session.user.email });
    // console.log(user);
    if (!user) {
      return NextResponse.json(
        { error: "حساب با این نام کاربری یافت نشد" },
        { status: 401 }
      );
    }
    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !constructionDate ||
      !category ||
      !name ||
      !story
    ) {
      return NextResponse.json(
        { error: "لطفا مقدار معتبر وارد کنید" },
        { status: 400 }
      );
    }
    const ProfileId = await Profile.findOne({ _id });
    if (!user._id.equals(ProfileId.userId)) {
      return NextResponse.json(
        { error: "دسترسی شما به این آگهی محدود شده است" },
        { status: 500 }
      );
    }
    ProfileId.title = title;
    ProfileId.name = name;
    ProfileId.description = description;
    ProfileId.location = location;
    ProfileId.phone = phone;
    ProfileId.price = price;
    ProfileId.constructionDate = constructionDate;
    ProfileId.category = category;
    ProfileId.story = story;

    ProfileId.save();
    return NextResponse.json(
      { message: "آگهی با موفقیت ویرایش شد." },
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
