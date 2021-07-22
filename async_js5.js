// async and await in javascript
// const getTodos= async()=>{
// const response=await fetch('todos/todos1.json');
// const data=await response.json();
// return data;
// };

// getTodos().then(data=>{
//     console.log('resolved', data);
// });

//throwing new error in async and await

const getTodos= async()=>{
    const response=await fetch('todos/todos1.json');
    if(response.status!==200){
        throw new Error('Cannot execute the result');
    }
    const data=await response.json();
    return data;
    };
    
    getTodos().then(data=>{
        console.log('resolved: ', data);
    }).catch(err=>{
        console.log('rejected: ', err.message);
    });