
var myElement = document.getElementById("my_name_id");
// myElement.addEventListener('mouseover', main_render());

myElement.addEventListener("mouseover", renderer(), {once:true});
// let test = document.getElementById("#main_img");

// test.addEventListener("mouseover", main(), true);


function renderer(){

// chart options

const options = {
          series: [75, 95, 85, 95, 90, 70],
          chart: {
          height: 400,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '22px',
              },
              value: {
                fontSize: '16px',
              },
              total: {
                show: false,
                label: 'Total',
                formatter: function (w) {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return 249
                }
              }
            },
            track:{
                background: "#000000"
            }
          }
        },
        labels: ['French', 'English', 'c++', 'Python', 'Matlab', 'VIM'],
        };

// init chart
const chart = new ApexCharts(document.querySelector('#chart'), options);

// Render chart
chart.render();


};



/*
  change on time 
*/

let the_list = [
  {level_school: 'High School', name_school:'TecMilenio Campus Merida'},
  {level_school: 'Undergraduate', name_school: 'Tecnologico de Moneterrey Campus Ciudad de México'}
]
let state = 0;
let level_option;
let name_option;

const ls = document.getElementById("level_school");
const ns = document.getElementById("name_school");


  
  const myTimeout = setInterval(myGreating, 4000);

  function myGreating() {
    if(state == 0){
      state = 1;
      level_option = the_list[0].level_school;
      name_option = the_list[0].name_school;
    } else{ 
      state = 0;
      level_option = the_list[1].level_school;
      name_option = the_list[1].name_school;
    }
    
    ls.innerHTML = level_option;
    ns.innerHTML = name_option;
    ns.style.animation = 'fadeInAnimation ease 4s infinite forwards';
    ls.style.animation = 'fadeInAnimation ease 4s infinite forwards';
    
  }


