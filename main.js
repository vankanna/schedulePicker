$(document).ready(function () {

    function changeOutput(events, times) {
        $("#event-output").html(events);
        $("#time-output").html(times);
    }

    $('input[type=radio][name=days]').change(function() {
        if (this.value === 'monday') {
            changeOutput(
                "School<br>Cooking",
                "2:00pm-4:00pm<br>5:00pm-5:45pm"
            );
        } else if (this.value === 'tuesday') {
            changeOutput(
                "School<br>Watch TV",
                "12:00pm-1:00pm<br>6:00pm-10:45pm"
            );
        } else if (this.value === 'wednesday') {
            changeOutput(
                "Work",
                "7:00am-3:00pm"
            );
        } else if (this.value === 'thursday') {
            changeOutput(
                "School<br>Cooking<br>Watch TV",
                "2:00pm-4:00pm<br>5:00pm-5:45pm<br>7:00pm-9:00pm"
            );
        } else if (this.value === 'friday') {
            changeOutput(
                "School<br>Watch TV",
                "2:00pm-4:00pm<br>7:00pm-9:00pm"
            );
        } else if (this.value === 'saturday') {
            changeOutput(
                "Visit Friends<br>Cooking<br>Watch TV",
                "11:00am-4:00pm<br>5:00pm-5:45pm<br>7:00pm-9:00pm"
            );
        } else if (this.value === 'sunday') {
            changeOutput(
                "Church<br>Homework",
                "9:00am-10:00am<br>5:00pm-8:45pm"
            );
        }
    });

})