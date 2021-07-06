import Head from 'next/head';
import Layout from '@components/layout';
import React, { Component } from 'react';
import { IPesonCardProps, PesonCard } from '@components/pesoncard'
import styles from '@styles/Home.module.css'

const datas = [
	{	pesonNumber: 1, etat: "actif", poids: 140},
	{	pesonNumber: 2, etat: "inactif", poids: null},
	{	pesonNumber: 3, etat: "enattente", poids: null},
	{	pesonNumber: 4, etat: "maintenance", poids: null},
	{	pesonNumber: 5, etat: "actif", poids: 140},
	{	pesonNumber: 6, etat: "actif", poids: 140},
	{	pesonNumber: 7, etat: "actif", poids: 140},
	{	pesonNumber: 8, etat: "actif", poids: 140},
	{	pesonNumber: 9, etat: "actif", poids: 140},
	{	pesonNumber: 10, etat: "actif", poids: 140},
	{	pesonNumber: 11, etat: "actif", poids: 140},
	{	pesonNumber: 12, etat: "actif", poids: 140},
]

export default class Test extends Component {

	render() {
		return(
			<Layout>
				<Head>
					<title>AssociativeEndives - Dashboard</title>
					<meta name="description" content="Generated by create next app" />
					<link rel="icon" href="/favicon.ico" />
					<link
						rel="preload"
						href="/fonts/Roboto/Roboto.Regular.ttf"
						as="font"
						crossOrigin=""
					/>
				</Head>
				<div className={styles.title}>Pesée endives</div>
				<div className={styles.card_grid}>
					{
						datas.map((data, index) => 
							<PesonCard 
								key={index} 
								pesonNumber={data.pesonNumber}
								etat={data.etat}
								poids={data.poids}
							></PesonCard>)
					}
				</div>
			</Layout>
		)
	}
}