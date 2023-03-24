import Image from 'next/image'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faFacebook, faGithub, faInstagram, faLinkedin, faSteam, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

interface SocialLinks {
	name: string
	url: string
	icon: IconDefinition
}

const social = [
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/ReyhanFabiano',
		icon: faLinkedin
	},
	{
		name: 'Facebook',
		url: 'https://facebook.com/ReyhanFabiano',
		icon: faFacebook
	},
	{
		name: 'Instagram',
		url: 'https://instagram.com/ReyhanFabianoo',
		icon: faInstagram
	},
	{
		name: 'Steam',
		url: 'https://steamcommunity.com/id/Fray117',
		icon: faSteam
	},
	{
		name: 'YouTube',
		url: 'https://youtube.com/c/Fray117',
		icon: faYoutube
	},
	{
		name: 'GitHub',
		url: 'https://github.com/Fray117',
		icon: faGithub
	},
	{
		name: 'Twitter',
		url: 'https://twitter.com/ReyhanFabiano',
		icon: faTwitter
	},
]

export default function Contact() {
	return (
		<main>
			<div className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How to reach</h2>
						<p className="mt-6 text-lg leading-8">
							You could read my blog about <Link className="content-link" href="https://fabianoo.net/">software developer</Link> and many personal story to tell, currently I open to any inquiries through email, WhatsApp & other social media.
						</p>
						<div className="mt-10 grid grid-cols-2 gap-8">
							<div className="my-auto">
								<div>
									<span className="dark:text-gray-400 text-gray-600">Email: </span>
									<span><Link className="font-medium" href="mailto:fray117@exploiter.id">fray117@exploiter.id</Link></span>
								</div>
								<div>
									<span className="dark:text-gray-400 text-gray-600">Alt. Email: </span>
									<span><Link className="font-medium" href="mailto:reyhan@fabianoo.net">reyhan@fabianoo.net</Link></span>
								</div>
								<div>
									<span className="dark:text-gray-400 text-gray-600">WhatsApp: </span>
									<span><Link className="font-medium" href="https://wa.me/62859106681052">+62 859-1066-81052</Link></span>
								</div>
							</div>
							<div className="grid grid-cols-4 justify-items-center content-center gap-6">
								{
									social.map((link: SocialLinks, index) => (
										<div key={index} className="w-8 h-8 dark:hover:text-gray-200 hover:text-gray-800">
											<Link href={link.url}>
												<FontAwesomeIcon icon={link.icon} />
											</Link>
										</div>
									))
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
