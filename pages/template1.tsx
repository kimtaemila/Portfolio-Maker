// import styles from "@/styles/PageStyles/template1.module.css"

// function template1(props: any) {
//     return (
//         <div>
//             <p className={styles.color}>Banana</p>
//         </div>
//     )
// }

// export default template1;

import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Head>
                <title>My Portfolio</title>
                <meta name="description" content="My professional portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HeroSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </div>
    );
}
