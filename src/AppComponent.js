import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const AppComponent = () => {

	const imageData = [
		{
			title: "By The Water",
			url:
				"https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
		},
		{
			title: "A Winding Path",
			url:
				"https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
		},
		{
			title: "Look To The Ocean",
			url:
				"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
		},
		{
			title: "A Coastal City",
			url:
				"https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
		},
		{
			title: "Rising Mountains",
			url:
				"https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
		}
	];


	return (
		<div className="base">
			<div className="base-container">
				{imageData.map(
					(item) => (
						(
							<ImagePanel myStyle={{ backgroundImage: `url(${item.url})` }}>
								<h3>{item.title}</h3>
							</ImagePanel>
						)
					)
				)}</div>

		</div>
	)
}


export default AppComponent;

const ImagePanel = (props) => {
	const [active, setActive] = useState(false);


	const handleClick = (e) => {
		setActive((prev) => !prev);
	};


	return (
		<div className={`${active ? "panel active" : "panel"}`} style={props.myStyle} onClick={handleClick}>
			{props.children}
		</div>
	);
};