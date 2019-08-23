$(document).ready(() => {
  $("#submit").click(() => {
    user = $("#username").val();
    pass = $("#password").val();
    //console.log(user);
    $.ajax({
      method: "POST",
      data: { username: user, password: pass },
      url: "/login",
      dataType: "json"
    })
      .done(res => {
        console.log(res);
        //var page = $.parseHTML(res);
        //console.log(page);
        //console.log("hello");
      })
      .fail(res => {
        console.log(res);
      });
  });
});
