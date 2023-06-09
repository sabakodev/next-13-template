import HomeHero from '@/components/HomeHero'
import Image from 'next/image'
import Link from 'next/link'

// import styles from './page.module.css'

import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [


	{
		name: 'Push to deploy',
		description:
			'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
		icon: CloudArrowUpIcon,
	},
	{
		name: 'SSL certificates',
		description:
			'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
		icon: LockClosedIcon,
	},
	{
		name: 'Simple queues',
		description:
			'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
		icon: ArrowPathIcon,
	},
	{
		name: 'Advanced security',
		description:
			'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
		icon: FingerPrintIcon,
	},
]

export default async function Home() {
	return (
		<main>
			<div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
				<HomeHero />
				<div className="-mt-16 relative z-10 content-bg mx-auto max-w-2xl sm:text-center py-8 px-6 rounded-lg">
					<h2 className="text-3xl font-bold tracking-tight dark:text-gray-100 text-gray-900 sm:text-4xl">Home sweet localhost</h2>
					<p className="mt-8 text-lg leading-8 dark:text-gray-400 text-gray-600">
						This is Fray local mainframe, you would not access this page unless you needed to. If you believe accessing this page through illegal acces, please <b>disconnect now</b>.
					</p>
				</div>
				<div className="pb-24 sm:pb-32 pt-12 sm:pt-16">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-base font-semibold leading-7 dark:text-lime-600 text-rose-600">Deploy faster</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight dark:text-gray-100 text-gray-900 sm:text-4xl">
							Everything you need to deploy your app
						</p>
						<p className="mt-6 text-lg leading-8 dark:text-gray-400 text-gray-600">
							Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
							pulvinar et feugiat blandit at. In mi viverra elit nunc.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
						<dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
							{features.map((feature) => (
								<div key={feature.name} className="relative pl-16">
									<dt className="text-base font-semibold leading-7 dark:text-gray-100 text-gray-900">
										<div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg dark:bg-lime-600 bg-rose-600">
											<feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
										</div>
										{feature.name}
									</dt>
									<dd className="mt-2 text-base leading-7 dark:text-gray-400 text-gray-600">{feature.description}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
				{/* Component Here */}
			</div>
		</main>
	)
}
