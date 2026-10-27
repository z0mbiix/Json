const text = '{"name": "Leah", "age": 17, "city": "Norway"}';
const person = JSON.parse(text);

document.getElementById("demo").textContent = person.name + " is " + person.age + " years old and lives in " + person.city + ".";

