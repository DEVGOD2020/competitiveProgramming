/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
 class TrieNode {
    constructor() {
        this.children = {};
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }
    insert(word){
        let node = this.root;
        for(let c of word){
            if(!node.children[c]){
                node.children[c] = new TrieNode();
            }
            node = node.children[c];
        }
    }
    search(word,I=0,Z=0,node=this.root){
        if(Z > 2 || !node){return false;}
        if(I == word.length){return true;}
        
        if( node.children[word[I]] ){
            if( this.search(word,I+1,Z,node.children[word[I]]) ){
                return true;
            }
        }

        for(let C of Object.keys(node.children)){
            if(this.search(word,I+1,Z+1,node.children[C])){
                return true;
            }
        }
        Z++;
        return false;
    }
}

var twoEditWords = function(queries, dictionary) {
    let myTrie = new Trie();
    for(let word of dictionary){
        myTrie.insert(word);
    }

    let ans = [];
    for(let q of queries){
        if(myTrie.search(q)){
            ans.push(q);
        }
    }
    return ans;
};
