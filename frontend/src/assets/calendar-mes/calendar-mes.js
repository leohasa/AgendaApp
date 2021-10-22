function load_moon_phases(obj,callback){
    var gets=[]
    for (var i in obj){
        gets.push(i + "=" +encodeURIComponent(obj[i]))
    }
    gets.push("LDZ=" + new Date(obj.year,obj.month-1,1) / 1000)
    var xmlhttp = new XMLHttpRequest()
    var url = "https://www.icalendar37.net/lunar/api/?" + gets.join("&")
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            callback(JSON.parse(xmlhttp.responseText))
        }
    }
    xmlhttp.open("GET", url, true)
    xmlhttp.send()
}
function load_moon_phases(obj,callback){
    var gets=[]
    for (var i in obj){
        gets.push(i + "=" +encodeURIComponent(obj[i]))
    }
    gets.push("LDZ=" + new Date(obj.year,obj.month-1,1) / 1000)
    var xmlhttp = new XMLHttpRequest()
    var url = "https://www.icalendar37.net/lunar/api/?" + gets.join("&")
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            callback(JSON.parse(xmlhttp.responseText))
        }
    }
    xmlhttp.open("GET", url, true)
    xmlhttp.send()
}
function example_3(moon){
    var lunar_day , i , inc = 0
    var containsCalendar =  document.getElementById("ex3")
    const first_day_week_sunday = false // canvia el valor d'aquesta constant a true perquè el primer dia de la setmana sigui Diumenge
    if (first_day_week_sunday) {
        inc = 1
        moon.nameDay.unshift(moon.nameDay.pop())
    }
    var empty_initial_boxes = Number(moon.phase[1].dayWeek) + inc
    var number_days_month = Number(moon.daysMonth)
    var total_boxes = Math.ceil((empty_initial_boxes + number_days_month) /7) * 7
    var html ='<div>' +
        '<button value="-1" class="buttonCalendar">\u276E</button>'  +
        '<div class="titleCalendar">' + moon.monthName + " "+ moon.year + '</div>' +
        '<button value="1" class="buttonCalendar">\u276F</button>' +
        '</div>'
    for (i=0; i<7; i++){
        html += '<div class="name_day">' + moon.nameDay[i] + '</div>'
    }
    containsCalendar.innerHTML = html
    for (i=0; i < total_boxes; i++){
        var day = i - empty_initial_boxes
        var box = document.createElement("DIV")
        box.className="day_box"
         if (day>=0 && day < number_days_month){
            lunar_day = day + 1
            if (moon.year ==  (new Date).getFullYear() && moon.month == (new Date).getMonth()+1 && lunar_day == (new Date).getDate()) box.id="isToDay"
            box.innerHTML = '<div>' +
             '<span>' + lunar_day + '</span>' +
             '<div>' +moon.phase[lunar_day].svg +'</div>' +
             '</div>'
            if (moon.phase[lunar_day].isPhaseLimit){
                var url="data:image/svg+xml;utf8, " + moon.phase[lunar_day].svgMini
                box.firstChild.style.backgroundImage ='url("' + url +'")'
                box.title= moon.phase[lunar_day].phaseName
            }
         }
        containsCalendar.appendChild(box)
    }

    document.querySelectorAll(".buttonCalendar").forEach(function(button){
        button.onclick = function(){
            var date_to_show = new Date(moon.year,moon.month + Number(this.getAttribute("value")-1),1)
            var configMoon = moon.receivedVariables
            configMoon.month = date_to_show.getMonth()+1
            configMoon.year = date_to_show.getFullYear()
            load_moon_phases(configMoon,example_3)
            this.style.visibility= "hidden"
        }
    })
}
var configMoon = {
    lang  		:'en',
    month 		:new Date().getMonth() + 1,
    year  		:new Date().getFullYear(),
    size		:"100%",
    lightColor	:"white",
    shadeColor	:"black",
    texturize	:true,
}
load_moon_phases(configMoon,example_3)
