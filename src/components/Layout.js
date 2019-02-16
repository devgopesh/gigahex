import React from 'react';
import classes from '../stylesheets/Layout.module.css'

import img1 from '../assets/appartment.svg'
import img2 from '../assets/house.svg'

import { connect } from 'react-redux';
import * as actions from '../store/actions/index'

const Layout = ({accomodationType, apartment, house}) => {
	const showImage = (type) => {		
		accomodationType(type);	
	}

	return (
		<div className={classes.layout}>
			<h3>Choose accomodation type</h3>
			<div className={classes.contain}>
				<div className={!apartment ? classes.a : classes.ac} onClick={() => showImage("apartment")}>					
					<img src={img1} className={apartment ? classes.img : null} alt="apartment" />
					<div className={classes.icon}>
						{apartment ? <i className="fas fa-check-circle"></i>
						 : <i className="far fa-circle"></i>}
					</div>
					<p>Apartment</p>
				</div>
				<div className={!house ? classes.h : classes.hc} onClick={() => showImage("house")}>
					<img src={img2} className={house ? classes.img : null} alt="house" />
					<div className={classes.icon}>
						{house ? <i className="fas fa-check-circle"></i>
						 : <i className="far fa-circle"></i>}
					</div>
					<p>House</p>
				</div>
			</div>
			<div className={classes.btn}>
				<button className={classes.btn1}>Cancel</button>
				<button className={classes.btn2}>Next</button>
			</div>
		</div>
	);
}

const mapStateToProps = state => {
	return {		
		apartment: state.accomodation.apartment,
		house: state.accomodation.house
	}
}

const mapDispatchToProps = dispatch => {
	return {
		accomodationType: (type) => dispatch(actions.accomodationType(type))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);