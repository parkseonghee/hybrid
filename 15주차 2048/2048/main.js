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

    
  	randomNum();
  	randomNum();
}

// 게임 시작
function start(){
	document.getElementById("intro").style.display = 'none';
	document.getElementById("gamearea").style.display = 'block';
	init();
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


// 숫자 생성 (2,4)
function getNewNum(){
    var rand = parseInt(Math.random()*10);
    if(rand==0) return 4;
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
            cell.style.background="burlywood";
            break;
        case 4:
            cell.style.color="#000000";
            cell.style.background="burlywood";
            break;
        case 8:
            cell.style.color="#000000";
            cell.style.background="burlywood";
            break;
        case 16:
            cell.style.color="#000000";
            cell.style.background="burlywood";
            break;
        case 32:
            cell.style.color="#000000";
            cell.style.background="burlywood";
            break;
        case 64:
            cell.style.color="#000000";
            cell.style.background="burlywood";
            break;
        case 128:
            cell.style.color="#000000";
            cell.style.background="burlywood";
            break;
        case 256:
            cell.style.color="#000000";
            cell.style.background="burlywood";
            break;
        case 512:
            cell.style.color="#000000";
            cell.style.background="burlywood";
            break;
        case 1024:
            cell.style.color="#000000";
            cell.style.background="burlywood";
            break;
        case 2048:
            cell.style.color="#000000";
            cell.style.background="burlywood";
            break;
        default:
            if(cellNum>2048){
                cell.style.color="#000000";
                cell.style.background="burlywood";
            }
            else{
                cell.style.color="#000000";
                cell.style.background="burlywood";
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
    	randomNum();
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
    	randomNum();
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
    	randomNum();
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
    	randomNum();
    }
}
