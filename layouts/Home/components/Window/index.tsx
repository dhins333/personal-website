import React, { useEffect, useRef, useState } from 'react'

import classes from './index.module.css'

type TWindowProps = {
	index: number,
  headerTitle: string,
  initialTop: number,
  initialLeft: number,
	focused: boolean,
	onClick: (index: number) => void
	onClose: (index: number) => void
}

const Window: React.FC<TWindowProps> = (props) => {
	const { headerTitle, initialTop, initialLeft, index, focused, onClick, onClose } = props

	const [top, setTop] = useState<number>(initialTop)
	const [left, setLeft] = useState<number>(initialLeft)

	const windowRef = useRef<HTMLElement | null>(null)

	useEffect(() => {
		const observer = new IntersectionObserver((e) => {
			if (!e[0].isIntersecting) {
				onClose(index)
			}
		}, {
			threshold: 0
		})

		if (windowRef.current) {
			observer.observe(windowRef.current)
		}

		return () => {
			observer.disconnect()
		}
	}, [windowRef.current, index])

	useEffect(() => {
		return () => {
			document.onmouseup = null
			document.onmousemove = null
		}
	}, [])

	const onHeaderDrag = (e: React.MouseEvent) => {
		if (!windowRef.current) return

		onClick(index)

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

			if (newTop >= 0) {
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
			onClick={() => {onClick(index)}}
			className={classes.container} 
			style={{
				top: `${top}px`,
				left: `${left}px`,
				boxShadow: focused  ? '1rem 1rem 0px var(--black)' : '',
				zIndex: focused ? 1 : 0
			}}
		>
			<header onMouseDown={onHeaderDrag} className={classes.header}>
				<p className={classes.headerTitle}>{headerTitle}</p>
				<button onClick={() => {onClose(index)}} className={classes.closeButton} />
			</header>
		</article>
	)
}

export default Window