import React from 'react';
import styles from '@/styles/PageStyles/info.module.css'


function UploadResume(props: any) {
    return (
        <div>
            <h1>Select a file or drag to upload</h1>
            <div className={styles.uploadContainer}>

            </div>
        </div>
    );
}

export default UploadResume;