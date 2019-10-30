import * as React from "react";
import styles from './Menu.module.scss'
import autobind from "autobind-decorator";
import {appHistory} from "../../App";

class Menu extends React.Component<{}, {
    checkClick?: boolean
}> {
    constructor(props: any) {
        super(props);
        this.state = {
            checkClick: false,
        }
    }
    public render(): React.ReactNode {
        return (
            <div className={styles.mainMenu}>
                <div className={styles.menuHeatingCooling}>
                    <div className={styles.menuHeating}>
                        <img id={styles.img1} src="/static/img/fire-light.png" alt={""}/>
                        <img id={styles.img2} src="/static/img/fire-dark.png" alt={""}/>
                    </div>
                    <div className={styles.menuCooling}>
                        <img id={styles.img1} src="/static/img/cold2-light.png" alt={""}/>
                        <img id={styles.img2} src="/static/img/cold2-dark.png" alt={""}/>
                    </div>
                </div>
                <div className={styles.menuStatisticInfo}>
                    <div className={styles.menuStatistic}>
                        <img id={styles.img1} src="/static/img/stat2-light.png" alt={""}/>
                        <img id={styles.img2} src="/static/img/stat2-dark.png" alt={""}/>
                    </div>
                    <div className={styles.menuInfo}>
                        <img id={styles.img1} src="/static/img/info2-light.png" alt={""}/>
                        <img id={styles.img2} src="/static/img/info2-dark.png" alt={""}/>
                    </div>
                </div>
            </div>
        );
    }

    @autobind
    private goHome(): void {
        this.setState({timerRadius3: true});
        setTimeout(() => {
            appHistory.push("/");
        }, 3000);
    }
}

export default Menu;