let sum = function (a){
     
     let sum1 = function  (b){

        let sum2 = function (c){

          let result =a+b+c;

          console.log(result);

        }

        return sum2;

    }
   
    return sum1;
}

sum(10)(20)(35);