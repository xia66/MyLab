import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;
export default class Index extends React.PureComponent {
    componentDidMount() {
        console.log(this.tabs);
    }
    render() {
        return (
            <div className="wrapper">
                <Tabs type="card" ref={(d) => this.tabs = d}>
                    <TabPane tab="Tab Title 1" key="1" >
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                    </TabPane>
                    <TabPane tab="Tab Title 2" key="2">
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                    </TabPane>
                    <TabPane tab="Tab Title 3" key="3">
                        <p>Content of Tab Pane 3</p>
                        <p>Content of Tab Pane 3</p>
                        <p>Content of Tab Pane 3</p>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));