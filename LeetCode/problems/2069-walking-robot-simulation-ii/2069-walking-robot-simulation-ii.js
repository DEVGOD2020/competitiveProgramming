class Robot {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.perm = (2*width+2*height)-4;
        this.score = -1;
    }

    step(num){
        if(this.score == -1 ){this.score++;}
        this.score = (this.score+num)%this.perm;
    }

    getPos(){
        if(this.score == -1){return [0,0]}
        if(this.score < this.width){
            return [this.score, 0];
        }
        if(this.score < this.width+this.height-1){
            return [
                this.width-1, 
                this.score-(this.width-1)
            ];
        }
        if(this.score < 2*this.width+this.height-2){
            return [
                (this.width-1) - (this.score-(this.width+this.height-2))
                ,this.height-1
            ];
        }
        return [
            0,
            (this.height-1) - (this.score-(2*this.width+this.height-3)) 
        ];
    }

    getDir(){
        if(this.score == -1){ return "East"; }
        if(this.score == 0){return "South";}
        if(this.score < this.width){return "East";}
        if(this.score < this.width+this.height-1){ return "North"; }
        if(this.score < 2*this.width+this.height-2){ return "West"; }
        return "South";
    }
}

