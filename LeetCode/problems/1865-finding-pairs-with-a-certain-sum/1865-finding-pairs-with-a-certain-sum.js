/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
class FindSumPairs{
    constructor(nums1,nums2) {
        this.nums1 = nums1;
        this.nums2 = nums2;
        this.map = new Map();

        for(let numb of nums2){
            this.map.set( numb, (this.map.get(numb)|0)+1 );
        }
    }

    add(index,val){
        const key = this.nums2[index];

        this.map.set(key, (this.map.get(key)|0)-1 );
        this.map.set(key+val, (this.map.get(key+val)|0)+1 );

        this.nums2[index] += val;
    }

    count(tot){
        let score = 0
        for(let num of this.nums1){
            let target = tot-num;
            score += this.map.get(target) || 0;
        }
        return score;
    }
}

