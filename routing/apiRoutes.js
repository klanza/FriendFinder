const friendData = require('../app/data/friends.js');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendData);
    });
    app.post('/api/friends', function(req, res) {
        let userInfo = req.body;

        // JSON is being parsed with an added [] in the key value, causing the value
        // to not be accessible, and can't be manipulated. Almost there just need to fix
        // this bug and then write answer to jQuery, logic almost complete.
        console.log(userInfo)
        console.log(userInfo.scores)
        let userScore = userInfo.scores.map(function(number) {
            return parseInt(number, 10);
        });
        let bestMatchPic = '';
        let bestMatchValue = 50;
        let currentMatchValue = '';
        friendData.forEach((element) => {
            for (let index = 0; index < element.scores.length; i++) {
                currentMatchValue += Math.abs(userScore[i] - parseInt(element.scores[i]));
            } if (currentMatchValue < bestMatchValue) {
                currentMatchValue = bestMatchValue;
                bestMatchName = element.name;
                bestMatchPic = element.photo;
            };
            console.log(bestMatchPic, bestMatchName);
        });

        friendData.push(req.body);
    });
};
