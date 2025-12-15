#include <iostream>
#include <unordered_set>
#include <numeric>

using namespace std;
int main(){
  unordered_set<int> mySet;
  for(int I = 1; I<1000; I++){
    if(I%3 == 0 || I%5 == 0){
      mySet.insert(I);
    }
  }
  int score = accumulate(
      mySet.begin(), 
      mySet.end(), 
      0);
  cout << score << endl;
  return 0;
}
