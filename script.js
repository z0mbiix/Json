// Del 1
const personElement = document.getElementById("person");
if (personElement) {
    const text = '{"name": "Leah", "age": 17, "city": "Norway"}';
    const data = JSON.parse(text);

    document.getElementById("person").textContent = data.name + " is " + data.age + " years old and lives in " + data.city + ".";
}

// Del 2
const dateElement = document.getElementById("date");
if (dateElement) {
    const today = new Date();

    // Formats date as DD.MM.YYYY
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();

    const formattedDate = `${day}.${month}.${year}`;

    dateElement.textContent = " todays date is " + formattedDate + ".";
}

// Del 3
