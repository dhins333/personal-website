import React from 'react'
import Image from 'next/image'

import classes from './index.module.css'

type TIconProps = {
	index: number,
  src: string,
  name: string,
  alt: string,
	onClick: (id: number) => void
}

const Icon:React.FC<TIconProps> = (props) => {

	const { index, src, name, alt, onClick } = props

	return (
		<article onClick={() => {onClick(index)}} className={classes.container}>
			<Image draggable={false} src={src} alt={alt} height={75} width={75} />
			<p className={classes.name}>{name}</p>
		</article>
	)
}

export default Icon