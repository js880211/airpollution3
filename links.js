var url = location.href;
var context = '';
var num = 0;
if (url.indexOf("?a=")!=0){
    var whichType= url.split("=");
    num = whichType[1];
//    1: home
//    2: start
//    3: list
//    4: voice
//    5: share?
//    6: close 
    switch(num){
        case "1":
//            home page
            break;
        case "2":
            context = '<img src="gamenoon.png" alt="This the image of Noon" width="2667px" height="1500px" id="pjselements" class = "middle">';
            break;
        case "3":  
            context = '<img src="voice.jpg" alt="This the image of List" width="2667px" height="1500px" id="pjselements" class = "middle">';
//            it might be jpg so it looks smaller
            break;
        case "4":
            context = '<img src="voicebackground.png" alt="This the image of Voice" width="2667px" height="1500px" id="pjselements" class = "middle">';
            break;
        case "5":
//            share or undo?
            break;
        case "6":
//            close to where?
            break;
    }
    document.write(context);
}