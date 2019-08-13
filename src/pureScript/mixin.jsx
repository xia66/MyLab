import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Card} from 'antd';

export default class Mixin extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }



    render() {
        return (
            <div>
                <h2>Mixin</h2>
                <Row>
                    <Col span={6}>
                        <img 
                            style={{width: '600px'}}
                            src='https://user-gold-cdn.xitu.io/2019/4/10/16a04a93f7719481?imageView2/0/w/1280/h/960/format/webp/ignore-error/1'/></Col>
                    <Col span={6}>
                        Mixin（混入）是一种通过扩展收集功能的方式，它本质上是将一个对象的属性拷贝到另一个对象上面去，
                        不过你可以拷贝任意多个对象的任意个方法到一个新对象上去，这是继承所不能实现的。
                        它的出现主要就是为了解决代码复用问题。
                    </Col>
                </Row>
            </div>
        );
    }
}
ReactDOM.render(<Mixin />, document.body);