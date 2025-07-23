/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    folder = folder.sort();

    let ans = [folder[0]];
    for(let I = 1; I<folder.length; I++){
        let folderPrev = ans[ans.length-1]+"/";
        if(!folder[I].startsWith(folderPrev)){
            ans.push(folder[I]);
        }
    }

    return ans;
};
