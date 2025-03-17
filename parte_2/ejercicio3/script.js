let students = [
    {
        name: 'Juan Gomez',
        note: 7
    }, {
        name: 'Pedro Rodriguez',
        note: 4
    }, {
        name: 'Roxana García',
        note: 8
    }, {
        name: 'Luciano Lopez',
        note: 5
    }, {
        name: 'Fernanda Gimenez',
        note: 6
    }, {
        name: 'Florencia Martinez',
        note: 10
    }, {
        name: 'Raul Sanchez',
        note: 7
    }, {
        name: 'Sandra Figueroa',
        note: 8
    }
];

function calificacion() {
    let approved = [];
    let disapproved = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].note >= 7) {
            approved.push(students[i].name);
        } else {
            disapproved.push(students[i].name);
        }
    }
    document.getElementById('approved').innerHTML = approved.join('<br>');
    document.getElementById('disapproved').innerHTML = disapproved.join('<br>');
}

function cargarAlumno() {
    let studentList = document.getElementById('student');
    studentList.innerHTML = '';
    for (let i = 0; i < students.length; i++) {
        studentList.innerHTML += `<li class="student">${students[i].name}</li>`;
    }
}

calificacion();
cargarAlumno();
