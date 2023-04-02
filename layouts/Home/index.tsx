import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import { Roboto_Mono } from 'next/font/google'

import Icon from './components/Icon'
import Window from './components/Window'
import Skills from './components/Skills'
import Socials from './components/Socials'
import Me from './components/Me'

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
			open: false,
			Component: <Me />,
			height: 450,
			width: 300
		},
		{
			id: 'EXPERIENCE',
			iconSrc: '/icons/experience.svg',
			headerTitle: 'Experience',
			initialTop: 0,
			initialLeft: 0,
			open: false,
			Component: null,
			height: 600,
			width: 300
		},
		{
			id: 'SKILLS',
			iconSrc: '/icons/skills.svg',
			headerTitle: 'Skills',
			initialTop: 0,
			initialLeft: 0,
			open: false,
			Component: <Skills />,
			height: 550,
			width: 300
		},
		{
			id: 'SOCIALS',
			iconSrc: '/icons/socials.svg',
			headerTitle: 'Socials',
			initialTop: 0,
			initialLeft: 0,
			open: false,
			Component: <Socials />,
			height: 220,
			width: 300
		}
	])

	const [focused, setFocused] = useState<null | string>(null)

	useEffect(() => {
		if (window.innerWidth > 480) {
			setWindows((windowsData) => {
				const newWindows = [...windowsData]
	
				newWindows[0] = {
					...newWindows[0],
					open: true,
					initialTop: windowsData[0].open ? windowsData[0].initialTop : Math.floor(Math.random() * ((window.innerHeight - windowsData[0].height) - 146) + 146),
					initialLeft: windowsData[0].open ? windowsData[0].initialLeft : Math.floor(Math.random() * (window.innerWidth - windowsData[0].width + 1))
				}
	
				return newWindows
			})

			setFocused('ME')
		}
	}, [])

	const openWindow = (index: number) => {
		if (index === 4 || windows[index].id === focused && windows[index].open) return

		const newWindows = [...windows]

		newWindows[index] = {
			...newWindows[index],
			open: true,
			initialTop: windows[index].open ? windows[index].initialTop : Math.floor(Math.random() * ((window.innerHeight - windows[index].height) - 146) + 146),
			initialLeft: windows[index].open ? windows[index].initialLeft : Math.floor(Math.random() * (window.innerWidth - windows[index].width + 1))
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
			initialLeft: 0,
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
					<a href="#" >
						<Icon index={4} src="/icons/resume.svg" alt="Resume" name="Resume" onClick={openWindow}  />
					</a>
				</section>
				{windows.map(({id, headerTitle, initialTop, initialLeft, open, Component, height, width}, index) => {
					if (open) {
						return (
							<Window 
								key={id} 
								headerTitle={headerTitle} 
								initialTop={initialTop} 
								initialLeft={initialLeft}  
								index={index}
								focused={focused === id}
								height={height}
								width={width}
								onClick={openWindow}
								onClose={closeWindow}
							>
								{Component}
							</Window>
						)
					}

					return null
				})}
			</main>
		</>
	)
}

export default Home
