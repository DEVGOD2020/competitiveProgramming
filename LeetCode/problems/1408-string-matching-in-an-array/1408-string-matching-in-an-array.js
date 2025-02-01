/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    class TrieNode {
        constructor() {
            this.children = {};
        }
    }
    class Trie {
        constructor() {
            this.root = new TrieNode();
        }
        insert(word){
            let node = this.root;
            for(let chr of word){
                if(!node.children[chr]){
                    node.children[chr] = new TrieNode();
                }
                node = node.children[chr];
            }
        }
        isSub(word){
            let node = this.root;
            for(let chr of word){
                if(!node.children[chr]){
                    return false;
                }
                node = node.children[chr];
            }
            return true;
        }
    }

    let myTrie = new Trie();

    words = words.sort( function(a,b){return b.length - a.length});
    let ans = new Set();
    for(let word of words){
        if(myTrie.isSub(word)){ans.add(word);}
        for(let I = 0; I<word.length; I++){
            myTrie.insert(word.slice(I));
        }
    }

    return [...ans];
};