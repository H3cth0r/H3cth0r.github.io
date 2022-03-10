

var weight;
var height;
var result;
var selection;
var the_color;

const phrases = ["Not quite great.",
                 "You doing fine.",
                 "Lets go running.",
                 "Please stop!"];

function next_button(){
    weight = $("#input_weight_data").val();
    console.log(weight);
    $("#div_weight").css("display", "none");
    $("#div_height").css("display", "block");
    $("#div_height").css("animation", "fadeInAnimation ease 3s");
}

function calculate_button(){
    height = $("#input_height_data").val();
    console.log(height);
    result = weight/(height*height);
    $("#div_height").css("display", "none");
    $('#div_restart').css("display", "block");
    $("#div_restart").css("animation", "fadeInAnimation ease 3s")
    $("#div_result").css("display", "block");
    $("#div_result").css("animation", "fadeInAnimation ease 3s");
    
    switch(true){
        case (result<=18):
            selection = phrases[0];
            the_color = '#d85145';
        break;
        case (result > 18 && result <= 25):
            selection = phrases[1];
            the_color = '#1aa260';
        break;
        case (result > 25 && result <= 30):
            selection = phrases[2];
            the_color = '#ffce42'
        break;
        case (result > 30 && result <= 40):
            selection = phrases[3];
            the_color = '#d85145';
        break;
        case (result > 40):
            selection = phrases[3];
            the_color = '#d85145';
        break;
    }

    $("#div_result_text").text(selection).css("color", the_color);
    $("#div_result_number").text("IMC= " + result.toFixed(2));
    console.log(selection);
    console.log(result);
}

function try_again_button(){
    location.reload();
}