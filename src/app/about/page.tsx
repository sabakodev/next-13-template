import Image from 'next/image'
import Link from 'next/link'

export default function About() {
	return (
		<main>
			<div className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
						<p className="mt-6 text-lg leading-8">
							Short story, I&#39;m a passionate programmer but lack motivation, yet sometimes I&#39;d likely ditch my passion. I come from a small island in Indonesia next to Bali island called Java island, which some of you might confuse with that one specific programming language that is so popular and runs almost on every computer. Here also had great coffee, which I fell in love with immediately after drinking my first sip.
						</p>
						<p className="mt-6 text-lg leading-8">
							I spent most of my time learning new technology stacks & also made many contributions to <Link className="content-link" href="https://exploiter.id/">ExploiterID</Link> and found a way to improve our way of security testing. I also had to contribute to many other communities on several occasions, with one of them IndoSec as General Advisor.
						</p>
						<p className="mt-6 text-lg leading-8">
							Most people around me said that I could lead people and should involve in management more than technical problems, or I might be just a natural leader.
						</p>
						<p className="mt-6 text-lg leading-8">
							I hate being called a weeb, which somehow sounds degenerate to me. I prefer to make people call me HikiProgrammer, as most of my work has been done from home.
						</p>
						<p className="mt-6 text-lg leading-8">
							As something to do in my spare time, I like to watch Anime or read Manga, sometime I would call myself a photography hobbyist. I love to shoot retro stuff and nature, and it&#39;s been difficult for me to shoot living objects such as animals or humans. My dream is to could use a living object as my subject.
						</p>
					</div>
				</div>
			</div>
		</main>
	)
}
