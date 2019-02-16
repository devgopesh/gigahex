import React from 'react';
import img from '../assets/adhoc-logo.png';
import classes from '../stylesheets/Sidebar.module.css';

const Sidebar = () => {
	return (
		<div className={classes.side}>
			<img src={img} alt="adhoc" />
			Houz
		</div>
	);
}

export default Sidebar;