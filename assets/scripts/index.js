/**
 * Created by sam on 2/21/2018.
 */
var intervalModule =  (function () {
   var
       currentPic = 1,
       state = [],
        htmlElements = document.getElementsByClassName('line'),
       elements = elementsToArray(),
        totalElements = elements.length;

     function elementsToArray(){
         var elements = [];
         for(var i =0; i<htmlElements.length; i++)
             elements.push(htmlElements[i])
            return elements

     }
    function addBckImg(){
             if(checkElements()) clearInterval(interval);
         var el = getElement();
             setCss(el);
             state.unshift(el);
             resetPicCount();
             currentPic++
    }
    function setCss(el){
        el.classList.add('z-index-9');
        el.style['background-image'] = 'url(../assets/images/front/' + currentPic + '.jpg)';
    }
    function getElement(){
        return elements.length % 2 == 0 ?  elements.pop() : elements.shift()
    }
    function removeCss(){
        if(state.length < 9) return;
            var removeElement = state.pop();
                removeElement.style.removeProperty('background-image')
                removeElement.classList.remove('z-index-9')
    }
    function checkElements(){
          return elements.length == 1;
    }
    function resetPicCount(){
        if(currentPic == 10) currentPic = 0
    }
    setTimeout(()=>setInterval(addBckImg,300),10000)

})()

