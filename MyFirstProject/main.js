// 랜덤번호 지정
// 유저가 번호를 입력한다. 그리고 go 라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞히면, 맞혔씁니다.
// 랜덤번호가 < 유저번호 down
// 랜덤번호가 > 유저번호 up
// reset 버튼
// 5번의 기회 다쓰면 게임끝 / 버튼 disble
// 유저가 1~100범위 밖 숫자 입력 알려줌. 기회 안깎음
// 유저가 이미 입력한 숫자 입력함. 기회 안깎음


let computerNum = 0;
function pickRandomNum (){
    computerNum = Math.random();
    console.log("정답", computerNum);


}