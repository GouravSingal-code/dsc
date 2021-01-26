function add(){
 var your_hobby = JSON.parse(localStorage.getItem("my_hobby"));
 console.log(your_hobby);
 if( your_hobby == null || your_hobby == "" ){
   let your_hobby = [];
   your_hobby.push({hobby:"Cricket",rating:2});
   your_hobby.push({hobby:"Piano",rating:4});
   your_hobby.push({hobby:"Sketching",rating:2});
 }
 localStorage.setItem("my_hobby", JSON.stringify(your_hobby));
}

window.onload = add;

// add description
document.getElementById('info').innerHTML+="Wikipedia has been criticized for its uneven accuracy and for exhibiting systemic bias, including gender bias, with the majority of editors being male.[4] Edit-a-thons have been held to encourage female editors and increase the coverage of women's topics.[10] In 2006, Time magazine stated that the open-door policy of allowing anyone to edit had made Wikipedia the biggest and possibly the best encyclopedia in the world, and was a testament to the vision of Jimmy Wales.[11] The project's reputation improved further in the 2010s as it increased efforts to improve its quality and reliability, based on its unique structure, curation and absence of commercial bias.[4] In 2018, Facebook and YouTube announced that they would help users detect fake news by suggesting links to related Wikipedia articles.[12]";


// add img
let img = document.createElement('IMG');
img.setAttribute("id" , "picture");
img.src="./img/pic.jpg";

document.querySelector('.pic').appendChild(img);

// add name
var name = "Gourav Singal";

let h1 = document.createElement('h3');
h1.setAttribute("id" , "myname");
h1.innerHTML+=name;

document.querySelector('.pic').appendChild(h1);
