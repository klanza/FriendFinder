const friendData = require('../app/data/friends.js');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendData);
    });
    app.post('/api/friends', function(req, res) {
        let userInfo = req.body;

        // console.log(userInfo)
        // console.log(userInfo.scores)
        let score = userInfo.scores.map(function(number) {
            return parseInt(number, 10);
        });
        let bestMatchPic = '';
        let bestMatchValue = 50;
        let currentMatchValue = '';
        friendData.forEach((element) => {
            for (let i = 0; i < element.scores.length; i++) {
                currentMatchValue += Math.abs(score[i] - parseInt(element.scores[i]));
            } if (currentMatchValue < bestMatchValue) {
                currentMatchValue = bestMatchValue;
                bestMatchName = element.name;
                bestMatchPic = element.photo;
                console.log(bestMatchPic, bestMatchName);
            };
            // console.log(bestMatchPic, bestMatchName);
        });

        friendData.push(req.body);
    });
};
