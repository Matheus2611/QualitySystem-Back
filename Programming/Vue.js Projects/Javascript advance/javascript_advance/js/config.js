function setConfig() {
    var texts = {
        "title": "HOME"
    };

    document.title = texts.title

    document.getElementById('navTitle').innerHTML = texts.title;
}

setConfig();


















// var name = prompt('Your Name: ')

//  function yourname(name) {
//     return name + "Teixeira";

//  }

//  console.log(yourname(name));


//  var prop1 = prompt('Model ?')

//  var prop2 = prompt('Name ?')

//  var prop3 = prompt('Color ?')


//  var obj = {

//    model: prop1,
//     name: prop2,
//      color: prop3
//  };

//  obj.start = function() {
//      console.log('Ready')
//  }

//  console.log(JSON.stringify(obj));
//  obj.start();

//  var ft = [
//     'matheus',
//      'teixeira'
//  ];

//  ft.push('montrezoro');
//  ft.pop();
//  console.log(ft[0]);

// function validateNumber() {
//     var number = document.getElementById("number_val").value;

//     if (isNaN(number) || (number >= 1 && number <= 10)) {
//         alert('invalid input')
//     } else {
//         alert('VALID INPUT')
//     }
// }

// function answer1(obj) {
//     obj.innerHTML = 'VA EM VENDAS > FINANCEIRO > CONTABILIDADE';
//     obj.style.background = 'darkblue';
// }

// function outanswer(obj) {
//     obj.innerHTML = 'R:'
// }

// var click_me = document.getElementById('click_me');

// click_me.addEventListener('click', fnClickMe)

// function fnClickMe() {
//     alert('YOU CLICK ME')
// }

// function over(obj) {
//     obj.innerHTML = "over me";
//     obj.style.background = '#fff000';
// }

// function out(obj) {
//     obj.innerHTML = 'BACK AGAIN';
//     obj.style.background = '#ffffff';
// }

// var input = document.getElementsByClassName('number_val');




// var btn_generate = document.getElementById('btn_generate');
// btn_generate.style.fontSize = '10px';



// var body1 = document.getElementsByTagName('body');


// var select = document.createElement('select');

// body1[0].appendChild(select);

// for (var i = 0; i < 10; i++) {
//     var option = document.createElement('option');
//     option.id = "#id_" + i;
//     option.value = i;
//     option.innerHTML = i;

//     select.appendChild(option);

// }



// btn_generate.addEventListener('click', generate);

// function generate() {

//     var value = input[0].value;

//     for (var i = 0; i < parseInt(value); i++) {
//         var btn = document.createElement('button');
//         var inpt = document.createElement('input');

//         btn.id = "btn_" + i;
//         inpt.id = "btn_" + i;

//         var body = document.getElementsByTagName('body');

//         body[0].appendChild(btn, inpt);

//     }
// }

// var title = document.getElementById('h1');
// title.style.color = '#0000000';
// title.style.marginLeft = '50px';




// var input = document.getElementsByClassName('number_val_input')
// var generate_btn = document.getElementById('generate_btn')

// generate_btn.addEventListener('click', generate)

// function generate() {
//     var value = input[0].value;

//     for (var i = 0; i < parseInt(value); i++) {

//         var inpt = document.createElement('input');
//         inpt.id = "btn_" + i;

//         var body = document.getElementsByTagName('body');

//         body[0].appendChild(inpt);

//     }
// }