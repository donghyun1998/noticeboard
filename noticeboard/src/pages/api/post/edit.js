import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  if (request.method === "POST") {
	let changeObj = {title : request.body.title, content : request.body.content};
	const db = (await connectDB).db("noticedb");
	await db.collection("post").updateOne({_id : new ObjectId(request.body._id)}, {$set : changeObj});
	response.redirect(302,'/list');
  }
}
