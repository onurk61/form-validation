$(function () {
   let $myForm =  $('#myForm');

   $.validator.addMethod("noSpace", function (value, element){
       return value == "" || value.trim().length != 0
   }, "Spaces are not allowed !");

   if($myForm.length) {
       $myForm.validate({
           errorClass: 'invalid', // hata verdiğindeki class ismi invalid olarak güncelledim. Default "error"
           validClass: 'success', // hata giderildikten sonra "success" class ismini ekledim.
           errorElement: "em", // hata mesajını "<em></em>"" olarak yazdıracak
           wrapper: 'div', // em olarak yazdırılacak mesajın kapsayıcısını li olarak yazdırdım
           rules: {
               userName: {
                   required: true,
                   noSpace: true,
               },
               lastName: {
                   required: true,
                   noSpace: true
               },
               password: {
                   required: true,
                   noSpace: true
               },
               confirmPassword: {
                   required: true,
                   equalTo: '#password',
                   noSpace: true
               },
               email: {
                   required: true,
                   noSpace: true
               },
               city: {
                   required: true
               },
               gender: {
                   required: true
               },
               colors: {
                   required: true
               },
               smallText: {
                   required: true,
                   noSpace: true
               }
           },
           messages: {
               userName: {
                   required: 'Username is mandatory !'
               },
               lastName: {
                   required: 'Last Name is mandatory !'
               },
               password: {
                   required: 'Please enter your password !'
               },
               confirmPassword: {
                   required: 'Your enter confirm password',
                   equalTo: 'Your password must be same !'
               },
               email: {
                   required: 'E-mail is mandatory !'
               },
               city: {
                   required: 'Please choose your city !'
               },
               gender: {
                   required: 'Please select your gender !'
               },
               colors: {
                   required: 'Please choose your best color !'
               },
               smallText: {
                   required: 'You must write something here..'
               }
           },
           errorPlacement: function (error, element) {
               if(element.is(':radio')){
                   error.appendTo(element.parents('.colors'));
               } else if(element.is(':checkbox')){
                   error.appendTo(element.parents('.gender'));
               } else {
                   error.insertAfter(element);
               }
           },
           highlight: function(element, errorClass) {
               $(element).fadeOut(function(){
                   $(element).fadeIn();
               })
          },
       });
   }
});