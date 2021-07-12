#include<iostream>
#include<map>
using namespace std;

int main(){

    int q;
    cin>>q;
    string name, number;

    map<string, string> phoneBook;

    for(int i=1;i<=q;i++){
        cin>>name>>number;
        phoneBook[name] = number;
    }
    while(cin>>name){
        if(phoneBook.find(name) != phoneBook.end()){
            cout<<name<<"="<<phoneBook.find(name)->second<<endl;
        }
        else
            cout<<"Not Found";
    }

    return 0;
}