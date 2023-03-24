export async function GET(request: Request) {
	const animelist = [
		{
			src: 'http://localhost:8080/assets/img/Eromanga.png',
			alt: 'Sagiri'
		},
		{
			src: 'http://localhost:8080/assets/img/Kurisu.jpg',
			alt: 'Kurisu'
		},
		{
			src: 'http://localhost:8080/assets/img/Okabe-Kurisu.jpg',
			alt: 'Okabe & Kurisu'
		},
		{
			src: 'http://localhost:8080/assets/img/Sailor-Moon.jg',
			alt: 'Usagi'
		},
		{
			src: 'http://localhost:8080/assets/img/Hishiro.png',
			alt: 'Hishiro'
		},
		{
			src: 'http://localhost:8080/assets/img/Moe.png',
			alt: 'Loli'
		},
		{
			src: 'http://localhost:8080/assets/img/Rui.jpg',
			alt: 'Rui'
		},

	]

	const randomAnime = animelist[Math.floor(Math.random() * animelist.length)]

	return new Response(JSON.stringify(randomAnime))
}
