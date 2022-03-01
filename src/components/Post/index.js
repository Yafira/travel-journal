import React from 'react';
import './post.css';

export default function Card(props) {
	return (
		<div className='post'>
			<img
				src={`../assets/${props.coverImg}`}
				className='post--image'
				alt='location-img'
			/>
			<div className='post--details'>
				<div className='country--details'>
					<img src='../assets/pin.png' alt='location-pin' />
					<span>{props.location}</span>
					<img
						src={`../assets/${props.flag}`}
						className='post--flag'
						alt='flag'
					/>
					<a href={props.direction} className='post--map'>
						View on Google Maps
					</a>
				</div>
				<p className='post--title'>{props.title}</p>
				<p className='post--date'>{props.date}</p>
				<span className='post--desc'>{props.description}</span>
			</div>
		</div>
	);
}
