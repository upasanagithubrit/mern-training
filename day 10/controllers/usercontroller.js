const fsPromises = require('fs/promises');


//////////////////structure user request///////////////

const getuser = (req, res) => {
    res.status(501)
    res.json({
        status: "fail",
        data: {
            msg: 'route is not implemented yet get'
        }

    })
}

const postuser = (req, res) => {
    res.status(501)
    res.json({
        status: "fail",
        data: {
            msg: 'route is not implemented yet post'
        }

    })
}


const putuser = (req, res) => {
    res.status(501)
    res.json({
        status: "fail",
        data: {
            msg: 'route is not implemented yet put'
        }

    })
}


const deleteuser = (req, res) => {
    res.status(501)
    res.json({
        status: "fail",
        data: {
            msg: 'route is not implemented yet delete'
        }

    })
}


module.exports = {
    getuser,
    postuser,
    putuser,
    deleteuser,
}