import React from 'react';
import styles from './Errormodal.module.css';
import Button from './Button';

const Errormodal = (props) => {
  return (
    <div>
        <div className={styles.error__app}>
            <div className={styles.error__container}>
                <h2>{props.error}</h2>
                <Button value={"close"} onClick={props.close}/>
            </div>
        </div>
    </div>
  )
}

export default Errormodal