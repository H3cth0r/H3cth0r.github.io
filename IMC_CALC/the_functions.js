

var weight;
var height;
var result;



function next_button(){
    weight = $("#input_weight_data").val();
    console.log(weight);
    $("#div_weight").css("display", "none");
    $("#div_height").css("display", "block");
}

function calculate_button(){
    height = $("#input_height_data").val();
    console.log(height);
    result = weight/height;
    $("#div_height").css("display", "none");
    $('#div_restart').css("display", "block");
    $("#div_result").css("display", "block");
    $("#main_title").text(result.toFixed(2));
    console.log(result);
}

function try_again_button(){
    location.reload();
}