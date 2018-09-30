function LinearFibonacci(k){
    if(k<=1){
        return [k,0];
    }
    else{
        [i,j] = LinearFibonacci(k-1)
        return [i+j, i]
    }
}

function Fibonacci(k){
    return LinearFibonacci(k)[0]
}

for(var i = 0;i<20;i=i+1){
    console.log("Fibonacci",Fibonacci(i))
}
/*
Fibonacci 0
Fibonacci 1
Fibonacci 1
Fibonacci 2
Fibonacci 3
Fibonacci 5
Fibonacci 8
Fibonacci 13
Fibonacci 21
Fibonacci 34
Fibonacci 55
Fibonacci 89
Fibonacci 144
Fibonacci 233
Fibonacci 377
Fibonacci 610
Fibonacci 987
Fibonacci 1597
Fibonacci 2584
Fibonacci 4181
*/
