import React from 'react';
import styles from '@/styles/ComponentStyles/NavBar.module.css'
import Link from 'next/link';


function NavBar(props: any) {


    return (
        <div className={styles.mainContainer}>
            <main className={styles.titleContainer}>
                <h1 className={styles.title}>Portfolio Generator</h1>
            </main>
            <div className={styles.loginContainer}>
                {props.user ?
                    <Link href='./api/auth/logout' style={{textDecoration: 'none'}}>
                        <h4 className={styles.loginContent}>Logout</h4>
                    </Link>
                    :
                    <Link href='./api/auth/login'>
                        <h4 className={styles.loginContent}>Login/Signup</h4>
                    </Link>

                }
                <h4 className={styles.loginContent}>Get Started</h4>
            </div>
        </div>
    );
}

export default NavBar;