import * as React from "react";
import styles from './Heating.module.scss';
import {Link} from "react-router-dom";
import './HeatingAnimation.scss';
import autobind from "autobind-decorator";
import {appHistory} from "../../App";

class Heating extends React.Component<{}, {
    timerRadius1?: boolean
    timerRadius2?: boolean
    timerRadius3?: boolean
}> {
    constructor(props: any) {
        super(props);
        this.state = {
            timerRadius1: false,
            timerRadius2: false,
            timerRadius3: false,
        }
    }

    private timer?: NodeJS.Timeout;
    private timer2?: NodeJS.Timeout;

    componentDidMount() {
        this.timer = setTimeout(
            () => this.setState({timerRadius1: !this.state.timerRadius1}),
            2000,
        );
        this.timer2 = setTimeout(
            () => this.setState({timerRadius2: !this.state.timerRadius2}),
            4000,
        );
    }

    componentWillUnmount() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        if (this.timer2) {
            clearTimeout(this.timer2);
        }
    }

    public render(): React.ReactNode {
        return (
            <div
                className={styles.htd}
                style={this.state.timerRadius3 ? {animation: "eye3 1s ease-in-out", animationFillMode: "forwards"} : undefined}
            >
                <div className={styles.htd}>
                    <p className={styles.htd}>12313</p>
                </div>
                <Link className={styles.linkClass} to="/">Home</Link>
                <a className={styles.linkClass} onClick={this.goHome}>Home</a>

                {this.state.timerRadius1 && <div
                    className={"creature"}
                    style={this.state.timerRadius2 ? {animation: "eye2 1s ease-in-out", animationFillMode: "forwards"} : undefined}
                >
                    {this.state.timerRadius2 ? "2" : this.state.timerRadius1 ? "1" : undefined}
                </div>}
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

export default Heating;