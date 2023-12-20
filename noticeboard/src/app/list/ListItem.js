import Link from "next/link";

export default async function ListItem({result}) {
  return (
    <div>
      {result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={"/detail/" + a._id}>
              <h4>{a.title}</h4>
            </Link>
            <Link href={"/edit/" + a._id}>🔧</Link>
			{/* <span onClick={()=>{
				fetch('/api/post/delete', {
					method : 'DELETE',
				}).then(()=>{
					console.log('삭제ajax');
				})
			}}>🚽</span> */}
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
