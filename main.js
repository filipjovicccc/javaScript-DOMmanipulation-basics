// // //console.dir(document) prva komanda za dom koja nam pomaze da vidimo sve dom elemente
// // console.log(document.domain); //lokalni domain
// // console.log(document.URL); //URL STRANICE

// // console.log(document.title); //item lista

// // document.title = "title"; // promena titla

// // console.log(document.doctype); //HTMl5 Doctype

// // console.log(document.head);
// // console.log(document.body);
// // console.log(document.all); //html kolekcija svega sto je u domu

// // console.log(document.all[10]); //daje nam taj po redu u domu

// // // document.all[10].textContent = "change"; //mozemo ovako recimo da promenimo stvari i ako nije najispravnije, postoje mnogi nacini za promene

// // console.log(document.form) // pristupamo form u dom

// // console.log(document.links)

// // //na sve ove nacine dobijamo html kolekciju koja nije bukvalni array malo se razlikuje

// // console.log(document.image)

// // Selektori

// // console.log(document.getElementById("header-title"));

// // let exmp = document.getElementById("header-title");
// // let header = document.getElementById("main-header");
// // console.log(exmp.textContent); -> ne obraca paznju na still koj je zadat, kao recimo display: none, pomocu kojeg nesto mozemo da uradimo

// // console.log(exmp.innerText); //obraca paznju na stilove

// // exmp.textContent = "hello";
// // exmp.innerText = "welcome";

// // exmp.innerHTML = "<h3>Hello from inner html</h3>"; // pravi novi element u mesto gde je postavljen

// // header.style.borderBottom = "solid 3px red"; // promena stila

// // getelementsbyclassname

// // let group = document.getElementsByClassName("list-group-item");
// // console.log(group); //dobijemo html kolekciju

// // console.log(group[1]); //dobijemo taj prvi

// // group[1].textContent = "Hello from two";

// // group[0].style.color = "green";

// // group[1].style.fontWeight = "bold";

// // group[1].style.backgroundColor = "yellow";

// // group.style.backgroundColor = "#f4f4f4";

// // // nece da radi jer je HTML KOLEKCIJA, i treba da se loopuje kod svih

// // //dakle ovde je bas razlika da se kod nekih selektora mora loopovati da bi radilo nesto
// // //sto se cesto desava, tj radi u javiskript

// // for (let i = 0; i < group.length; i++) {
// // mozemo for petljkom
// //   group[i].style.color = "#00FFFF";
// // }
// //  ovo je najbolje da se uradi ovako, petljom

// // getelementsbytagname

// // let li = document.getElementsByTagName("li");

// // for (let i = 0; i < li.length; i++) {
// //   li[i].style.color = "#00FFFF";
// // }

// // //get elements by tag name ista stvar na drugi nacin ono od gore

// // //QUERYSELECTOR

// // let header = document.querySelector("#main-header"); //mozemo klase, id ili bilo sta drugo samo da stavimo tag

// // header.style.borderBottom = "solid 4px red";

// // let input = document.querySelector("input");

// // input.value = "Hello from input";

// // let sumbit = document.querySelector('input[type="submit"]'); //uhvatili smo poseban input, sa drugom opcijjom

// // //zato je query selektor najbolji jer mozemo sve elemente sa njim samo je potrebno da ih pravilno uhvatimo

// // sumbit.value = "New value";

// // let exm = document.querySelector(".list-group-item"); //treba obrati paznju dohvatice samo jedan, prvi

// // exm.style.color = "red";

// // let lastItem = document.querySelector(".list-group-item");
// // console.log(lastItem);

// // lastItem.style.color = "green";

// // //QUERYSELECTOR ALL

// // let titles = document.querySelectorAll(".title");

// // console.log(titles);

// // titles[0].textContent = "Hello";

// // let odd = document.querySelectorAll("li:nth-child(odd)");

// // console.log(odd);

// // for (let i = 0; i < odd.length; i++) {
// //   odd[i].style.color = "green";     //jos jedan laksi nacin sa querySelectorAll kako loopujemo veoma korisno sa vanila javaskriptom
// // }

// let list = document.querySelector("#items");

// //parentNode

// // console.log(list.parentNode); //daje nam parent od tog elementa

// // list.parentNode.style.backgroundColor = "orange";

// // console.log(list.parentNode.parentNode) //mozemo da ih vezemo u lanac sto se ponekad radi

// // console.log(list.parentElement)//slican kao parenNode

// //childNodes

// // console.log(list.childNodes); //childNodes, da je nam sve chidove tog izabranog

// //childNodes su komplikovani za koriscenje zato sto i delove praznih racuna kao tekstove noda
// //pa se zato vise preporucuje koriscenje opcije children

// console.log(itemList.children); //bolje za koriscenje, takodje nam opet vraca html kolekciju

// console.log(item.children[1]);

// list.children[1].style.backgroundColor = "yellow";

// console.log(item.firstChild); // opet first childNode daje i prazan text kao prazan pa se ne koriti toliko postoji

// //i firstElementchild

// list.firstElementChild.textContent = "Hello 1";

// //takodje postoji lastChild i lastElementChild

// //lastElementChild bolje da se koristi

// //Siblings

// //nextSibiling

// // console.log(list.nextSibling);

// // console.log(list.nextElementSibling);

// //previosSibiling

// // console.log(list.previousSibling)

// // console.log(list.previousElementSibling);

// // list.previousElementSibling.style.color = "green"

// //createElement

// //Create a div

// let newDiv = document.createElement("div");

// newDiv.className = "hello"; //dodamo klasu novom divu sto se cesto koristi

// newDiv.id = "hello1";

// newDiv.setAttribute("title", "Hello from div"); //kako da dodamo nesto u taj div preko js-a

// //Create text node

// let newDivText = document.createTextNode("hello world");

// newDiv.appendChild(newDivText);

// console.log(newDiv);

// let container = document.querySelector("header .container");
// let h1 = document.querySelector("header h1");

// container.insertBefore(newDiv, h1);

// newDiv.style.fontSize = "30px";

//EVENTS

// function buttonClick() {
//   alert("clicked");
// }
// buttonClick();  //stariji nacin eventa sa buttonClick() funkcijom koju doduse koristimo u reactu

// let button = document
//   .getElementById("button")
//   .addEventListener("click", function () {
//     alert("button CLICKED");
//   });

let button = document
  .getElementById("button")
  .addEventListener("click", buttonClick); // pozivajuca funkcija ovde ide bez ()

// function buttonClick() {
//   alert("clicked");

//   document.getElementById("header-title").textContent = "Changed";  //na klick menjamo naslov i boju
//   document.querySelector("#main").style.backgroundColor = "red";
// }
//(e) e-> evente koje dobijamo, target se najcesce koristi sam taj target

// function buttonClick(e) {
//   console.log(e.target);
//   console.log(e.target.id);
//   console.log(e.target.className);
//   console.log(e.target.classList);
//   let output = document.getElementById("output");
//   output.innerHTML = `<h3>Hello</h3>`; ///na ddugme dodajemo hellop

//   console.log(e.type); //da je nam tip eventa ako je click daje nam click

// console.log(e.clientX);  //visisna mousa kolika je daleka od pocetka stranice
// console.log(e.clientY);

// console.log(e.altKey)

// }
