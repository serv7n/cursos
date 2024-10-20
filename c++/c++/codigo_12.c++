#include <iostream>

using namespace std;
int opt;
int main(){
    cout << "ESCOLHA UMA DE 4 OPCAO: \n";
    cin >> opt;
    switch(opt){
        case 1:
            cout << "Voce escolheu a primeira opcao\n";
            break;
        case 2:
            cout << "Voce escolheu a segunda opcao\n";
            break;
        case 3:
            cout << "Voce escolheu a terceira opcao\n";
            break;
        case 4:
            cout << "Voce escolheu a quarta opcao\n";
            break;

        default:
            cout << "Invalido";

    }
}