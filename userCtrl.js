const userData = require('./userData');

module.exports = {
    getEntireUserArray: (req, res)=>{
        let returnArray = userData.filter(ele=>{ele.favorites.includes(req.query.favorites)})
        res.send(returnArray).status(200)
    },
    getByUserID: (req, res)=>{
        const {userId} = req.params
        console.log(req.params)
        let returnObj = userData.filter(ele=>{ele.id == userId})
        res.send(returnObj[0]).status(200)
    },
    getByAdmin: (req, res)=>{
        let returnArray = userData.filter(ele=>{ele.type === 'admin'})
        res.send(returnArray).status(200)
    },
    getByNonAdmin: (req, res)=>{
        let returnNonArray = userData.filter(ele=>{ele.type !== 'admin'})
        res.send(returnNonArray).status(200)
    },
    getByType: (req, res)=>{
        let returnNonArray = userData.filter(ele=>{ele.type === req.params.userType})
        res.send(returnNonArray).status(200)
    },
    updateUserByID: (req, res)=>{
        console.log(req.body.first_name)
    }
}