/**
 * Module import 
 */
import styles from '@styles/PesonCard.module.css';
import React, { Component, useState } from 'react';
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
 * Peson card components
 * 
 * show state and weight data in real time. 
 *
 * @export
 * @class PesonCard
 * @extends {Component<IPesonCardProps, IPesonCardState>}
 */
export function PesonCard(props: IPesonCardProps) {

	const [ etat, setEtat ] = useState(props.etat)
	const [ color, setColor ] = useState(`state_color_${props.etat}`)

	return (
		<div className={styles.card_container}>
			<div className={styles.card}>
				<div className={styles.card_title}>Peson {props.pesonNumber}</div>
				<div className={styles.state_group}>
					<div className={styles.state_title}>Etat :</div>
					<div className={styles[color]}></div>
					<div className={styles.state_value}>
						{etat == 'enattente' ? 'En attente' : _.capitalize(etat)}
						</div>
				</div>
				<div className={styles.weight_group}>
					<div className={styles.weight_title}>Poids :</div>
					<div className={styles.weight_value}>{props.poids} grs</div>
				</div>
			</div>
		</div>
	)
}

PesonCard.defaultProps = {
	pesonNumber: 1,
	etat: 'actif',
	poids: 140
}


