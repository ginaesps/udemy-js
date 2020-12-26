const task3Element = document.getElementById('task-3');

function greet(){
    alert('greetings');
}

function showName(name){
    alert(`Hi ${name}`);
}

function concatenateStrings(name,treatment,salute){
    const finalString = `${salute}, ${treatment} ${name}, hope you´re pretty well today`;
    return finalString;
}

showName('Gina');

task3Element.addEventListener('clic', greet); // THIS ISN´T WORKING even though the code is just as the instructor's...

const stringsFunction = concatenateStrings('Regi', 'Mss', 'Good night');

alert(stringsFunction); // this is a more readable way of returning a function´s result as an alert