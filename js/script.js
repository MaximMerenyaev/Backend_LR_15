function getDay(date){
    let day = date.getDay()
    if(day==0)  {
        day=7
    }
    return (day-1)
}

function createCalendar(elem, year, month){
    let mon = month - 1; 
    let d = new Date(year, mon);
    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>'

    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { 
        table += '</tr><tr>';
        }
        d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>';
        }
    }

    table += '</tr></table>';
    elem.innerHTML = table;
}

createCalendar(cal0, 2023, 1)
createCalendar(cal1, 2023, 2)
createCalendar(cal2, 2023, 3)
createCalendar(cal3, 2023, 4)
createCalendar(cal4, 2023, 5)
createCalendar(cal5, 2023, 6)
createCalendar(cal6, 2023, 7)
createCalendar(cal7, 2023, 8)
createCalendar(cal8, 2023, 9)
createCalendar(cal9, 2023, 10)
createCalendar(cal10, 2023, 11)
createCalendar(cal11, 2023, 12)