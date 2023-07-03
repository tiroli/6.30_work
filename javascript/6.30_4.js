'use strict';

// 반복(회전수) 결정 조건 : 1) 처음 2) 끝 3) 일정한규칙

// while (조건식(반복)) {
//     반복실행블럭;
// }

// 56 ~ 73  증가
let i = 55;

while (i < 73) {
    i++;    
    console.log(i);
}

// 167 ~ 193   증가
let i = 167;

while (i < 194) {
    console.log(i);
    i++;  
} 

// 96 ~ -77
let i = 97;

while (1) {
    i--;
    console.log(i);
    if (i <= -77) break;
}

// 5 ~ 23
let i = 4;

while (1) {
    i++;
    console.log(i);
    if (i >= 23) break;
}

// 66 ~ 88
let i = 65;

while (1) {
    i++;
    if (i >= 89) break;
    console.log(i);
}
