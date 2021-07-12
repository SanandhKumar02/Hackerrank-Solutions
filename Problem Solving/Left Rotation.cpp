#include<iostream>
#include<vector>
using namespace std;

vector<int> rotateLeft(int d, vector<int> arr) {
    int n = arr.size();
    for(int i=1;i<=d;i++){
        int temp=arr[0];
        for(int j=0;j<n;j++){
            arr[j]=arr[j+1];
        }
        arr[n-1]=temp;
    }
    return arr;
}