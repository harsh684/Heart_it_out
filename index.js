var count1 = 0;
var count2=0;
var count3=0;
function click1(){
    count1 += 1;

  if(count1%2 !=0){
    let parentdiv=document.getElementById("clickme1");
    let tutorial = document.createElement('div');
    tutorial.setAttribute('id','my-id');
    tutorial.classList.add('row', 'justify-content-center', 'pb-5', 'mb-3','mt-5');
    tutorial.style.backgroundColor="#eef9ff";
    tutorial.innerHTML=` <div class="row">
    <div class="col-lg col-sm-12 my-3 mx-auto" style="max-width: 17rem;">
        <p class="mx-auto my-5 text-center">Lorem, ipsum.</p>
        <div class="card border-success">
            <div class="card-body text-success">
              <h5 class="card-title text-center ">Lorem, ipsum.</h5>
              <p class="card-text text-center ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ratione, ipsa saepe quas necessitatibus ad!</p>
            </div>
            <div style="background-color: #027bbc;" class="card-footer text-white text-center border-success">Click</div>
          </div>
    </div> 
    
    <div class="col-lg my-3 mx-auto" style="max-width: 17rem;">
    <p class="mx-auto my-5 text-center">Lorem, ipsum.</p>
        <div class="card border-success">
            <div class="card-body text-success">
              <h5 class="card-title text-center ">Lorem, ipsum.</h5>
              <p class="card-text text-center ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ratione, ipsa saepe quas necessitatibus ad!</p>
            </div>
            <div style="background-color: #01818C;" class="card-footer text-white text-center border-success">Click</div>
          </div>
    </div>
   
    <div class="col-lg my-3 mx-auto" style="max-width: 17rem;">
    <p class="mx-auto my-5 text-center">Lorem, ipsum.</p>
        <div class="card border-success">
            <div class="card-body text-success">
              <h5 class="card-title text-center ">Lorem, ipsum.</h5>
              <p class="card-text text-center ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ratione, ipsa saepe quas necessitatibus ad!</p>
            </div>
            <div style="background-color: #8d6b59;" class="card-footer text-white text-center border-success">Click</div>
          </div>
    </div>
  </div>`;
    parentdiv.appendChild(tutorial);
  }else{
    document.getElementById('my-id').remove();
  }
}

function click2(){
    count2 += 1;

  if(count2%2 !=0){
    let parentdiv=document.getElementById("clickme2");
    let tutorial = document.createElement('div');
    tutorial.setAttribute('id','my-id2');
    tutorial.classList.add('row', 'justify-content-center', 'pb-5', 'mb-3','mt-5');
    tutorial.style.backgroundColor="#eef9ff";
    tutorial.innerHTML=`<div class="row">
    <div class="col-lg col-sm-12 my-3 mx-auto" style="max-width: 17rem;">
        <p class="mx-auto my-5 text-center">Lorem, ipsum.</p>
        <div class="card border-success">
            <div class="card-body text-success">
              <h5 class="card-title text-center ">Lorem, ipsum.</h5>
              <p class="card-text text-center ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ratione, ipsa saepe quas necessitatibus ad!</p>
            </div>
            <div style="background-color: #027bbc;" class="card-footer text-white text-center border-success">Click</div>
          </div>
    </div> 
    
    <div class="col-lg my-3 mx-auto" style="max-width: 17rem;">
    <p class="mx-auto my-5 text-center">Lorem, ipsum.</p>
        <div class="card border-success">
            <div class="card-body text-success">
              <h5 class="card-title text-center ">Lorem, ipsum.</h5>
              <p class="card-text text-center ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ratione, ipsa saepe quas necessitatibus ad!</p>
            </div>
            <div style="background-color: #01818C;" class="card-footer text-white text-center border-success">Click</div>
          </div>
    </div>
   
    <div class="col-lg my-3 mx-auto" style="max-width: 17rem;">
    <p class="mx-auto my-5 text-center">Lorem, ipsum.</p>
        <div class="card border-success">
            <div class="card-body text-success">
              <h5 class="card-title text-center ">Lorem, ipsum.</h5>
              <p class="card-text text-center ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ratione, ipsa saepe quas necessitatibus ad!</p>
            </div>
            <div style="background-color: #8d6b59;" class="card-footer text-white text-center border-success">Click</div>
          </div>
    </div>
  </div>`;
    parentdiv.appendChild(tutorial);
  }else{
    document.getElementById('my-id2').remove();
  }
}

function click3(){
    count3 += 1;

  if(count3%2 !=0){
    let parentdiv=document.getElementById("clickme3");
    let tutorial = document.createElement('div');
    tutorial.setAttribute('id','my-id3');
    tutorial.classList.add('row', 'justify-content-center', 'pb-5', 'mb-3','mt-5');
    tutorial.style.backgroundColor="#eef9ff";
    tutorial.innerHTML=`<div class="row">
    <div class="col-lg col-sm-12 my-3 mx-auto" style="max-width: 17rem;">
        <p class="mx-auto my-5 text-center">Lorem, ipsum.</p>
        <div class="card border-success">
            <div class="card-body text-success">
              <h5 class="card-title text-center ">Lorem, ipsum.</h5>
              <p class="card-text text-center ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ratione, ipsa saepe quas necessitatibus ad!</p>
            </div>
            <div style="background-color: #027bbc;" class="card-footer text-white text-center border-success">Click</div>
          </div>
    </div> 
    
    <div class="col-lg my-3 mx-auto" style="max-width: 17rem;">
    <p class="mx-auto my-5 text-center">Lorem, ipsum.</p>
        <div class="card border-success">
            <div class="card-body text-success">
              <h5 class="card-title text-center ">Lorem, ipsum.</h5>
              <p class="card-text text-center ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ratione, ipsa saepe quas necessitatibus ad!</p>
            </div>
            <div style="background-color: #01818C;" class="card-footer text-white text-center border-success">Click</div>
          </div>
    </div>
   
    <div class="col-lg my-3 mx-auto" style="max-width: 17rem;">
    <p class="mx-auto my-5 text-center">Lorem, ipsum.</p>
        <div class="card border-success">
            <div class="card-body text-success">
              <h5 class="card-title text-center ">Lorem, ipsum.</h5>
              <p class="card-text text-center ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ratione, ipsa saepe quas necessitatibus ad!</p>
            </div>
            <div style="background-color: #8d6b59;" class="card-footer text-white text-center border-success">Click</div>
          </div>
    </div>
  </div>`;
    parentdiv.appendChild(tutorial);
  }else{
    document.getElementById('my-id3').remove();
  }
}
$(document).ready(function() {
    var owl = $("#owl-demo").owlCarousel({
        nav: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 1, 
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false,
        loop: true,
    });

    $(".owl-carousel").append('<img src="./images/pre.png" class="custom-nav left" alt="Previous">');
    $(".owl-carousel").append('<img src="./images/next.png" class="custom-nav right" alt="Next">');
    $(".custom-nav.left").click(function() {
        $("#owl-demo").trigger("prev.owl.carousel");
    });

    $(".custom-nav.right").click(function() {
        $("#owl-demo").trigger("next.owl.carousel");
    });
   
});