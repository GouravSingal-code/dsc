let your_hobby = [];
your_hobby.push({hobby:"Cricket",rating:2});
your_hobby.push({hobby:"Piano",rating:4});
your_hobby.push({hobby:"Sketching",rating:2});

// add Hobbies

function add_in_page(){

 for( let i=0 ; i<your_hobby.length ; i++ ){
   let li= document.createElement('li');
   li.className="type";
   li.innerHTML+=`${your_hobby[i].hobby}`;
   document.querySelector(".myhobby").appendChild(li);
 }

}


window.onload = add_in_page;



function add_hobby(){

  if( your_hobby.length == 6 ){
    window.alert("Hobby Limit Reached");
  }else{
  var hob = document.getElementById("added_hobby").value;
  let x = hob;
  let y = x[0];
  let w = x.split(y);
  y = y.toUpperCase();
  y+=w[1];
  hob = y;
  var rat = document.getElementById("added_rating").value;
  rat = parseInt(rat ,10);

  if( rat > 5 ){
    window.alert("Rating should be in Range of 1-5");
  }else{

   if( hob != "" || hob != null && rat!= "" || rat!=null ){
    document.querySelector(".myhobby").innerHTML = "";
    your_hobby.push({hobby:hob,rating:rat});
    add_in_page();
   }else{
    window.alert("Fill the Blank Spaces");
   }

  }

 }

}
