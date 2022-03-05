const calculate = () =>{
    let ma = document.getElementById("ma").value;
    let ch = document.getElementById("ch").value;
    let ph = document.getElementById("ph").value;
    let en = document.getElementById("en").value;
    let hi = document.getElementById("hi").value;
    let totalMarks = +ma + +ch + +ph + +en + +hi;
    let percentage = parseInt((totalMarks/500)*100);
    let grades;
    if(percentage>=90){
        grades="A";
    }
    else if(percentage>70 && percentage <=89){
        grades="B";
    }
    else if(percentage>50 && percentage <=69){
        grades="C";
    }
    else if(percentage>33 && percentage <=49){
        grades="D";
    }
    else{
        grades="F";
    }
    if(percentage>34){
         document.getElementById("yourmarks").innerHTML = `Your grade is ${grades} and your percentage is ${percentage}. You are PASSED`;
    }
    else{
            document.getElementById("yourmarks").innerHTML = `Your grade is ${grades} and your percentage is ${percentage}. You are failed`;
    }
   
    alert(totalMarks);
    
    
}