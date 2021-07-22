//printing multiple json objects in one program
// const getTodos=(resource, callback)=>{
//     const request=new XMLHttpRequest();
//     request.addEventListener('readystatechange', ()=>{
//         if(request.readyState===4 && request.status===200){
//             const data=JSON.parse(request.responseText);
//             callback('undefined', data);
//         }
//         else if(request.readyState===4){
//             callback('could not fetch data', undefined);
//         }
//     });
//     request.open('GET', resource);
//     request.send();
// }
// getTodos('todos/todos.json', (err, data)=>{
//     console.log(data);
//     getTodos('todos/todos1.json', (err, data)=>{
//      console.log(data);
//      getTodos('todos/todos2.json', (err, data)=>{
//       console.log(data);
//      });
//     });
// });

//promises in javascript
// const getTodos=(resource, callback)=>{
//     return new  Promise((resolve, reject)=>{
//         const request=new XMLHttpRequest();
//             request.addEventListener('readystatechange', ()=>{
//                 if(request.readyState===4 && request.status===200){
//                     const data=JSON.parse(request.responseText);
//                     resolve(data);
//                 }
//                 else if(request.readyState===4){
//                     reject('error getting resource');
//                 }
//             });
//             request.open('GET', resource);
//             request.send();
//     });
// };
// getTodos('todos/todos.json').then(data=>{
//     console.log('promise resolved', data);
// }).catch(err=>{
//     console.log('promise rejected', err);
// })

//using multiple json data uisng promises
const getTodos=(resource, callback)=>{
    return new  Promise((resolve, reject)=>{
        const request=new XMLHttpRequest();
            request.addEventListener('readystatechange', ()=>{
                if(request.readyState===4 && request.status===200){
                    const data=JSON.parse(request.responseText);
                    resolve(data);
                }
                else if(request.readyState===4){
                    reject('error getting resource');
                }
            });
            request.open('GET', resource);
            request.send();
    });
};
getTodos('todos/todos.json').then(data=>{
    console.log('promise-1 resolved:', data);
    return getTodos('todos/todos1.json');
}).then(data=>{
    console.log('promise-2 resolved:', data);
    return getTodos('todos/todos2.json');
}).then(data=>{
    console.log('promise-3 resolved:', data);
}).catch(err=>{
    console.log('promise rejected', err);
})