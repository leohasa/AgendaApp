class Moon {
	constructor(element) {
		this.element = element;
		this.load_moon_phases(this.configMoon, this.example_1);
	}

	configMoon = {
		lang: 'es',
		month: new Date().getMonth() + 1,
		year: new Date().getFullYear(),
		size: 150,
		lightColor: "rgb(255,255,210)",
		shadeColor: "black",
		texturize: false
	};

	example_1(moon){
		const link = `<a xlink:href="https://www.icalendar37.net/lunar/app/" rel="noopener noreferrer" target="_blank">`;

		var day = new Date().getDate()
		var dayWeek=moon.phase[day].dayWeek

		const svg = moon.phase[day].svg.replace(link, '').replace('</a>', '');

		var html = "<div>" +
		"<b>" + moon.nameDay[dayWeek]+ "</b>" +
		"<div>" + day + " <b>" + moon.monthName + "</b> " +
		moon.year + "</div>" +
		"<div shadow>" + svg + "</div>" +
		"<div>" + moon.phase[day].phaseName + " " +
		"" + ((moon.phase[day].isPhaseLimit )? ""  :   Math.round(moon.phase[day].lighting) + "%") +
		"</div>" +
		"</div>"
		document.getElementById("ex1").innerHTML = html
		// console.log(this);
		// this.element.innerHTML = html; /* this is undefined ? */

	}

	load_moon_phases(obj,callback){
		var gets=[]
		for (var i in obj){
			gets.push(i + "=" +encodeURIComponent(obj[i]))
		}
		gets.push("LDZ=" + new Date(obj.year,obj.month-1,1) / 1000)
		var xmlhttp = new XMLHttpRequest()
		var url = "https://www.icalendar37.net/lunar/api/?" + gets.join("&")
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				callback(JSON.parse(xmlhttp.responseText));
			}
		}
		xmlhttp.open("GET", url, true)
		xmlhttp.send()
	}
}
