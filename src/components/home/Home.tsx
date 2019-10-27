import * as React from "react";
import {Link} from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import styles from './Home.module.scss';
import './HomeAnimation.scss';

class Home extends React.Component {
    constructor(props: any) {
        super(props);
        // @ts-ignore
        this.state = {
            firstOpen: (window as any).checkFirstOpen,
            timerRadius1: false,
            timerRadius2: false,
            timerRadius3: false,
            timerRadius4: false,
            timerHello: false,
        }
    }

    componentDidMount() {
        (this as any).timer = setTimeout(
            () => this.setState(prevState => ({timerRadius1: !(prevState as any).timerRadius1})),
            800,
        );
        (this as any).timer = setTimeout(
            () => this.setState(prevState => ({timerRadius2: !(prevState as any).timerRadius2})),
            1200,
        );
        (this as any).timer = setTimeout(
            () => this.setState(prevState => ({timerRadius3: !(prevState as any).timerRadius3})),
            1500,
        );
        (this as any).timer = setTimeout(
            () => this.setState(prevState => ({timerRadius4: !(prevState as any).timerRadius4})),
            1700,
        );
        (this as any).timer = setTimeout(
            () => this.setState(prevState => ({timerHello: !(prevState as any).timerHello})),
            2100,
        );
    }

    componentWillUnmount() {
        clearInterval((this as any).timer);
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
                    <div>
                        {(this.state as any).timerRadius4 ? (
                                <ReactCSSTransitionGroup transitionName="radius4Animate"
                                                         transitionAppear={true}
                                                         transitionAppearTimeout={500}>
                                    <span className={styles.mediativeRadius4}/>
                                </ReactCSSTransitionGroup>
                            ) :
                            null
                        }
                    </div>
                    <div>
                        {(this.state as any).timerRadius3 ? (
                                <ReactCSSTransitionGroup transitionName="radius3Animate"
                                                         transitionAppear={true}
                                                         transitionAppearTimeout={400}>
                                    <span className={styles.mediativeRadius3}/>
                                </ReactCSSTransitionGroup>
                            ) :
                            null
                        }
                    </div>
                    <div>
                        {(this.state as any).timerRadius2 ? (
                                <ReactCSSTransitionGroup transitionName="radius2Animate"
                                                         transitionAppear={true}
                                                         transitionAppearTimeout={400}>
                                    <span className={styles.mediativeRadius2}/>
                                </ReactCSSTransitionGroup>
                            ) :
                            null
                        }
                    </div>
                    <div>
                        {(this.state as any).timerRadius1 ? (
                                <ReactCSSTransitionGroup transitionName="radius1Animate"
                                                         transitionAppear={true}
                                                         transitionAppearTimeout={400}>
                                    <span className={styles.mediativeRadius1}/>
                                </ReactCSSTransitionGroup>
                            ) :
                            null
                        }
                    </div>
                    <div className={styles.mediativeGrid}>
                        <ReactCSSTransitionGroup transitionName="gridAnimate"
                                                 transitionAppear={true}
                                                 transitionAppearTimeout={1000}
                                                 transitionEnter={false}
                                                 transitionLeave={false}>
                            <img src="/static/img/mediative-grid.png" alt={""}/>
                        </ReactCSSTransitionGroup>
                    </div>
                    <div>
                        {(this.state as any).timerHello ? (
                                <ReactCSSTransitionGroup transitionName="helloAnimate"
                                                         transitionEnterTimeout={1250}
                                                         transitionLeaveTimeout={1250}>
                                    <div className={styles.mediativeText}>ЗДРАВСТВУЙТЕ<span>АЛЕКСАНДР</span></div>
                                </ReactCSSTransitionGroup>
                            ) :
                            null
                        }
                    </div>
                    {/*<Link className={styles.linkClass} to="/heating">Heating</Link>*/}
                </div>
            );
        }
    }
}

export default Home;