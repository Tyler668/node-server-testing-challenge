const Users = require('./users-model.js');
const db = require('../database/dbConfig.js');

describe('Users Model', () => {
    beforeEach(async () =>{
        await db('users').truncate();
    })


    it('Should set testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });



    describe('add()', () => {
        it('Should add a user to the database', async () => {

            // Check that the table is empty
            const records = await db('users');
            expect(records).toHaveLength(0);

            //Insert one record
            await Users.add({ name: 'Banana' });

            //Check we now have one record in the table
            const users = await db('users');
            expect(users).toHaveLength(1);


        });
    });

    it('Should add the provided user object to the user DB', async () =>{
        //Insert one user
        let user = await Users.add({ name: 'Johnathan' });
        expect(user.name).toBe('Johnathan');

        user = await Users.add({ name: 'Tyler' });
        expect(user.name).toBe('Tyler');


        const users = await db('users');
        expect(users).toHaveLength(2);



    });

});