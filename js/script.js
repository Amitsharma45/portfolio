function show(){
    console.log("run");
    let visible = document.getElementById("h11");
    // console.log(visible.style.display);
    if(visible.style.display =='none'){
        visible.style.display='block';
    }else{
        visible.style.display = 'none';
    }
}

console.log('portfolio');