import React, { useRef, useState } from 'react'

import classes from './index.module.css'

type WindowProps = {
  headerTitle: string,
  initialTop: number,
  initialLeft: number
}

const Window: React.FC<WindowProps> = (props) => {
	const { headerTitle, initialTop, initialLeft } = props

	const [top, setTop] = useState<number>(initialTop)
	const [left, setLeft] = useState<number>(initialLeft)

	const windowRef = useRef<HTMLElement | null>(null)

	const onHeaderDrag = (e: React.MouseEvent) => {
		if (!windowRef.current) return

		const element = windowRef.current

		e.preventDefault()

		let pos1 = 0
		let pos2 = 0
		let pos3 = e.clientX
		let pos4 = e.clientY

		document.onmousemove = function (dragE: MouseEvent) {
			dragE.preventDefault()
			pos1 = pos3 - dragE.clientX
			pos2 = pos4 - dragE.clientY
			pos3 = dragE.clientX
			pos4 = dragE.clientY
      
			const newTop = element.offsetTop - pos2
			const newLeft = element.offsetLeft - pos1

			if (newTop >= 0 && newTop <= (window.innerHeight - 32) && newLeft >= 0 && newLeft <= (window.innerWidth - 300)) {
				setTop(newTop)
				setLeft(newLeft)
			}
		}

		document.onmouseup = function () {
			document.onmouseup = null
			document.onmousemove = null
		}
	}

	return (
		<article 
			ref={windowRef} 
			className={classes.container} 
			style={{
				top: `${top}px`,
				left: `${left}px`
			}}
		>
			<header onMouseDown={onHeaderDrag} className={classes.header}>
				<p className={classes.headerTitle}>{headerTitle}</p>
				<button className={classes.closeButton} />
			</header>
		</article>
	)
}

export default Window