import * as React from "react";
import styles from './Home.module.scss';

class Home extends React.Component {
    public render(): React.ReactNode {
        return (
            <div className={styles.home}>
                <span className={styles.mediativeRadius4}/>
                <span className={styles.mediativeRadius3}/>
                <span className={styles.mediativeRadius2}/>
                <span className={styles.mediativeRadius1}/>
                <div className={styles.mediativeGrid}>
                    <img src="/static/img/mediative-grid.png" alt={""}/>
                </div>
                <div className={styles.mediativeText}>ЗДРАВСТВУЙТЕ<span>АЛЕКСАНДР</span></div>
            </div>
        );
    }
}

export default Home;