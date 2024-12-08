// // let arr=[1,2,3]
// // let arr2=[4,5,6]

// // const result=[...arr,...arr2]


// let person={
//     name:'veera',
//     age:25

// }

// let person2={
//     name:'samy',
//     age:23
// }

// const printname=function(thirdperson)
// {
//     console.log(this.name, this.age ,thirdperson)
// }

// printname.call(person,"hello")
// printname.apply(person2,["hello"])
// let bindprint=printname.bind(person2,"hello")

// bindprint()


// const abc=person2
// console.log(abc)
// abc.age=35

// console.log(person2)


// const xyz={...person}
// console.log(xyz)
// xyz.name='samy'
// console.log(xyz)
// console.log(person)


// let count=0;
// const IntervalId=setInterval(()=>{
// console.log(count++)
// if(count>5){
//     clearInterval(IntervalId)
//     console.log(clearInterval(IntervalId))
// }
// },1000)

// function curry(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// curry(2)(3)(4)

// let array=[1,2,3,4,5,0,10]
// let newArr=arr.splice(0,4)
// console.log(array)
// console.log(newArr)

// function * generatorfunction(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     return 5
// }
// const geneator=generatorfunction();

// console.log(geneator.next())
// console.log(geneator.next())
// console.log(geneator.next())
// console.log(geneator.next())
// console.log(geneator.next())

// function Strudent(){
//     this.Names='Sai',
//     this.exp=8

// }

// Strudent.prototype.company="TCS"

// let std1=new Strudent()
// std1.exp=9

// let std2=new Strudent()
// std2.exp=10

// console.log(std1)
// console.log(std2)


// let data=["sai,","Krishna"];

// data.forEach((item,i)=>{
//     console.log(item,i)
// })
 

// var mix=[1,'d',4,'e',3,'u']

// let character=[]
// let numbers=[];

// mix.map((elemrnt)=>{
//     if(typeof(elemrnt)==='string'){
//         character.push(elemrnt)
//     }
//     else{
//         numbers.push(elemrnt)
//     }
// })

// console.log(numbers)
// console.log(character)



// const arr1=[1,2,3,4]
// const arr2=[2,3,4,5,5]

// const result=[...new Set([
//      ...arr1.filter(item=>!arr2.includes(item)),
//     ...arr2.filter((item)=>!arr1.includes(item))])
   
// ]
// console.log(result)


// const reversesrting=function(string){

//     let reverse='';
//     for(let i=string.length-1;i>=0;i--){
//         reverse+=string[i]
//     }
//     return reverse

// }

// reversesrting('Hello')

// function smallestword(){

//     const sentence="Find the smallet word";
//     const words=sentence.split(' ')
//     let smallestword=words[0]

//     for(let i=1;i<words.length;i++){
//         if(words[i].length>smallestword.length){
//             smallestword=words[i]
//         }
//     }
//     console.log(smallestword)
// }
// smallestword()

// function isPrime(number){

//     if(number<=1){
//         return false
//     }
//     for(let i=2;i<=Math.sqrt(number);i++){
//         if(number % i===0){
//             return false
//         }
        
//     }
//     return true
// }

// isPrime(17)
// isPrime(16)



// const sortArray=function(arr1,arr2){

//     let i=1;
//     let j=1;
//     let array1=arr1[0]
//     let array2=arr2[0]
//     mergearray=[]
//     while(array1||array2){
//         if(array2===undefined || array1<array2){
//             mergearray.push(array1)
//             array1=arr1[i]
//             i++
//         }
//         else{
//             mergearray.push(array2)
//             array2=arr2[j]
//             j++
//         }
//     }
// console.log(mergearray)
// }

// sortArray([0,3,4,31],[4,6,30])

// array1=[0,3,4,31]
// array2=[4,6,30]

// const merge=[...array1,...array2]

// merge.sort((a,b)=>a-b)



// function factorial(num){

//     if(num==0 || num===1){
//         return 1
//     }
//     else{
//         return num*factorial(num-1)
//     }
// }

// console.log(factorial(4))


// function primenum(num){
// if(num<=1){
//     return 1
// }
// for(let i=2;i<=Math.sqrt(num);i++){
  

// if(num%i===0){
//     return false
// }
// }
// return true
// }

// console.log(primenum(17))
// console.log(primenum(16))


// function febnacci(num){
//     if(num<=0)
//         return []
//     if(num===1){
//         return [0]
//     }
//     let seq=[0,1]
//     while(seq.length<num){
//         let nextnum=seq[seq.length-1]+seq[seq.length-2]
//         seq.push(nextnum)
//     }
//     return seq
// }

// console.log(febnacci(7))


// function count(str){
//     let countChar={}
//     for(let char of str){
//         countChar[char]=(countChar[char]||0)+1
//     }
//     return countChar
// }

// console.log(count('helloooee'))

// function unique(arr){
//   return arr.filter((item,index)=>arr.indexOf(item)===index)
// }

// console.log(unique([1,2,3,4,5,5,4]))
function randomkey(length){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result=''
    for(let i=0;i<length;i++){
        const radomindex=Math.floor(Math.random()*characters.length)
        result+=characters.charAt(radomindex)
    }
    return result
}

console.log(randomkey(8))
