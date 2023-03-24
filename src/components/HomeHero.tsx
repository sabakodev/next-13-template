import Image from 'next/image'

import EromangaImage from '@/components/img/Eromanga.png'
import KurisuImage from '@/components/img/Kurisu.jpg'
import OkabeKurisuImage from '@/components/img/Okabe-Kurisu.jpg'
import SailorMoonImage from '@/components/img/Sailor-Moon.jpg'
import HishiroImage from '@/components/img/Hishiro.png'
import RuiImage from '@/components/img/Rui.jpg'
import MeguminImage from '@/components/img/megumin.jpg'
import MeguminAltImage from '@/components/img/Megumin.png'

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
		src: RuiImage,
		alt: 'Rui'
	},
	{
		src: MeguminImage,
		alt: 'Megumin'
	},
	{
		src: MeguminAltImage,
		alt: 'Megumin'
	},

]

const randomAnime = animelist[Math.floor(Math.random() * animelist.length)]

export default function HomeHero() {
	return (
		<Image className="mx-auto relative z-0 h-96 object-cover" alt={randomAnime.alt} src={randomAnime.src} width={850} height={300} />
	)
}
