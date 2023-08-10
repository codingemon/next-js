import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "70753986322c89341850",
      clientSecret: "2ddc2ef14eb446f32149ed0762e81b132c988f8d",
    }),
  ],
  secret: "chltjdgud1224",
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
