const ul = document.getElementById('myUL');
const a = document.querySelectorAll('a')
const li = document.querySelectorAll('li')

function myFunction(){
    var search = document.getElementById('myInput').value;

    for(var i = 0; i<a.length; i++){
        var x = a[i].innerHTML.toUpperCase();
        var y = search.toUpperCase();
        if(x == y){
            li[i].style.display = 'block';
            li[i].style.transition = '0.5s ease-in';
        }else{
            li[i].style.transition = '0.5s ease-out';
            li[i].style.display = '';
        }
    }

}