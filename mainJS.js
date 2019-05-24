//1.Nodevinēt mainīgos kurš iegūst ienākumu saraksta elemetu no html dokumenta
//2.Nodevinēt mainīgos kurš iegūst izdevumu saraksta elemetu no html dokumenta
//3.Nodevinēt mainīgos kurš iegūst pieejamā budžeta vertības elemetu no html dokumenta
const inc = document.getElementById("all_income");
const exp = document.getElementById("all_expenses");
const budg = document.getElementById("budget__valdivue");

var incorexp = document.getElementById("add_type");

var tinc;
var texp;

//4.Izveidot funkciju_1, kas izmaina pieejamā budžeta vertību
function TotalBudget(tbudg)
{
    budg.innerHTML = tbudg;
}

//5.Izveidot funkciju_2, kuru izsaucot, tiek pievienoti ienākumi vai izdevumi html elementu sarakstiem
function additem(isincome,description,value)
{
    var item = document.createElement("DIV");
    item.className += "list_item";

    var valdiv = document.createElement("DIV");
    valdiv.className += "list_valdivue";

    var descrdiv = document.createElement("DIV");
    descrdiv.className += "list_description";
    descrdiv.innerHTML = description;

    if(isincome == true)
    {
        valdiv.innerHTML = "+" + value + "€";
    }
    else if(isincome == false)
    {
        valdiv.innerHTML = "-" + value + "€";
    }
}

//6.Izveidot funkciju_3, kas izsaucas pēc pogas "pievienot" nospiešanas
//7.Funkcijai_3 jāpārbauda vai apraksta un summas lauks ir aizpildīts, ja nav, tad izvada paziņojumu par to, ka kāds no laukiem nav aizpildīts
//8.Funkcijai_3 ir jāizsauc funkcija_2, kas pievieno ienākumu vai izdevumu sarakstam jaunu ierakstu.
function addtolist()
{
    console.log("dis is bs");

}

//9.Lai pārbaudītu vai izveidotās funkcijas darbojas pareizi, izsauc tās zemāk un ievieto fake datus
//10.Izsaukt funkciju_2, kas pievieno ienākumu sarakstam vertības
//11.Izsaukt funkciju_2, kas pievieno izdevumu sarakstam vertības
//12.Izsaukt funkciju_1, kas izmaina pieejamā budžeta vertību
