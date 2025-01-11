import React, { useEffect } from 'react';
import { Calendar } from '@nextui-org/react';
import { today, getLocalTimeZone, isWeekend } from '@internationalized/date';
import { useLocale } from '@react-aria/i18n';

export default function CalendarOverview() {
    // initialize the calendar with the current date
    let [date, setDate] = React.useState(today(getLocalTimeZone()));
    let { locale } = useLocale();

    // check if the selected date is invalid (weekend)
    let isInvalid = isWeekend(date, locale);

    // update the date automatically every day at midnight
    useEffect(() => {
        const timer = setInterval(() => {
            const currentDate = today(getLocalTimeZone());
            if (date.toString() !== currentDate.toString()) {
                setDate(currentDate);
            }
        }, 1000 * 60);

        return () => clearInterval(timer);
    }, [date]);

    return (
        <Calendar
            aria-label="Date (Invalid on weekends)"
            errorMessage={isInvalid ? "We are closed on weekends" : undefined}
            isInvalid={isInvalid}
            value={date}
            onChange={setDate}
        />
    );
}
