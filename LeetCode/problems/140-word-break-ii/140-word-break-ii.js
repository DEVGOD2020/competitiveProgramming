/**
 * @param {string} s
 * @param {string[]} wordDict
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

    // Method to insert a word into the trie
    insert(word) {
        let currentNode = this.root;

        for (let char of word) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode();
            }
            currentNode = currentNode.children[char];
        }

        currentNode.isEndOfWord = true;
    }

    search(word) {
        let currentNode = this.root;

        for (let char of word) {
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }

        return currentNode.isEndOfWord;
    }

    startsWith(prefix) {
        let currentNode = this.root;

        for (let char of prefix) {
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }

        return true;
    }
}

var wordBreak = function(s, wordDict) {
    let myTrie = new Trie();
    for(let word of wordDict){
        myTrie.insert(word);
    }

    console.log(myTrie);
};