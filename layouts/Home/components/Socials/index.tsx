import React from 'react'
import Image from 'next/image'

import classes from './index.module.css'

const Socials = () => {
	return (
		<main className={classes.container}>
			<section className={classes.mailSection}>
				<Image src="/logos/email.svg" alt="email" width={50} height={50} />
				<p className={classes.mail}>dhins333@gmail.com</p>
			</section>
			<section className={classes.linksSection}>
				<a target="_blank" href="https://www.linkedin.com/in/dhinesh-kumar-s-4aaba31b8/" rel="noreferrer">
					<Image src="/logos/linkedin.svg" alt="email" width={50} height={50} />
				</a>
				<a target="_blank" href="https://github.com/dhins333" rel="noreferrer">
					<Image src="/logos/github.svg" alt="email" width={50} height={50} />
				</a>
				<a target="_blank" href="https://steamcommunity.com/id/dhins" rel="noreferrer">
					<Image src="/logos/steam.svg" alt="email" width={50} height={50} />
				</a>
			</section>
		</main>
	)
}

export default Socials