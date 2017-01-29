import "./index.css"
import { Component } from "react"
import FastTimer from "fast-timer"
import props from "./props"
import classNames from "classnames"
class Timer extends Component {
    componentWillMount() {
        const self = this
        self.fastTimer = new FastTimer({
            cache: self.props.cache
        })
        self.fastTimer.watch(function (date) {
            self.props.onChange(date)
        })
        if (self.fastTimer.cacheSec()) {
            self.fastTimer.start(self.fastTimer.cacheSec())
        }
    }
    rootClick = (e) => {
        const self = this
        if (self.fastTimer.free) {
            self.props.start(function start() {
                self.fastTimer.start(self.props.sec)
            })
        }
    }
    render() {
        const self = this
        const pcls = self.props.prefixClassName
        return (
            <span onClick={self.rootClick} className={classNames({
                    [`${pcls}`]: true,
                    [`${self.props.className}`]: self.props.className,
                    [`${self.props.timingClassName}`]: !self.fastTimer.free
                })} >
                    {self.props.children}
            </span>
        )
    }
    static cacheSec (cacheName) {
        let tempTimer = new FastTimer({
            cache: cacheName
        })
        return tempTimer.cacheSec() || 0
    }
}
props(Timer)
export default Timer
