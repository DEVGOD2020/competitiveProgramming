/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
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

    startWith(word){
        let currentNode = this.root;
        let I = 0;
        for(let char of word){
            if(!currentNode.children[char]){
                return word
            }
            currentNode = currentNode.children[char];
            if(currentNode.isEndOfWord){
                return word.substring(0,I+1);
            }
            I++;
        }
        return word;
    }

}

var replaceWords = function(dictionary, sentence) {
    let dict = new Trie();
    for(let word of dictionary){
        dict.insert(word);
    }

    let wordArr = sentence.split(" ");

    for(let I = 0; I<wordArr.length; I++){
        let word = wordArr[I];
        wordArr[I] = dict.startWith(wordArr[I]);
    }

    return wordArr.join(" ");
};