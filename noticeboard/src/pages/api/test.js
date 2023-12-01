import { connectDB } from "@/util/database";

export default async function handler(request, response) {
	console.log("response 잡았다요놈");
	if (request.method == 'GET') {
		let db = (await connectDB).db("noticedb");
		let result = await db.collection("post").find().toArray();
		return (response.status(200).json(result))
	}
	else if (request.method == 'POST')
		return (response.status(200).json('처리완료'))
}
