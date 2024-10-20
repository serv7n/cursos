#include <iostream>

using namespace std;

int main()
{

    int matriz[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

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