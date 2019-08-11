const pages = [
    'home',
    'grailLayout'
]

function getPageConfig() {
    return pages.map((page) => {
        return {
            'name': `${page}`,
            'entry': `src/containers/${page}/index.jsx`,
            'template': `src/index.tmpl.html`,
            'filename': `${page}/index.html`
            
        }
    })
}

module.exports = getPageConfig;