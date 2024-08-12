let num1, num2

num1 = Number(prompt("Escreva um número"))
num2 = Number(prompt("Escreva um número"))

if(num1 > num2){

    alert(num1 + ' é o maior número')

}
else if( num1 === num2){

    alert('os números são iguais')
}
else{
    alert(num2 + ' é o maior número')
}