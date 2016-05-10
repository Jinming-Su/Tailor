/**
 * Created by sjm on 15-12-29.
 */

var board=new Array();
var score=0;

var hasConflicted=new Array();

$(function(){
    newgame();
})

function newgame(){
     //init
    init();
    //generate digit
    generateOneNumber();
    generateOneNumber();
}

function init(){
    for(var i=0;i<4;i++)
        for(var j=0;j<4;j++){
            var gridCeil=$("#grid-ceil-"+i+"-"+j);
            gridCeil.css("top",getPosTop(i,j));
            gridCeil.css("left",getPosLeft(i,j));
        }

    for(var i=0;i<4;i++){
        board[i]=new Array();
        hasConflicted[i]=new Array();
        for(var j=0;j<4;j++){
            board[i][j]=0;
            hasConflicted[i][j]=false;
        }
    }

    updateBoardView();

    score=0;
}

function updateBoardView(){

    $(".number-ceil").remove();
    for(var i=0;i<4;i++)
        for(var j=0;j<4;j++){
            $("#grid-container").append("<div class='number-ceil' id='number-ceil-"+i+'-'+j+"'></div>");
            var theNumberCeil=$("#number-ceil-"+i+'-'+j);

            if(board[i][j]==0){
                theNumberCeil.css("width","0");
                theNumberCeil.css("height","0");
                theNumberCeil.css("top",getPosTop(i,j)+50);
                theNumberCeil.css("left",getPosLeft(i,j)+50); //don't understand
            }else{
                theNumberCeil.css("width","100px");
                theNumberCeil.css("height","100px");
                theNumberCeil.css("top",getPosTop(i,j));
                theNumberCeil.css("left",getPosLeft(i,j));
                theNumberCeil.css("background",getNumberBackgroundColor(board[i][j]));
                theNumberCeil.text(board[i][j]);
            }
            hasConflicted[i][j]=false;
        }
}

function generateOneNumber(){
    if(nospace(board))
        return false;

    //Random a location
    var randx=parseInt(Math.floor(Math.random()*4));
    var randy=parseInt(Math.floor(Math.random()*4));
    while(true){
        if(board[randx][randy]==0)
            break;

        var randx=parseInt(Math.floor(Math.random()*4));
        var randy=parseInt(Math.floor(Math.random()*4));
    }
    //Random a digit
    var randNumber=Math.random()<0.5?2:4;

    //show the digit in the location
    board[randx][randy]=randNumber;
    showNumberWithAnimation(randx,randy,randNumber);

    return true;
}

$(document).keydown(function(event){
    switch (event.keyCode){
        case 37://left
            if(moveLeft()){
                setTimeout("generateOneNumber()",210);
                setTimeout("isgameover()",300);
            }
            break;
        case 38://up
            if(moveUp()){
                setTimeout("generateOneNumber()",210);
                setTimeout("isgameover()",300);
            }
            break;
        case 39://right
            if(moveRight()){
                setTimeout("generateOneNumber()",210);
                setTimeout("isgameover()",300);
            }
            break;
        case 40://down
            if(moveDown()){
                setTimeout("generateOneNumber()",210);
                setTimeout("isgameover()",300);
            }
            break;
        default:
            break;
    }
})

function isgameover(){
    if(nospace(board)&&nomove(board)){
        gameover();
    }
}

function gameover(){
    alert("gameover!");
}
function moveLeft(){
    if(!canMoveLeft(board))
        return false;

    //moveLeft
    for(var i=0;i<4;i++)
        for(var j=1;j<4;j++){
           if(board[i][j]!=0){
               for(var k=0;k<j;k++){
                   if(board[i][k]==0&&noBlockHorizontal(i,k,j,board)){
                       //move
                       showMoveAnimation(i,j,i,k);
                       board[i][k]=board[i][j];
                       board[i][j]=0;
                       continue;
                   }
                   else if(board[i][k]==board[i][j]&&noBlockHorizontal(i,k,j,board)&&hasConflicted[i][k]==false){
                       //move
                       showMoveAnimation(i,j,i,k);
                       //add
                       board[i][k]+=board[i][j];
                       board[i][j]=0;
                       //add score
                       score+=board[i][k];
                       updateScore(score);
                       hasConflicted[i][k]=true;
                       continue;
                   }
               }
           }
        }
    setTimeout("updateBoardView()",200);
    return true;
}

function moveRight(){
    if(!canMoveRight(board))
        return false;

    //moveRight
    for(var i=0;i<4;i++)
        for(var j=2;j>=0;j--){
           if(board[i][j]!=0){
               for(var k=3;k>j;k--){
                   if(board[i][k]==0&&noBlockHorizontal(i,j,k,board)){
                       //move
                       showMoveAnimation(i,j,i,k);
                       board[i][k]=board[i][j];
                       board[i][j]=0;
                       continue;
                   }
                   else if(board[i][k]==board[i][j]&&noBlockHorizontal(i,k,j,board)&&hasConflicted[i][k]==false){
                       //move
                       showMoveAnimation(i,j,i,k);
                       //add
                       board[i][k]+=board[i][j];
                       board[i][j]=0;
                       score+=board[i][k];
                       updateScore(score);
                       hasConflicted[i][k]=true;
                       continue;
                   }
               }
           }
        }
    setTimeout("updateBoardView()",200);
    return true;
}

function moveUp() {
    if (!canMoveUp(board))
        return false;

    //moveUp
    for (var j = 0; j < 4; j++)
        for (var i = 1; i < 4; i++) {
            if (board[i][j] != 0) {
                for (var k = 0; k < i; k++) {
                    if (board[k][j] == 0 && noBlockVertical(j, k, i, board)) {
                        //move
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    else if (board[k][j] == board[i][j] && noBlockVertical(j, k, i, board)&&hasConflicted[k][j]==false) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        score+=board[k][j];
                        updateScore(score);
                        hasConflicted[k][j]=true;
                        continue;
                    }
                }
            }
        }
    setTimeout("updateBoardView()",200);
    return true;
}

function moveDown() {
    if (!canMoveDown(board))
        return false;

    //moveUp
    for (var j = 0; j < 4; j++)
        for(var i=2;i>=0;i--){
            if (board[i][j] != 0) {
                for(var k=3;k>i;k--){
                    if (board[k][j] == 0 && noBlockVertical(j, i, k, board)) {
                        //move
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    else if (board[k][j] == board[i][j] && noBlockVertical(j, i, k, board)&&hasConflicted[k][j]==false) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        score+=board[k][j];
                        updateScore(score);
                        hasConflicted[k][j]=true;
                        continue;
                    }
                }
            }
        }
    setTimeout("updateBoardView()",200);
    return true;
}

