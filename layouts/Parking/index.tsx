import React from 'react'
import Image from 'next/image'

import classes from './index.module.css'

const Parking = () => {
	return (
		<main className={classes.container}>
			<Image src="/images/bob-with-finger.jpg" alt="Bob Odenkirk holding an image of the Kid named finger meme" width={330} height={497} />
		</main>
	)
}

export default Parking