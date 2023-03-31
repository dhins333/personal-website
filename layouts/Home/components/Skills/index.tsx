import React from 'react'

import classes from './index.module.css'

const Skills = () => {

	const skills = [
		{
			level: 'Expert',
			color: 'green',
			list: [
				{
					name: 'HTML',
					color: '#e44d26'
				},
				{
					name: 'CSS',
					color: '#264de4'
				},
				{
					name: 'Javascript',
					color: '#f7df1e'
				},
				{
					name: 'Node Js',
					color: '#83cd29'
				},
				{
					name: 'React',
					color: '#61dbfb'
				},
				{
					name: 'Next Js',
					color: '#000000'
				},
				{
					name: 'Express',
					color: '#000000'
				},
				{
					name: 'REST',
					color: '#000000'
				},
				{
					name: 'Graphql',
					color: '#e535ab'
				},
				{
					name: 'Git',
					color: '#f05030'
				},
				{
					name: 'Tailwind',
					color: '#01b7d6'
				},
				{
					name: 'Redux',
					color: '#764abc'
				},
			]
		},
		{
			level: 'Proficient',
			color: '#d9c21d',
			list: [
				{
					name: 'Typescript',
					color: '#2d79c7'
				},
				{
					name: 'C++',
					color: '#659bd3'
				},
				{
					name: 'React Native',
					color: '#61dbfb'
				},
				{
					name: 'Mongodb',
					color: '#00ae42'
				},
				{
					name: 'PostgreSQL',
					color: '#316192'
				},
				{
					name: 'Docker',
					color: '#2496ed'
				},
				{
					name: 'Gitlab CI',
					color: '#2496ed'
				},
				{
					name: 'Bash',
					color: '#3e474a'
				},
				{
					name: 'Nginx',
					color: '#009639'
				},
				{
					name: 'Elasticsearch',
					color: '#f0bf1a'
				},
				{
					name: 'Webpack',
					color: '#89d4fb'
				},
				{
					name: 'Workbox',
					color: '#616161'
				}
			]
		},
		{
			level: 'Competent',
			color: 'orange',
			list: [
				{
					name: 'Kubernetes',
					color: '#3077e2'
				},
				{
					name: 'AWS',
					color: '#ff9a00'
				},
				{
					name: 'Figma',
					color: '#000000'
				},
			]
		}
	]

	return (
		<main className={classes.container}>
			{skills.map(({level, list, color}, index) => {
				return (
					<section key={index}>
						<p className={classes.level} style={{ color }}>{level}</p>
						<div className={classes.skills}>
							{list.map(({ name, color }, index) => {
								return (
									<p 
										key={index}
										className={classes.skill} 
										style={{
											border: `2px solid ${color}`,
											color
										}}
									>
										{name}
									</p>
								)
							})}
						</div>
					</section>
				)
			})}
		</main>
	)
}

export default Skills