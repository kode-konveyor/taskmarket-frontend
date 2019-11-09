
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
  	url: "https://market.kodekonveyor.com/market/lead",
    type: "POST",
    data: {"email": email,"firstName": firstName, "interest": interest},
    success: onSuccess,
    error: onError
  });
}
