#include <iostream>

using namespace std;

int acerto, erro;
string digitado;

int max_erro =5;

int main(){
    int tam = 4;
    string frase[tam] = {"m", "a", "c","a"};
    string frase_jogo[tam] = {"_", "_", "_","_"};

    cout << "Bem Vindo ao Jogo da Forca\n";
    while (acerto != tam){
        cout << "Digite uma letra: ";
        cin >> digitado;

        int tentativa = 0;
        for (size_t i = 0; i < tam; i++){
            if (digitado == frase[i]){
                tentativa++;
                frase_jogo[i] = frase[i];
            }
        }
        if (tentativa >= 1){
            acerto+=tentativa;
            cout << "\nVoce acertou\n";
            for (size_t i = 0; i < tam; i++){
                cout << frase_jogo[i];
            }
            cout << endl;
        }
        else
        {
            for (size_t i = 0; i < tam; i++)
            {
                cout << frase_jogo[i];
            }
            erro++;
            cout << "\nVoce errou\n";
            cout << "Voce ainda tem " << max_erro - erro << " tentativas\n";
        }
        if (erro >= max_erro)
        {
            cout << "Perdeu\n";
            break;
        };
        if (acerto == tam)
        {
            cout << "Voce ganhou\n";
        }
    }
    cout << "Fim\n";
    return 0;
}