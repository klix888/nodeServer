const root = (req, res) => {
    console.log(req.url);
    res.end('Home Page is Coming!')
}

const text = (req, res) => {
    console.log(req.url);
    const param = req.params.param || 'Node';
    res.end(`Hello ${param} Server!`)
}

const html = (req, res) => {
    console.log(req.url);
    const param = req.params.param || 'Node';
    res.end(`<h1>Hello ${param} Server</h1>`)
}

export { root, text, html };