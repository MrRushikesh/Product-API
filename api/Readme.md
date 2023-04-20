#  API Description 

# API -: http://localhost:7447/compare?pid1=1&pid2=3 

# MongoDB Query -: db.item.find({ _id: { $in: [1,2] } }, { name: 1, price: 1, ratings: 1 })


- a) I will use the useState hook that returns the current state, say products, and the function setProducts that updates the state.
- b) I will use the useEffect hook to make an API call and post the following payload: { _id: { $in: [1,2] } }.
- c) API will use the above payload and get data in one query:

            db.item.find({ _id: { $in: [1,2] } }, { name: 1, price: 1, ratings: 1 })

- d) API will return the following JSON data -: 

                    {
                        "_id":1,
                        "name": "Samsung S22",
                        "price" : 74000,
                        "ratings" : 4.5
                    },
                    {
                        "_id":3,
                        "name": "Mi Note 8",
                        "price" : 14000,
                        "ratings" : 3.5
                    },


- e) The useEffect hook will receive this data from API and will use the function setProducts to update state and re-render the component.

