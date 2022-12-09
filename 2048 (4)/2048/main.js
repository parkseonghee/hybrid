// div 게임 판 배열
var cellArr = document.getElementsByClassName("cell");//div에 있는 class이름을 가져와 변수를 만들었다.
// 숫자 배열
var numArr = Array(0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0);//Array를 써서 16가지의 배열을 만들었다.

// 상하좌우 이동
function moveNum(e) {//moveNum이라는 함수로 키보드 div에넣어 방향을 결정해 준다.
    
    switch (e.getAttribute("id")) { //id로 지정된 값
        case 'ArrowRight'://id로 지정된 ArrowRight이다.
            right();//right()함수를 적용해 오른쪽 방향키를 누를시 오른쪽으로 이동한다.
            break;//브레이크를 걸어 다음으로 코드가 넘어가지 않게 해준다.
        case 'ArrowLeft'://id로 지정된 ArrowLeft이다.
            left();//left()함수를 적용해 왼쪽 방향키를 누를시 왼쪽으로 이동한다.
            break;//브레이크를 걸어 다음으로 코드가 넘어가지 않게 해준다.
        case 'ArrowUp'://id로 지정된 ArrowUp이다.
            up();//up()함수를 적용해 위쪽 방향키를 누를시 위로 이동한다.
            break;//브레이크를 걸어 다음으로 코드가 넘어가지 않게 해준다.
        case 'ArrowDown'://id로 지정된 ArrowDown이다.
            down();//down()함수를 적용해 아래 방향키를 누를시 아래로 이동한다.
            break;//브레이크를 걸어 다음으로 코드가 넘어가지 않게 해준다.
        default://만약 값이 다르면
            break;//브레이크를 걸어 다음으로 코드가 넘어가지 않게 해준다.
    }
}

// 게임 초기화
function init(){//init()함수로 게임을 초기화 하는 함수이다.
    for(var i=0; i<16; i++){//16번 실행한다.
    	numArr[i] = 0;//numArr의 i번째 배열의 값을 0으로 지정한다.
    }
    var score = document.getElementById("score");//index.html에 있는 score의 id값을 가져와 score라는 객체를 만든다.
    score.innerHTML=0;//score의 값을 0으로 만든다.

    var ran = parseInt(Math.random()*10); //0~9사이의 랜덤한 숫자를 정수형으로 만들어 ran이라는 객체에 값을 넣는다.
    if(ran==0){//ran의 값이 0이면
        randomNum2();//4의 값을 가져온다.
        randomNum3();//2의 값을 가져온다.
    }
    if(ran!==0){//ran의 값이 0이 아니면 
        randomNum();//2,4의 값을 가져온다.
    }
}

// 게임 시작
function start(){//게임을 시작하는 start()함수이다.
	document.getElementById("intro").style.display = 'none';//게임을 시작할 때 id="intro"를 없앤다. 
	document.getElementById("gamearea").style.display = 'block';//게임을 시작할 때 id="gamearea"를 나오게한다.
    document.getElementById("score").style.display = 'block';//게임을 시작할 때 id="score"를 나오게한다.
    document.getElementById("scoreType").style.display = "block";//게임을 시작할 때 id="scoreType"를 나오게한다.
    document.getElementById("gameover").style.display = "none";//게임을 시작할 때 id="gameover"를 없앤다.
    document.getElementById("styles").style.display="block";//게임을 시작할 때 id=styles"를 나오게한다.
    document.body.style.background="#2F3550";//게임을 시작할 때 body의 배경 색을 바꾼다.
	init();//게임을 실행한다.
}

function end() {//게임이 종료되는 end()함수이다.
	var score = document.getElementById("score").innerHTML;//최종 스코어의 값을 score의 객체에다가 넣는다. 
	document.getElementById("gameover").style.display = 'block';//게임을 시작할 때 id="gameover"를 나오게한다.
	document.getElementById("intro").style.display = 'none';//게임을 시작할 때 id="intro"를 없앤다. 
	document.getElementById("gamearea").style.display = 'none';//게임을 시작할 때 id="gamearea"를 없앤다.
    document.getElementById("score").style.display = 'none';//게임을 시작할 때 id="score"를 없앤다.
    document.getElementById("scoreType").style.display = "none";//게임을 시작할 때 id="scoreType"를 없앤다.

    gameover.innerHTML="Game over score : "+score;//최종 스코어를 띄운다.
}

function randomNum(){//2,4의 숫자를 생성하는 함수이다.
    var done=false;// done이라는 변수를 만들어 false상태로 만든다.
    while(done==false){//만약 done이 false면 while문을 실행
        var num = Math.floor(Math.random()*16);//랜덤으로 0~15의 값을 정하고 그 값을 반올림 해줘 num에다가 넣는다.
        if(numArr[num] == 0){//numArr의 num배열 변호가 0이라면 실행한다.
        	numArr[num] = getNewNum(); //numArr[num]은 함수 getNewNum()을 실행한다.
            done=true;//done을 true로 바꾸면서 while문을 끝낸다.
        }
    }
    setNum();//setNum()의 함수를 실행한다.
}

function randomNum2(){//4의 숫자를 생성하는 함수이다.
    var done=false;//done이라는 변수를 만들어 false상태로 만든다.
    while(done==false){//만약 done이 false면 while문을 실행
        var num = Math.floor(Math.random()*16);//랜덤으로 0~15의 값을 정하고 그 값을 반올림 해줘 num에다가 넣는다.
        if(numArr[num] == 0){//numArr의 num배열 변호가 0이라면 실행한다.
        	numArr[num] = getNewNum2();//numArr[num]은 함수 getNewNum2()을 실행한다.
            done=true;//done을 true로 바꾸면서 while문을 끝낸다.
        }
    }
    setNum();//setNum()의 함수를 실행한다.
}

function randomNum3(){//2의 숫자를 생성하는 함수이다.
    var done=false;//done이라는 변수를 만들어 false상태로 만든다.
    while(done==false){//만약 done이 false면 while문을 실행
        var num = Math.floor(Math.random()*16);//랜덤으로 0~15의 값을 정하고 그 값을 반올림 해줘 num에다가 넣는다.
        if(numArr[num] == 0){//numArr의 num배열 변호가 0이라면 실행한다.
        	numArr[num] = getNewNum3();//numArr[num]은 함수 getNewNum3()을 실행한다.
            done=true;//done을 true로 바꾸면서 while문을 끝낸다.
        }
    }
    setNum();//setNum()의 함수를 실행한다.
}

// 숫자 생성 (2,4)
function    getNewNum(){
    var rand = parseInt(Math.random()*10);//0~9의 값을 랜덤하게 하나 결정하고 그 값을 정수로 바꾸면서 rand변수에 넣는다.
    if(rand==0){//만약 랜덤해서 받은 rand의 값이 0이라면 if문 실행
        return 4;//4의 값을 출력한다.
    }
    return 2;//2의 값을 출력한다.
}

function getNewNum2(){//숫자 생성 4

        return 4;//숫자 4의 값을 생성한다.
}

function getNewNum3(){//숫자 생성 2

    return 2;//숫자 2의 값을 생성한다.
}


// div에 숫자 반영
function setNum(){
    for(var i=0; i<16; i++){//반복문을 16번 실행
        //numArr의 i번째 값이 0이 아니면 namArr을 빈칸으로 하라를 div값에다가 추가하라
		cellArr[i].innerHTML = numArr[i] != 0 ? numArr[i] : "";  
		setCellStyle(cellArr[i]);//div의 각각 값에다가 색깔을 넣어준다.
	}
}
// 칸 색칠
function setCellStyle(cell){
    var cellNum = parseInt(cell.innerHTML);//div의 출력된 값을 정수로 반환한다.
    switch(cellNum){//cellNum의 값에 따라 색이 정해진다. ex) cellNum의 값이 2면 case 2를 실행
        case 2://만약 2의 값이면
            cell.style.color="#000000";//글자는 검은색
            cell.style.background="#807FF6";//해당 색깔을 출력
            break;//브레이크를 걸어 다음으로 코드가 넘어가지 않게 해준다.
        case 4://만약 4의 값이면
            cell.style.color="#000000";//글자는 검은색
            cell.style.background="#7D17F4";//해당 색깔을 출력
            break;//브레이크를 걸어 다음으로 코드가 넘어가지 않게 해준다.
        case 8://만약 8의 값이면
            cell.style.color="#000000";//글자는 검은색
            cell.style.background="#D783B4";//해당 색깔을 출력
            break;//브레이크를 걸어 다음으로 코드가 넘어가지 않게 해준다.
        case 16://만약 16의 값이면
            cell.style.color="#000000";//글자는 검은색
            cell.style.background="#671B28";//해당 색깔을 출력
            break;//브레이크를 걸어 다음으로 코드가 넘어가지 않게 해준다.
        case 32://만약 32의 값이면
            cell.style.color="#000000";//글자는 검은색
            cell.style.background="#270353";//해당 색깔을 출력
            break;//브레이크를 걸어 다음으로 코드가 넘어가지 않게 해준다.
        case 64://만약 64의 값이면
            cell.style.color="#000000";//글자는 검은색
            cell.style.background="#64DBF3";//해당 색깔을 출력
            break;//브레이크를 걸어 다음으로 코드가 넘어가지 않게 해준다.
        case 128://만약 128의 값이면
            cell.style.color="#000000";//글자는 검은색
            cell.style.background="#E34B53";//해당 색깔을 출력
            break;//브레이크를 걸어 다음으로 코드가 넘어가지 않게 해준다.
        case 256://만약 256의 값이면
            cell.style.color="#000000";//글자는 검은색
            cell.style.background="#92D050";//해당 색깔을 출력
            break;//브레이크를 걸어 다음으로 코드가 넘어가지 않게 해준다.
        case 512://만약 512의 값이면
            cell.style.color="#000000";//글자는 검은색
            cell.style.background="#D0882F";//해당 색깔을 출력
            break;//브레이크를 걸어 다음으로 코드가 넘어가지 않게 해준다.
        case 1024://만약 1024의 값이면
            cell.style.color="#000000";//글자는 검은색
            cell.style.background="#3C8AE0";//해당 색깔을 출력
            break;//브레이크를 걸어 다음으로 코드가 넘어가지 않게 해준다.
        case 2048://만약 2048의 값이면
            cell.style.color="#000000";//글자는 검은색
            cell.style.background="red";//해당 색깔을 출력
            break;//브레이크를 걸어 다음으로 코드가 넘어가지 않게 해준다.
        default://만약 다른 경우라면
            if(cellNum>2048){//cellNum의 값이 2048을 넘었으면 실행
                cell.style.color="#000000";//글자는 검은색
                cell.style.background="#22468E";//해당 색깔을 출력
            }
            else{//만약 아니면
                cell.style.color="#000000";//글자는 검은색
                cell.style.background="#F3F2F1";//해당 색깔을 출력
            }
            break;//브레이크를 걸어 다음으로 코드가 넘어가지 않게 해준다.
    }
}

// 오른쪽
function right(){
    var isMoved=false;//isMoved는 나중에 움직임 감지 할때 쓰인다.
    var access = false;//한번에 합쳐지는것을 막기위한 코드
    var k;//배열의 값을 키우거나 확인하기 위해 쓰인다.

    //fixed
    for(var i=14; i>0; i-=4){
        access = false;
        for(var j=i; j>=i-2; j--){
            if(numArr[j] != 0){//numArr의 j번째 배열의 값이 0이 아니면 실해한다.
                k=j;//k는 j의 값을 가진다.
                while(k<(i+1) && (numArr[k+1]== numArr[k] || numArr[k+1] == 0) ){//오른쪽으로 이동 할때 한칸만 움직이나, 끝까지 움직이나 확인
                    if( numArr[k+1]==numArr[k] && access==false ){//오른쪽으로 이동한다. 합쳐지지 않는다.
                    	numArr[k+1] = numArr[k+1] + numArr[k]; //오른쪽으로 이동하는 코드
                        numArr[k] = 0;//배열의 값을 초기화 해준다. 이 코드가 없으면 과부하가 걸린다.
                        isMoved=true;//움직임이 감지됨
                        access=true;//이 코드가 없으면 블럭이 한번에 합쳐진다.
                    } else if( numArr[k+1]==numArr[k] && access==true ){//오른쪽으로 이동하면서 합쳐질때
                    	access==false;//합쳐지는 걸 막는다.
                    } else if(numArr[k+1] == 0){//numArr가 0이라면
                    	numArr[k+1] = numArr[k];//numArr의 k번째 값을 가진다.
                        numArr[k] = 0; //배열의 값을 초기화 해준다.
                        isMoved=true;//움직임이 감지됨
                    }
                    k++;//k의 값을 늘린다.
                }
            }
        }
        
    }

    setNum();//setNum()함수 실행
    
    if(isMoved){//움직임이 감지 되었다면
    	randomNum3();//2의 숫자를 생성하라
        score.innerHTML++;//score의 숫자를 1늘려라
    }else{//만약 아니면
        check();//check()함수를 실행하라
    }
}

//왼쪽
function left(){
    var isMoved=false;//isMoved는 나중에 움직임 감지 할때 쓰인다.
    var access = false;//한번에 합쳐지는것을 막기위한 코드
    var k;//배열의 값을 키우거나 확인하기 위해 쓰인다.
    

    for(var i=13; i>0; i-=4){
        access = false;
        for(var j=i; j<=i+2; j++){
            if(numArr[j] != 0){
                k=j;
                while(k>(i-(i%4)) && (numArr[k-1]==numArr[k] || numArr[k-1] == 0)){//왼쪽으로 이동 할때 한칸만 움직이나, 끝까지 움직이나 확인
                    if( numArr[k-1]== numArr[k] && access==false ){//왼쪽으로 이동한다. 합쳐지지 않는다.
                    	numArr[k-1] = numArr[k-1] + numArr[k];//왼쪽으로 이동하는 코드
                        numArr[k] = 0;//배열의 값을 초기화 해준다. 이 코드가 없으면 과부하가 걸린다.
                        isMoved=true;//움직임이 감지됨
                        access=true;//이 코드가 없으면 블럭이 한번에 합쳐진다.
                    }
                    else if( numArr[k-1] == numArr[k] && access==true ){//왼쪽으로 이동하면서 합쳐질때
                    	access==false;//합쳐지는 걸 막는다
                    }
                    else if(numArr[k-1] ==  0 ){//numArr가 0이라면
                    	numArr[k-1] = numArr[k];//numArr의 k번째 값을 가진다.
                        numArr[k] = 0;//배열의 값을 초기화 해준다.
                        isMoved=true;//움직임이 감지됨
                    }
                    k-=1;//k값을 -1해준다.
                }
            }
        }
        
    }

    setNum();//setNum()함수 실행
    
    if(isMoved){//움직임이 감지 되었다면
    	randomNum3();//2의 숫자를 생성하라
        score.innerHTML++;//score의 숫자를 1늘려라
    }else{//만약 아니면
        check();//check()함수를 실행하라
    }
}
//아래
function down(){
    var isMoved=false;//isMoved는 나중에 움직임 감지 할때 쓰인다.
    var access = false;//한번에 합쳐지는것을 막기위한 코드
    var k;//배열의 값을 키우거나 확인하기 위해 쓰인다.
    
    for(var i=11; i>7; i-=1){
        access = false;
        for(var j=i; j>=0; j=j-4){
            if(numArr[j] != 0){
                k=j;
                while(k<12 && (numArr[k+4]==numArr[k] || numArr[k+4] == 0)){//아래쪽으로 이동 할때 한칸만 움직이나, 끝까지 움직이나 확인
                    if( numArr[k+4] == numArr[k] && access==false ){//아래쪽으로 이동한다. 합쳐지지 않는다.
                    	numArr[k+4] = numArr[k+4]+numArr[k];//아래쪽으로 이동하는 코드
                        numArr[k] = 0;//배열의 값을 초기화 해준다. 이 코드가 없으면 과부하가 걸린다.
                        isMoved=true;//움직임이 감지됨
                        access=true;//이 코드가 없으면 블럭이 한번에 합쳐진다.
                        
                    } else if( numArr[k+4] == numArr[k] && access==true ){//아래쪽으로 이동하면서 합쳐질때
                    	access==false;//합쳐지는 걸 막는다
                    } else if(numArr[k+4] == 0){//numArr가 0이라면
                    	numArr[k+4] = numArr[k];//numArr의 k번째 값을 가진다.
                        numArr[k] = 0; //배열의 값을 초기화 해준다.
                        isMoved=true;//움직임이 감지됨
                    }
                    k+=4;//k의 값을 +4해준다.
                }
            }
        }
    }

    setNum();//setNum()함수 실행
    
    if(isMoved){//움직임이 감지 되었다면
    	randomNum3();//2의 숫자를 생성하라
        score.innerHTML++;//score의 숫자를 1늘려라
    }else{//만약 아니면
        check();//check()함수를 실행하라
    }
}

//위
function up(){
    var isMoved=false;//isMoved는 나중에 움직임 감지 할때 쓰인다.
    var access = false;//한번에 합쳐지는것을 막기위한 코드
    var k;//배열의 값을 키우거나 확인하기 위해 쓰인다.

    for(var i=7; i>3; i-=1){
        access = false;
        for(var j=i; j<(i+9); j+=4){
            if(numArr[j] != 0){
                k=j;
                while(k>=i && (numArr[k-4] == numArr[k] || numArr[k-4] == 0)){//위쪽으로 이동 할때 한칸만 움직이나, 끝까지 움직이나 확인
                    if( numArr[k-4] == numArr[k] && access==false ){//위쪽으로 이동한다. 합쳐지지 않는다.
                        numArr[k-4]=numArr[k-4]+numArr[k];//위쪽으로 이동하는 코드
                        numArr[k] = 0;//배열의 값을 초기화 해준다. 이 코드가 없으면 과부하가 걸린다.
                        isMoved=true;//움직임이 감지됨
                        access=true;//이 코드가 없으면 블럭이 한번에 합쳐진다.
                    }
                    else if( numArr[k-4] == numArr[k] && access==true ){//위쪽으로 이동하면서 합쳐질때
                    	access==false;//합쳐지는 걸 막는다
                    }
                    else if(numArr[k-4] == 0){//numArr가 0이라면
                    	numArr[k-4] = numArr[k];//numArr의 k번째 값을 가진다.
                        numArr[k] = 0; //배열의 값을 초기화 해준다.
                        isMoved=true;//움직임이 감지됨
                    }
                    k-=4;//k의 값을 -4해준다.
                }
            }
        }
    }

    setNum();//setNum()함수 실행
    
    if(isMoved){//움직임이 감지 되었다면
    	randomNum3();//2의 숫자를 생성하라
        score.innerHTML++;//score의 숫자를 1늘려라
    }else{//만약 아니면
        check();//check()함수를 실행하라
    }
}


function check(){//블럭을 합칠 수 있나 없나의 여부를 알기 위한 코드이다.
	var x = false;//x는 false의 값을 고정으로한다. x는 합칠 수 있는 블럭이 있는지 여부를 나타낸다.
	for(var i =0 ;i<16;i++){//0~15까지 반복
        switch(i){
            case (0)://1,2 배열이 같거나 1,5번째 배열이 같을 경우 실행
                if(numArr[0]==numArr[1]||numArr[0]==numArr[4]){
                    x=true;//x는 true의 값을 가진다.    
                };
                break;
            case (1)://2,1 배열이 같거나 2,3번째 배열이 같거나, 2,6번째 배열이 같을 경우 실행
                if(numArr[1]==numArr[0]||numArr[1]==numArr[2]||numArr[1]==numArr[5]){
                    x=true;//x는 true의 값을 가진다.      
                };
                break;
            case (2)://3,2 배열이 같거나 3,4번째 배열이 같거나, 3,7번째 배열이 같을 경우 실행
                if(numArr[2]==numArr[1]||numArr[2]==numArr[3]||numArr[2]==numArr[6]){
                    x=true;//x는 true의 값을 가진다.   
                };
                break;
            case (3)://4,3 배열이 같거나 4,8번째 배열이 같을 경우 실행
                if(numArr[3]==numArr[2]||numArr[3]==numArr[7]){
                    x=true; //x는 true의 값을 가진다.  
                };
                break;
            case (4)://5,1 배열이 같거나 5,6번째 배열이 같거나, 5,9번째배열이 같을 경우 실행
                if(numArr[4]==numArr[0]||numArr[4]==numArr[5]||numArr[4]==numArr[8]){
                  x=true; //x는 true의 값을 가진다.    
                };
                break;
            case (5)://6,2 배열이 같거나 6,5번째 배열이 같거나, 6,7배열이 같거나 6,10번째 배열이 같을 경우 실행
                if(numArr[5]==numArr[1]||numArr[5]==numArr[4]||numArr[5]==numArr[6]||numArr[5]==numArr[9]){
                    x=true; //x는 true의 값을 가진다.  
                };
                break;
            case (6)://7,3 배열이 같거나 7,6번째 배열이 같거나, 7,8배열이 같거나 7,11번째 배열이 같을 경우 실행
                if(numArr[6]==numArr[2]||numArr[6]==numArr[5]||numArr[6]==numArr[7]||numArr[6]==numArr[10]){
                    x=true; //x는 true의 값을 가진다.  
                };
                break;
            case (7)://8,4 배열이 같거나 8,7번째 배열이 같거나, 8,12번째배열이 같을 경우 실행
                if(numArr[7]==numArr[3]||numArr[7]==numArr[6]||numArr[7]==numArr[11]){
                    x=true; //x는 true의 값을 가진다.  
                };
                break;
            case (8)://9,5 배열이 같거나 9,10번째 배열이 같거나, 9,13번째배열이 같을 경우 실행
                if(numArr[8]==numArr[4]||numArr[8]==numArr[9]||numArr[8]==numArr[12]){
                    x=true; //x는 true의 값을 가진다.  
                };
                break;
            case (9)://10,6 배열이 같거나 10,9번째 배열이 같거나, 10,11번째 배열이 같거나 10,14번째 배열이 같을 경우 실행
                if(numArr[9]==numArr[5]||numArr[9]==numArr[8]||numArr[9]==numArr[10]||numArr[9]==numArr[13]){
                    x=true; //x는 true의 값을 가진다.  
                };
                break;
            case (10)://11,7 배열이 같거나 11,10번째 배열이 같거나, 11,12번째 배열이 같거나 11,15번째 배열이 같을 경우 실행
                if(numArr[10]==numArr[6]||numArr[10]==numArr[9]||numArr[10]==numArr[11]||numArr[10]==numArr[14]){
                    x=true; //x는 true의 값을 가진다.  
                };
                break;
            case (11)://12,8 배열이 같거나 12,11번째 배열이 같거나, 12,16번째배열이 같을 경우 실행
                if(numArr[11]==numArr[7]||numArr[11]==numArr[10]||numArr[11]==numArr[15]){
                    x=true; //x는 true의 값을 가진다.  
                };
                break;
            case (12)://13,9 배열이 같거나 13,14번째배열이 같을 경우 실행
                if(numArr[12]==numArr[8]||numArr[12]==numArr[13]){
                    x=true; //x는 true의 값을 가진다.  
                };
                break;
            case (13)://14,10 배열이 같거나 14,13번째 배열이 같거나, 14,15번째배열이 같을 경우 실행
                if(numArr[13]==numArr[9]||numArr[13]==numArr[12]||numArr[13]==numArr[14]){
                    x=true; //x는 true의 값을 가진다.  
                };
                break;
            case (14)://15,11 배열이 같거나 15,14번째 배열이 같거나, 15,16번째배열이 같을 경우 실행
                if(numArr[14]==numArr[10]||numArr[14]==numArr[13]||numArr[14]==numArr[15]){
                    x=true; //x는 true의 값을 가진다.  
                };
                break;
            case (15)://16,12 배열이 같거나 16,15번째배열이 같을 경우 실행
                if(numArr[15]==numArr[11]||numArr[15]==numArr[14]){
                    x=true; //x는 true의 값을 가진다.  
                };
                break;
        }
        
        if(numArr[i] == 0){//배열이 i번째 값이 0이면 실행
        	x=true; //x는 True의 값을 가진다.
            break;//브레이크를 걸어 다음으로 코드가 넘어가지 않게 해준다.
        }
	}
    if(!x){//만약 x의 값이 True가 아닐 때 즉 더 이상 같은 숫자의 배열이 주변에 존재하지 않을때 존재하지 않을 때 실행
    	end();//게임 오버
   	}
}