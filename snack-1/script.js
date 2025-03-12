const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

let names_element = ()=>{
    let names_list = [];
    names.forEach((element, array)=>{
        names_list.push(element);
    })
    return names_list.join("-")
}

console.log(names_element());