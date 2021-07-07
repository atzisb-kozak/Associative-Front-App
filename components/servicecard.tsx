import React, { Component } from 'react';
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
 * @class ServiceCard
 * @extends {Component<IServiceCardProps, IServiceCardState>}
 */
export class ServiceCard extends Component<IServiceCardProps, IServiceCardState> {
	constructor(props: IServiceCardProps) {
		super(props);
		this.state = {
			etat: this.props.etat,
			color: EColorConstants[this.props.etat]
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState(() => ({
			etat: 'enattente',
			color: EColorConstants['enattente']
		}));
		setTimeout(() => this.setState(() => ({
			etat: 'actif',
			color: EColorConstants['actif']
		})),10000)
	}

	render() {
		let cssPropriety: any = {}
		cssPropriety['--color_actual'] = this.state.color

		return (
			<div className={style.card_container} style={cssPropriety}>
				<div className={style.service_card_container}>
					<div className={style.service_name}>{this.props.serviceName}</div>
					<div className={style.service_state_group}>
						<div className={style.service_state_title}>Etat :</div>
						<div className={style.state_color}></div>
						<div className={style.service_state_value}>
							{this.state.etat == 'enattente' ? 'En attente' : _.capitalize(this.state.etat)}
						</div>
					</div>
					<div className={style.try_button_group}>
						<div className={style.try_button_form} onClick={this.handleClick}>
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
}
