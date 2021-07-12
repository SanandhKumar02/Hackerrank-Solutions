#include<iostream>
#include<vector>
using namespace std;

int hourglassSum(vector<vector<int>> arr) {
    int sum=0, max= -100;
    for(int i=1;i<=4;i++){
        for(int j=1;j<=4;j++){
            sum = arr[i-1][j-1]+arr[i-1][j]+arr[i-1][j+1]+arr[i][j]+arr[i+1][j-1]+arr[i+1][j]+arr[i+1][j+1];
            
            if(sum > max)
            max = sum;
        }
    }
    return max;
}