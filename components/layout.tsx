import React from 'react';
import Link from 'next/link'
import styles from '@styles/Layout.module.css'

export default function Layout({ children }) {
	return (
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
			<div className={styles.app_container}>{children}</div>
		</div>
	)
}