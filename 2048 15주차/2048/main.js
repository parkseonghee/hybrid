// div 게임 판 배열
var cellArr = document.getElementsByClassName("cell");
// 숫자 배열
var numArr = Array(0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0);

// 상하좌우 이동

var startgame = 0;
function moveNum(e) {
    console.log(e.getAttribute("id"));
    switch (e.getAttribute("id")) {
        case 'ArrowRight':
            right();
            break;
        case 'ArrowLeft':
            left();
            break;
        case 'ArrowUp':
            up();
            break;
        case 'ArrowDown':
            down();
            break;
        default:
            break;
    }
}

// 게임 초기화
function init(){
    for(var i=0; i<16; i++){
    	cellArr[i].innerHTML="";
    	numArr[i] = 0;
    }
    var score = document.getElementById("score");
    score.innerHTML=0;

    var ran = parseInt(Math.random()*10);
    if(ran==0){
        randomNum2();
        randomNum3();
    }
    if(ran!==0){
        randomNum();
    }

    
}

// 게임 시작
function start(){
	document.getElementById("intro").style.display = 'none';
	document.getElementById("gamearea").style.display = 'block';
    document.getElementById("score").style.display = 'block';
    document.getElementById("scoreType").style.display = "block";
    document.getElementById("gameover").style.display = "none";
    document.getElementById("styles").style.display="block";
    document.body.style.background="#2F3550";
	init();
}

function end() {
	var score = document.getElementById("score").innerHTML;
	document.getElementById("gameover").style.display = 'block';
	document.getElementById("intro").style.display = 'none';
	document.getElementById("gamearea").style.display = 'none';
    document.getElementById("score").style.display = 'none';
    document.getElementById("scoreType").style.display = "none";

    gameover.innerHTML="Game over score : "+score;
}



// 숫자 랜덤 생성
function randomNum(){
    var done=false;
    while(done==false){
        var num = Math.floor(Math.random()*16);
        if(numArr[num] == 0){
        	numArr[num] = getNewNum();
            done=true;
        }
    }
    setNum();
}

// 숫자 랜덤 생성
function randomNum2(){
    var done=false;
    while(done==false){
        var num = Math.floor(Math.random()*16);
        if(numArr[num] == 0){
        	numArr[num] = getNewNum2();
            done=true;
        }
    }
    setNum();
}

function randomNum3(){
    var done=false;
    while(done==false){
        var num = Math.floor(Math.random()*16);
        if(numArr[num] == 0){
        	numArr[num] = getNewNum3();
            done=true;
        }
    }
    setNum();
}

// 숫자 생성 (2,4)
function getNewNum(){
    var rand = parseInt(Math.random()*10);
    if(rand==0){
        return 4;
    }
    return 2;
}

function getNewNum2(){

        return 4;
}

function getNewNum3(){

    return 2;
}


// div에 숫자 반영
function setNum(){
    for(var i=0; i<16; i++){
		cellArr[i].innerHTML = numArr[i] != 0 ? numArr[i] : ""; 
		setCellStyle(cellArr[i]);
	}
}
// 칸 색칠
function setCellStyle(cell){
    var cellNum = parseInt(cell.innerHTML);
    switch(cellNum){
        case 2:
            cell.style.color="#000000";
            cell.style.background="#807FF6";
            break;
        case 4:
            cell.style.color="#000000";
            cell.style.background="#7D17F4";
            break;
        case 8:
            cell.style.color="#000000";
            cell.style.background="#D783B4";
            break;
        case 16:
            cell.style.color="#000000";
            cell.style.background="#671B28";
            break;
        case 32:
            cell.style.color="#000000";
            cell.style.background="#270353";
            break;
        case 64:
            cell.style.color="#000000";
            cell.style.background="#64DBF3";
            break;
        case 128:
            cell.style.color="#000000";
            cell.style.background="#E34B53";
            break;
        case 256:
            cell.style.color="#000000";
            cell.style.background="#92D050";
            break;
        case 512:
            cell.style.color="#000000";
            cell.style.background="#D0882F";
            break;
        case 1024:
            cell.style.color="#000000";
            cell.style.background="#3C8AE0";
            break;
        case 2048:
            cell.style.color="#000000";
            cell.style.background="red";
            break;
        default:
            if(cellNum>2048){
                cell.style.color="#000000";
                cell.style.background="#22468E";
            }
            else{
                cell.style.color="#000000";
                cell.style.background="#F3F2F1";
            }
            break;
    }
}

// 왼쪽
function right(){
    var isMoved=false;
    var access = false;
    var k;

    //fixed
    for(var i=14; i>0; i-=4){
        access = false;
        for(var j=i; j>=i-2; j--){
            if(numArr[j] != 0){
                k=j;
                while(k<(i+1) && (numArr[k+1]== numArr[k] || numArr[k+1] == 0) ){
                    if( numArr[k+1]==numArr[k] && access==false ){
                    	numArr[k+1] = numArr[k+1] + numArr[k];
                        numArr[k] = 0;
                        isMoved=true;
                        access=true;
                    } else if( numArr[k+1]==numArr[k] && access==true ){
                    	access==false;
                    } else if(numArr[k+1] == 0){
                    	numArr[k+1] = numArr[k];
                        numArr[k] = 0; 
                        isMoved=true;
                    }
                    k++;
                }
            }
        }
        
    }

    setNum();
    
    if(isMoved){
    	randomNum3();
        score.innerHTML++;
    }else{
        check();
    }
}

//오른쪽
function left(){
    var isMoved=false;
    var access = false;
    var k;
    

    for(var i=13; i>0; i-=4){
        access = false;
        for(var j=i; j<=i+2; j++){
            if(numArr[j] != 0){
                k=j;
                while(k>(i-(i%4)) && (numArr[k-1]==numArr[k] || numArr[k-1] == 0)){
                    if( numArr[k-1]== numArr[k] && access==false ){
                    	numArr[k-1] = numArr[k-1] + numArr[k];
                        numArr[k] = 0;
                        isMoved=true;
                        access=true;
                        
                    }
                    else if( numArr[k-1] == numArr[k] && access==true ){
                    	access==false;
                    }
                    else if(numArr[k-1] ==  0 ){
                    	numArr[k-1] = numArr[k];
                        numArr[k] = 0;
                        isMoved=true;
                    }
                    k-=1;
                }
            }
        }
        
    }

    setNum();
   
    if(isMoved){
    	randomNum3();
        score.innerHTML++;
    }else{
        check();
    }
}
//아래
function down(){
    var isMoved=false;
    var access = false;
    var k;
    
    for(var i=11; i>7; i-=1){
        access = false;
        for(var j=i; j>=0; j=j-4){
            if(numArr[j] != 0){
                k=j;
                while(k<12 && (numArr[k+4]==numArr[k] || numArr[k+4] == 0)){
                    if( numArr[k+4] == numArr[k] && access==false ){
                    	numArr[k+4] = numArr[k+4]+numArr[k];
                        numArr[k] = 0;
                        isMoved=true;
                        access=true;
                        
                    } else if( numArr[k+4] == numArr[k] && access==true ){
                    	access==false;
                    } else if(numArr[k+4] == 0){
                    	numArr[k+4] = numArr[k];
                        numArr[k] = 0; 
                        isMoved=true;
                    }
                    k+=4;
                }
            }
        }
    }

    setNum();
    
    if(isMoved){
    	randomNum3();
        score.innerHTML++;
    }else{
        check();
    }
}

//위
function up(){
    var isMoved=false;
    var access = false;
    var k;

    for(var i=7; i>3; i-=1){
        access = false;
        for(var j=i; j<(i+9); j+=4){
            if(numArr[j] != 0){
                k=j;
                while(k>=i && (numArr[k-4] == numArr[k] || numArr[k-4] == 0)){
                    if( numArr[k-4] == numArr[k] && access==false ){
                        numArr[k-4]=numArr[k-4]+numArr[k];
                        numArr[k] = 0;
                        isMoved=true;
                        access=true;
                    }
                    else if( numArr[k-4] == numArr[k] && access==true ){
                    	access==false;
                    }
                    else if(numArr[k-4] == 0){
                    	numArr[k-4]=numArr[k];
                        numArr[k] = 0; 
                        isMoved=true;
                    }
                    k-=4;
                }
            }
        }
    }

    setNum();
    
    
    if(isMoved){
    	randomNum3();
        score.innerHTML++;
    }else{
        check();
    }
}


function check(){
	var x = false;
	for(var i =0 ;i<16;i++){
        switch(i){
            case (0):
                if(numArr[0]==numArr[1]||numArr[0]==numArr[4]){
                    x=true;    
                };
                break;
            case (1):
                if(numArr[1]==numArr[0]||numArr[1]==numArr[2]||numArr[1]==numArr[5]){
                    x=true;    
                };
                break;
            case (2):
                if(numArr[2]==numArr[1]||numArr[2]==numArr[3]||numArr[2]==numArr[6]){
                    x=true; 
                };
                break;
            case (3):
                if(numArr[3]==numArr[2]||numArr[3]==numArr[7]){
                    x=true; 
                };
                break;
            case (4):
                if(numArr[4]==numArr[0]||numArr[4]==numArr[5]||numArr[4]==numArr[8]){
                  x=true;   
                };
                break;
            case (5):
                if(numArr[5]==numArr[1]||numArr[5]==numArr[4]||numArr[5]==numArr[6]||numArr[5]==numArr[9]){
                    x=true; 
                };
                break;
            case (6):
                if(numArr[6]==numArr[2]||numArr[6]==numArr[5]||numArr[6]==numArr[7]||numArr[6]==numArr[10]){
                    x=true; 
                };
                break;
            case (7):
                if(numArr[7]==numArr[3]||numArr[7]==numArr[6]||numArr[7]==numArr[11]){
                    x=true; 
                };
                break;
            case (8):
                if(numArr[8]==numArr[4]||numArr[8]==numArr[9]||numArr[8]==numArr[12]){
                    x=true; 
                };
                break;
            case (9):
                if(numArr[9]==numArr[5]||numArr[9]==numArr[8]||numArr[9]==numArr[10]||numArr[9]==numArr[13]){
                    x=true; 
                };
                break;
            case (10):
                if(numArr[10]==numArr[6]||numArr[10]==numArr[9]||numArr[10]==numArr[11]||numArr[10]==numArr[14]){
                    x=true; 
                };
                break;
            case (11):
                if(numArr[11]==numArr[7]||numArr[11]==numArr[10]||numArr[11]==numArr[15]){
                    x=true; 
                };
                break;
            case (12):
                if(numArr[12]==numArr[8]||numArr[12]==numArr[13]){
                    x=true; 
                };
                break;
            case (13):
                if(numArr[13]==numArr[9]||numArr[13]==numArr[12]||numArr[13]==numArr[14]){
                    x=true; 
                };
                break;
            case (14):
                if(numArr[14]==numArr[10]||numArr[14]==numArr[13]||numArr[14]==numArr[15]){
                    x=true; 
                };
                break;
            case (15):
                if(numArr[15]==numArr[11]||numArr[15]==numArr[14]){
                    x=true; 
                };
                break;
        }
        
        if(numArr[i] == 0){
        	x=true; 
            break;
        }
	}
    if(!x){
    	end();
   	}
}