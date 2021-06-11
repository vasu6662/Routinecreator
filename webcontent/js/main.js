let activities = [];





const addActivity = (ev)=>{
    ev.preventDefault();

    var starttimehrs = document.getElementById('startTimeHrs');
    var starttimemins = document.getElementById('startTimeMins');
    var starttimeampm = document.getElementById('startTimeAmPm'); 

    var endtimehrs = document.getElementById('endTimeHrs');
    var endtimemins = document.getElementById('endTimeMins');
    var endtimeampm = document.getElementById('endTimeAmPm'); 

    let activity = {
        activityName: document.getElementById('activityName').value,
        startTimeHrs: starttimehrs.options[starttimehrs.selectedIndex].text, 
        startTimeMins: starttimemins.options[starttimemins.selectedIndex].text,
        startTimeAmPm: starttimeampm.options[starttimeampm.selectedIndex].text, 
    
        endTimeHrs: endtimehrs.options[endtimehrs.selectedIndex].text, 
        endTimeMins: endtimemins.options[endtimemins.selectedIndex].text,
        endTimeAmPm: endtimeampm.options[endtimeampm.selectedIndex].text 
    }
    
    activities.push(activity);
    document.forms[0].reset();
    
    console.warn('added' , {activities} ); 
    
    refreshTable(activity);
}


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('addActivityBtn').addEventListener('click', addActivity);
});


const refreshTable = (activity)=>{
    var table = document.getElementById('routine-table');
    var tr = table.insertRow(-1);
    tr.insertCell(-1).innerHTML = activity.activityName;
    tr.insertCell(-1).innerHTML = activity.startTimeHrs;
    tr.insertCell(-1).innerHTML = activity.startTimeMins;
    tr.insertCell(-1).innerHTML = activity.startTimeAmPm;
    tr.insertCell(-1).innerHTML = activity.endTimeHrs;
    tr.insertCell(-1).innerHTML = activity.endTimeMins;
    tr.insertCell(-1).innerHTML = activity.endTimeAmPm;
}