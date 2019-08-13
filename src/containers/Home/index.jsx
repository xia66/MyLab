import React from 'react';
import './index.less';
import ReactDOM from 'react-dom';

export default class Home extends React.PureComponent {
    clickHandle(event){
        console.log(event)
    }
    searchHandle(value){
        console.log(value);
    }
    render() {
        return (
            <div id="home" onClick={this.clickHandle}>
                home
            </div>
        );
    }
}

ReactDOM.render(<Home />, document.getElementById('root'));