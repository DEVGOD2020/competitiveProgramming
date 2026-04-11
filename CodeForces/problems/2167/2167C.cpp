#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
 
int main() 
{
  int T;
  cin >> T;
  while(T--){
    int N;
    vector<int> nums;
    bool even = false;
    bool odd = false;
    cin >> N;
    while(N--){
      int A;
      cin >> A;
      if(A%2 == 0){even=true;}else{odd=true;}
      nums.push_back(A);
    }
    if(odd && even){ sort(nums.begin(),nums.end()); }
    for (int i : nums){ cout << i << " "; };
    cout << endl;
  }
}
