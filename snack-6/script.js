const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

//Lista delle zucchine più grandi di 15cm
const length_zuc_list = zucchine.map((list, element)=>{
  if (list.length > 15) {
    return `${list.type}:${list.length}`;
  } else if(element !== undefined){
    return "";
  }
}).filter((element)=> element !== "");

//Lista delle zucchine minore di 15cm
const filter_another = zucchine.map((list, element)=>{
  if (list.length < 15) {
    return `${list.type}:${list.length}`;
  } else if(element !== undefined){
    return "";
  }
}).filter((element)=> element !== "");

console.log(length_zuc_list);
console.log(filter_another);