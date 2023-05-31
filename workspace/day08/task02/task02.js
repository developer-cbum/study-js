function change(number){
    const numbering = document.querySelector("#round");
    const p = document.querySelector("#result");
    const hangle = "공일이삼사오육칠팔구";
    let result = "";

    if(isNaN(number)/*  || number[0] == "." */ || number.endsWith(".")){
        numbering.innerHTML = "4";
        p.innerHTML = "숫자만 입력해주세요.";
        return;
    }

    numbering.innerHTML = "3";

    // 예를 들어, 3.0을 "삼점영"으로 출력하고자 한다면 아래의 방법을 사용
    if(number.includes(".")){
        numbering.innerHTML = "2";
    }

    // 예를 들어, 3.0을 "삼"으로 출력하고자 한다면 아래의 방법을 사용
    // if(parseFloat(number) - parseInt(number) != 0){

    // }else{
    //     number = parseInt(number);
    // }

    // for문에서 
    // in은 순서가 있는 컬렉션의 length만큼 인덱스를 가져올 수 있고,
    // of는 순서가 있는 컬렉션의 각 값을 가져올 수 있다.
    for(let i of number){
        // charAt()에 인덱스로 활용할 수 없는 값을 전달하면, 0번째 값을 가져온다.
        // console.log(hangle.charAt(i));
        result += hangle[i];
    }

    result = result.replace("undefined", "점");

    if(result.startsWith("점")){
        result = "영" + result;
    }
    if(result.charAt(result.length - 1) == "공") {
        result = result.substring(0, result.lastIndexOf("공")) + "영";
    }
    if(result.charAt(0) == "공") {
        result = "영" + result.substring(1);
    }
    p.innerHTML = result;
}

function getResult(callback){
    const input = document.querySelector("input[name=input]").value;
    if(callback){
        callback(input);
    }
}