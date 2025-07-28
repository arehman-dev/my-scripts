#!/usr/bin/env node
//i'm gonna play with arrays.
//let's make something.

let office_items = ["table2x", "drawer", "laptops", "extra_display", "fan", "ONT device", "chairs"]
office_items.push ("Cables")
office_items.pop ()
console.log ("the no. of items in office: " + office_items.length )
//i used push,pop,length
//now let's do something more
//i'm using for loop to display array.
for (let i = 0; i < office_items.length; i++) {
    console.log(office_items[i]);
}
//although loops are something strange to me now but let's torture my mind.