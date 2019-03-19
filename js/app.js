// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.

var getDeets = document.getElementById('details');
getDeets.addEventListener('click', noMore)

function noMore(){
    window.alert('Not Available in Hawaii')
}

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.

var theHover = document.getElementById('name1');
theHover.addEventListener('mouseover', showHide)
function showHide(){
    var theDisc = document.getElementById('descrip1')
        if (theDisc.style.display === 'block'){
            theDisc.style.display = 'none'
        } else {
            theDisc.style.display = 'block'
        }
}

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'

var getName2 = document.getElementById('name2');
getName2.addEventListener('click',showHide2);
var newDisc = document.createElement('div');
newDisc.id = 'descrip2';
newDisc.innerHTML = "The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season";
newDisc.style.display = 'none';
getName2.appendChild(newDisc)
function showHide2(){
    if (newDisc.style.display === 'block'){
        newDisc.style.display = 'none'
    } else {
        newDisc.style.display = 'block'
    }
}


//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 

//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.

var theThumbs = document.getElementsByClassName('far fa-thumbs-up');
for (var i = 0; i < theThumbs.length;i++){
    var count = document.createElement('div');
    count.className = 'daCount';
    count.innerHTML = 0;
    theThumbs[i].appendChild(count)
    theThumbs[i].addEventListener('click',increment)
}

function increment(){
    var newCount = this.querySelector('.daCount');
    newCount.innerHTML++
}

//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.

var newPrice = document.getElementById('price4');
newPrice.childNodes[1].addEventListener('click',inc2)
console.log(newPrice.childNodes)
function inc2(){
    newPrice.childNodes[0].nodeValue++ 
}

//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 

//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.
