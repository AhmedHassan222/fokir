document.querySelector('#o2').addEventListener('click',function(){
    document.querySelector('#n2').classList.replace('d-none','d-block')
    document.querySelector('#n1').classList.replace('d-block','d-none')
    document.querySelector('#o2').style.cssText='background-color: #ff305b; transform:scale(1.5)'
    document.querySelector('#o1').style.cssText='background-color: white;transform:scale(1)'

})
document.querySelector('#o1').addEventListener('click',function(){
    document.querySelector('#n2').classList.replace('d-block','d-none')
    document.querySelector('#n1').classList.replace('d-none','d-block')
    document.querySelector('#o1').style.cssText='background-color: #ff305b; transform:scale(1.5)'
    document.querySelector('#o2').style.cssText='background-color: white;transform:scale(1)'


})



document.querySelector('#all').addEventListener('click',function(){
    document.getElementById('all').style.cssText='color:#ff305b;'
    document.getElementById('graphic').style.cssText='color:black;'
    document.getElementById('webDesign').style.cssText='color:black;'
    document.getElementById('branding').style.cssText='color:black;'

    document.querySelector('#one').classList.replace('d-none','d-block')
    document.querySelector('#two').classList.replace('d-none','d-block')
    document.querySelector('#three').classList.replace('d-none','d-block')
    document.querySelector('#four').classList.replace('d-none','d-block')
    document.querySelector('#five').classList.replace('d-none','d-block')
    document.querySelector('#six').classList.replace('d-none','d-block')
})
document.querySelector('#graphic').addEventListener('click',function(){
    document.getElementById('all').style.cssText='color:black;'
    document.getElementById('graphic').style.cssText='color:#ff305b;'
    document.getElementById('webDesign').style.cssText='color:black;'
    document.getElementById('branding').style.cssText='color:black;'
    document.querySelector('#one').classList.replace('d-block','d-none')
    document.querySelector('#two').classList.replace('d-none','d-block')
    document.querySelector('#three').classList.replace('d-block','d-none')
    document.querySelector('#four').classList.replace('d-none','d-block')
    document.querySelector('#five').classList.replace('d-none','d-block')
    document.querySelector('#six').classList.replace('d-none','d-block')
})
document.querySelector('#webDesign').addEventListener('click',function(){
    
    document.getElementById('all').style.cssText='color:black;'
    document.getElementById('graphic').style.cssText='color:black;'
    document.getElementById('webDesign').style.cssText='color:#ff305b;'
    document.getElementById('branding').style.cssText='color:black;'    
    document.querySelector('#one').classList.replace('d-none','d-block')
    document.querySelector('#two').classList.replace('d-block','d-none')
    document.querySelector('#three').classList.replace('d-block','d-none')
    document.querySelector('#four').classList.replace('d-none','d-block')
    document.querySelector('#five').classList.replace('d-none','d-block')
    document.querySelector('#six').classList.replace('d-block','d-none')
})
document.querySelector('#branding').addEventListener('click',function(){
    document.getElementById('all').style.cssText='color:black;'
    document.getElementById('graphic').style.cssText='color:black;'
    document.getElementById('webDesign').style.cssText='color:black;'
    document.getElementById('branding').style.cssText='color:#ff305b;'

    document.querySelector('#one').classList.replace('d-block','d-none')
    document.querySelector('#two').classList.replace('d-none','d-block')
    document.querySelector('#three').classList.replace('d-block','d-none')
    document.querySelector('#four').classList.replace('d-block','d-none')
    document.querySelector('#five').classList.replace('d-none','d-block')
    document.querySelector('#six').classList.replace('d-none','d-block')
})

document.querySelector('#one').addEventListener('click',function(e){
    document.querySelector('.show').classList.replace('d-none','d-block')
    document.querySelector('.show img').setAttribute('src',document.querySelector('#one img').getAttribute('src'))
    console.log();
})
document.querySelector('#two').addEventListener('click',function(e){
    document.querySelector('.show').classList.replace('d-none','d-block')
    document.querySelector('.show img').setAttribute('src',document.querySelector('#two img').getAttribute('src'))
})
document.querySelector('#three').addEventListener('click',function(e){
    document.querySelector('.show').classList.replace('d-none','d-block')
    document.querySelector('.show img').setAttribute('src',document.querySelector('#three img').getAttribute('src'))
})
document.querySelector('#four').addEventListener('click',function(e){
    document.querySelector('.show').classList.replace('d-none','d-block')
    document.querySelector('.show img').setAttribute('src',document.querySelector('#four img').getAttribute('src'))
})
document.querySelector('#five').addEventListener('click',function(e){
    document.querySelector('.show').classList.replace('d-none','d-block')
    document.querySelector('.show img').setAttribute('src',document.querySelector('#five img').getAttribute('src'))
})
document.querySelector('#six').addEventListener('click',function(e){
    document.querySelector('.show').classList.replace('d-none','d-block')
    document.querySelector('.show img').setAttribute('src',document.querySelector('#six img').getAttribute('src'))
})
document.querySelector('#x').addEventListener('click',function (){
    
    document.querySelector('.show').classList.replace('d-block','d-none')

})

$(window).scroll(function () { 
    if($(window).scrollTop() >=20){
        document.querySelector('nav').style.cssText='background-color: #333'
        console.log(window.scroll);

    }else {
        document.querySelector('nav').style.cssText='background-color:transparent'

    }
});

document.getElementById('small').addEventListener('click', function () {
    if ($(window).scrollTop() <= 100) {
        window.scrollTo(0, 100)
    }
})