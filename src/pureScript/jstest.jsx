import React from 'react';
import ReactDOM from 'react-dom';

export default class JsTest extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }



    render() {
        return (
            <div>
                js测试
            </div>
        );
    }
}
ReactDOM.render(<JsTest />, document.getElementById('root'));