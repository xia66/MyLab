import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
const {withStylePages, pureScriptPages} = require('./../page.config')

export default class Root extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pages: []
        }
        
    }

    componentWillMount() {
        let pages = withStylePages.map((page) => {
            return Object.assign(page, {
                url: `${page.name}/index.html`
            })
        }).concat( pureScriptPages.map((page) => {
            return Object.assign(page, {
                url: `pureScript/${page.name}.html`
            })
        }))
        this.setState({pages});
    }

    render() {
        console.log(this.state.pages);
        return (
            <div id="directory">
                <ol>
                    目录
                    {
                        this.state.pages.map((page) => {
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