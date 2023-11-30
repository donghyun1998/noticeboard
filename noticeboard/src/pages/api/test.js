export default function handler(request, response) {
	console.log("response 잡았다요놈");
	return (response.status(200).json('처리완료'))
}
