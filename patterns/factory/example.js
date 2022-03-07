//Благодаря замыканиям фабрика может использоваться как механизм инкапсуляции

function createPerson(name) {
    const privateProps = {};

    const person = {
        setName: function (name) {
            if (!name) {
                throw new Error('A person must have a name');
            }

            privateProps.name = name;
        },

        getName: function () {
            return privateProps.name;
        }
    };

    person.setName(name);

    return person;
}

const person = createPerson('Ivan');

console.log(person.getName());