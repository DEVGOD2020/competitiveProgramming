/**
 * @param {string[][]} paths
 * @return {string[][]}
 */

const hash = function(s) {
    let hash = 0;
    for (let i = 0; i < s.length; i++) {
        hash = (hash * 31 + s.charCodeAt(i)) | 0;
    }
    return hash;
};

var deleteDuplicateFolder = function(paths) {
    let ans = [];
    let myMap = new Map();
    class Trie{
        constructor(name){
            this.child = {};
            this.hash = "";
        }
        insert(folder){
            let node = this;
            for(let fold of folder){
                if( !node.child[ fold ] ){
                    node.child[ fold ] = new Trie(fold);
                }
                node = node.child[ fold ];
            }
        }
        mark(node=this){
            const keys = Object.keys(node.child);
            for(let key of keys){
                node.hash = hash(node.hash+key+
                    this.mark(node.child[key])
                );
            }
            myMap.set( node.hash, (myMap.get(node.hash)|0) + 1 );
            return node.hash;
        }
        valid(node=this,path=[]){
            const keys = Object.keys(node.child);
            for(let key of keys){
                path.push(key);
                if( myMap.get(node.child[key].hash) == 1 || node.child[key].hash == ''){
                    ans.push([...path]);
                    this.valid(node.child[key],path);
                }
                path.pop();
            }
        }
    }

    let blah = new Trie();

    paths.sort();
    for(let folder of paths){
        blah.insert(folder);
    }
    blah.mark();
    blah.valid();

    return ans;
};
