import { Component } from "react"
import Timer from "../index"
import { shallow, mount, render } from "enzyme"

it('className', function () {
    const app = mount(<Timer sec={23} className="myclass" />)
    expect(app.find('.myclass').length).toEqual(1)
})


it('example', function () {
    var App = require("./example")
    const app = mount(<App />)
    app.find('.m-btn').simulate('click')
    return new Promise(function (pass, error) {
        setTimeout(function () {
            expect(app.find('.m-btn').html()).toEqual('<span class="r-timer m-btn m-btn--timing">5s</span>')
            pass()
        }, 1050)
    })
})
