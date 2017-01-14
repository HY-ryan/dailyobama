$(document).ready(function(){
    var imgSrcA = "<img src='media/";
    var imgSrcB = "'>";
    var imgNumber = 0;
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();

    day--;

    $("#nextImage").hide();

    $("#daily").html(imgSrcA + djangoArr[day] + imgSrcB);

    $('#nextImage').click(function() {
        if (imgNumber < djangoArr.length - 1){
            imgNumber++;
            $("#daily").html(imgSrcA + djangoArr[imgNumber] + imgSrcB);
        }

    });

    $('#previousImage').click(function() {
        if (day > 0) {
            day--;
            $("#daily").html(imgSrcA + djangoArr[day] + imgSrcB);
        }
    });

      

});