import React from 'react'
import Head from 'next/head'
import { Roboto_Mono } from 'next/font/google'
import{ Analytics } from'@vercel/analytics/react'

import type { AppProps } from 'next/app'

import 'styles/globals.css'

const font = Roboto_Mono({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Dhins333</title>
				<meta name="description" content="Dhins333's Personal Website" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
				<link rel="manifest" href="/manifest.json" />
			</Head>
			<div className={font.className}>
				<Component {...pageProps} />
				<Analytics />
			</div>
		</>
	)
}
