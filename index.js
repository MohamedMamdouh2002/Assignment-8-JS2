
// var pra=document.getElementById("test");
// var allQuote=[]
// function newQuote(){
//    var quote={
//     quote1:`“Be yourself; everyone else is already taken.”`,
//     quote2:"aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//     quote3:"aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//     quote4:"aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//    }

//    allQuote.push(quote);
//    display()
// }
// function display(){
    
//     var box=``;
//     for( var i = 0 ;i< allQuote.length ;i++){

//         box+=
//         `<h3>`+allQuote[i].quote1+`</h3>`
       

//     }
    
//     pra.innerHTML=box;
// }

var test= document.getElementById('quoteOutput');
var arrayOfQuotes = [
    {author: '-Jim Ron', 
     quote: 'Beware of what you become in pursuit of what you want.'
    },
    {author: '--Epictetus', 

     quote: 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {author: '-Frank Sinatra', 
     quote: 'The best revenge is massive success.'
    },
    {author: '-Wayne Grey', 
     quote: 'You miss 100% of the shots you don\'t take.'
    },
    {author: '-Nelson Mandela', 
     quote: 'Resentment is like drinking poison and waiting for your enemies to die.'
    }
]

function newQuote(){
    var random = Math.floor(Math.random()*arrayOfQuotes.length );
    for(i=0;i<arrayOfQuotes.length;i++){
       var box=``
        box+=`<h3>`+arrayOfQuotes[random].quote+`</h3><h3>`+arrayOfQuotes[random].author+`</h3>` 
       if(i){

       }
}
test.innerHTML=box;

}


