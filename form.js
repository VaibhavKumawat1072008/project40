class Form{
    constructor(){
       this.input = createInput("").attribute("placeHolder","ENTER YOUR NAME");
       this.button = createButton('START THE GAME');
       this.greeting = createElement('h500');
       this.title = createElement('h2');
       this.reset = createButton('REPLAY');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(width / 4, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(width - 100, height - 5);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            var message = `Hello ${player.name}
            </br>Please wait for the second player.
            </br>You are the first player`;
            this.greeting.html(message);
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
           
            database.ref("/").set({
                //reset the playerCount
                playerCount: 0,
            //reset gameState
            gameState: 0,
            //reset players
            playerAtEnd: 0
              });
             //reload the window
             window.location.reload();

            var playerInfoRef = database.ref('players');
            this.playerInfoRef.remove();

            });
          
          //BP

 

            
        

    } 
}