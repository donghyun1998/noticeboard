import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

export const dynamic = 'force-dynamic';
export default async function List() {
  let db = (await connectDB).db("noticedb");
  let result = await db.collection("post").find().toArray();
  const newResult = result.map(result => ({...result, _id: result._id.toString()}));
  // 서버컴포넌트에서 클라이언트 컴포넌트로 object 전달하면 method 사라지므로 미리 string으로 변환해서 보냄
  return (
    <div className="list-bg">
      <ListItem result={newResult} />
    </div>
  );
}
