import React, { useState } from 'react';
import style from '@styles/ServiceCard.module.css';
import _ from "lodash"; 

import { EColorConstants } from '@constant/colorConstant';

/**
 * Props's interface for Service Card
 * 
 * Set service name and state
 *
 * @export
 * @interface IServiceCardProps
 */
export interface IServiceCardProps {
	serviceName: string;
	etat: 'actif' | 'inactif' | 'enattente' | 'maintenance';
}

export interface IServiceCardState {
	etat: 'actif' | 'inactif' | 'enattente' | 'maintenance';
	color: string;
}

/**
 * Service card component 
 * 
 * Show name and state, user can test and see error if triggered
 * 
 * @export
 * @param {IServiceCardProps} props
 * @return {*} 
 */
export function ServiceCard (props: IServiceCardProps) {

	const [etat, setEtat] = useState(props.etat)
	const [color, setColor] = useState(EColorConstants[props.etat])

	const handleClick = () => {
		setEtat('enattente');
		setColor(EColorConstants['enattente']);
		setTimeout(() => {
			setEtat(props.etat);
			setColor(EColorConstants[props.etat]);
		},10000)
	}

	let cssPropriety: any = {}
	cssPropriety['--color_actual'] = color

	return (
		<div className={style.card_container} style={cssPropriety}>
			<div className={style.service_card_container}>
				<div className={style.service_name}>{props.serviceName}</div>
				<div className={style.service_state_group}>
					<div className={style.service_state_title}>Etat :</div>
					<div className={style.state_color}></div>
					<div className={style.service_state_value}>
						{etat == 'enattente' ? 'En attente' : _.capitalize(etat)}
					</div>
				</div>
				<div className={style.try_button_group}>
					<div className={style.try_button_form} onClick={handleClick}>
						<div className={style.try_button_text}>Tester</div>
					</div>
				</div>
				<div className={style.error_button_group}>
					<div className={style.error_button_form}>
						<div className={style.error_button_text}>Voir l&apos;Erreur</div>
					</div>
				</div>
			</div>
		</div>
	)
}
