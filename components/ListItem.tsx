import React from 'react';
import styles from '@/styles/componentStyles/form.module.scss'

function ListItem(props: any) {
    return (
        <div className={styles.itemContainer}>
        <li className={styles.listItem}>{props.value}</li>
        <input placeholder={props.placeholder} className={styles.listInput} onChange={(e) => { props.handler(e, props.param) }}/>
        </div>
    );
}

export default ListItem;