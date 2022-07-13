
//Outside of module.exports, create a variable to keep track of your upcoming house id, and set it equal to 4 (we already have 3 houses in the database with id’s 1, 2, and 3).
let goblalID = 4;

// Create a variable that requires your controller file.
let houses = require('./db.json');

module.exports = {

    // Build out the functionality of your getHouses function. It should send all the houses in the houses database to the front-end.
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },

    // Build out the functionality of your deleteHouse function. It should find the index of the house in the houses database whose id correlates to the id passed in as a parameter on your endpoint (I reccomend you use the findIndex method). Once you have the index, you can delete that house from the database using the splice method. Once done, send the remaining houses to the front-end so that the view can be updated.
    deleteHouse: (req, res) => {
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        houses.splice(index, 1);
        res.status(200).send(houses)
    }, 

    // Build out the funtionality of your createHouse function. It should create a new house object with the following properties: id, address, price, and imageURL. All of those values should come from req.body, except for id, which will come from the variable you created above to keep track of your upcoming house id. Once you have created the new house object, add it to your houses database using the push method. Then send all your houses to the front-end so that the view can be updated to include your new house. Don’t forget to increment your varibale tracking your upcoming house id.
    createHouse: (req, res) => {
        const {title, rating, imageURL} = req.body;
        let newHouse = {  
            id: goblalID,
            title: title,
            price: +price,
            imageURL, 
    } 
    houses.push(newHouse);
    globalID++;
    resizeTo.status(200).send(houses);
}, 


// Build out the functionality for your updateHouse function. It should capture the id from your endpoints params so that you know which house to update. It should also capture type off of req.body. Type is a string and could either be ‘plus’ or ‘minus’. Next, find the index of your house in the houses array by iterating through the houses array and locating the house with the correct id (I reccomend the findIndex method). Once you have the index of the house you should be updating, use a sequce of conditional checks to see if the type is ‘minus’ or ‘plus’, and then decrease or increase the price of the hosue by $10,000. Once complete, send all the houses to the front-end so you can update the views.

    updateHouse: (req, res) => {

        let index = houses.findIndex(elem => elem.id === +req.params.id)
        const {type} = req.body;
        if(type === 'minus' && houses[index].price > 1){
            houses[index].price -= 1;
            res.status(200).send(movies);
        } else if(type === 'plus' && movies[index].rating <5){
            movies[index].rating += 1;
            res.status(200).send(movies);
        } else {
            res.status(400).send('Invalid star rating!')
        }

    }

}

