var questions = [
{

 prompt: "what color is the sky?\n (a) Red\n\
  (b) Purple\n(c) blue",
  answer:"a"
},
{
    prompt: "Who was the first president of the United States?
    \n\ (a) Goerge Washington\n(b) Donald Trump\n(c) John Adams",
    answer: "a"
}    
{
    prompt:"What year did the U.S. land on the moon?\n(a) 1972 
    \n\(b) 1969\n(c) 1966", 
    answer:"b"

}
{
    prompt: "What state are the Georgia Guild Stones located?"\n(a) North Carolina\n\
    (b) South Carolina\n(c) Georgia",
    answer:"c"
}
]
var score = 0;

for(var i=0;i < questions.length;i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("correct");
    }else {
    alert("wrong");
    }
}
alert('you got'+score + "/"+ questions.length);
