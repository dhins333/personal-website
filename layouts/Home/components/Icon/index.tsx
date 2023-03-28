import React from 'react'
import Image from 'next/image'

import classes from './index.module.css'

type TIconProps = {
  src: string,
  name: string,
  alt: string
}

const Icon:React.FC<TIconProps> = (props) => {

	const { src, name, alt } = props

	return (
		<article className={classes.container}>
			<Image draggable={false} src={src} alt={alt} height={75} width={75} />
			<p className={classes.name}>{name}</p>
		</article>
	)
}

export default Icon