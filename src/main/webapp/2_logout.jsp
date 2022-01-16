<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
Cookie[] cookies= request.getCookies();
if(cookies != null){
	for(Cookie cookie: cookies){
		if("userid".equals(cookie.getName())){
			Cookie newCookie=new Cookie("userid","");
			newCookie.setMaxAge(0);
			response.addCookie(newCookie);
		}
	}
}
%>
<script>
	alert('로그아웃되었습니다.')
	location.href='2_login.jsp'
</script>