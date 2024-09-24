/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
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

    longestPrefix(prefix) {
        let node = this.root;
        let size = 0;
        for (let char of prefix) {
            if (!node.children[char]) {
                return size;
            }
            size++;
            node = node.children[char];
        }
        return size;
    }
}

var longestCommonPrefix = function(arr1, arr2) {
    let myTrie = new Trie();
    for(let el of arr1){
        myTrie.insert(""+el);
    }

    let max = 0;
    for(let el of arr2){
        max = Math.max(max, myTrie.longestPrefix(""+el));
    }

    return max;
};