<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<c:set var="path" value="${pageContext.request.contextPath}"/>

<jsp:include page="/WEB-INF/views/common/header.jsp">
	<jsp:param value="Spring 홈페이지" name="title"/>
</jsp:include>

<section id="content">
	<h3>Home2 개발 완료시킴!!</h3>
	<h3>Home2 2번째 개선중!!!</h3>
	<h3>Home2 2번째 개선중!!!</h3>
	<div>
		<h2>Home2 3번째 개선중. B가 개발중이다. 
								이부분을 다시 B가 개선에 개선함</h2>
	</div>
	
	<h3>Home2 나도 개선중!!!! A가 개발중이다.</h3>
	

</section>

<jsp:include page="/WEB-INF/views/common/footer.jsp"></jsp:include>

