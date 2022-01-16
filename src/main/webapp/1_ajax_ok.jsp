<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	// http://localhost:8080/Day3/1_ajax_ok.jsp?userid=apple&userpw=1111
	String userid= request.getParameter("userid");
	String userpw= request.getParameter("userpw");
	
	out.println(userid);
	out.println(userpw);
	
%>