import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  console.log(props);
  let db = (await connectDB).db("noticedb");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  // await db.collection("post").updateOne({_id : 1})

  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <input
          style={{ display: "none" }}
          name="_id"
          value={result._id} // 이거 왜 defaultvalue로 하면 안들어가냐?
        />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
