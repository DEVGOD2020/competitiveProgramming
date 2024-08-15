class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        myMap = Counter(words[0])
        words.pop(0)
        for str in words:
            newMap = Counter(str)
            for key in myMap.keys():
                if(myMap[key] > newMap[key]):
                    myMap[key] = newMap[key]
        
        myArr = []
        for key in myMap.keys():
            for I in range(0,myMap[key]):
                myArr.append(key)

        return myArr