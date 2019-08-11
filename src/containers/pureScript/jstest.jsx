import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom'

export default class JsTest extends React.PureComponent {
    render() {
        return (
            <div>
                js测试
            </div>
        );
    }
}
ReactDOM.render(<JsTest />, document.body);