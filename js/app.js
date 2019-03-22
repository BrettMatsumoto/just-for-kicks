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

function inc2(){
    newPrice.childNodes[0].nodeValue++ 
}

//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.

var newPrice2 = document.getElementById('price5');
newPrice2.childNodes[1].addEventListener('click', dec)

function dec(){
    newPrice2.childNodes[0].nodeValue--
}

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 
// 'https://stockx.imgix.net/Air-Jordan-11-Retro-Low-Nightshade-Green-Snakeskin.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256'

var oldImg = document.getElementsByTagName('img')
// console.log(oldImg)
oldImg[6].addEventListener('mouseover',swap)
oldImg[6].addEventListener('mouseout', swap)
// console.log(oldImg[6])

function swap(){
    if (oldImg[6].src === 'https://www.sneakerlegends.com/images/stories/virtuemart/product/378037623%20378037623%20378037623%20378037623.jpg'){
        oldImg[6].src = 'https://stockx.imgix.net/Air-Jordan-11-Retro-Low-Nightshade-Green-Snakeskin.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256'
    } else {
        oldImg[6].src = 'https://www.sneakerlegends.com/images/stories/virtuemart/product/378037623%20378037623%20378037623%20378037623.jpg'
    }
}

//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.
oldImg[7].addEventListener('click',bigger)

function bigger(){
    var oldWidth = oldImg[7].width;
    // console.log('oldWidth:' + oldWidth);
    var oldHeight = oldImg[7].height;
    // console.log('oldHeight:' + oldHeight)
    var increaseHeight = oldHeight/2;
    // console.log('increaseHeight:' + increaseHeight)
    var increaseWidth = oldWidth/2;
    // console.log('increaseWidth:' + increaseWidth)
    var newWidth = oldWidth + increaseWidth;
    // console.log('newWidth' + newWidth)
    var newHeight = oldHeight + increaseHeight;
    // console.log('newHeight:' + newHeight);
    oldImg[7].style.height = newHeight + 'px';
    oldImg[7].style.width = newWidth + 'px';
}


//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.
var plusButt = document.getElementById('oneUp');
plusButt.addEventListener('click',increaseVal);
var minButt = document.getElementById('oneDown');
minButt.addEventListener('click',decreaseVal)
var buttPrice = document.getElementById('price8');
console.log(buttPrice)

function increaseVal(){
    buttPrice.childNodes[0].nodeValue++
}
function decreaseVal(){
    buttPrice.childNodes[0].nodeValue--
}
//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.
