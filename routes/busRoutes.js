const express = require('express');
const router = express.Router();

// Import your bus model here
const City = require("../model/cityModel");

// Route to add a new bus
// router.post('/add-bus', async (req, res) => {
//     try {
//         // Create a new bus object using the bus model

//         const bus = 
//             {
//                 "name": "Bus Route 123",
//                 "route": "A to B",
//                 "capacity": 50,
//                 "origin": "City A",
//                 "destination": "City B",
//                 "departureTime": "2023-09-22T08:00:00",
//                 "arrivalTime": "2023-09-22T12:00:00",
//                 "price": 25.99,
//                 "lat": 123.456,
//                 "lng": 78.910
                
//               };

//             //   const myCity = City.findOne({name: "City A"});
//             //   console.log(myCity);
//             //     myCity.buses.push(bus);
//             //     myCity.save();
//             //     res.send(myCity);


//                 const newBus = await City.findOneAndUpdate({name: "City A"}, {$push: {buses: bus}}, {new: true});

//                 res.send(newBus.buses);





              
        


//     } catch (err) {
//         // Send an error response if there was an issue saving the bus object
//         res.status(500).json({ message: err.message });
//     }
// });

    router.post ('/add-city', async (req, res) => {
        try {

           
    
            const city = {
                "name": "Jaipur",
                "buses": [
                  {
                    "name": "Pink City Express",
                    "route": "City Center to Suburb",
                    "capacity": 40,
                    "origin": "City Center",
                    "destination": "Suburb",
                    "departureTime": "2023-09-22T08:30:00",
                    "arrivalTime": "2023-09-22T09:30:00",
                    "price": 20.50,
                    "lat": 26.9124,
                    "lng": 75.7873
                  },
                  {
                    "name": "Amer Fort Shuttle",
                    "route": "City to Amer Fort",
                    "capacity": 35,
                    "origin": "City",
                    "destination": "Amer Fort",
                    "departureTime": "2023-09-22T10:00:00",
                    "arrivalTime": "2023-09-22T12:30:00",
                    "price": 15.75,
                    "lat": 26.9855,
                    "lng": 75.8513
                  },
                  {
                    "name": "Hawa Mahal Metro",
                    "route": "City to Hawa Mahal",
                    "capacity": 45,
                    "origin": "City",
                    "destination": "Hawa Mahal",
                    "departureTime": "2023-09-22T14:00:00",
                    "arrivalTime": "2023-09-22T16:00:00",
                    "price": 10.00,
                    "lat": 26.9239,
                    "lng": 75.8269
                  },
                  {
                    "name": "Jal Mahal Cruiser",
                    "route": "City to Jal Mahal",
                    "capacity": 30,
                    "origin": "City",
                    "destination": "Jal Mahal",
                    "departureTime": "2023-09-22T09:45:00",
                    "arrivalTime": "2023-09-22T10:30:00",
                    "price": 12.25,
                    "lat": 26.9537,
                    "lng": 75.8461
                  },
                  {
                    "name": "Jaipur Tech Connect",
                    "route": "City to Tech Park",
                    "capacity": 50,
                    "origin": "City",
                    "destination": "Tech Park",
                    "departureTime": "2023-09-22T07:30:00",
                    "arrivalTime": "2023-09-22T11:00:00",
                    "price": 18.99,
                    "lat": 26.8775,
                    "lng": 75.7886
                  },
                  {
                    "name": "City Palace Explorer",
                    "route": "City to City Palace",
                    "capacity": 25,
                    "origin": "City",
                    "destination": "City Palace",
                    "departureTime": "2023-09-22T06:00:00",
                    "arrivalTime": "2023-09-22T09:45:00",
                    "price": 30.00,
                    "lat": 26.9238,
                    "lng": 75.8267
                  },
                  {
                    "name": "Johari Bazaar Shuttle",
                    "route": "City Center to Johari Bazaar",
                    "capacity": 40,
                    "origin": "City Center",
                    "destination": "Johari Bazaar",
                    "departureTime": "2023-09-22T11:15:00",
                    "arrivalTime": "2023-09-22T11:45:00",
                    "price": 8.50,
                    "lat": 26.9207,
                    "lng": 75.8241
                  },
                  {
                    "name": "Amber Road Transit",
                    "route": "City to Amber Road",
                    "capacity": 35,
                    "origin": "City",
                    "destination": "Amber Road",
                    "departureTime": "2023-09-22T13:30:00",
                    "arrivalTime": "2023-09-22T14:15:00",
                    "price": 9.75,
                    "lat": 26.9857,
                    "lng": 75.8534
                  },
                  {
                    "name": "Albert Hall Express",
                    "route": "City to Albert Hall",
                    "capacity": 30,
                    "origin": "City",
                    "destination": "Albert Hall",
                    "departureTime": "2023-09-22T10:30:00",
                    "arrivalTime": "2023-09-22T11:00:00",
                    "price": 5.99,
                    "lat": 26.9160,
                    "lng": 75.8129
                  },
                  {
                    "name": "Nahargarh Fort Cruiser",
                    "route": "City to Nahargarh Fort",
                    "capacity": 45,
                    "origin": "City",
                    "destination": "Nahargarh Fort",
                    "departureTime": "2023-09-22T12:45:00",
                    "arrivalTime": "2023-09-22T14:30:00",
                    "price": 11.00,
                    "lat": 26.9220,
                    "lng": 75.8069
                  }
                ]
              };

                  const newCity = await City.create(city);
                  res.send(newCity);
    
                  const savedBus = await newBus.save();
                  res.status(201).json(savedBus);
                }
               catch (err) {
                  // Send an error response if there was an issue saving the bus object
                  res.status(500).json({ message: err.message });
              }
            }
            
        

);


// Route to get all buses

router.get('/get-cities', async (req, res) => {
    try {
        // Use your bus model to get all buses
        const buses = await City.find();
        res.send(buses);
    } catch (err) {
        // Send an error response if there was an issue getting the buses
        res.status(500).json({ message: err.message });
    }
}
);

router.get('/get-buses', async (req, res) => {

    try{

        const city =  req.query.city;
        console.log(city);

        const myCity = await City.findOne({name:city});
        console.log(myCity);    

        res.send(myCity.buses);

    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
