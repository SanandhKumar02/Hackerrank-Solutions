#include<iostream>
#include<vector>
using namespace std;

int main(){
    vector<vector<int>> arr(6, vector<int>(6));

    //Solution 
    int max=-100, sum=0;
    for(int i=1;i<=4;i++){
        for(int j=1;j<=4;j++){
            sum = arr[i-1][j-1]+arr[i-1][j]+arr[i-1][j+1]+arr[i][j]+arr[i+1][j-1]+arr[i+1][j]+arr[i+1][j+1];
            
            if(sum > max)
            max = sum;
        }
    }
    cout<<max;
    return 0;
}