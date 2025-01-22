const A1 = document.querySelector(".a1");
const A2 = document.querySelector(".a2");
const A3 = document.querySelector(".a3");
const B1 = document.querySelector(".b1");
const B2 = document.querySelector(".b2");
const B3 = document.querySelector(".b3");
const C1 = document.querySelector(".c1");
const C2 = document.querySelector(".c2");
const C3 = document.querySelector(".c3");
/*
let fieldsColor = {
    a1: 'red',
    a2: 'green',
    a3: 'white',
    b1: 'white',
    b2: 'yellow',
    b3: 'white',
    c1: 'white',
    c2: 'white',
    c3: 'black'
}
    
function coloring() {
    A1.style.backgroundColor = fieldsColor['a1'];
    A2.style.backgroundColor = fieldsColor['a2'];
    A3.style.backgroundColor = fieldsColor['a3'];
    B1.style.backgroundColor = fieldsColor['b1'];
    B2.style.backgroundColor = fieldsColor['b2'];
    B3.style.backgroundColor = fieldsColor['b3'];
    C1.style.backgroundColor = fieldsColor['c1'];
    C2.style.backgroundColor = fieldsColor['c2'];
    C3.style.backgroundColor = fieldsColor['c3'];
}*/
//coloring();


let turn = 'red'

A1.addEventListener('click', function() {
    if (turn === 'red') {
        A1.style.backgroundColor = 'red';
    } else {
        A1.style.backgroundColor = 'green';
    }
    
});

A2.addEventListener('click', function() {
    A2.style.backgroundColor = "red";
});
A3.addEventListener('click', function() {
    A3.style.backgroundColor = "red";
});
B1.addEventListener('click', function() {
    B1.style.backgroundColor = "red";
});
B2.addEventListener('click', function() {
    B2.style.backgroundColor = "red";
});
B3.addEventListener('click', function() {
    B3.style.backgroundColor = "red";
});
C1.addEventListener('click', function() {
    C1.style.backgroundColor = "red";
});
C2.addEventListener('click', function() {
    C2.style.backgroundColor = "red";
});
C3.addEventListener('click', function() {
    C3.style.backgroundColor = "red";
});

/*
function moveGreen() {
    A1.addEventListener('click', function() {
        A1.style.backgroundColor = "green";
        turn = 'red';
    });
    A2.addEventListener('click', function() {
        A2.style.backgroundColor = "green";
        turn = 'red';
    });
    A3.addEventListener('click', function() {
        A3.style.backgroundColor = "green";
        turn = 'red';
    });
    B1.addEventListener('click', function() {
        B1.style.backgroundColor = "green";
        turn = 'red';
    });
    B2.addEventListener('click', function() {
        B2.style.backgroundColor = "green";
        turn = 'red';
    });
    B3.addEventListener('click', function() {
        B3.style.backgroundColor = "green";
        turn = 'red';
    });
    C1.addEventListener('click', function() {
        C1.style.backgroundColor = "green";
        turn = 'red';
    });
    C2.addEventListener('click', function() {
        C2.style.backgroundColor = "green";
        turn = 'red';
    });
    C3.addEventListener('click', function() {
        C3.style.backgroundColor = "green";
        turn = 'red';
    });
}
if (turn === 'red') {
    moveRed();
} else {
    moveGreen();
}

*/