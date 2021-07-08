/**
 * Module import 
 */
import React from 'react';
import Link from 'next/link'
import styles from '@styles/Layout.module.css'

/**
 * Props for layout component
 * 
 * Add children component to use layout on page
 *
 * @interface ILayoutProps
 */
interface ILayoutProps {
	children: any
}

/**
 * Main layout component
 * 
 * sidebar menu
 *
 * @export
 * @class Layout
 * @extends {Component<ILayoutProps>}
 */
export default function Layout(props: ILayoutProps) {
	return(
		<div className={styles.layout_container}>
			<div className={styles.sidebar}>
				<div className={styles.sidebar_title}>Associative Endives</div>
				<div className={styles.sidebar_menu}>
					<Link href="/">
						<a className={styles.sidebar_dashboard}>Dashboard</a>
					</Link>
					<Link href="/maintenance">
						<a className={styles.sidebar_maintenance}>Maintenance</a>
					</Link>
					<Link href="/etat">
						<a className={styles.sidebar_servicestate}>Etat des services</a>
					</Link>
					<div className={styles.sidebar_poweroff}>Marche / Arret</div>
				</div>
			</div>
			<div className={styles.app_container}>{props.children}</div>
		</div>
	)
}