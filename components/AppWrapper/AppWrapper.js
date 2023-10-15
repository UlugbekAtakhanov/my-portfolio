
import React from 'react'
import NavigationDots from '../NavigationDots/NavigationDots'
import SocialMedia from '../SocialMedia/SocialMedia'

const AppWrapper = (Component, id, className) => function HOC() {
	return (
		<div className={`flex ${className}`} id={id}>
			<div className='self-end absolute z-10 hidden sm:block'>
				<SocialMedia />
			</div>
			<Component />
			<div className='self-center absolute right-0 z-[11] '>
				<NavigationDots active={id} />
			</div>
		</div>
	)
}

export default AppWrapper