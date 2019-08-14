import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

/* 
    hook有个eslint的插件，参考 https://zh-hans.reactjs.org/docs/hooks-rules.html
    只在最顶层使用 Hook，不要在循环，条件或嵌套函数中调用 Hook
*/

export default function Hook1() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('渲染后', count); // 在渲染后执行
        return () => {
            console.log('去除刚刚渲染的', count); // 在渲染后，下一次useEffect前执行(上一个count被清除后执行)，且count为上一次渲染的count。
        }
    }, [count]) // 添加第二个参数，仅在count有变化时才执行useEffect函数。而且第二个参数有特殊作用，当为[]时表示这个useEffect只执行一次(组件挂载和卸载)
    return(
        <div onClick={() => setCount(count + 1)}>
            {console.log('渲染中', count)}
            {count}
            <br/>
            <code>
                渲染中 0<br/>
                渲染后 0<br/>
                渲染中 1<br/>
                去除刚刚渲染的 0<br/>
                渲染后 1<br/>
                渲染中 2<br/>
                去除刚刚渲染的 1<br/>
                渲染后 2<br/>
            </code>
        </div>
    )
    
}

ReactDOM.render(<Hook1 />, document.getElementById('root'));