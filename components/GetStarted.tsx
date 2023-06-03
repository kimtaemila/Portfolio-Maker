import React from 'react';
import styles from '@/styles/PageStyles/getStarted.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';




function GetStarted(props: any) {
    const router = useRouter()

    return (
        <div className={styles.mainContainer}>

            <header className={styles.header}>
                <h1>The first step to a whole new look.</h1>
            </header>
            <section className={styles.infoSection}>
                <div className={styles.titleContainer}>
                    <h3>We make it easy, so you don't have to stress.</h3>
                </div>
                <div className={styles.informationContainer}>
                    <p>So many employers use programs to run through the many applications that they receieve everyday. You may be qualified for a job but missing the right keywords for your portfolio to stand out.</p>
                    <p>Have you ever felt like you are qualified for a job put your portfolio just wasn't geting you any call backs?</p>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/sad-laptop.webp"
                            width={550}
                            height={300}
                            alt="Frustrated Laptop Image"
                            style={{ paddingBottom: '1rem' }}
                        />
                    </div>
                    <div className={styles.subtitle}>
                        <h3>We have a solution</h3>
                        <p>Using our program you can upload your resume or fill out our information section and we can not only make you a portfolio page, but also give you a score on how well written your resume is using things such as experience, education, and keywords aswell</p>
                    </div>
                </div>
                <div className={styles.btnContainer}>
                    <button onClick={() => router.push('/info')}>
                        Get started
                    </button>
                </div>
            </section>
        </div>
    );
}

export default GetStarted;