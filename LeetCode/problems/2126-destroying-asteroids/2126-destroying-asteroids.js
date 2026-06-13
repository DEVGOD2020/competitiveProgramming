/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    asteroids.sort((a,b)=>a-b);
    for(let a of asteroids){
        if(a>mass){return false;}
        mass += a;
    }
    return true;
};