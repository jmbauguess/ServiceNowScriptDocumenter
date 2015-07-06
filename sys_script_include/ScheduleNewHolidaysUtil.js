/**
 * ScheduleNewHolidaysUtil
 * @namespace
 * @description This contains the method needed to insert new or update holiday records
 * @type {Class}
 */
var ScheduleNewHolidaysUtil = Class.create();
ScheduleNewHolidaysUtil.prototype = {
	/*
	 * @description Sets the days for the holiday
 	* @param earliest The earliest day on which a holiday can occur
 	* @param month    The month in which the holiday will occur
 	* @param weekday  The day of the week in which the holiday will occur
 	* @param holiday  The name of the holiday that will be occuring
 	* @param start_time The time in which the holiday begins for the company
 	* @param end_time  The time in which the holiday will end for the company
 	* @param includeBefore Value to determine whether you want your holiday to include the day before (Current standards say that business closes at 2pm the day before a given holiday, and re-opens the next day at midnight)
 	*/
	setDays: function(earliest, month, weekday, holiday, start_time, end_time, includeBefore) {
		var thisDate = new Date();
		var monthDate = new Date();  //create a second date object
		monthDate.setDate(earliest); //Set the day that it starts at to the earliest day in which the holiday can occur
		//Starting from the earliest possible day, see if the day of the month is on the specified day of the week
		for (var i = earliest; i < (earliest + 7); i++){
			monthDate.setFullYear(thisDate.getFullYear());
			monthDate.setMonth(month);
			if(monthDate.getDay() === weekday) {
				break;
			}
			monthDate.setDate(i + 1);
		}
		//Look for all of the schedule entries with this holiday as the name
		var gr = new GlideRecord('cmn_schedule_span');
		gr.addQuery('name',holiday);
		gr.query();
		while (gr.next()) {
			var moddedMonthNum = monthDate.getMonth() + 1;
			var moddedDateNum = monthDate.getDate();
			var endMonthNum = monthDate.getMonth() + 1;
			var endDateNum = monthDate.getDate();
			if(includeBefore){
				moddedDateNum-=1;
				//If it's zero, the day would really be the last day of the previous month
				//So We'll see which month we're dealing with, and set the date object accordingly
				if (moddedDateNum == 0) {
					moddedMonthNum-=1;					
					if (moddedMonthNum == 0) {
						moddedMonthNum=12;
						monthDate.setFullYear(monthDate.getFullYear()-1);
					}
					if (moddedMonthNum == 1|| moddedMonthNum == 3 || moddedMonthNum == 5|| moddedMonthNum == 7 ||
						moddedMonthNum == 8|| moddedMonthNum == 10 || moddedMonthNum == 12) {
						moddedDateNum = 31;
					} else if (moddedMonthNum == 4 || moddedMonthNum == 6 || moddedMonthNum == 9 || moddedMonthNum == 11) {
						moddedDateNum = 30;
					} else if (moddedMonthNum == 2) {
						//Check whether or not it's a leap year
						if (((monthDate.getFullYear()/ 4) % 1) === 0) {
							moddedDateNum = 29;
						} else {
							moddedDateNum = 28;
						}
					}
				}
			}
			//These 4 if's check to see whether the values need to be preceeded with a 0
			if (moddedMonthNum < 10) {
				moddedMonthNum = "0" + moddedMonthNum.toString();
			}
			if (moddedDateNum < 10) {
				moddedDateNum = "0" + moddedDateNum.toString();
			}
			if (endDateNum < 10) {
				endDateNum = "0" + endDateNum.toString();
			}
			if (endMonthNum < 10) {
				endMonthNum = "0" + endMonthNum.toString();
			}
			var startTimeString = monthDate.getFullYear() + moddedMonthNum.toString() + moddedDateNum.toString() + "T" + start_time;
			var endTimeString = monthDate.getFullYear() + endMonthNum.toString() + endDateNum.toString() + "T" + end_time;
			gr.setValue('start_date_time', startTimeString);
			gr.setValue('end_date_time', endTimeString);
			gr.update();
		}		
	},	
	type: 'ScheduleNewHolidaysUtil'
};