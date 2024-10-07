/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }
}

var findWords = function(board, words) {
    let myTrie = new Trie();
    let ans = [];

    let dfs = function(node, row,col,str=""){
        //Oh nyo, out of bounds or visitied
        if(!board[row]?.[col] || board[row][col] === '#'){
            return str;
        }
        
        //Append to built word str
        let curChar = board[row][col];
        str += curChar;

        //Move down tree, append to ans if word
        //Break early if not word
        let childNode = node.children[curChar];
        if(!childNode){ return 0;}
        if(childNode.isEndOfWord){
            ans.push(str);
            childNode.isEndOfWord = false;
        }

        //Backtrack start
        board[row][col] = '#';

        //move down trie, and matrix up down left right
        dfs(childNode,row-1,col,str);
        dfs(childNode,row+1,col,str);
        dfs(childNode,row,col-1,str);
        dfs(childNode,row,col+1,str);

        //Undo backtrack
        board[row][col] = curChar;

    }

    //Insert all words to trie
    for(let word of words){
        myTrie.insert(word);
    }

    //search from all places
    for(let row = 0; row<board.length; row++){
        for(let col = 0; col<board[0].length; col++){
            dfs(myTrie.root,row,col);
        }
    }

    //Poggers
    return ans;
};