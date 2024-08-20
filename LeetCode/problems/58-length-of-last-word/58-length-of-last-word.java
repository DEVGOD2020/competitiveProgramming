class Solution {
    public int lengthOfLastWord(final String mySTR) {
        //Reverse String
        StringBuilder sb = new StringBuilder();
        int I=mySTR.length()-1;
        while(I>=0){
          sb.append(mySTR.charAt(I));
          I+=-1;
        }
        String newSTR = sb.toString();
        
        //Count Last Word
        int counter = 0;
        boolean letter = false;
        for(char a: newSTR.toCharArray()){
          if(a != ' '){letter=true; counter++;}
          else if(letter){break;}
        }

        return counter;
    }
}