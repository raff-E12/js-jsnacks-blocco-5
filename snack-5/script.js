const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const list_num_pari = nums.map((element)=>{
    if (element % 2 === 0) {
        return element = element;
    } else if (element !== undefined){
        return element = "";
    }
})

let reduce_list = list_num_pari.filter((element) => element !== "");

console.log(reduce_list);