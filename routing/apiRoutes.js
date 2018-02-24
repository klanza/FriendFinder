const friendData = require('../app/data/friends.js');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendData);
    });
    app.post('/api/friends', function(req, res) {
        let bestFriend = {
            name: '',
            photo: '',
            matchValue: 100,
        };

        let userInfo = req.body;
        let userScore = userInfo.scores;

        let difference = 0;

        for (let i = 0; i < friendData.length; i++) {
            difference = 0;

            for (let index = 0; index < friendData[i].scores[index]; index++) {
                difference += Math.abs(parseInt(userScore[index]) - parseInt(friendData[i].scores[index]));
                if (difference <= bestFriend.matchValue) {
                    bestFriend.name = friendData[i].name,
                    bestFriend.photo = friendData[i].photo,
                    bestFriend.matchValue = difference;
                }
            }
        };
        console.log(bestFriend);
        friendData.push(req.body);
    });
};
