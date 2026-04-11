#include <iostream>
using namespace std;
 
int main() 
{
    int T;
    cin >> T;
    while(T--){
      int A, B, C, D;
      cin >> A >> B >> C >> D;
      cout << (A==B && B==C && C==D ? "YES" : "NO" ) << endl;
    }
    return 0;
}
