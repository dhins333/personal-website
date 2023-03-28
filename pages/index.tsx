import React from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import { Roboto_Mono } from 'next/font/google'

import classes from 'styles/index.module.css'

const font = Roboto_Mono({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Head>
				<title>Dhins333</title>
				<meta name="description" content="Dhins333 Personal Website" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={clsx(classes.mainContainer, font.className)}>
				<h1>Hello</h1>
			</main>
		</>
	)
}
