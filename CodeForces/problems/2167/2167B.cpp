#include <iostream>
#include<bits/stdc++.h>
using namespace std;
 
int main() 
{
    int T;
    cin >> T;
    while(T--){
      int N; cin>>N;
      string A; cin>>A;
      string B; cin>>B;
      sort(A.begin(),A.end());
      sort(B.begin(),B.end());
      if(A==B){
        cout << "YES" << endl;
      }else{
        cout << "NO" << endl;
      }
    }
    return 0;
}
