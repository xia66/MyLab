import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'antd';

export default class Mixin extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    mixin() {
        var LogMixin = {
            actionLog: function() {
              console.log('action...');
            },
            requestLog: function() {
              console.log('request...');
            },
          };
          function User() {  /*..*/  }
          function Goods() {  /*..*/ }
          // 简单实现一个mixin
          function setMixin(target, mixin) {
            if (arguments[2]) {
              for (var i = 2, len = arguments.length; i < len; i++) {
                target.prototype[arguments[i]] = mixin[arguments[i]];
              }
            }
            else {
              for (var methodName in mixin) {
                if (!Object.hasOwnProperty(target.prototype, methodName)) {
                  target.prototype[methodName] = mixin[methodName];
                }
              }
            }
          }
          setMixin(User,LogMixin,'actionLog');
          setMixin(Goods,LogMixin);
          console.log(User.prototype);
          console.log(Goods.prototype);
          console.log('react不推荐用mixin实现代码复用,因为可能会产生相互依赖');
    }

    Hoc() {

    }


    render() {
        return (
            <div>
                <h4>参考<a href='https://juejin.im/post/5cad39b3f265da03502b1c0a' target="_blank">https://juejin.im/post/5cad39b3f265da03502b1c0a</a></h4>
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
                        <code>
                            {this.mixin()}
                        </code>
                    </Row>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<Mixin />, document.getElementById('root'));