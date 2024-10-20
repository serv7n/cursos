#include <iostream>

using namespace std;

int main()
{
    cout << "NOTAS BM VEJA SUA MEDIA\n";
    int nota;
    int media;
    for (size_t i = 1; i < 5; i++)
    {
        cout << "Digite o valor da nota [" << i << "]:";
        cin >> nota;
        media += nota * i;
    }

    cout << "Sua media foi de  " << media << endl;

    if (media >= 600)
    {
        cout << "Aprovado";
    }
    else if (media >= 500)
    {
        cout << "Prova Final";
    }
    else
    {
        cout << "Reprovado";
    }
    return 0;
}