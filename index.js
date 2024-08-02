var database = require('./database');

/*
// Inserting data
var data = {
    name: 'Gof of War',
    price: 200
}

var severalData = [
    {
        name: 'Gof of War',
        price: 200
    },
    {
        name: 'Call of Duty',
        price: 150
    },
    {
        name: 'FIFA 2020',
        price: 100
    }
]

// Inserting one data
database.insert(data).into('games').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

// Inserting several data
database.insert(severalData).into('games').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});


// Inserting data with select
database.insert({name: 'Call of Duty'}).into('games').then(data => {
    database.select(["id", "name"]).table('games').then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
}).catch(err => {
    console.log(err);
});
*/

/*
// select all data
database.select().table('games').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

// select with where
database.select(['name']).table('games').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

/*
// where
database.where({ name: 'Call of Duty' }).table('games').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

// AND
database.where({ name: 'Call of Duty' }).where({id: 3}).table('games').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

// OR
database.where({ name: 'Call of Duty' }).orWhere({id: 2}).table('games').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

// Different or another conditional
database.whereRaw("price > 150 AND price < 500").table('games').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

// raw
database.raw('SELECT * FROM games').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
*/

/*
// delete
database.where({ name: 'Call of Duty' }).delete().table('games').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
*/

/*
// update
database.where({ name: 'FIFA 2020' }).update({price: 500}).table('games').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
*/

/*
// order by price
database.select().table('games').orderBy('price', 'desc').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

// order by name
database.select().table('games').orderBy('name').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
*/
