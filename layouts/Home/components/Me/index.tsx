import React from 'react'

import classes from './index.module.css'

const Me = () => {
	return (
		<main className={classes.container}>
			<p className={classes.title}>Hi</p>
			<p className={classes.content}>I am <span className={classes.highlight}>Dhinesh Kumar.S (Internet Handle - dhins333/dhins)</span>. I am a <span className={classes.highlight}>Software Developer</span>, to learn more click the other icons in the Home screen or check out my <a href="/resume.pdf" target="_blank" className={classes.resume}>resume</a></p>
			<p className={classes.ps}>PS: The windows can be moved around the screen by dragging the window header</p>
		</main>
	)
}

export default Me