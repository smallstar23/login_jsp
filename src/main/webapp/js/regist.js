
function sendit(){
    // 
    const userid=document.getElementById('userid');
    const userpw=document.getElementById('userpw');
    const userpw_re=document.getElementById('userpw_re');
    const name=document.getElementById('name');
    const hp=document.getElementById('hp');
    const email=document.getElementById('email');
    const hobby=document.getElementsByName('hobby'); // 배열로 받음
    const ssn1=document.getElementById('ssn1')
    const ssn2=document.getElementById('ssn2')
    const isssn= document.getElementById('isssn')

    // 정규식     
    // +: 여러글자여도 상관없다 $: 끝낸다  ^:이걸로 시작하세요  \d: 십진수
    // {num}: num 만큼 넣을수있다
    const expNameText= /[가-힣]+$/ 
    const expHpText= /^\d{3}-\d{3,4}-\d{4}$/
    const expEmailText=/^[A-Za-z0-9\-\.]+@[A-Za-z0-9\-\.]+\.[A-Za-z0-9]+$/; 
    const expNum=/[0-9]+$/

    //아이디에 값을 입력하지 않았을 경우 alert 소환

    if(userid.value==''){
        alert('아이디를 입력하세요');
        userid.focus();
        return false;
    }

    if(userid.value.length < 4 || userid.value.length>20){
        alert('아이디는 4자 이상 20자 이하로 입력하세요')
        userid.focus();
        return false;
    }


    // 비밀번호 값 확인
    if(userpw.value==''){
        alert('비밀번호를 입력하세요');
        userpw.focus();
        return false;
    }

    if(userpw.value.length < 4 || userpw.value.length>20){
        alert('아이디는 4자 이상 20자 이하로 입력하세요')
        userpw.focus();
        return false;
    }

    //비밀번호 확인 값이 다를경우

    if(userpw.value != userpw_re.value){
        alert('비밀번호와 비밀번호 확인의 값이 다릅니다.')
        userpw.focus();
        return false;
    }

    // 정규표현식으로 이름값 확인
    if(!expNameText.test(name.value)){
        alert('이름의 형식을 확인하세요. \n한글만 입력이 가능합니다.')
        name.focus();
        return false;
    }

    // 전화번호 확인
    if(!expHpText.test(hp.value)){
        alert('휴대폰 번호 형식을 확인하세요. \n하이픈(-)을 포함해야합니다. ')
        hp.focus();
        return false;
    }

    // 이메일 확인
    if(!expEmailText.test(email.value)){
        alert('이메일의 형식을 확인하세요.')
        email.focus();
        return false;
    }

    // 취미는 적어도 1개이상 선택하게 만듬
    let count=0;
    for(let i in hobby){
        if(hobby[i].checked){
            count++
        }
    }
    if(count==0){
        alert('취미는 1개 이상 선택하세요');
        return false;
    }

    //주민등록번호 검사버튼을 눌렀을 경우에만 넘어가게 함

    if(isssn.value=='n'){
        alert("주민등록번호 검증버튼을 눌러주세요")
    }




    return true;
}

// 주민등록번호 포커스무브

function moveFocus(){
    const ssn1= document.getElementById('ssn1');
    if(ssn1.value.length>= 6){
        document.getElementById('ssn2').focus();
    }
}

// 주민등록번호 유효성 검사

function ssnCheck(){
    const ssn1 = document.getElementById('ssn1');
    const ssn2 = document.getElementById('ssn2');
    const isssn= document.getElementById('isssn')

    if(ssn1.value == '' || ssn2.value == ''){
        alert('주민등록번호를 입력하세요');
        return false;
    }

    const ssn = ssn1.value + ssn2.value;    // 0010113068518
    const s1 = Number(ssn.substr(0, 1)) * 2;
    const s2 = Number(ssn.substr(1, 1)) * 3;
    const s3 = Number(ssn.substr(2, 1)) * 4;
    const s4 = Number(ssn.substr(3, 1)) * 5;
    const s5 = Number(ssn.substr(4, 1)) * 6;
    const s6 = Number(ssn.substr(5, 1)) * 7;
    const s7 = Number(ssn.substr(6, 1)) * 8;
    const s8 = Number(ssn.substr(7, 1)) * 9;
    const s9 = Number(ssn.substr(8, 1)) * 2;
    const s10 = Number(ssn.substr(9, 1)) * 3;
    const s11 = Number(ssn.substr(10, 1)) * 4;
    const s12 = Number(ssn.substr(11, 1)) * 5;
    const s13 = Number(ssn.substr(12, 1));


    let result = s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12;
    result = result % 11;
    result = 11 - result;
    if(result >= 10) result = result % 10;

    if(result == s13){
        alert('유효한 주민등록번호입니다');
        isssn.value='y';

    }else{
        alert('유효하지 않은 주민등록번호입니다');
    }
}

function ssnChange(){
    const isssn= document.getElementById('isssn')
    isssn.value='n';

}

$(function(){
	$('#btnIdCheck').on('click', function(){
		if($('#userid').val() == ''){
			alert('아이디를 입력하세요.')
			$('userid').focus();
			return false;
		}
		
		const xhr= new XMLHttpRequest();
		const userid= $('#userid').val();
		xhr.open('GET','2_idcheck.jsp?userid='+userid, true);
		xhr.send();
		
		xhr.onreadystatechange = function(){
			if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
				const result = xhr.responseText;
				if(result.trim()=="ok"){
					$('#idcheckmsg').html("<b style='color:blue'>사용할 수 있는 아이디입니다.</b>");
				}else{
					$('#idcheckmsg').html("<b style='color:red'>사용할 수 없는 아이디입니다.</b>");
				}
			}
		}
	})
	
		$("#userid").on("keyup", function(){
		$("#isidcheck").val("n");
		$("#idcheckmsg").html("");
	});
	
})


