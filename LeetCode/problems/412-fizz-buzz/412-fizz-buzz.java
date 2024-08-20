class Solution {
    public static List<String> fizzBuzz(final int n) {
        List<String> myList = new ArrayList<String>();
        int A = 1;
        while(A<=n){
            if(A%3 == 0 && A%5 == 0){
                myList.add("FizzBuzz");
            }
            else if(A%3 == 0){
                myList.add("Fizz");
            }
            else if(A%5 == 0){
                myList.add("Buzz");
            }
            else{
                myList.add(String.valueOf(A));
            }
            A++;
        }
        return myList;
    }
}