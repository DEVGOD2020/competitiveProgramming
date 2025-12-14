import java.util.*;
import java.util.HashSet;

public class E1 {
    public static void main(String[] args) {
      HashSet<Integer> mySet = new HashSet<Integer>();
      for(int I = 1; I<1000; I++){
        if( (I%3) == 0 || (I%5) == 0){
          mySet.add(I);
        }
      }
      int score = mySet.stream().mapToInt(Integer::intValue).sum();
      System.out.println( score );
  }
}
