/**
 * Module import 
 */
import styles from '@styles/PesonCard.module.css';
import React, { Component } from 'react';
import _ from "lodash"; 

/**
 * Props's interface for pesonCard component
 * 
 * set weight, state and nember of peson
 *
 * @export
 * @interface IPesonCardProps
 */
export interface IPesonCardProps {
	pesonNumber: number;
	etat: string;
	poids: number | null;
}

/**
 * State's interface for pesonCard component
 * 
 * handle color circle for peson's state
 *
 * @export
 * @interface IPesonCardState
 */
export interface IPesonCardState {
	etat: string;
	color: string;
}

/**
 * Peson card components
 * 
 * show state and weight data in real time. 
 *
 * @export
 * @class PesonCard
 * @extends {Component<IPesonCardProps, IPesonCardState>}
 */
export class PesonCard extends Component<IPesonCardProps, IPesonCardState> {
	static defaultProps = {
		pesonNumber: 1,
		etat: 'actif',
		poids: 140
	}
	constructor(props: IPesonCardProps){
		super(props)
		this.state = {
			etat: this.props.etat, 
			color: `state_color_${this.props.etat}`
		}
	}
	render() {
		return (
			<div className={styles.card_container}>
				<div className={styles.card}>
					<div className={styles.card_title}>Peson {this.props.pesonNumber}</div>
					<div className={styles.state_group}>
						<div className={styles.state_title}>Etat :</div>
						<div className={styles[this.state.color]}></div>
						<div className={styles.state_value}>
							{this.state.etat == 'enattente' ? 'En attente' : _.capitalize(this.state.etat)}
							</div>
					</div>
					<div className={styles.weight_group}>
						<div className={styles.weight_title}>Poids :</div>
						<div className={styles.weight_value}>{this.props.poids} grs</div>
					</div>
				</div>
			</div>
		)
	}
}


