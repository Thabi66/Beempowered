"use strict";
$('#calendar').fullCalendar({
    header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listWeek'
    },
    defaultDate: '2021-08-21',
    editable: true,
    droppable: true, // this allows things to be dropped onto the calendar
    drop: function() {
        // is the "remove after drop" checkbox checked?
        if ($('#drop-remove').is(':checked')) {
            // if so, remove the element from the "Draggable Events" list
            $(this).remove();
        }
    },
    eventLimit: true, // allow "more" link when too many events
    events: [
        {
            title: '',
            start: '',
            className: 'bg-info',
            
        },
        {
            title: '',
            start: '',
            end: '',
            className: 'bg-danger'
        },
        {
            id: 999,
            title: '',
            start: '',
            className: 'bg-dark'
        },
        {
            id: 999,
            title: '',
            start: '',
            className: 'bg-success'
        },
        {
            title: '',
            start: '',
            end: '',
            className: 'bg-primary'
        },
        {
            title: '',
            start: '',
            end: '',
            className: 'bg-warning'
        },
        {
            title: '',
            start: '',
            className: 'bg-dark'
        },
        {
            title: '',
            start: '',
            className: 'bg-secondary'
        },
        {
            title: '',
            start: '',
            className: 'bg-dark'
        },
        {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2018-08-28',
            className: 'bg-primary'
        }
    ]
});

    