const imgBox = document.querySelector("#random-img img");
const images = ["img01.jpg","img02.jpg","img03.jpg","img04.jpg","img05.jpg","img06.jpg","img07.jpg","img08.jpg","img09.jpg"];
function imgChange(){
    const randomimages = images[Math.floor(Math.random()*images.length)];
    document.getElementById("random-img").src=`./images/${randomimages}`;

}
imgChange();