import * as React from 'react';
import styles from './Search.module.css';

interface Search {
	
}
 
const Search= () => {
	return (
		<div className={styles.container}>
			<div className={styles.iconWrapper}>
				<label className={styles.icon} htmlFor="input">S</label>
			</div>
			<input id="input" name="input" className={styles.input} placeholder='Найти коносамент, груз, заказ и др.' />
		</div>
	);
}
 
export default Search;
