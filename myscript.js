function myFunction(){
    document.getElementById("demo").innerHTML='hello world!welcome to the new world becauseLorem Ipsum is<br> simply dummy text of the printing and typesetting industry.'
}
function bulbon(){
    document.getElementById("myImage").src="images/pic_bulbon%20(1).gif"
}
function bulboff(){
    document.getElementById("myImage").src="images/pic_bulbon%20(2).gif"
}

function QAndA(){
    var question="Your species";
    var defaultAnswer= "human";
    var myAnswer=prompt(question);
    
    if(myAnswer==defaultAnswer){
        alert("congratulation! your answer is correct");
    }
        
        else {
            alert("Nope! wrong Answer,please try again!");
        }
    }
    
function myStatement(){
    console.log('this is my first statement on console!')
}