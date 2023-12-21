"use client";
import axios from "axios";
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
              onClick={(e) => {
                axios
                  .delete("/api/post/delete?id=" + value._id,)
                  .then((response) => {
                    if (response.status === 200) {
                      console.log(200);
                      e.target.parentElement.style.opacity = 0;
                      setTimeout(() => {
                        e.target.parentElement.style.display = "none";
                      }, 1000);
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });
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
