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
        localStorage.setItem("token", res.token);
        localStorage.setItem("id", res.id);
        window.location.href = "/dashboard";
      })
      .fail(res => {
        console.log(res);
      });
  });
});
