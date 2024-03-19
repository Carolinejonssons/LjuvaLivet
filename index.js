function buildMenu()
{
    var links = [
       ["Logga in", "loggain.html"],
       ["Chatt", "chatt.html"],
       ["Berätta om dig själv", "beratta.html"],
        ["Mina preferenser", "preferens.html"]
        ["Startsida", "index.html"]
        ["Mina matchningar", "flirt.html"]
        ["Registrera dig", "registrera.html"]

]
 }
var content= "";
for (var i = 0; i < links.length; i++)
{
    var text= links [i] [0];
    var adress= links [i] [1]; //
    content= content + "<li><a href=\"" + adress + "\">" + text + "</a></li>";
    //<li><a href="index.html">Startsida</a></li>
}

document.getElementById("menu").innerHTML = content;



