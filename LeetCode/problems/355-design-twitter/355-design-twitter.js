
var Twitter = function() {
    this.tweets = [];
    this.followers = {};
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.tweets.unshift([userId,tweetId]);
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
   let newsFeed = [];

   for(let tweet of this.tweets){
       if(tweet[0] == userId || 
       ( userId in this.followers && this.followers[userId].has(tweet[0]) ) ){
            newsFeed.push(tweet[1]);
            if (newsFeed.length == 10){break;}
       }
   }

   return newsFeed;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(this.followers[followerId] === undefined){
        this.followers[followerId] = new Set();
    }
    this.followers[followerId].add(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if(this.followers[followerId] !== undefined){
        this.followers[followerId].delete(followeeId);
    }
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */