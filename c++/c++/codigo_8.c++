#include <iostream>

using namespace std;
int a, b;
int main(){
    cin >> a;
    cin >> b;
    if(a > b){
        cout << a << " > " << b << endl;
    } else if( a == b){
        cout << a << " = " << b << endl;
    }
    else{
        cout << a << " < " << b << endl;
    }
    return 0;

    
}