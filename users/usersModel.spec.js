const Users = require('./users-model.js');
const db = require('../database/dbConfig.js');

describe('Users Model', () => {
    beforeEach(async () =>{
        await db('users').truncate();
    })


    it('Should set testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });


// vv ADD vv ------------------------------------------------------------------------------------------------------
    
describe('add()', () => {
        it('Should add a user to the database when invoked', async () => {

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
   
// vv REMOVE vv ------------------------------------------------------------------------------------------------------
    
    describe('remove()', () => {
        it('Should remove a user from the database when invoked', async () => {
            
            //Insert one user
            const bananaUser = await Users.add({ name: 'Banana' });
            
            // Check that the table has one record
            const records = await db('users');
            expect(records).toHaveLength(1);

            //Remove one user
            
            await Users.remove(bananaUser.id);

            //Check we now have zero records in the table after deleting
            const users = await db('users');
            expect(users).toHaveLength(0);


        });
    });

    it('Should remove the specified user object from the user DB', async () =>{
       
        const addedUser = await Users.add({ name: 'Tyler' });
        expect(addedUser.name).toBe('Tyler');

        await Users.add({ name: 'Tony' });


        
        await Users.remove(addedUser.id);
        let users = await db('users');
        expect(users)
        .not
        .toContainEqual({"id": 1, "name": "Tyler"});  //No does not contain Tyler
        
        //Yes contains Tony
        expect(users)
        .toContainEqual({"id": 2, "name": "Tony"});
        
        

        

        
        // expect(users).toHaveLength(1);



    });

});