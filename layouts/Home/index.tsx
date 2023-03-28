import React from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import { Roboto_Mono } from 'next/font/google'

import Window from './components/Window'

import classes from './index.module.css'

const font = Roboto_Mono({ subsets: ['latin'] })

const Home = () => {
	return (
		<>
			<Head>
				<title>Dhins333</title>
				<meta name="description" content="Dhins333 Personal Website" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={clsx(classes.mainContainer, font.className)}>
				<Window headerTitle="Me" initialTop={150} initialLeft={50} />
			</main>
		</>
	)
}

export default Home
