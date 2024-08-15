/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */


//Claude AI
function maxHeightOfTriangle(red, blue) {
    let height = 0;
    let rowSize = 1;
    
    while (red >= rowSize || blue >= rowSize) {
        if (height % 2 === 0) {
            // Even height, use red balls
            if (red >= rowSize) {
                red -= rowSize;
                height++;
            } else if (blue >= rowSize) {
                blue -= rowSize;
                height++;
            } else {
                break;
            }
        } else {
            // Odd height, use blue balls
            if (blue >= rowSize) {
                blue -= rowSize;
                height++;
            } else if (red >= rowSize) {
                red -= rowSize;
                height++;
            } else {
                break;
            }
        }
        rowSize++;
    }
    
    return height;
}

//DevGod
var maxHeightOfTriangle2 = function(red, blue) {
    let tempRed = red;
    let tempBlue = blue;

    let ROW = 1;
    let color = 0;
    while(red >= 0 && blue >= 0){
        if(color === 0){
            red += -ROW;
            if(red < 0){ ROW--; break;}
            color = 1;
        }else{
            blue += -ROW;
            if(blue < 0){ROW--; break;}
            color = 0;
        }
        ROW++;
    }

    red = tempRed;
    blue = tempBlue;


    let ROW2 = 1;
    color = 1;
    while(red >= 0 && blue >= 0){
        if(color === 0){
            red += -ROW2;
            if(red < 0){ ROW2--; break;}
            color = 1;
        }else{
            blue += -ROW2;
            if(blue < 0){ ROW2--; break;}
            color = 0;
        }
        ROW2++;
    }

    return Math.max(ROW,ROW2);
};