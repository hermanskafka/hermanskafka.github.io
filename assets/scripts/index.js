/**
 * Created by sam on 2/21/2018.
 */
  (function () {
   var
    currentPic = 1,
    htmlElements = document.getElementsByClassName('line'),
    elements = elementsToArray();

     function elementsToArray(){
         var elements = [];
            Array.prototype.forEach.call(htmlElements, el=> elements.push(el))
            return elements

     }
    function manageBckImg(){
             setCss(getElement());
             checkElements();
             setPicCount();
    }
    function setCss(el){
        el.classList.add('z-index-9');
        el.style['background-image'] = 'url(../assets/images/front/' + currentPic + '.jpg)';
    }
    function getElement(){
        return elements.length % 2 == 0 ?  elements.pop() : elements.shift()
    }
    function checkElements(){
          if(elements.length == 0) elements = elementsToArray();
    }
    function setPicCount(){
        if(currentPic == 10) currentPic = 0;
        currentPic++;
    }
    setTimeout(()=>setInterval(manageBckImg,100),2000)

})()

