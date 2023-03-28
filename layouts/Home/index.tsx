import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import { Roboto_Mono } from 'next/font/google'

import Icon from './components/Icon'
import Window from './components/Window'

import classes from './index.module.css'

const font = Roboto_Mono({ subsets: ['latin'] })

const Home = () => {
	const [windows, setWindows] = useState([
		{
			id: 'ME',
			headerTitle: 'Me',
			iconSrc: '/icons/me.svg',
			initialTop: 0,
			initialLeft: 0,
			open: false
		},
		{
			id: 'EXPERIENCE',
			iconSrc: '/icons/experience.svg',
			headerTitle: 'Experience',
			initialTop: 0,
			initialLeft: 0,
			open: false
		},
		{
			id: 'SKILLS',
			iconSrc: '/icons/skills.svg',
			headerTitle: 'Skills',
			initialTop: 0,
			initialLeft: 0,
			open: false
		},
		{
			id: 'SOCIALS',
			iconSrc: '/icons/socials.svg',
			headerTitle: 'Socials',
			initialTop: 0,
			initialLeft: 0,
			open: false
		},
	])

	const [focused, setFocused] = useState<null | string>(null)

	useEffect(() => {
		openWindow(0)
	}, [])

	const openWindow = (index: number) => {
		if (windows[index].id === focused && windows[index].open) return

		const newWindows = [...windows]

		newWindows[index] = {
			...newWindows[index],
			open: true,
			initialTop: windows[index].open ? windows[index].initialTop : Math.floor(Math.random() * (window.innerHeight - 601)),
			initialLeft: windows[index].open ? windows[index].initialLeft : Math.floor(Math.random() * (window.innerWidth - 301))
		}

		setWindows(newWindows)
		setFocused(newWindows[index].id)
	}

	const closeWindow = (index: number) => {
		const newWindows = [...windows]

		newWindows[index] = {
			...newWindows[index],
			open: false,
			initialTop: 0,
			initialLeft: 0
		}

		setWindows(newWindows)
		setFocused(null)
	}

	return (
		<>
			<Head>
				<title>Dhins333</title>
				<meta name="description" content="Dhins333 Personal Website" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={clsx(classes.mainContainer, font.className)}>
				<section className={classes.iconsSection}>
					{windows.map(({ headerTitle, iconSrc, id }, index) => {
						return <Icon key={id} index={index} src={iconSrc} alt={headerTitle} name={headerTitle} onClick={openWindow} />
					})}
				</section>
				{windows.map(({id, headerTitle, initialTop, initialLeft, open}, index) => {
					if (open) {
						return (
							<Window 
								key={id} 
								headerTitle={headerTitle} 
								initialTop={initialTop} 
								initialLeft={initialLeft}  
								index={index}
								focused={focused === id}
								onClick={openWindow}
								onClose={closeWindow}
							/>
						)
					}

					return null
				})}
			</main>
		</>
	)
}

export default Home
