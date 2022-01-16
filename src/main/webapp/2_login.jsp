<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head> 
<meta charset="UTF-8">
<title>로그인</title>
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="./js/login.js"></script>
</head>
<body>

	<p>로그인</p>
		<p id="login_input">아이디: <input type="text" name="userid" id="userid">
		비밀번호: <input type="password" name="userpw" id="userpw">
		<input type="button" id="loginBtn" value="로그인"></p>
		<p id="login_join">아직 회원이 아니신가요? <a href='./2_member.jsp'>회원가입</a></p>

<h3 id="welcome"></h3>
<p id="logout" onclick="location.href='2_logout.jsp'"></p>

</body>
</html>