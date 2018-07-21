// Solutions to exercises from chapter 2 of Eloquent Javascript

//1- Looping a triangle
var drawRightTriangle = function(height){
    //I give height a default value in case the user does not provide any value.
    height = typeof height !== 'undefined'? height: 7;
    block = " ";
    for (var i = 0; i < height; i++){
        block = block + "#";
        console.log(block);
    }
}

//2- FizzBuzz
var fizzBuzz = function(lowerLimit,upperLimit){
    lowerLimit = typeof lowerLimit !== 'undefined' ? lowerLimit : 0;
    upperLimit = typeof upperLimit !== 'undefined' ? upperLimit : 100;

    for( var i = lowerLimit; i < upperLimit; i++){
      if ( i % 3 == 0 && i % 5 ==0){
        console.log(i + ": FizzBuzz");
      }
      else if (i % 3 == 0){
        console.log(i+ ": Fizz");
      }

      else if ( i % 5 == 0){
        console.log(i + ': Buzz');
      }
    }
}

//3 - Chess  Board
var chessBoard = function(size){

    size = typeof size !== 'undefined'? size : 8;

    for (var i = 0; i < size; i++){
        var line= " "
        for(var j = 0; j < size; j++){
        if ( i % 2 == 0){
            if ( j % 2 == 0)  line = line + "#";
            else line = line + " ";
        }
        else {

          if ( j % 2 == 0)  line = line + " ";
          else line = line + "#";
        }

        }
        console.log(line);
    }
}
