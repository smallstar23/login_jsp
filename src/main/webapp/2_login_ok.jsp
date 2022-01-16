<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="java.sql.*"%>
<%
	String userid=request.getParameter("userid");
	String userpw=request.getParameter("userpw");
	Connection conn= null;
	PreparedStatement pstmt = null;
	ResultSet rs=null;
	
	   String sql = "";
	   String url = "jdbc:mysql://localhost:3306/aiclass";
	   String uid = "root";
	   String upw = "1234";
	
	try{
	Class.forName("com.mysql.cj.jdbc.Driver");
    conn = DriverManager.getConnection(url, uid, upw);
	if(conn != null){
		sql="select mem_idx from tb_member where mem_userid=? and mem_userpw=?";
		pstmt= conn.prepareStatement(sql);
		pstmt.setString(1, userid);
		pstmt.setString(2, userpw);
		rs= pstmt.executeQuery();
		
		if(rs.next()){
			out.println("yes"); 
			Cookie cookie= new Cookie("userid", userid);
			cookie.setMaxAge(60*20);
			response.addCookie(cookie);
		}else{
			out.println("no");
		}

				
	}
    
	}catch(Exception e){
		e.printStackTrace();
	}
	
%>