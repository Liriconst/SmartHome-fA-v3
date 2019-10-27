import * as React from "react";
import styles from './Heating.module.scss';
import {Link} from "react-router-dom";

class Heating extends React.Component {
    public render(): React.ReactNode {
        return (
            <div className={styles.htd}>
                <div className={styles.htd}>
                <p className={styles.htd}>12313</p>
                </div>
                <Link className={styles.linkClass} to="/">Home</Link>
            </div>
        );
    }
}

export default Heating;