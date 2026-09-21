/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function(radius, xCenter, yCenter, x1, y1, x2, y2) {
    let xDis = Math.min((x1-xCenter)**2, (x2-xCenter)**2);
    let yDis = Math.min((y1-yCenter)**2, (y2-yCenter)**2);
    if(x1<=xCenter&&x2>=xCenter){xDis=0;}
    if(y1<=yCenter&&y2>=yCenter){yDis=0;}
    return (xDis+yDis) <= radius**2;
};