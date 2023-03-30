import React, { ReactNode, useEffect, useRef, useState } from 'react'

import classes from './index.module.css'

type TWindowProps = {
	index: number,
  headerTitle: string,
  initialTop: number,
  initialLeft: number,
	focused: boolean,
	onClick: (index: number) => void
	onClose: (index: number) => void
	children: ReactNode,
	height: number,
	width: number
}

const Window: React.FC<TWindowProps> = (props) => {
	const { headerTitle, initialTop, initialLeft, index, focused, onClick, onClose, children, height, width } = props

	const isSmallScreen = window.innerWidth <= 480

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
	}, [index, onClose])

	useEffect(() => {
		return () => {
			document.onmouseup = null
			document.onmousemove = null
			document.ontouchend = null
			document.ontouchmove = null
		}
	}, [])

	const onHeaderDrag = (e: React.MouseEvent | React.TouchEvent) => {
		if (!windowRef.current) return

		onClick(index)

		const element = windowRef.current

		let pos1 = 0
		let pos2 = 0
		let pos3 = 0
		let pos4 = 0

		if (e.nativeEvent instanceof MouseEvent) {
			pos3 = e.nativeEvent.clientX
			pos4 = e.nativeEvent.clientY
		}

		if (e.nativeEvent instanceof TouchEvent) {
			pos3 = e.nativeEvent.touches[0].clientX
			pos4 = e.nativeEvent.touches[0].clientY
		}

		document.onmousemove = function (dragE: MouseEvent) {
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

		document.ontouchmove = function (dragE: TouchEvent) {
			pos1 = pos3 - dragE.touches[0].clientX
			pos2 = pos4 - dragE.touches[0].clientY
			pos3 = dragE.touches[0].clientX
			pos4 = dragE.touches[0].clientY
      
			const newTop = element.offsetTop - pos2
			const newLeft = element.offsetLeft - pos1

			if (newTop >= 0) {
				setTop(newTop)
				setLeft(newLeft)
			}
		}

		document.ontouchend = function () {
			document.ontouchend = null
			document.ontouchmove = null
		}
	}

	return (
		<article 
			ref={windowRef} 
			onClick={() => {onClick(index)}}
			className={classes.container} 
			style={{
				top: isSmallScreen ?  '0px' :`${top}px`,
				left: isSmallScreen ? '0px' : `${left}px`,
				boxShadow: focused  ? '1rem 1rem 0px var(--black)' : '',
				zIndex: focused ? 1 : 0,
				height: isSmallScreen ? '100vh' : height,
				width: isSmallScreen ? '100vw' : width
			}}
		>
			<header onMouseDown={onHeaderDrag} onTouchStart={onHeaderDrag} className={classes.header}>
				<p className={classes.headerTitle}>{headerTitle}</p>
				<button onClick={() => {onClose(index)}} className={classes.closeButton} />
			</header>
			{children}
		</article>
	)
}

export default Window