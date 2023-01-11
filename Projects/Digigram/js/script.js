//==========owl-carousel===============
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

//==========navigation-toggle-button=============//
 $(".toggle").click(function(){
  $("ul").slideToggle();

});

//=======form-validation=======================
function validation(){
    var user = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    if(user == ""){
        document.getElementById("username").innerHTML = "pless file out of this field";
        return false;
    }

    if((user .length <= 3) || (user.length > 15)){
        document.getElementById("username").innerHTML = "user length must be between 3 and 15";
        return false;
    }

    if(!isNaN(user)){
        document.getElementById("username").innerHTML = "only characters";
        return false;
    }

    if(email == ""){
        document.getElementById("emailbox").innerHTML = "pless file out of this field";
        return false;
    }

    if(email .indexOf('@')  <= 0){
        document.getElementById("emailbox").innerHTML = "@ invalid position";
        return false;
    }

    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        document.getElementById("emailbox").innerHTML = ". invalid position";
        return false;
    }

    if(message == ""){
        document.getElementById("textarea").innerHTML = "pless file out of this field";
        return false;
    }
}