#include <iostream>

using namespace std;
string palavra = "Bom dia";
int outer()
{
    cout << palavra;
    cout << "Ola" << endl;
    return 0;
};

//  nao execultou o outer()
int main()
{
    cout << "Ola" << endl;
    return 0;
    outer();
}

