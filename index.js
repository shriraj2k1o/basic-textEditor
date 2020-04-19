var showingSourceCode = false;
var isInEditMode = true;

function enableEditMode () { 
    richTextField.document.designMode = 'ON';
}

function execCmd (command) {
    richTextField.document.execCommand(command, false, null);
}

function execCommandWithArg (command, arg) {
    richTextField.document.execCommand(command, false, arg);
}

function toggleSource() { 
    if(showingSourceCode){
        richTextField.document.getElementsByTagName('body')[0].innerHTML = richTextField.document.getElementsByTagName('body')[0].textContent; 

        showingSourceCode = false;
    }else{
        richTextField.document.getElementsByTagName('body')[0].textContent = richTextField.document.getElementsByTagName('body')[0].innerHTML;
        showingSourceCode = true;
    }
}

function toggleEdit () { 
    if(isInEditMode){
        richTextField.document.designMode = 'OFF';
        isInEditMode = false;
    }else{
        richTextField.document.designMode = 'ON';
        isInEditMode = true;
    }
}

function paste () {
    // var clipBoardText = navigator.clipboard.readText().toString();
    // alert(clipBoardText);
    // navigator.clipboard.readText().then(clipText => document.querySelector(".editor").innerText += clipText);
    navigator.clipboard.readText().then(clipText => richTextField.document.getElementsByTagName('body')[0].innerText = clipText);
}

function saveAll () {
    // var innerHTML = $(richTextField).html();
    // var htmlToText = String(innerHTML);
    // console.log(htmlToText);
    // var html = $('iframe').contents().find('body').html().toString();
    var html = $('iframe').contents().find('body').html();
    
    console.log(html);
}

// {/* <link rel="stylesheet" href="index.css"></link> */}

// $('iframe').load( function() {
//     $('iframe').contents().find("head")
//       .append($("<style type='text/css'>  html,body,h1,h2,h3,h4,h5,h6,p,hr,input,button,select,option,iframe { margin: 0;padding: 0;font-family: sans-serif;}  </style>"));
// });

