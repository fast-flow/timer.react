var React = require('react')
var classNames = require('classnames')
var Timer = require('timer.react').default
var App = React.createClass({
    getInitialState: function () {
        var self = this
        return {
            countdownSec: 0,
            ajaxBusy: false,
            customTiming: false
        }
    },
    triggerStart: function () {
        var self = this
        if (self.state.customTiming) {
            return
        }
        setTimeout(function callee () {
            self.onChange({
                sec: (self.state.countdownSec || self.props.count) - 1
            })
            if (self.state.customTiming) {
                setTimeout(callee, 1000)
            }
        },0)
    },
    onChange: function (date) {
        var self = this
        if (date.sec) {
            self.setState({
                countdownSec: date.sec,
                customTiming: true
            })
        }
        else {
            self.setState({
                countdownSec: 0,
                customTiming: false
            })
        }
    },
    render: function () {
        var self = this
        return (
            <div>
                <button type="button" onClick={function () {
                    self.triggerStart()
                }} >click</button>

                <Timer
                    sec={self.props.count}
                    className="m-btn"
                    timing={self.state.customTiming}
                    timingClassName="m-btn--timing"
                    start={function (start) {
                        console.log('click timer')
                        if (self.state.ajaxBusy) {
                            return
                        }
                        self.setState({
                            ajaxBusy: true
                        })
                        // mock ajax POST /ajax/send_email
                        setTimeout(function () {
                            self.setState({
                                ajaxBusy: false
                            })
                            start()
                            console.log('start timer')
                        }, 1000)
                    }}
                    onChange={self.onChange}
                     >
                     {
                         self.state.countdownSec === 0?
                         "Send":
                         self.state.countdownSec + 's'
                     }
                </Timer>
            </div>
        )
    }
})
App.defaultProps = {
    count: 10
}
module.exports = App
