import React from 'react';
import styles from '@/styles/ComponentStyles/NavBar.module.css'


function NavBar(props: any) {
    return (
        <div className={styles.mainContainer}>
            <main className={styles.titleContainer}>
                <h1 className={styles.title}>Portfolio Generator</h1>
            </main>
            <div className={styles.loginContainer}>
                <h4 className={styles.loginContent}>Login/Signup</h4>
                <h4 className={styles.loginContent}>Get Started</h4>
            </div>
        </div>
    );
}

export default NavBar;