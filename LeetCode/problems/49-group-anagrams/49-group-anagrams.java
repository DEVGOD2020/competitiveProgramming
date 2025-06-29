class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, ArrayList<String>> blah = new HashMap<String, ArrayList<String>>();
        for(String s : strs ){
            char[] arr = s.toCharArray();
            Arrays.sort(arr);
            String key = new String(arr);

            blah.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
        }

        return new ArrayList<>(blah.values());
    }
}
