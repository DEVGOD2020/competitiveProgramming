/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, shelfWidth) {
    let helper = function(bookID){
        if(bookID == books.length){
            return 0;
        }

        let score = Infinity;
        let currWidth = shelfWidth;
        let maxHeight = 0;
        for(let I = bookID; I<books.length; I++){
            let width = books[I][0];
            let height = books[I][1];

            maxHeight = Math.max(maxHeight, height);
            if(currWidth < width){
                break;
            }
            currWidth += -width;

            score = Math.min(score, helper(I+1)+maxHeight)
        }
        return score;
    }

    return helper(0);
};