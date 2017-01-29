import { PropTypes } from "react"
import extend from "extend"
export default function (component) {
    extend(true, component, {
        defaultProps: {
            cache: undefined,
            prefixClassName: 'r-timer',
            className: '',
            timingClassName: '',
            onChange: function (date) {},
            start: function (start){},
            sec: undefined
        },
        propTypes: {
            cache: PropTypes.string,
            prefixClassName: PropTypes.string,
            className: PropTypes.string,
            timingClassName: PropTypes.string,
            onChange: PropTypes.func,
            start: PropTypes.func,
            sec: PropTypes.number.isRequired
        }
    })
}
