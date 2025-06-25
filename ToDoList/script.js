// var ul = document.getElementById('list-container')
// var input = document.getElementById('input')
// function add(){
//     var listItem = document.createElement('li');
//     listItem.innerHTML=input.value + "<button onclick='deleteItem(event)'>Delete</button>";
//     ul.append(listItem);
// }
// function deleteItem(event){ 
//     event.target.parentElement.remove();
// }

var name1 = document.getElementById('name');
var age = document.getElementById('age');
var course = document.getElementById('course');
var email = document.getElementById('email');
var result = document.getElementById('result');


function save() {
    if (document.getElementById("genderMale").checked) {
        var gender = "Male";
    } else if (document.getElementById("genderFemale").checked) {
        var gender = "Female";
    }
    var listItem = document.createElement('tr');
    listItem.innerHTML = "<td>" + name1.value + "</td><td>" + age.value + "</td><td>" + gender + "</td><td>"+course.value+"</td><td>"+email.value+"</td><td><button onclick='deleteRow(event)'>Delete</button></td>";
    result.appendChild(listItem);
}

function deleteRow(event){ 
    event.target.parentElement.parentElement.remove();
}
