import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter'
})

export const metadata = {
	title: 'Fray.local',
	description: 'Fray local development mainframe',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<footer className="px-6 lg:px-8 pt-8 pb-10 w-full">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<Link href="/" className="text-xl font-bold">Fray.local</Link>
					</div>
				</footer>
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					{children}
				</div>
				<footer className="px-6 lg:px-8 py-8 w-full">
					<div className="mx-auto max-w-7xl px-6 lg:px-8 h-full grid grid-cols-2 content-center text-sm">
						<span>Made heartless by Fabiano &copy; 2023</span>
						<div className="justify-self-end grid grid-cols-4 gap-4">
							<Link className="hover:text-gray-200" href="/about">About</Link>
							<Link className="hover:text-gray-200" href="/projects">Projects</Link>
							<Link className="hover:text-gray-200" href="/utility">Utility</Link>
							<Link className="hover:text-gray-200" href="/contact">Contact</Link>
						</div>
					</div>
				</footer>
			</body>
		</html>
	)
}
