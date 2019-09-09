let task = {
    text:"Выбери все уравнения, в которых решением является число 6",
    options: []
};

function Option (value,correctly) {
    this.value = value;
    this.correctly = correctly;
}

let option1 = new Option("5+x=11",true);
let option2 = new Option("16-x=12", false);
let option3 = new Option("x+5=11", true);
let option4 = new Option("x-16=12", false);

task.options.push(option1, option2, option3, option4);

function checkError (arr){
    var check;
    let result=[];
    arr.forEach((i)=>{
        for(let j=0;j<task.options.length;j++){
            if(task.options[j].correctly==false){
                check = task.options[j].value==i;
                if(check){
                    check=true;
                    result.push(i);
                }
            }
        }
    });
    return(result);
}


