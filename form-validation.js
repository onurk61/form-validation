$(function(){

    let registrationForm = $('#registrationForm');

    $.validator.addMethod("noSpace", function(value,element){
        return value == "" || value.trim().length != 0
    }, "Spaces are not Allowed !");

    $.validator.addMethod("onlyLetters", function (value, element) {
        return /^[ a-zA-ZğüşöçıİĞÜŞÖÇ]+$/.test(value);
    }, "Invalid Letter");

    $.validator.addMethod("passwordRule", function (value, element) {
        return /^(?=.*[A-ZİĞÜŞÖÇ])(?=.*[a-zğüşöçı])(?=.*[0-9])(?=.*[!@#$?%^&*()_+,.\/;':"-])(?!.*\s).{8,50}$/.test(value);
    }, "Invalid Password");


    if(registrationForm.length){
        registrationForm.validate({
            errorClass: 'invalid',
            validClass: 'success',
            wrapper: 'div',
            errorElement: 'em',
            rules:{
                userName: {
                    required: true,
                    noSpace: true,
                    onlyLetters: true
                },
                lastName: {
                    required: true,
                    noSpace: true,
                    onlyLetters: true
                },
                email: {
                    required: true,
                    noSpace: true,
                },
                password: {
                    required: true,
                    noSpace: true,
                    passwordRule: true
                },
                cpassword: {
                    required: true,
                    equalTo: '#password',
                    noSpace: true,
                    passwordRule: true
                },
                city: {
                    required: true
                },
                smallText: {
                    required: true,
                    noSpace: true
                },
                gender: {
                    required: true
                },
                colors: {
                    required: true
                }
            },
            messages: {
                userName: {
                    required: 'Please Enter your Name !'
                },
                lastName: {
                    required: 'Please Enter your Last Name !'
                },
                email: {
                    required: 'Please Enter your Email Address'
                },
                password: {
                    required: 'Type your Password'
                },
                cpassword: {
                    required: 'Type your cpassword !',
                    equalTo: 'Your passwords must be equal to each other !'
                },
                city: {
                    required: 'Choose your City !'
                },
                smallText: {
                    required: 'Please write something here...'
                },
                gender: {
                    required: 'Please Select your Gender !'
                },
                colors: {
                    required: 'Select your Best Color !'
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
            }
        });
    }

});