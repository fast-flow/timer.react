var React = require('react')
var Timer = require('../lib/index').default
var App = React.createClass({
    getInitialState() {
        return {
            countdownSec: 0,
            ajaxBusy: false
        }
    },
    render: function () {
        var self = this
        return (
            <div>
                <Timer
                    sec={5}
                    className="m-btn"
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
                    onChange={function (date) {
                        if (date.sec) {
                            self.setState({
                                countdownSec: date.sec
                            })
                        }
                        else {
                            self.setState({
                                countdownSec: 0
                            })
                        }
                    }}
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
module.exports = App
