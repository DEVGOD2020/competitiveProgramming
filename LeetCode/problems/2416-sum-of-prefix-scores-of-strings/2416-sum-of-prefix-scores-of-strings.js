/**
 * @param {string[]} words
 * @return {number[]}
 */

class TrieNode {
    constructor() {
        this.children = {};
        this.freq = 0;
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
            node.freq += 1;
            node = node.children[char];
        }
        node.freq += 1;
        node.isEndOfWord = true;
    }

    prefixFreq(prefix) {
        let node = this.root;
        let size = 0;
        for (let char of prefix) {
            if (!node.children[char]) {
                return size;
            }
            node = node.children[char];
            size += node.freq;
        }
        return size;
    }
}

var sumPrefixScores = function(words) {
    let myTrie = new Trie();
    let ans = [];
    for(let word of words){
        myTrie.insert(word);
    }
    for(let word of words){
        ans.push(myTrie.prefixFreq(word))
    }

    return ans;
};