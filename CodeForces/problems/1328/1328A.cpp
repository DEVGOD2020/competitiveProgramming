#include <iostream>
using namespace std;

int main() 
{
    int N = 0;
    cin >> N;
    for(int T = 0; T<N; T++){
      int B,C = 0;
      cin >> B >> C;
      cout << (C-(B%C))%C << endl;
    }
    return 0;
}
