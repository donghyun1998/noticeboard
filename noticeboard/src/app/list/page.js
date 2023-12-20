import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

export default async function List() {
  let db = (await connectDB).db("noticedb");
  let result = await db.collection("post").find().toArray();
  const newResult = result.map(result => ({...result, _id: result._id.toString()}));
 // 서버컴포넌트에서 자식컴포넌트로 object props 못넘겨줌 string, json으로 바꿔줘야함
  return (
    <div className="list-bg">
      <ListItem result={newResult} />
    </div>
  );
}
