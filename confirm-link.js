/**
 * 확인 메세지 출력 후 이동하는 링크 구현
 * 
 * 오너 : 피카츄
 * 만든 날짜 : 2023/03/10
 */

//목표 : .confirm-link를 누르면 확인창 출력 후 확인 클릭 시 이동(취소 시)
window.addEventListener("load", function(){

    var confirmLinkList = document.querySelectorAll(".confirm-link");
    for(var i = 0; i < confirmLinkList.length; i++){
        confirmLinkList[i].addEventListener("click", function(e){
            //안내메세지 설정
            var text = this.dataset.message || "정말 이동하시겠습니까?"; //자바스크립트에서만 사용 가능.

            /* var text;
            if(!this.dataset.message){
                text = "정말 이동하시겠습니까?";
            }
            else{
                text = this.dataset.message;
            } */ //자바

            var choice = window.confirm("정말 이동하시겠습니까?");
            if(choice == false){
                e.preventDefault();
            }
        });
    }
});
