import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  if (request.method === "DELETE") {
	console.log(request.body._id);
	const db = (await connectDB).db("noticedb");
	let result = await db.collection("post").deleteOne({_id : new ObjectId(request.body)});
	console.log(result);
	if (result.deletedCount === 0)
		response.status(500).end();
	else
		response.status(200).end();
  }
}
