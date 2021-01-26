let your_hobby = [];
your_hobby.push({hobby:"Cricket",rating:2});
your_hobby.push({hobby:"Piano",rating:4});
your_hobby.push({hobby:"Sketching",rating:2});
your_hobby.push({hobby:"Swimming",rating:3});
your_hobby.push({hobby:"BasketBall",rating:4});
your_hobby.push({hobby:"Football",rating:5});


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
