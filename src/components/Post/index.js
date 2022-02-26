import React from 'react';

export default function Card(props) {
	return (
		<div className='post'>
			<img src={`../assets/${props.coverImg}`} className='post--image' />
			<div className='post--details'>
				<div className='country--details'>
					<img src='../assets/pin.png'></img>
					<span>{props.location}</span>
					<img src={`../assets/${props.flag}`} className='post--flag' />
				</div>
				<p className='post--title'>{props.title}</p>
				<p className='post--date'>{props.date}</p>
				<span className='post--desc'>{props.description}</span>
			</div>
		</div>
	);
}
