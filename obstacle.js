let rockWords = [];
$('.subdiv > button').click(function(){
    $(this).toggleClass("hover").toggleClass("active");
    rockWords.push($(this).text());
    console.log(rockWords);
    if(rockWords.length > 3){
        alert("This world is still beautiful,so Don't hate too many things. Please choose 3 as the most.")
        location.reload();
    }
});

class Obstacle{
    constructor(x,y,i){
        this.i = i;
        this.x = x;
        this.y = y;
        this.width = 50;
        // this.height = 30;
        this.ob = document.getElementById("Runner").getContext("2d");
        this.img = new Image();
        this.img.src = 'image/rock2.png';
        //let x = 600,y=280
    }

    drawItSelf(){
        this.ob.drawImage(this.img,this.x,this.y-50,150,100);
        this.ob.font = "20px Arial";
        this.ob.fillText(rockWords[this.i],this.x+25, this.y+20);
    }

    moveLeft(){
        this.x -= 9;
    }
}

