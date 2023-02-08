function getDay(){
    const d = new Date();
    let day = d.getDay()
    return day;
}

function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber);

    return capitalize(date.toLocaleString('es-US', { month: 'long' }));
}

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function showDate(){
    let dateContainer = document.getElementById('dateContainer');
    let startYear = calendar.getDateRangeStart().getFullYear();
    let startMonth = calendar.getDateRangeStart().getMonth();
    let startDay = calendar.getDateRangeStart().getDate();

    let endYear = calendar.getDateRangeEnd().getFullYear();
    let endMonth = calendar.getDateRangeEnd().getMonth();
    let endDay = calendar.getDateRangeEnd().getDate();
    
    dateContainer.innerText = getMonthName(startMonth)+" "+startDay+" ~ "+getMonthName(endMonth)+" "+endDay+" - "+endYear+".";
} 

/* Reserva form */
    function toDate() {
        let formDateElem = document.getElementById('form-date');
        
        let date = new Date(formDateElem.value);
        calendar.setDate(date);
        showDate();

        // Scroll para mobiles
        if (screen.width <= 760){
            let calendarSectionElem = document.getElementById('calendar-section');
            calendarSectionElem.scrollIntoView();
        }
    }
/* *** */

function today (){
    calendar.today();
    showDate();
}

function prev_range (){
    calendar.prev();
    showDate();
}

function next_range (){
    calendar.next();
    showDate();
}

const Calendar = tui.Calendar;
const container = document.getElementById('calendar');
const options = {
    defaultView: 'week',
    isReadOnly: true,
    timezone: {
        zones: [
            {   
                // Intl.DateTimeFormat().resolvedOptions().timeZone
                timezoneName: 'America/Bogota',
                displayLabel: "Colombia",
            },
        ],
    },
    calendars: [
        {
            id: 'cal1',
            name: 'Personal'
        }
    ], 
    week: DEFAULT_WEEK_OPTIONS = {
        startDayOfWeek: 1,
        dayNames: ['Dom', 'Lun', 'Mar', 'Miér', 'Jue', 'Vie', 'Sáb'],
        narrowWeekend: false,
        workweek: false,
        showNowIndicator: true,
        showTimezoneCollapseButton: false,
        timezonesCollapsed: false,
        hourStart: 8, 
        hourEnd: 24,
        eventView: true,
        taskView: false,
        collapseDuplicateEvents: false,
    },
    theme: {
        common :{
            dayName: {
                color: 'white',
            },
            holiday: {
                color: 'white',
                color: 'rgb(255,193,7)',
                color: 'rgb(78, 78, 78)',
            },
            saturday: {
                // color: 'white',
                // color: 'rgb(255,193,7)',
                color: 'rgb(78, 78, 78)',
            },
            border: '5px dotted #e5e5e5',
            gridSelection: {
                backgroundColor: 'rgb(255,193,7)',
                border: '3px outset rgba(255,193,7, 0.5)',
            },
        },
        week: {
            today: {
                color: 'rgb(255,193,7)',
            },
            nowIndicatorPast: {
                border: '1px dashed rgb(222,62,4)',
            },
            nowIndicatorLabel: {
                color: 'rgb(222,62,4)',
            },
            nowIndicatorBullet: {
                backgroundColor: 'rgb(222,62,4)',
            },
            nowIndicatorToday: {
                border: '1px solid rgb(222,62,4)',
            },
            timeGrid: {
                borderRight: '2px solid #e5e5e5',
            },
            gridSelection: {
                color: 'white',
            },
            dayName: {
                borderLeft: 'none',
                borderTop: 'none',
                borderBottom: 'none',
                backgroundColor: 'rgb(46, 140, 20)',
            }
        }
    }
};

const calendar = new Calendar(container, options);
showDate();

calendar.createEvents([
    {
        id: 'event1',
        calendarId: 'cal1',
        title: 'Ocupado',
        start: '2023-02-10T09:00:00',
        end: '2023-02-10T10:00:00',
    },
    {
        id: 'event1',
        calendarId: 'cal1',
        title: 'Ocupado',
        start: '2023-02-10T10:00:00',
        end: '2023-02-10T11:00:00',
    },
    {
        id: 'event1',
        calendarId: 'cal1',
        title: 'Ocupado',
        start: '2023-02-10T11:00:00',
        end: '2023-02-10T12:00:00',
    }
]);