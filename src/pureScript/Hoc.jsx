import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'antd';

class WrappedComponent extends React.Component{

    componentWillMount() {
        console.log('awsl');
    }

    render() {
        return <div>被代理组件</div>
    }
}

/* 属性代理实现HOC */
function proxyHoc(wrappedComponent) {
    return class extends React.Component{
        render(){
            return <WrappedComponent {...this.props} />
        }
    }
}

/* 反向继承实现Hoc */
function inheritHoc(wrappedComponent) {
    return class extends wrappedComponent {
        render() {
            return super.render();
        }
    }
}

function hijackHoc(wrappedComponent) {
    return class extends wrappedComponent {
        render() {
            const wrapped = super.render();
            const newProps = {/*  */};
            const props = Object.assign({}, wrapped.props, newProps);
            // React.cloneElement三个参数为，被克隆的组件，新的props，新的子元素。其中后两个参数都不是必传的。
            // 所以返回的是<wrapped> {...wrapped.props} {...newProps}>{wrapped.props.children}</wrapped>
            const newWrapped = React.cloneElement(wrapped, props, wrapped.props.children);
            return newWrapped;
        }
    } 
}

export default class Hoc extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>参考<a href='https://juejin.im/post/5cad39b3f265da03502b1c0a' target="_blank">https://juejin.im/post/5cad39b3f265da03502b1c0a</a></h4>
                <h2>Hoc</h2>
                <Row>
                    <Col span={14}>
                        <img 
                            style={{width: '1000px'}}
                            src='https://user-gold-cdn.xitu.io/2019/4/10/16a04a93f9a729dc?imageView2/0/w/1280/h/960/format/webp/ignore-error/1'/></Col>
                    <Col span={6}>
                        高阶组件（HOC）是React中的高级技术，用来重用组件逻辑。但高阶组件本身并不是React API。它只是一种模式，这种模式是由React自身的组合性质必然产生的。
                    </Col>
                    
                </Row>
            </div>
        );
    }
}
ReactDOM.render(<Hoc />, document.getElementById('root'));

