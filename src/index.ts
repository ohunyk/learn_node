const name = "Kwon",
  age = 30,
  gender = "male";

const sayHi = (name: string, age: number, gender?: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

console.log(sayHi(name, 444, "male"));

export {};
