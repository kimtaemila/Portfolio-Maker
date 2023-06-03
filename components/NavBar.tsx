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
                    <Link href='./api/auth/logout' style={{textDecoration: 'none', fontSize:'20px',color:'white'}}>
                        <h4 className={styles.loginContent}>Logout</h4>
                    </Link>
                    :
                    <Link href='./api/auth/login' style={{textDecoration: 'none', fontSize:'20px',color:'white'}}>
                        <h4 className={styles.loginContent}>Login/Signup</h4>
                    </Link>

                }
            </div>
        </div>
    );
}

export default NavBar;