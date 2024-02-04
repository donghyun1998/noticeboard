import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
import {connectDB} from "@/util/database";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: '9e48ed84b5f2a0ff4fb3',
            clientSecret: 'd7cdf332b78871ff6729915ba7395523e0267e78',
        }),
    ],
    secret : 'fibkdisnbodisn1df',
    adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions);