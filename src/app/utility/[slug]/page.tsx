"use client"

import { Fragment } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import {
	BriefcaseIcon,
	CalendarIcon,
	CheckIcon,
	ChevronDownIcon,
	CurrencyDollarIcon,
	LinkIcon,
	MapPinIcon,
	PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export default function UtilityItem({
	params,
}: {
	params: { slug: string }
}) {
	return (
		<main>
			<div className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Projects {params.slug} </h2>
						<p className="mt-6 text-lg leading-8">
							You could read my blog about {JSON.stringify(params)}
							<Link className="content-link" href="https://fabianoo.net/">software developer</Link> and many personal story to tell, currently I open to any inquiries through email, WhatsApp & other social media.
						</p>
					</div>
				</div>
			</div>
		</main>
	)
}
