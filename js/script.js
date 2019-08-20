$(document).ready(function() {
	
	var day=['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'],
	   month=['January','February','March','April','May','June','July','August','September','October','Novermber','December'];
   SetData();
   function SetData() {
	   var now = new Date();
	   $('#date').html(day[now.getDay()]+', ');
	   $('#date').append(' '+month[now.getMonth()]+' ');
	   $('#date').append(now.getDate()+', ');
	   $('#date').append(now.getFullYear()+' ');
	   hour=now.getHours();
	   minutes=now.getMinutes();
	   if (minutes<10) {minutes='0'+minutes};
	   $('#date').append(hour+':'+minutes);
	}
  	setInterval(SetData,60);
});
