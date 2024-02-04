import Image from 'next/image'
import styles from './page.module.css'
import { connectDB } from '@/util/database';
import { MongoClient } from 'mongodb'

export const revalidate = 60; // 60초동안 캐싱해줌
export default async function Home() {
  const client = await connectDB;
  const db = client.db("noticedb");
  let a = await db.collection('post').find().toArray();

  return (
    <div>홈 화면</div>
  )
}
