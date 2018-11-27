import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';

export default class Root extends React.PureComponent {
    render() {
        return (
            <div id="directory">
                <ol>
                    目录
                    <li><a href='home/index.html'>home</a></li>
                    <li><a href='grailLayout/index.html'>圣杯/双飞翼布局</a></li>
                </ol>
            </div>
        );
    }
}
ReactDOM.render(<Root />, document.getElementsByTagName('body')[0]);