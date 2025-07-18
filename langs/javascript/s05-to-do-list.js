#!/usr/bin/env node
/* i have to make a to do list app or something.
i'm going to use arrays and objects ,let's do something.
*/

console.log ("the to_do list")
const to_do = [
    {name : "buying_bottle",
     status : "pending",
     deadline : "10/10/2024"
         }, 
    {name : "preparing_Journal",
     status : "pending",
     deadline : "10/10/2024"
    },
    {name : "eating_apple",
     status : "pending",
     deadline : "10/10/2024"
    },
]
// i created some tasks.
// now let's edit some of their statuses.
to_do[1].status="completed"
to_do[1].comment="do_it_now"
//i did it. 
// VScode is great.
//let's create another task in it.
to_do.push( 
    {name : "doing_practise_of_JS_bash_python",
     status : "pending",
     deadline : "do_it_asap"
})
//till now i'm going good. let's display it.
//console.log(to_do)
//let's try to output it in another way.

console.log (to_do[0])
//it worked! man.
console.log ("task 2 :" + JSON.stringify(to_do[1]));
console.log ("task 3 :" + JSON.stringify(to_do[2]));
console.log ("task 4 :" + JSON.stringify(to_do[3]));
console.log ("that's it for now. ")

