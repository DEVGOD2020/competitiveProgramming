#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main() 
{
    int W,X,Y,Z,D = 0;
    cin >>W>>X>>Y>>Z>>D;
    unordered_set<int> mySet;
    for(int I = 1; I<=D; I++){
      if(I%W == 0 || I%X == 0 || I%Y == 0 || I%Z == 0){
        mySet.insert(I);
      }
    }
    cout << mySet.size();
    return 0;
}
