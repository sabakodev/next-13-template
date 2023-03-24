import EromangaImage from '../../../../public/img/Eromanga.png'
import KurisuImage from '../../../../public/img/Kurisu.jpg'
import OkabeKurisuImage from '../../../../public/img/Okabe-Kurisu.jpg'
import SailorMoonImage from '../../../../public/img/Sailor-Moon.jpg'
import HishiroImage from '../../../../public/img/Hishiro.png'
import MoeImage from '../../../../public/img/Moe.png'
import RuiImage from '../../../../public/img/Rui.jpg'

export async function GET(request: Request) {
	const animelist = [
		{
			src: EromangaImage,
			alt: 'Sagiri'
		},
		{
			src: KurisuImage,
			alt: 'Kurisu'
		},
		{
			src: OkabeKurisuImage,
			alt: 'Okabe & Kurisu'
		},
		{
			src: SailorMoonImage,
			alt: 'Usagi'
		},
		{
			src: HishiroImage,
			alt: 'Hishiro'
		},
		{
			src: MoeImage,
			alt: 'Loli'
		},
		{
			src: RuiImage,
			alt: 'Rui'
		},

	]

	const randomAnime = animelist[Math.floor(Math.random() * animelist.length)]

	return new Response(JSON.stringify(randomAnime))
}
