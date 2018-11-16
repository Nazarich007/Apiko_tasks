let arrStudents = [ 
{
    firstName: "Олег",
    lastName: "Батун",
    rating:70
},
{
    firstName: "Юлія",
    lastName: "Бойчук",
    rating:100
},
{
    firstName: "Назарій",
    lastName: "Бохнак",
    rating:77
},
{
    firstName: "Владислав",
    lastName: "Дудка",
    rating:94
},
 {
    firstName: "Тетяна",
    lastName: "Єднак",
    rating:88
},
 {
    firstName: "Назарій",
    lastName: "Кошицький",
    rating:80
},
 {
    firstName: "Олександр",
    lastName: "Карпович",
    rating:90
},
 {
    firstName: "Віталій",
    lastName: "Порученко",
    rating:63
},
 {
    firstName: "Петро",
    lastName: "Подміногін",
    rating:80
},
 {
    firstName: "Віктор",
    lastName: "Тарасюк",
    rating:78
},
 {
    firstName: "Богдан",
    lastName: "Тимчишин",
    rating:82
}];
let aStudents = arrStudents.slice(0,arrStudents.length);
console.log(aStudents.sort((a, b) => {if (a.firstName > b.firstName) return 1;
    if (a.firstName < b.firstName) return -1;
    else return 0;}));

let cStudents = arrStudents.slice(0,arrStudents.length);
    console.log(cStudents.sort((a, b) => {if (a.lastName > b.lastName) return 1;
        if (a.lastName < b.lastName) return -1;
        else return 0;}));

let bStudents = aStudents.slice(0,aStudents.length);
console.log(bStudents.sort((a, b) => {if (a.rating > b.rating) return 1;
        if (a.rating < b.rating) return -1;
         else return 0;}));

    sum=0;
    max =  bStudents[0].rating;
    min = 0;
    for (var i = 0; i < bStudents.length; i++) {
        sum=sum+bStudents[i].rating;
        count=bStudents.length;
        if (bStudents[i].rating > max) {
            max =i;     
        }
        if (bStudents[i].rating < min) {
            min = i;        
        }
    };
    for ( i = 0; i < bStudents.length; i++) {
        if (bStudents[i].rating == (sum/count)) {
            var avgid=i;      
        }
    }
    console.log("Max - ",bStudents[max]);
    console.log("Min - ",bStudents[min]); 
    if(avgid==null){
        console.log("There are no single students in this rating");
    }else console.log("Average - ",bStudents[avgid]);
    
    function rate (){ 
        for (i = 0; i < bStudents.length; i++) {
         let value;
          value = Math.round(((bStudents[max].rating/bStudents[i].rating)*100)-100);
          bStudents[i].rate = value; 
            }
        }
        rate();
        console.log('\n'+'Add field rate:')
        console.log(bStudents);
