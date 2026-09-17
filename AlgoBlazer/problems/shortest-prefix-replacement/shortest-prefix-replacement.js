class TrieNode{
    constructor(){
        this.children = {};
        this.end = false;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }
    insert(word){
        let curr = this.root;
        for(let chr of word){
            if(curr.children[chr] == undefined){
                curr.children[chr] = new TrieNode();
            }
            curr = curr.children[chr];
        }
        curr.end = true;
    }
    search(word){
        let curr = this.root;
        let ans = "";
        for(let chr of word){
            if(curr.children[chr] == undefined){
                return word;
            }
            curr = curr.children[chr];
            ans += chr;
            if(curr.end){return ans;}
        }
        return word;
    }

}

function shortestPrefixReplacement(roots, sentence) {
    let myTrie = new Trie();
    for(let word of roots){
        myTrie.insert(word);
    }
    let ans = [];
    for(let word of sentence.split(" ")){
        let A = myTrie.search(word);
        if(A.length){
            ans.push(A);
        }
    }
    return ans.join(" ");
}
