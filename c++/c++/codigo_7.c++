#include <iostream>

using namespace std;

int main(){
    int num = 10;

    cout << -num << endl;
    
    num *= -1;
    cout << num << endl;
    num = -num;
    cout << num << endl;
    
    return 0;
}