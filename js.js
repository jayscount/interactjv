$(document).ready(function(){
    $(".core").click(function(){
        $(this).draggable();
    });
});


$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#flip1").click(function(){
        $("#panel1").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#flip2").click(function(){
        $("#panel2").slideToggle("slow");
    });
});

 $(document).ready(function(){
    $('[data-toggle="popover"]').popover({
		placement : 'top',
        trigger: 'hover'
    });
});


function mOver(obj) {
    obj.innerHTML = "Thank You"
}

function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
}
