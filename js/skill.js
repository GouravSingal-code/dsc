var your_hobby = JSON.parse(localStorage.getItem("my_hobby"));

// add hobbies
for( let i=0 ; i<your_hobby.length ; i++ ){
   let li= document.createElement('li');
   li.className="type";
   li.innerHTML+=`${your_hobby[i].hobby}`;
   document.querySelector(".hobby").appendChild(li);
}

// add rating
for( let i=0 ; i<your_hobby.length ; i++ ){
   let li= document.createElement('li');
   for( let j=0 ; j<your_hobby[i].rating ; j++ ){
     let img = document.createElement('IMG');
     img.setAttribute("id" , "star");
     img.src="./img/star.png";
     li.appendChild(img);
   }
   document.querySelector(".rating").appendChild(li);
}
