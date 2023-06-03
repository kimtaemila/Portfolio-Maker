import React from 'react';
import styles from '@/styles/PageStyles/info.module.css'


function ResumeQuestion(props: any) {
    const yesHandler = () => {
        props.setInfo(false)
        props.setUpload(true)
    }

    const noHandler = () => {
        props.setInfo(false)
        props.setQuestions(true)
    }
    
    return (
        <div>
               <form>
                    <p className={styles.title}>Do you have a resume to upload?</p>
                    <div className={styles.btnContainer}>
                        <button className={styles.btn} onClick={() => yesHandler()}>Yes</button>
                        <button className={styles.btn} onClick={() => noHandler()}>No</button>
                    </div>
                </form>
        </div>
    );
}

export default ResumeQuestion;