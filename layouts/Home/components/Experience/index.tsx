import React from 'react'

import classes from './index.module.css'

const Experience = () => {
	return (
		<main className={classes.container}>
			<h2 className={classes.heading}>Software Engineer | Revidd</h2>
			<p className={classes.duration}>Dec 2020 – Dec 2022</p>
			<ul className={classes.content}>
				<li className={classes.point}>Developed various reusable UI Components with React</li>
				<li className={classes.point}>Worked extensively on building complete modules / features in Single Page and Server Rendered Applications (with Next JS)</li>
				<li className={classes.point}>Integrated Several REST APIs and Graphql queries / mutations in the front end</li>
				<li className={classes.point}>Integrated various payment providers in the front end including Razorpay, Stripe, Paypal, enabling client payments</li>
				<li className={classes.point}> Setup and Maintained a Single Page Application Project by configuring various build tools like Webpack, Babel, EsLint, Prettier</li>
				<li className={classes.point}>Involved in setting up CI / CD pipelines for a Single Page Application Project with Gitlab CI/CD</li>
			</ul>
		</main>
	)
}

export default Experience