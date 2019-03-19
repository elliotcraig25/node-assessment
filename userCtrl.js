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
        console.log(req.body)
        console.log(userData[req.params.userId - 1])
        userData[req.params.userId - 1].first_name = req.body.first_name
        userData[req.params.userId - 1].last_name = req.body.last_name
        userData[req.params.userId - 1].email = req.body.email
        userData[req.params.userId - 1].gender = req.body.gender
        userData[req.params.userId - 1].language = req.body.language
        userData[req.params.userId - 1].age = req.body.age
        userData[req.params.userId - 1].city = req.body.city
        userData[req.params.userId - 1].state = req.body.state
        userData[req.params.userId - 1].type = req.body.type
        userData[req.params.userId - 1].favorites = req.body.favorites
        console.log(userData[req.params.userId - 1])
        res.send(userData).status(200)
    }
}