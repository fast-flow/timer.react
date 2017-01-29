var ReactDOM = require('react-dom')
var render = ReactDOM.render

// basic
;(function (node) {
    if (!node) {return}
    require(['./cache.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example_cache_node'))

// cache:undefined
;(function (node) {
    if (!node) {return}
    require(['./cache-undefined.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__cache-undefined_node'))
