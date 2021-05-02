function show(){
    // console.log("run");
    var w = document.documentElement.clientWidth;
    if(w<1128){

        let visible = document.getElementById("h11");
        // console.log(visible.style.display);
        if(visible.style.display =='none'){
            visible.style.display='block';
        }else{
            visible.style.display = 'none';
        }
    }
}
function s(){
    var w = document.documentElement.clientWidth;
    // console.log(w);
    let visible = document.getElementById("h11");
    if(w>1128){
        visible.style.display='block';
    }else{
        visible.style.display = 'none';
    }

}

// console.log('portfolio');