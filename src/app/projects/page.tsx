"use client"

import { Fragment } from 'react'

import Image from 'next/image'
import Link from 'next/link'

const callouts = [
	{
		name: 'Desk and Office',
		description: 'Work from home accessories',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
		imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
		href: '#',
	},
	{
		name: 'Self-Improvement',
		description: 'Journals and note-taking',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
		imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
		href: '#',
	},
	{
		name: 'Travel',
		description: 'Daily commute essentials',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
		imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
		href: '#',
	},
]

export default function Project() {
	return (
		<main>
			<div className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Projects </h2>
						<p className="mt-6 text-lg leading-8">
							I put a showcase on my projects that publicly disclosure, any other project might be hidden due to their respective request.
						</p>
					</div>
					<div className="mx-auto max-w-2xl py-16 sm:pt-24 lg:max-w-none">
						<div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
							{callouts.map((callout) => (
								<div key={callout.name} className="group relative">
									<div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
										<img
											src={callout.imageSrc}
											alt={callout.imageAlt}
											className="h-full w-full object-cover object-center"
										/>
									</div>
									<h3 className="mt-6 text-sm text-gray-500">
										<a href={callout.href}>
											<span className="absolute inset-0" />
											{callout.name}
										</a>
									</h3>
									<p className="text-base font-semibold dark:text-gray-100 text-gray-900">{callout.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
