'use client'

import Image from 'next/image'
import Link from 'next/link'

// import styles from './page.module.css'

import { CheckIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const includedFeatures = [
	'Private forum access',
	'Member resources',
	'Entry to annual conference',
	'Official member t-shirt',
]

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

export default function Home() {
	const [anime, setAnime] = useState(animelist[0])

	return (
		<main>
			<div className="pb-24 sm:pb-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
					<Image className="mx-auto relative z-0 h-96 object-cover" alt={anime.alt} src={anime.src} width={850} height={300} />
					<div className="-mt-16 relative z-10 content-bg mx-auto max-w-2xl sm:text-center py-4 px-6 rounded-lg">
						<h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Home sweet localhost</h2>
						<p className="mt-8 text-lg leading-8 text-gray-400">
							This is Fray local mainframe, you would not access this page unless you needed to. If you believe accessing this page through illegal acces, please <b>disconnect now</b>.
						</p>
					</div>
					<div className="bg-white mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
						<div className="p-8 sm:p-10 lg:flex-auto">
							<h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
							<p className="mt-6 text-base leading-7 text-gray-600">
								Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
								repellendus etur quidem assumenda.
							</p>
							<div className="mt-10 flex items-center gap-x-4">
								<h4 className="flex-none text-sm font-semibold leading-6 dark:text-lime-600 text-rose-600">What’s included</h4>
								<div className="h-px flex-auto bg-gray-100" />
							</div>
							<ul
								role="list"
								className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
							>
								{includedFeatures.map((feature) => (
									<li key={feature} className="flex gap-x-3">
										<CheckIcon className="h-6 w-5 flex-none dark:text-lime-600 text-rose-600" aria-hidden="true" />
										{feature}
									</li>
								))}
							</ul>
						</div>
						<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
							<div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
								<div className="mx-auto max-w-xs px-8">
									<p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
									<p className="mt-6 flex items-baseline justify-center gap-x-2">
										<span className="text-5xl font-bold tracking-tight text-gray-900">$349</span>
										<span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
									</p>
									<a
										href="#"
										className="mt-10 block w-full rounded-md dark:bg-lime-600 bg-rose-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:dark:bg-lime-500 bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:dark:outline-lime-600 outline-rose-600"
									>
										Get access
									</a>
									<p className="mt-6 text-xs leading-5 text-gray-600">
										Invoices and receipts available for easy company reimbursement
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
