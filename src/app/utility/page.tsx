"use client"

import { Fragment } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import ActionCard from '@/components/ActionCard'

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

const utilitiesTool = {
	title: 'phpMyAdmin',
	description: 'Manage database and beyond from a click at ease without worrying any unreadable formatting.',
	action: 'https://localhost',
	docs: 'https://docs.phpmyadmin.net/en/latest/',
}

export default function Utility() {
	return (
		<main>
			<div className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Development Utilities</h2>
						<p className="mt-6 text-lg leading-8">
							This is restricted development utilities for my personal use, any illegal access would be recorded.
						</p>
					</div>
					<ActionCard
						title={utilitiesTool.title}
						description={utilitiesTool.description}
						action={utilitiesTool.action}
						docs={utilitiesTool.docs}
					/>
				</div>
			</div>
		</main>
	)
}
