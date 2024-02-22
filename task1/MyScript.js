var win;
function newForm(){
    var x, y;

    x = (window.outerWidth-350)/2+window.screenX;
    y = (window.outerHeight-270)/2+window.screenY;

    win = window.open('', 'w1', 'height =270, width = 350', left='+x+', top='+y')

    win.document.write('<h1>Main text</h1>');
    win.document.write('<p> djsfhsdkl;hglsdkg h;djghdrjklgherlkghkl </p>');
    win.document.write('<p align="center"> <a href="https://server.odessa.ua/" target="_blank">OСCT "Server"</a></p>');
    win.document.write('<p align="center"><input type="button" value="Закрыть" пame="B1" onclick="window.close(); "></p>');
    
    console.log('it`s just work')
}

function exit(param)
{
    param.alert('Внимание! Окно будет закрыто!');
    param.close();
}