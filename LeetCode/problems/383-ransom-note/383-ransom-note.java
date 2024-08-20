class Solution {
    HashMap<Character, Integer> magazineMap= new HashMap<Character, Integer>();
    HashMap<Character, Integer> ransomMap= new HashMap<Character, Integer>();

    public boolean canConstruct(final String ransomNote, final String magazine) {
        final char[] mag = magazine.toCharArray();
        final char[] ran = ransomNote.toCharArray();
        int value = 0;
        for(char chr : mag){
            try{value = magazineMap.get(chr)+1;}catch(Exception e){value = 1;}
            magazineMap.put(chr,value);
        }
        value = 0;
        for(char chr : ran){
            try{value = ransomMap.get(chr)+1;}catch(Exception e){value = 1;}
            ransomMap.put(chr,value);
        }

        
        for (Map.Entry<Character, Integer> set : ransomMap.entrySet()) {
            if(magazineMap.get(set.getKey()) == null){
                return false;
            }
            else if(set.getValue()>magazineMap.get(set.getKey())){
                return false;
            }
        }
        return true;
    }
}