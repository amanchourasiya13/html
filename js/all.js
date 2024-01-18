
// function call after var. declare
// function outer()
// {
//     inner()
//     var num =5
//     function inner()
//     {
//         console.log(num)
//     }
// }
// outer()

// var. declare after function call
// function outers()
// {
//     var num =5
//     inners()
//     function inners()
//     {
//         console.log(num)
//     }
// }
// outers()


// function outerss(a)
//  {
//     console.log('outerss')
//     a()
//  }
//  function innerss()
//  {
//     console.log('innerss')
//  }
// outerss(innerss)


//function jo ek function return kare
// function outerr()
//     {
//         console.log('outerr')
//         function innerr()
//         {
//             console.log('innerr')
//         }
//         return innerr
//     }
// let i=outerr()
// i()

// console.log(x);
// var x = 0;

//  var y=1;
//  console.log(y);

//  console.log(z);  //error occur
//  let z = 2;

//  let g = 2;
//  console.log(g);


  //FIND STRING IN A ARRAY :-
let ar=[1,2,3,4,5,true,false,'hello','hiii']
function get(ar)
{
    let res=[]
    for(let item of ar)
    {
        if(typeof item==='number')
        {
            res.push(item)
        }
    }
    return res
}
console.log(get(ar))

// //FIND NUMBER IN A ARRAY :-
// let ary=[1,2,3,4,5,true,false,'hello','hiii']
// function gets(ary)
// {
//     let res=[]
//     for(let item of ary)
//     {
//         if(typeof item==='number')
//         {
//             res.push(item)
//         }
//     }
//     return res
// }
// console.log(gets(ary))


// // OPTIMIZATION WAY OF FIND ONE DATATYPE LIST IN ARRAY :-
// let array=[1,2,3,4,5,true,false,'hello','hiii']
// function getstring(item)
// {
//     return typeof item==='string'
// }
// function getnumber(item)
// {
//     return typeof item==='number'
// }
// function getboolean(item)
// {
//     return typeof item==='boolean'
// }
// function gett(array,fn)
// {
//     let ress=[]
//     for(let item of array)
//     {
//         if(fn(item))
//         {
//             ress.push(item)
//         }
//     }
//     return ress
// }
// console.log(gett(array,getstring))
// console.log(gett(array,getnumber))
// console.log(gett(array,getboolean))

// //CALLBACK FUNCTION :- 
// function callback(num,fn)
// {
//     return fn(num)
// }
// function boolean(num)
// {
//     return typeof num ==='boolean'
// }
// console.log(callback(true,boolean))


// function outer()
// {
// }
// let user = new outer()
// console.log(user)

// function outers(user,users)
// {
//     this.userName=user,
//     this.userLastName=user,    
// }
// let users = new outers()
// console.log(users)
