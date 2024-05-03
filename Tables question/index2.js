

let btn = document.getElementById("btn");


function display(mat,row,col,targetElement) {

    let rowContent = "";
    let AllContent = "";

    for(let i  = 0;i<row;i++) {
        rowContent = "<tr>";
        for(let j = 0;j<col;j++) {
            rowContent += (`<td> ${mat[i][j]} </td>`);
        }
        rowContent += "</tr>";
        AllContent += rowContent;
    }
    targetElement.innerHTML = AllContent;
}


btn.addEventListener( "click", () => {


    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;


    let table1 = document.getElementById("table1");
    let table2 = document.getElementById("table2");
    let result = document.getElementById("res");

    let arr1 = input1.split("#").map(Number);
    let arr2 = input2.split("#").map(Number);

    let row1 = arr1[0] , col1 = arr1[1] , num1 = arr1[2];
    let row2 = arr2[0] , col2 = arr2[1] , num2 = arr2[2];

    let mat2 = Array(row2).fill().map( ()=>Array(col2).fill(0) );
    let mat1 = Array(row1).fill().map( ()=> Array(col1).fill(0));


    console.log("num1 : ",num1);

    for(let i = 0;i<col1;i++) {
        for(let j = 0;j<row1;j++) {
            console.log("i j : ",i,j);
            mat1[j][i] = ( num1* (j+1) );
            console.log(mat1[j][i]);
        }
        num1 += 1;
    }


    for(let i = 0;i<col2;i++) {
        for(let j = 0;j<row2;j++) {
            console.log("i j : ",i,j);
            mat2[j][i] = ( num2* (j+1) );
            console.log(mat2[j][i]);
        }
        num2 += 1;
    }

    console.log("mat1 : ",mat1);
    console.log("mat2 : ",mat2);

    display(mat1,row1,col1,table1);
    display(mat2,row2,col2,table2);


    if( (row1 === row2) && (col1 === col2) )  {

        let mat3 = Array(row1).fill().map( ()=> Array(col1).fill(0) );
        
        for(let i = 0;i<row1;i++) {
            for(let j = 0;j<col1;j++) {
                if(mat1[i][j] === mat2[i][j]) mat3[i][j] = mat1[i][j];
                else mat3[i][j] = ( mat1[i][j] * mat2[i][j] ) ;
            }
        }

        console.log("mat3 : ",mat3);

        display(mat3,row1,col1,result);

    }

} );