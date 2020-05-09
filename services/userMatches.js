const MongoLib = require('../lib/mongo');

class UsersMatchesService {
    constructor(){
        this.collection = 'user-matches';
        this.mongoDB = new MongoLib();
    }

    async getUserMatches({ userId }){
        const query = userId && { userId };
        const [ userMatches ] = await this.mongoDB.getAll(this.collection, query);

        return userMatches || [];
    }

    async createUserMatch({ userMatch }){
        const createdUserMatchId  = await this.mongoDB.create(this.collection,  userMatch );

        return createdUserMatchId;
    }

    async deleteUserMatch({ userMatchId }){
        const deletedUserMatchId  = await this.mongoDB.delete(this.collection,  userMatchId );

        return deletedUserMatchId;
    }
}

module.exports = UsersMatchesService;