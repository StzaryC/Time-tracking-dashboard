/* 
<span id="daily">Daily</span> 
<span id="weekly">Weekly</span> 
<span id="monthly">Monthly</span>
*/

fetch('data.json')
    .then(response => response.json())
    .then(data => {
    console.log(data)

    function dailyData(){
        data.forEach(element => {
            card = document.createElement =
            
            `

              <div class="bg_card_icon ${element.title}" id="work">
                  <img src="images/icon-${element.title}.svg" alt="">
                  <div class="card_do">
                      <div class="card_do__options">
                      <span class="title">${element.title}</span>
                      <img src="images/icon-ellipsis.svg" alt="">
                  </div>
                      <div class="card_do__hrs-frecuency">
                          <h1 class="current_hrs">${element.timeframes.daily.current}hr</h1>
                          <span class="last_record">Last-Week - ${element.timeframes.daily.previous}hrs</span>
                      </div>
                  </div>
              </div>
            
            `
            document.querySelector("MAIN").innerHTML+=  card
            
        });
    }

    function weeklyData(){
        data.forEach(element => {
            let card = document.createElement = 
            `
              <div class="bg_card_icon ${element.title}" id="work">
                  <img src="images/icon-${element.title}.svg" alt="">
                  <div class="card_do">
                      <div class="card_do__options">
                      <span class="title">${element.title}</span>
                      <img src="images/icon-ellipsis.svg" alt="">
                  </div>
                      <div class="card_do__hrs-frecuency">
                          <h1 class="current_hrs">${element.timeframes.weekly.current}hr</h1>
                          <span class="last_record">Last-Week - ${element.timeframes.weekly.previous}hrs</span>
                      </div>
                  </div>
              </div>
            
            `
            document.querySelector("MAIN").innerHTML += card            
        });
    }

      function monthlyData(){
        data.forEach(element => {
            let card = document.createElement = 
            `
              <div class="bg_card_icon ${element.title}">
                  <img src="images/icon-${element.title}.svg" alt="">
                  <div class="card_do">
                      <div class="card_do__options">
                      <span class="title">${element.title}</span>
                      <img src="images/icon-ellipsis.svg" alt="">
                  </div>
                      <div class="card_do__hrs-frecuency">
                          <h1 class="current_hrs">${element.timeframes.monthly.current}hr</h1>
                          <span class="last_record">Last-Week - ${element.timeframes.monthly.previous}hrs</span>
                      </div>
                  </div>
              </div>
            
            `
            document.querySelector("MAIN").innerHTML+= card
            
        });
      }

    document.addEventListener("click", (e)=>{

        if (e.target.id==="daily") {
            document.querySelectorAll(".bg_card_icon").forEach(element => {
                element.style.display="none"
            });
            alert("daily")
            dailyData()
            
            let btnDaily = document.getElementById("daily")
            let btnWeekly = document.getElementById("weekly")
            let btnMonthly = document.getElementById("monthly")
            
            btnDaily.classList.add("active")
            btnWeekly.classList.remove("active")
            btnMonthly.classList.remove("active")
        };

        if (e.target.id==="weekly") {
            document.querySelectorAll(".bg_card_icon").forEach(element => {
                element.style.display="none"
            });
            alert("weekly")
            weeklyData()
            
            let btnDaily = document.getElementById("daily")
            let btnWeekly = document.getElementById("weekly")
            let btnMonthly = document.getElementById("monthly")
            
            btnDaily.classList.remove("active")
            btnWeekly.classList.add("active")
            btnMonthly.classList.remove("active")
        };
        
        if (e.target.id==="monthly") {
            document.querySelectorAll(".bg_card_icon").forEach(element => {
                element.style.display="none"
            });
            alert("monthly")
            monthlyData()
            
            let btnDaily = document.getElementById("daily")
            let btnWeekly = document.getElementById("weekly")
            let btnMonthly = document.getElementById("monthly")
            
            btnDaily.classList.remove("active")
            btnWeekly.classList.remove("active")
            btnMonthly.classList.add("active")
        };  
        
    });

    
      


  });

  let btnDaily = document.getElementById("daily")
  let btnWeekly = document.getElementById("weekly")
  let btnMonthly = document.getElementById("monthly")

  

  


{/* <div class="bg_card_icon Work" id="work">
    <img src="images/icon-work.svg" alt="">
    <div class="card_do">
        <div class="card_do__options">
          <span class="title">Work</span>
          <img src="images/icon-ellipsis.svg" alt="">
        </div>
        <div class="card_do__hrs-frecuency">
          <h1 class="current_hrs">32hr</h1>
          <span class="last_record">Last-Week - 36hrs</span>
        </div>
    </div>
</div> */}

