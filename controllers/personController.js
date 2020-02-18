const PersonsData = require('../models/Persons');
const getPaginationResults = require('../utils/pagination'); 
const catchAsync = require('../utils/catchAsync');

module.exports.getUsers = catchAsync(async (req, res, next) => {

    if (!req.params.page || !req.params.limit) {
        return res.status(400).json({message: "Something is wrong, check your page and limit."})
    }  

    const page = parseInt(req.params.page);
    const limit = parseInt(req.params.limit);

    const persons = await PersonsData.find();

    // console.log(persons);
    const resultsData = getPaginationResults(persons, page, limit);
    
    res.status(200).json({
        resultsData
    });
});

module.exports.createUser = catchAsync(async (req, res, next) =>  {
    const name = req.body.name ;
    console.log(name);
    
    const newUser = await PersonsData.create({name});

    res.status(200).json({
        newUser
    })
});
