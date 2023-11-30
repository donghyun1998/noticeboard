'use client'

import { useRouter } from "next/navigation" // ? next/router보다 강려크한 기능추가

export default function   DetailLink() {
	let router = useRouter();
	return (
		<button onClick={()=>{router.push('/')}}>버튼</button>
	)
}
