class Solution {
    //Perfect Squares 1 4 9 16 25 36
    //Offsets 3 5 7 9 11 | y=2x+1
    public int mySqrt(int myNum) {
        long perfectSquare = 1;
        long perfectSquareOffset = 3;
        int I = 0;

        while(perfectSquare<=myNum){
            perfectSquare += perfectSquareOffset;
            perfectSquareOffset += 2;
            I++;
        }

        return I;
    }
}