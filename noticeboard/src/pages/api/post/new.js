import { connectDB } from "@/util/database";

export default async function handler(request, response) {
	if (request.method == "POST") {
		if (request.body.title == '')
		return response.status(500).json('빈 칸으로 올리지 마십쇼')
		let db = (await connectDB).db("noticedb");
		await db.collection("post").insertOne(request.body);
		// return response.status(200).redirect('/list');
		response.writeHead(302, { Location: '/list' });
		return response.end();
	}
}
