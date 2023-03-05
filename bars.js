async function barsInit(){
    if(document.getElementById("barsJs-canvas")!=null){
        let target=document.getElementById("barsJs-canvas");
        if(target.getContext){
            let cV = target.getContext("2d");

            cV.font="10px Arial"
            

            let frq32 = cV.fillRect(0, 65, 10, 20);
            let frq64 = cV.fillRect(20, 65, 10, 20);
            let frq125 = cV.fillRect(40, 65, 10, 20);
            let frq250 = cV.fillRect(60, 65, 10, 20);
            let frq500 = cV.fillRect(80, 65, 10, 20);
            let frq1k = cV.fillRect(100, 65, 10, 20);
            let frq2k = cV.fillRect(120, 65, 10, 20);
            let frq4k = cV.fillRect(120, 65, 10, 20);
            let frq8k = cV.fillRect(140, 65, 10, 20);
            let frq16k = cV.fillRect(160, 65, 10, 20);

            console.log(frq1k.getContext);
        }
    }else{
        console.error("barsJs: No canvas element found.")
    }
}

function barsPlay(filename){

}

let rangeList = [
    "32","64","125","250","500","1k","2k","4k","8k","16k"
]