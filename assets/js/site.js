	
	function validateEmail(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(String(email).toLowerCase());
	}
	
	function onSuccess(result) {
	    $("#question").hide()
	    $("#answer").show()
	    $("#a_firstName").html(result.firstName)
	    $("#a_email").html(result.email)
	    setTimeout(
	  function()
	  {
	    $(location).attr('href',"https://kodekonveyor.com/");
	  }, 3000);
	}
	
	function onError(xhr,status,error) {
		alert("An error occured: " + xhr.status + " " + xhr.statusText);
	}
	function submit() {
	  firstName = $("#firstName").val();
	  email = $("#email").val();
	  interest = $("#interest").val();
	  if(!validateEmail(email)) {
	  	alert("Please give us an email address!");
	    return;
	  }
	  if(firstName.length < 1) {
	  	alert("Please give your first name!");
	    return
	  }
	  $.ajax({
	  	url: "/market/lead",
	    type: "POST",
	    data: {"email": email,"firstName": firstName, "interest": interest},
	    success: onSuccess,
	    error: onError
	  });
	}
	
	
	function login() {
		current = window.location.pathname
		window.location.assign("/market/member/login?next="+current)
	}

	function showLogin_onSuccess(result) {
	    $("#login").html("Hello, "+result.login)
	    $("#login").attr("href","#")
	}
	
	function showlogin_onError(xhr,status,error) {
		if(xhr.status == 401) 
			return
		else
	        	alert("An error occured: " + xhr.status + " " + xhr.statusText);
	}
	function showLoginName() {
	  $.ajax({
	        url: "/market/member/user",
	    type: "GET",
	    success: showLogin_onSuccess,
	    error: showlogin_onError
	  });
	}
	
	$( document ).ready(showLoginName);

function listitems_onSuccess(result) {
    $("#table").empty()
    $("#table").append($("<tr><td>First Name</td><td>email</td><td>interest</td></tr>"))
    for(i in result) {
        console.log(result[i].firstName)

        $("#table").append($(
            "<tr><td>"+
            result[i].firstName+
            "</td><td>"+
            result[i].email+
            "</td><td>"+
            result[i].interest+
            "</td></tr>"))
    }
}

function listitems_onError(xhr,status,error) {
       alert("An error occured: " + xhr.status + " " + xhr.statusText);
}
function listItems() {
  $.ajax({
       url: "/market/member/lead",
    type: "GET",
    success: listitems_onSuccess,
    error: listitems_onError
  });
}

