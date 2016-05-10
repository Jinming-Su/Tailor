/**
 *
 * Created by sjm on 15-12-29.
 */
function showNumberWithAnimation(i,j,num){

    var numberCeil=$("#number-ceil-"+i+"-"+j);

    numberCeil.css("background",getNumberBackgroundColor(num));
    numberCeil.css("color",getNumberColor(num));
    numberCeil.text(num);

    numberCeil.animate({
        width:"100px",
        height:"100px",
        top:getPosTop(i,j),
        left:getPosLeft(i,j)
    },50);
}

function showMoveAnimation(fromx,fromy,tox,toy){
    var numberCeil=$("#number-ceil-"+fromx+"-"+fromy);
    numberCeil.animate({
        top:getPosTop(tox,toy),
        left:getPosLeft(tox,toy)
    },200);
}

function updateScore(score){
    $("#sp_score").text(score);
}