import * as React from "react";
import {Link} from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import styles from './Home.module.scss';
import './HomeAnimation.scss';
import autobind from "autobind-decorator";

class Home extends React.Component<{}, {
    checkFirstOpen?: undefined,
    firstOpen?: undefined,
    timerGrid?: boolean,
    timerRadius0?: boolean,
    timerRadius1?: boolean,
    timerRadius2?: boolean,
    timerRadius3?: boolean,
    timerRadius4?: boolean,
    timerTextAdd?: boolean,
    timerTextDel?: boolean,
    timerWaiting?: boolean,
}> {
    constructor(props: any) {
        super(props);
        // @ts-ignore
        this.state = {
            firstOpen: (window as any).checkFirstOpen,
            timerGrid: false,
            timerRadius0: false,
            timerRadius1: false,
            timerRadius2: false,
            timerRadius3: false,
            timerRadius4: false,
            timerTextAdd: false,
            timerTextDel: false,
            timerWaiting: false,
        }
    }

    private timer1?: NodeJS.Timeout;
    private timer2?: NodeJS.Timeout;
    private timer3?: NodeJS.Timeout;
    private timer4?: NodeJS.Timeout;
    private timer5?: NodeJS.Timeout;
    private timer6?: NodeJS.Timeout;
    private timer7?: NodeJS.Timeout;
    private timer8?: NodeJS.Timeout;
    private timer9?: NodeJS.Timeout;

    @autobind
    private inactivityTime() {
        const resetTimer = () => {
            if (this.timer9) {
                clearTimeout(this.timer9);
                this.timer9 = setTimeout(this.state.timerWaiting, 15000)
            }
        }

        window.onload = resetTimer;
        document.onmousemove = resetTimer;
        document.onkeypress = resetTimer;
    };

    window.onload = function() {
        inactivityTime();
    }

    componentDidMount() {
        this.timer1 = setTimeout(
            () => this.setState({timerGrid: !this.state.timerGrid}),
            0,
        );
        this.timer2 = setTimeout(
            () => this.setState({timerRadius1: !this.state.timerRadius1}),
            1250,
        );
        this.timer3 = setTimeout(
            () => this.setState({timerRadius2: !this.state.timerRadius2}),
            1450,
        );
        this.timer4 = setTimeout(
            () => this.setState({timerRadius3: !this.state.timerRadius3}),
            1650,
        );
        this.timer5 = setTimeout(
            () => this.setState({timerRadius4: !this.state.timerRadius4}),
            1850,
        );
        this.timer6 = setTimeout(
            () => this.setState({timerTextAdd: !this.state.timerTextAdd}),
            2400,
        );
        this.timer7 = setTimeout(
            () => this.setState({timerTextDel: !this.state.timerTextDel}),
            3500,
        );
        this.timer8 = setTimeout(
            () => this.setState({timerRadius0: !this.state.timerRadius0}),
            4500,
        );
    }

    componentWillUnmount() {
        if (this.timer1) {
            clearTimeout(this.timer1);
        }
        if (this.timer2) {
            clearTimeout(this.timer2);
        }
        if (this.timer3) {
            clearTimeout(this.timer3);
        }
        if (this.timer4) {
            clearTimeout(this.timer4);
        }
        if (this.timer5) {
            clearTimeout(this.timer5);
        }
        if (this.timer6) {
            clearTimeout(this.timer6);
        }
        if (this.timer7) {
            clearTimeout(this.timer7);
        }
        if (this.timer8) {
            clearTimeout(this.timer8);
        }
    }

    public render(): React.ReactNode {
        if ((this.state as any).firstOpen) {
            return (
                <div className={styles.home}>
                    Ну привет
                    <Link className={styles.linkClass} to="/heating">Heating</Link>
                </div>
            );
        } else {
            (window as any).checkFirstOpen = true;
            return (
                <div className={styles.home}>
                    {this.state.timerGrid &&
                    <span className={styles.mediativeGrid}><img src="/static/img/mediative-grid.png" alt={""}/></span>}
                    {this.state.timerRadius1 && <span className={styles.mediativeRadius1}/>}
                    {this.state.timerRadius2 && <span className={styles.mediativeRadius2}/>}
                    {this.state.timerRadius3 && <span className={styles.mediativeRadius3}/>}
                    {this.state.timerRadius4 && <span className={styles.mediativeRadius4}/>}
                    {this.state.timerTextAdd && <span className={styles.mediativeText}
                                                      style={this.state.timerTextDel ? {
                                                          animation: "textDisappear 1000ms ease-out",
                                                          animationFillMode: "forwards"
                                                      } : undefined}><p>ЗДРАВСТВУЙТЕ</p><p>АЛЕКСАНДР</p></span>}
                    {this.state.timerRadius0 && <Link className={styles.linkClass} to="/menu"><span className={styles.mediativeInnerRadius}>СТАРТ</span></Link>}
                    {/*/!*<Link className={styles.linkClass} to="/heating">Heating</Link>*!/*/}
                </div>
            );
        }
    }
}

export default Home;