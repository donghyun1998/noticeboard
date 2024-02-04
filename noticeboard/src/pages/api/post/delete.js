import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function handler(request, response) {
  if (request.method === "DELETE") {
    console.log(request.body);
    let session = await getServerSession(request, response, authOptions);

    const db = (await connectDB).db("noticedb");
    let post = await db
      .collection("post")
      .findOne({ _id: new ObjectId(request.query.id) });
    // console.log(post, session.user.email);
    if (post.author !== session.user.email) return response.status(500).end();
    let result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(request.query.id) });
    if (result.deletedCount === 0) response.status(500).end();
    else response.status(200).end();
  }
}
