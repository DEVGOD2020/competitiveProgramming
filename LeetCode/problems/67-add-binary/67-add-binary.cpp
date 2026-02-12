class Solution {
public:
    string addBinary(string a, string b) {
        string ans = "";

        int X = a.length()-1;
        int Y = b.length()-1;
        int C = 0;

        while( X >= 0 || Y >= 0 || C){
            if(X >= 0){
                C += a[X--]-'0';
            }
            if(Y >= 0){
                C += b[Y--]-'0';
            }
            ans = to_string(C%2) + ans;
            C = C>>1;
        }

        return ans;
    }
};
