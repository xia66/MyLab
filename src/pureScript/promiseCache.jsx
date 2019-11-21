import React from 'react';
import ReactDOM from 'react-dom';

const reqPro = new Promise(resolve => {
    resolve(fetch('http://www.mocky.io/v2/5dd67e903200008d4a888af2').then(response => {
        return response.json()
    }));
    /* Promise.resolve().then(() => {
        resolve(fetch('http://www.mocky.io/v2/5dd67e903200008d4a888af2').then(response => {
            return response.json()
        }));
    }) */
})

const req = () => reqPro.then(data => data);

export default class JsTest extends React.Component {
    constructor(props) {
        super(props);
    }


    loadData() {
        return fetch('http://www.mocky.io/v2/5dd67e903200008d4a888af2').then(response => {
            return response.json()
        });
    }

    // 点击就会发现没有发出新的请求，利用请求缓存数据一般是用于那些基本不变配置请求。当然你可以直接用一个变量存储这种请求得到的配置，但是这样就会
    clickHandle() {
        req().then(data => {
            console.log(data);
        })
    }

    render() {
        return (
            <div>
                <button className='btn1' onClick={this.clickHandle.bind(this)}>btn1</button><br />
                <button className='btn1'>btn2</button>
            </div>
        );
    }
}
ReactDOM.render(<JsTest />, document.getElementById('root'));