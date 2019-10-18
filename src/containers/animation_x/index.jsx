import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';

export default class Index extends React.PureComponent {
    render() {
        return (
            <div className="wrapper">
                <div style={{background: 'blue', width: "100px", height: "10px"}}>
                    <div style={{background: 'red', width: "100px", height: "10px", zIndex: '-1'}}></div>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));