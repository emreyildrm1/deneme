$(document).ready(() => {
    $(".burger").click(function (e) {
        if ($(".inactive:visible").length == 0) {
            $(".inactive").css("display","block")
        } else {
            $(".inactive").hide()
        }
        console.log($(this).width())
    })
})



function openmenu(menuName) {
  var i;
  var x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(menuName).style.display = "block";  
}


