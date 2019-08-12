import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';

import { Input } from 'antd';

const {withStylePages, pureScriptPages} = require('./../page.config')

export default class Root extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            allPages: [],
            renderPages: []
        }
        
    }

    componentWillMount() {
        let allPages = withStylePages.map((page) => {
            return Object.assign(page, {
                url: `${page.name}/index.html`
            })
        }).concat( pureScriptPages.map((page) => {
            return Object.assign(page, {
                url: `pureScript/${page.name}.html`
            })
        }))
        this.setState({
            allPages,
            renderPages: allPages
        });
    }

    async onChangeSearch(e) {
        let renderPages = [];
        renderPages = this.state.allPages.filter((page) => {
            return page.CNName.indexOf(e.target.value) > -1;
        })
        this.setState({
            renderPages
        });
        
    }
    
    render() {
        return (
            <div id="directory">
                <input onChange = {this.onChangeSearch.bind(this)} />
                <ol>
                    {
                        this.state.renderPages.map((page) => {
                            return(
                                <li>
                                    <a href={page.url}>{page.CNName}</a>
                                </li>)
                        })
                    }
                </ol>
            </div>
        );
    }
}
ReactDOM.render(<Root />, document.getElementsByTagName('body')[0]);