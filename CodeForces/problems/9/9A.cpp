#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main() 
{
    int A,B = 0;
    cin>>A>>B;
    int max = (A>B)?A:B;
    if(max == 1){cout << "1/1";}
    if(max == 2){cout << "5/6";}
    if(max == 3){cout << "2/3";}
    if(max == 4){cout << "1/2";}
    if(max == 5){cout << "1/3";}
    if(max == 6){cout << "1/6";}
}
