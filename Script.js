var signs = ["Aquarius", "Pisces", "Aries","Taurus","Gemini", "Cancer", "Leo","Virgo","Libra", "Scorpio","Sagittarius", "Capricorn" ,"not available because this is not a real date"];
var messages = [" Your social life may have been on the dull side recently,but  " + "you will encounter new friends this month.", "This is" +
" a potentially ambitious time when you're ready to step things up and shoot high." + "Don't be afraid to take risks this month.",
    "Your academic or work performance may slow down this month, but don't let this " +
"stop you. Focus on other aspects of your life, and don't give up on work.","Focus on fixing problems that" +
"you have previously swept under the rug rather than starting up new projects and preparing for new challenges.", "While " +
"your emotional life is a little more complicated than usual, you're also more thought out when it comes to dealing" +
"with these bumps in the road.", "This is a very playful period of the year, when you are inspired creatively and " +
"emotionally. Remember not to shy away from risk taking oppertunities that may come your way.","Disputes and disagreements may" +
"come your way this month. Make sure to confront them and not shy away.","Instead of becoming wrapped up in your personal life this month," +
" you may realize the need to reach out to others in a new way.","Con" +
    "frontations with family will be made possible in the coming month- strengthening" +
    " your relationship with loved ones will eventually prove itself beneficial for you and them alike.","Multiple aspects of your life will become more complicated this month. " +
    "Make sure to lean on trusted friends and family.","Have faith in old friendships. An old friend will come back " +
    "into your life this month, opening a new world of oppertunities.","You will feel extra carefree this month. Embrace this" +
    "change as you face the people in your life.","Please try again and enter a valid date."];

var images = ["photos/aquarius.jpg", "photos/pisces.jpg", "photos/aries.jpg", "photos/taurus.png","photos/gemini.jpg","photos/cancer.jpg", "photos/leo.jpg","photos/virgo.jpg",
    "photos/libra.jpg","photos/scorpio.jpg","photos/sagittarius.jpg","photos/capricorn.jpg", "photos/error.jpg" ];
var zodiacSigns =["the rat", "the ox", "the tiger","the rabbit","the dragon","the snake", "the horse", "the goat / ram",
    "the monkey", "the rooster", "the dog","the pig", "unavailable- please enter a valid year"];


function doIt() {


    //get month and day from page

    // pass those to pickSign(month,day) and get back a NUMBER

    //use the number as a key into the arrays with data

    //write those out to the page (sign, horoscope, image)

    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var name = document.getElementById("name").value;
    var horoscopeSign = pickSign(month, day);
    var year = document.getElementById("year").value;
    var zodiac = chineseZodiac(year);

    document.getElementById("horoscopeSign").innerHTML = "Hi "+ name +", your sign is " + signs[horoscopeSign]+ ".  "+ messages[horoscopeSign];
    document.getElementById("image").src = images[horoscopeSign];
    document.getElementById("zodiac").innerHTML = "Also, because you were born in the year "+ year + ",  your Chinese zodiac sign is "
        + zodiacSigns[zodiac]+ ".  ";

}


function pickSign(month, day){
    if((month == 1 && day >=20)||(month ==2 && day<=18)){
        return 0;
    }
    if((month == 2 && day>= 19 && day<=28)||(month == 3 && day<=20)){
        return 1;
    }
    if((month == 3 && day>=21)||(month == 4 && day <= 19)){
        return 2;
    }
    if((month == 4 && day>= 20 && day!=31)||(month == 5 && day <= 20)){
        return 3;
    }
    if((month == 5 && day>= 21)||(month == 6 && day <=20)){
        return 4;
    }
    if((month == 6 && day>= 21 && day !=31)||(month ==7 && day<=22)){
        return 5;
    }
    if((month ==7 && day>=23)||(month == 8 && day<= 22)){
        return 6;
    }
    if((month == 8 && day >= 23)||(month ==9 && day<=  22)){
        return 7;
    }
    if((month == 9 && day>=23 && day!=31)||(month == 10 && day<= 22)){
        return 8;
    }
    if((month == 10 && day>= 23)||(month == 11 && day <= 21)){
        return 9;
    }
    if((month == 11 && day >= 22 && day!=31)||(month == 12 && day <= 21)){
        return 10;
    }
    if((month == 12 && day>= 21)||(month == 1 && day <= 19)){
        return 11;
    }
    if(month == 2 && (day == 29 ||day == 30 || day==31)){
        return 12;
    }
    if(day == 31 &&(month == 4 || month == 6 || month== 9 || month == 11 )){
        return 12;
    }
    if(day == 0 ||month == 0){
        return 12;
    }
}
function chineseZodiac(year){
    if(year == 1900 ||((year - 1900)% 12)==0){
        return 0;
    }
    if(year == 1901 ||((year - 1901)% 12)==0){
        return 1;
    }
    if(year == 1902 ||((year - 1902)% 12)==0){
        return 2;
    }
    if(year == 1903 ||((year - 1903)% 12)==0){
        return 3;
    }
    if(year == 1904 ||((year - 1904)% 12)==0){
        return 4;
    }
    if(year == 1905 ||((year - 1905)% 12)==0){
        return 5;
    }
    if(year == 1906 ||((year - 1906)% 12)==0){
        return 6;
    }
    if(year == 1907 ||((year - 1907)% 12)==0){
        return 7;
    }
    if(year == 1908 ||((year - 1908)% 12)==0){
        return 8;
    }
    if(year == 1909 ||((year - 1909)% 12)==0){
        return 9;
    }
    if(year == 1910 ||((year - 1910)% 12)==0){
        return 10;
    }
    if(year == 1911 ||((year - 1911)% 12)==0){
        return 11;
    }
    else{
        return 12;
    }


}



