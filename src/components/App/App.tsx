import React from 'react';
import Main from '../Main';
import Sidebar from '../Sidebar';
import styles from './App.module.css';

const App = () => {
	return (
		<div className={styles.container}>
			<Sidebar />
			<Main />
		</div>
	);
};

export default App;
