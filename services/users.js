const MongoLib = require('../lib/mongo');
const bcrypt = require('bcrypt');

class UsersService {
    constructor(){
        this.collection = 'users';
        this.mongoDB = new MongoLib();
    }

    async getUser({ email }){
        const [ user ] = await this.mongoDB.getAll(this.collection, { email });
        return user;
    }

    async getUserWithOutPassword({ userId }){
        const user = await this.mongoDB.get(this.collection, userId);
        delete user.password;
        return user || {};
    }

    async updateUser({ userId, user } = {}){ 
        // const sentFriendRequestId = await Promise.resolve(friendsMock[0].id); //EJEMPLO MOCK
        const updateUserId = await this.mongoDB.update(this.collection, userId, user);
        return updateUserId;
    }   

    async createUser({ user }){
        const { name, email, password, lastName, nationality, gender, born, residence_city,fisic, position, rightFoot, leftFoot, img } = user ;
        const hashedPassword = await bcrypt.hash(password, 10);

        const createUserId = await this.mongoDB.create(this.collection, {
            name,
            email,
            lastName, 
            nationality, 
            gender, 
            born, 
            residence_city,
            password: hashedPassword,
            fisic,
            position,
			rightFoot,
			leftFoot,
			img
        });

        return createUserId;
    }
}

module.exports = UsersService;