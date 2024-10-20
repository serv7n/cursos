#include <iostream>

using namespace std;

int main()
{

    int matriz[3][3];

    for (size_t l = 0; l < 3; l++)
    {
        for (size_t c = 0; c < 3; c++)
        {
            cin >> matriz[l][c];
        }
        cout << endl;
    }
    
    for (size_t l = 0; l < 3; l++)
    {
        for (size_t c = 0; c < 3; c++)
        {
            cout << matriz[l][c];
        }
        cout << endl;
    }
    return 0;
}