class Solution {
    public int[] kWeakestRows(int[][] mat, final int k) {
        HashMap<Integer,Integer> strong = new HashMap<Integer,Integer>();

        int score = 0;
        int I=0;
        for(int[] a : mat){
            score=0;
            for(int b : a){ score+=b; }
                strong.put(I,score);
            I++;
        }

        HashMap<Integer, Integer> sorted = sortByValue(strong);
        Integer[] arr = sorted.keySet().toArray(new Integer[0]);

        int[] aInt = new int[arr.length];
        Arrays.setAll(aInt, i -> arr[i]);
        int[] ARR = Arrays.stream(aInt).limit(k).toArray();

        return ARR;
    }

    public HashMap<Integer, Integer> sortByValue(HashMap<Integer, Integer> hm)
    {
        HashMap<Integer, Integer> temp
            = hm.entrySet()
                  .stream()
                  .sorted((i1, i2)
                              -> i1.getValue().compareTo(
                                  i2.getValue()))
                  .collect(Collectors.toMap(
                      Map.Entry::getKey,
                      Map.Entry::getValue,
                      (e1, e2) -> e1, LinkedHashMap::new));
 
        return temp;
    }
}