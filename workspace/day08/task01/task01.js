/* 
    task01.html
 */

globalThis.temp;

function confirm(){
    const input = document.querySelector("#input");
    const trs = document.querySelectorAll("tbody tr");
    let check = false;

    if(globalThis.temp){
        globalThis.temp.style.background = "#fff";
        globalThis.temp.firstElementChild.innerHTML = globalThis.temp.firstElementChild.innerHTML.replace("★", "");
    }

    trs.forEach(tr => {
        let td = tr.firstElementChild;
        if(input.value == td.innerHTML){
            check = true;
            globalThis.temp = tr;
            tr.style.background = "#ef5350";
            td.innerHTML = "★" + td.innerHTML;
        }
    })

    // for(let i=0; i<trs.length; i++){
    //     let td = trs[i].firstElementChild;
    //     if(input.value == td.innerHTML){
    //         check = true;
    //         globalThis.temp = trs[i];
    //         trs[i].style.background = "#ef5350";
    //         td.innerHTML = "★" + td.innerHTML;
    //     }
    // }

    if(!check) {
        alert("다시 시도해주세요.");
    }
}