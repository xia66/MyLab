const withStylePages = [ // 样式测试，在src下新建文件夹，然后在这里添加同名元素即可
    {
        name: 'grailLayout',
        CNName: '圣杯/双飞翼布局'
    }
]

const pureScriptPages = [ // js、算法测试，在pureScript下新建文件，然后在这里添加同名元素即可
    {
        name: 'jstest',
        CNName: 'pureScript模板'
    }, {
        name: 'mixin',
        CNName: 'Mixin'
    }, {
        name: 'Hoc',
        CNName: 'Hoc（高阶组件）'
    }, {
        name: 'hook',
        CNName: 'ract16.8新特性hook'
    }
    
]

const pageConfigs = withStylePages.map((page) => {
    const {name} = page;
    return {
        'name': `${name}`,
        'entry': `src/containers/${name}/index.jsx`,
        'template': `src/index.tmpl.html`,
        'filename': `${name}/index.html`
        
    }
}).concat(pureScriptPages.map((page) => {
    const {name} = page;
    return {
        'name': `${name}`,
        'entry': `src/pureScript/${name}.jsx`,
        'template': `src/index.tmpl.html`,
        'filename': `pureScript/${name}.html`
    }
}))

exports.withStylePages = withStylePages;
exports.pureScriptPages = pureScriptPages;
exports.pageConfigs = pageConfigs;
