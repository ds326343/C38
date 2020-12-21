class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;

    }
    getCount(){
        var playercountref = database.ref('playerCount');
        playercountref.on("value", function(data){
            playerCount = data.val()
        })

    }
    updateCount(count){
        database.ref('/').update({
            playerCount : count
            
        })
    }
    update(){
        var playerindex = "Players/Player" + this.index;
        database.ref(playerindex).set({
            name : this.name,
            distance : this.distance
        })

    }
    static GetPlayerInfo(){
        var playerinforef = database.ref('Players');
        playerinforef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}