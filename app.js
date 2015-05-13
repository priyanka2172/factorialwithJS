/**
 * Created by nisum-user on 5/13/15.
 */
function Fibonacci(){

    this.recursive=function(n){
        if(n==0){
            return 0;
        }
        if(n<2) {
            return 1;
        }
        else{
            return this.recursive(n-1)+ this.recursive(n-2);
        }
    };
}