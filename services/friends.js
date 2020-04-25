const { friendsMock } = require("../utils/mocks/friends"); //el nombre de la variable debe coinsidir con la variable exportada

class FriendsService {
    async getFriends(){
        const friends = await Promise.resolve(friendsMock);
        return friends || [];
    }

    async getFriend(){
        const friend = await Promise.resolve(friendsMock[0]);
        return friend || {};
    }

    async sentFriendRequest(){
        const sentFriendRequestId = await Promise.resolve(friendsMock[0].id);
        return sentFriendRequestId;
    }

    async deletedFriend(){
        const deletedFriendId = await Promise.resolve(friendsMock[0].id);
        return deletedFriendId;
    }
}

module.exports = FriendsService;