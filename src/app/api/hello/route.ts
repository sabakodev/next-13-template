export async function GET(request: Request) {
	return new Response(JSON.stringify({
		code: 200,
		message: 'Hello world',
	}))
}
