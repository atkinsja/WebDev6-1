$(document).ready(function() {

    var imageArray = new Array(); //create new array to preload images 
    var numImages = 2;
    var imageCounter = 0;


    for (var i = 0; i < numImages; i++) {
        imageArray[i] = new Image(); //set image src property to image path,preloading image in the process
        imageArray[i].src = "images/brightIdea" + (i + 1) + ".png";
    }


    //if browser does not support the image object, exit.
    if (!document.images)
        return;

    setInterval(function() {

        $("#blinking_image").attr('src', imageArray[imageCounter++].src);

        if (imageCounter == numImages)
            imageCounter = 0;

    }, 700); //end setInterval



}); //end $(document).ready

$(document).ready(function() {
    $("._submit").click(function() {

       //variable holding regular expression
        var notInName = /[\d!@#\$%\^&\*\(\)_\+={}\|\ :;”<>\?,\.\/~\[\]]/;
        
        /* test if  class reqd is blank or has incorrect chars in it; 
        return false if this is the case */
        
        
        var $isNameValid = $(".reqd").val();
        if (notInName.test($isNameValid)||/^$/.test($isNameValid))
        {
            alert("Invalid last name");
            return false;
        }
        else
            alert("Valid last name");


        var notInEmail = /^$/;
        var $isEmailValid = $(".email").val();
        if (notInEmail.test($isEmailValid))
        {
            alert("Invalid Email");
            return false;
        }



        /*  test  boolean var  isEmailValid here
        if false return false, else submit form, reset and return to index.hrml */

      

    }); //end click
}); //end ready

/***********************************************************************************/

$(document).ready(function() {
    $("._reset").click(function() {
        
        /* your code to reset the form */
        $("form").resetForm();

    });
});