/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
    let matrix = Array.from({length:m}, (el)=>new Array(n).fill(-1));

    let dirs = [[0,1],[1,0],[0,-1],[-1,0]];
    let dir = dirs[0];

    let row = 0
    let col = 0;

    function checkBound(x,y){
        return x>=0 && y>= 0 && x < m && y < n && matrix[x][y] == -1;
    }

    for(let I = 1, Z=0; I<m*n; I++){
        while( !checkBound(row+dir[0],col+dir[1]) ){
            dir = dirs[Z%4];
            Z++;
        }

        if(head !== null){
            matrix[row][col] = head.val;
            head = head.next;
        }

        row += dir[0];
        col += dir[1];
    }

    if(head !== null){
        matrix[row][col] = head.val;
    }

    return matrix;
};