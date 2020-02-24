const o1 = { name: "kim" };
Object.freeze(o1);
const o2 = { name: "lee" };
//o1 = o2; // TypeError: Assignment to constant variable. => const
o1.name = "park";
console.log(o1);
