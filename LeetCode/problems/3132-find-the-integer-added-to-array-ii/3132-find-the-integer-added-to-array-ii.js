/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumAddedInteger = function(nums1, nums2) {
    nums1.sort(function(a,b){return a-b;})
    nums2.sort(function(a,b){return a-b;})
    
    let answers = new Set([
        nums2[0]-nums1[0],
        nums2[0]-nums1[1],
        nums2[0]-nums1[2]
    ]);

    for(let ans of answers){
        if( !check(ans) ){ answers.delete(ans); }
    }

    function check(ans){
        let count = 0;
        let J = 0;
        for(let I = 0; I<nums1.length; I++){
            if(nums2[J]-nums1[I] !== ans){
                count++;
            }else{
                J++;
            }
            if(count > 2){return false;}
        }
        return true;
    }
    
    return Math.min(...answers);
};