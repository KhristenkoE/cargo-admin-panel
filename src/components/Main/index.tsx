import * as React from 'react';
import styles from './Main.module.css';
import Search from '../Search';


interface Main {
	
}
 
const Main = () => {
	return (
		<main className={styles.container}>
			<Search />
		</main>
	);
}
 
export default Main;
