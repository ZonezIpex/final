let count = 0;
// 버튼의 초기값을 설정함

const button = document.getElementById('counter-button');

button.addEventListener('click', function() {
    count += 1;
// 버튼을 누를 때 마다 추가되는 이벤트 코드를 추가

    button.textContent = '클릭 수: ' + count;
// 화면에는 누른 수 만큼 더해진 값을 합쳐서 보여줌
});
