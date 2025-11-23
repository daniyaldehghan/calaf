import clientPromise from "@/src/lib/mongodb";
import User from "@/src/models/User";
import { vrifyPassword } from "@/src/utils/auth";
import ConnectDB from "@/src/utils/ConnectDB";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email";
export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await ConnectDB();
        } catch (err) {
          throw new Error("مشکلی در سرور رخ داده است.");
        }
        if (!email || !password) {
          throw new Error("ایمیل یا پسورد را وارد کنید.");
        }
        const user = await User.findOne({ email });
        if (!user) throw new Error("ابتدا حساب کاربری ایجاد کنید.");
        const isvalid = await vrifyPassword(password, user.password);
        if (!isvalid) throw new Error("ایمیل یا پسورد معتبر وارد کنید.");
        return { email };
      },
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
};
const handler = nextAuth(authOptions);
export { handler as GET, handler as POST };
