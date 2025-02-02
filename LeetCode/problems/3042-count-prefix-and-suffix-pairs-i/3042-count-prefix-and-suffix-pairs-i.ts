function countPrefixSuffixPairs(words: string[]): number {

    function isPrefixAndSuffix(str1:string, str2:string): boolean{
        if(str1.length > str2.length){ return false; }

        let prefix = str2.slice(0,str1.length);
        let suffix = str2.slice(-str1.length);

        return (prefix == str1 && suffix == str1)
    }

    let score:number = 0;
    for(let A = 0; A<words.length; A++){
        for(let B = A+1; B<words.length; B++){
            if(isPrefixAndSuffix(words[A],words[B])){
                score++;
            }
        }
    }

    return score;
};