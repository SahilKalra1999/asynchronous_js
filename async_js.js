// console.log(1);
// console.log(2);
// setTimeout(()=>{
//     console.log('set timeout was callled');
// },2000);
// console.log(3);
// console.log(4);

// const request=new XMLHttpRequest();
// request.addEventListener('readystatechange', ()=>{
//     if(request.readyState===4){
//         console.log(request.responseText);
//     }
// });
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// request.send();

//how to print msg when we will get some error in fetching data using http connection

const request=new XMLHttpRequest();
request.addEventListener('readystatechange', ()=>{
if(request.readyState===4 && request.status===200){
    console.log(request.responseText);
}
else if(request.readyState===4){
    console.log('could not fetch data');
}
});
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();