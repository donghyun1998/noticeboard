"use client";
import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((value, index) => {
        return (
          <div className="list-item" key={index}>
            <Link href={"/detail/" + value._id}>
              <h4>{value.title}</h4>
            </Link>
            <Link href={"/edit/" + value._id}>🔧</Link>
            <span
              onClick={() => {
                fetch("/api/post/delete", {
                  method: "DELETE",
                  body: value._id,
                })
              }}
            >
              🚽
            </span>
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
