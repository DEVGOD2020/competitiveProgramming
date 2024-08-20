class Solution {
    public int reverse(int x) {
        String str = Long.toString(Math.abs((long)x));
        StringBuffer sbr = new StringBuffer(str);
        sbr.reverse();
        str = sbr.toString();
        if(x<0){str = "-"+str;}
        
        long value = Long.parseLong(str);
        int value2 = (int)Long.parseLong(str);
        if(value != value2){
            return 0;
        }
        return (int)value;
    }
}