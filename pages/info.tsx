import React, { useState } from 'react';
import styles from '@/styles/PageStyles/info.module.css'
import ResumeQuestion from '@/components/ResumeQuestion';
import QuestionForm from '@/components/QuestionForm';
import UploadResume from '@/components/UploadResume';


function info(props: any) {
const [info, setInfo] = useState(true)
const [questions, setQuestions] = useState(false)
const [upload, setUpload] = useState(false)

console.log(info)

    return (
        <div className={styles.mainContainer}>
            <section>
             { info ?  <ResumeQuestion setInfo={setInfo} setQuestions={setQuestions} setUpload={setUpload} /> :  null}
             {questions ? <QuestionForm setInfo={setInfo} setQuestions={setQuestions} setUpload={setUpload} /> : null}
             {upload ? <UploadResume setInfo={setInfo} setQuestions={setQuestions} setUpload={setUpload} /> : null}          
            </section>
        </div>
    );
}

export default info;