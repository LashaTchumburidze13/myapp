
const weekdays = ["sun",'mon','thu','wed','thes','fri','sat'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open:11,
        close:15,
    },
    [weekdays[5]] : {
      open:5,
      close:14,
    },
};





const restourant = {
    userName:'classico',
    location:'tbiliso',
    categories:['italy',"german",'tom'],
    startMenu: ['focusa',"tuso",'puso'],
    mainMenu:['pizza','lezouuu'],

   

    order:function(starerIndex,mainIndex){
        return [this.startMenu[starerIndex],this.mainMenu[mainIndex]];
    },
    orderDelivery: function({starerIndex,mainIndex,time,adress}) {
        console.log(`${this.startMenu[starerIndex]} and ${this.mainMenu[mainIndex]}
         and ${time} and ${adress}`)
    },

    orderPasta: function(ing1,ing2,ing3){
        console.log(`${ing1},${ing2},${ing3}`)
    },
    orderPizza: function(mainingredients,...otherings){
        console.log(mainingredients);
        console.log(otherings)
    }
};
 

for(const day of Object.keys(openingHours)) {
    console.log(day)
}
const properties = Object.keys(openingHours);
console.log(properties)

console.log(properties.length)



/* const game = {
    team1 : 'munich',
    team2: "dortmund",
    players : [
     
      [
        'noier',
        'palvard',
        'zgatu',
        'mirta',
        "maeroet",
      ],

      [
        "burki",
        "schulz",
        "pureki",
        "tvarec",
        "maret",
      ],
    ],
    score:"4:0",
    scored: ["lewouu","pelouu","zidouu"],
    date: "nov 22",
    odds: {
        team1:1.33,
        x : 3.5,
        team2: 6.5
    },
};


 */