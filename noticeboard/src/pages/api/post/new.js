import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function handler(request, response) {
  let session = await getServerSession(request, response, authOptions);
  if (session) {
    request.body.author = session.user.email;
  }
  console.log(request.body);
  if (request.method === "POST") {
    if (request.body.title === "")
      return response.status(500).json("빈 칸으로 올리지 마십쇼");
    let db = (await connectDB).db("noticedb");
    await db.collection("post").insertOne(request.body);
    // return response.status(200).redirect('/list'); // 200은 리다이렉트 안됨
    response.redirect(302, "/list");
  }
}
