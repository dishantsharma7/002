Question-1: 

// WAP to print this

// *
// **
// ***
// ****
// *****    

let n = 5;
let i = 1;
while(i<=n){
  let str="";
  let j = 1;
  while(j<=i){
    str+='*';
    j++;
  }
  console.log(str);
  i++;
}

// Question-2: 

// WAP to print this 

//    *
//   ***
//  *****
// *******


for (let i = 1; i <= 4; i++) {
    let str = "";
    for (let j = 1; j <= 7; j++) {
        if (j >= 5 - i && j <= 3 + i) {
            str += "*";
        } else {
            str += " ";
        }
    }
    console.log(str);
}

// Question-3:

// WAP to print this

// *****
// *   *
// *   *
// *****

for(let i=1; i<=4; i++){
    let str = "";
    for(let j=1; j<=5; j++){
        if(i==1 || i==4 || j==1 || j==5){
            str += "*";
        }else{
            str += " ";
        }
    }
    console.log(str);
}


// Question-4:

// WAP to print this

// 1
// 12
// 123
// 1234
// 12345

for(let i=1; i<=5; i++){
    let str = "";
    for(let j=1; j<=i; j++){
        str += j;
    }
    console.log(str);
}


// Question-5

// WAP to print this

//     A
//    BBB
//   CCCCC
//  DDDDDDD
// EEEEEEEEE


for(let i=1; i<=5; i++){
    let str = "";
    for(let j=1; j<=9; j++){
        if(j>=6-i && j<=4+i){
            str += String.fromCharCode(64+i);
        }else{
            str += " ";
        }
    }
    console.log(str);
}


