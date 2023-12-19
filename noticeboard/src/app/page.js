import Image from 'next/image'
import styles from './page.module.css'
import { connectDB } from '@/util/database';
import { MongoClient } from 'mongodb'


export default async function Home() {
  const client = await connectDB;
  const db = client.db("noticedb");
  let a = await db.collection('post').find().toArray();
  // console.log(a);
  return (
    <div>홈 화면</div>
  )
}
