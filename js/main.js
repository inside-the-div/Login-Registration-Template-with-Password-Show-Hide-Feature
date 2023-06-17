$(document).ready(function () {
   $(".switchSignin").click(function(){
      $(".signin-form").removeClass("display-none");
      $(".signin-form").addClass("display-block");
      $(".signup-form").addClass("display-none");
      $(".switchSignin").addClass("btnActive");
      $(".switchSignup").removeClass("btnActive");
   });
   
   $(".switchSignup").click(function(){
      $(".signup-form").removeClass("display-none");
      $(".signup-form").addClass("display-block");
      $(".signin-form").addClass("display-none");
      $(".switchSignup").addClass("btnActive");
      $(".switchSignin").removeClass("btnActive");
   });


   $("#signinPassIcon").click(function(){
      $("#signinPassIcon i").toggleClass("fa-eye fa-eye-slash");

      $($("#signinPassIcon").siblings()[1]).attr("type", function(index, attr){
         return attr == "password" ? "text" : "password";
      })
   });
   
   $("#signupPassIcon").click(function(){
      $("#signupPassIcon i").toggleClass("fa-eye fa-eye-slash");

      $($("#signupPassIcon").siblings()[1]).attr("type", function(index, attr){
         return attr == "password" ? "text" : "password";
      })
   });
});