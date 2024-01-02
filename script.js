function addNewWeField() {

    let newnode = document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("wefield")
    newnode.classList.add("mt-2")
    newnode.setAttribute("placeholder","Enter here");
    newnode.setAttribute("row" , 3);


  let webuttonOb = document.getElementById("webutton");
  let weOb = document.getElementById("we");

  weOb.insertBefore(newnode , webuttonOb)



    
}

function addNewAQField(){
    let newnode = document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("aqfield")
    newnode.classList.add("mt-2")
    newnode.setAttribute("placeholder","Enter here");
    newnode.setAttribute("row" , 3);

    let aqOb = document.getElementById("aq");
    let aqbuttonOb = document.getElementById("aqbutton");

    aqOb.insertBefore(newnode , aqbuttonOb);
}


let GenerateCv = () =>{

  let namefield = document.getElementById("namefield").value
  let nameD1 = document.getElementById("nameD1");
  nameD1.innerHTML = namefield;

  // direct
  document.getElementById("nameD2").innerHTML = namefield;

  let contactfield = document.getElementById("contactfield").value;
  document.getElementById("contactD").innerHTML = contactfield;

  let addressfield = document.getElementById("addressfield").value;
  document.getElementById("addressD").innerHTML = addressfield;

  //for gacebook
  let fbfield = document.getElementById("fbfield").value;
  document.getElementById("fbD").innerHTML = fbfield;

  //insta
  document.getElementById("instaD").innerHTML = document.getElementById("instafield").value;

  //linkedin field
  document.getElementById("linkedinD").innerHTML = document.getElementById("linkedinfield").value;

  //object field
  document.getElementById("objD").innerHTML = document.getElementById("objfield").value;

  // work experience
  let wes = document.getElementsByClassName("wefield");
  let str='';
  for(let e of wes){
    str = str +`<li>${e.value}</li>`;

  }
  document.getElementById("weD").innerHTML = str;


  //academic qqualification
  let aqs = document.getElementsByClassName("aqfield");
  let str1=''
  for(let r of aqs)
  {
    str1 = str1 +`<li>${r.value}</li>`
  }
  document.getElementById("aqD").innerHTML = str1;


  // Setting image code
let file = document.getElementById("imagefield").files[0];
console.log(file);
let reader = new FileReader();
reader.readAsDataURL(file);
console.log(reader.result);

reader.onloadend = function(){
document.getElementById("imageT").src = reader.result;
}


//start displaying template
  document.getElementById("cv-form").style.display="none";
  document.getElementById("dyncv").style.display="block";

}

function PrintCv(){
  window.print();
}