import React, { useState, useEffect, forwardRef } from "react";
import { DatePicker as OriginalDatePicker } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";

// forward ref 
const DatePicker = forwardRef((props, ref) => {
    return <OriginalDatePicker {...props} ref={ref} />;
});

export default function InputLeaveDate() {
    // initialze date and state
    const { locale } = useLocale();
    const [currentDate, setCurrentDate] = useState(today(getLocalTimeZone()));
    const [isAutoUpdate, setIsAutoUpdate] = useState(true);

    useEffect(() => {
        if (!isAutoUpdate) return;

        const timer = setInterval(() => {
            setCurrentDate(today(getLocalTimeZone()));
        }, 1000 * 60);

        return () => clearInterval(timer);
    }, [isAutoUpdate]);

    const handleDateChange = (newDate) => {
        setIsAutoUpdate(false);
        setCurrentDate(newDate);
    };

    return (
        <div>
            <DatePicker
                className="max-w-[284px]"
                label="Current Date"
                value={currentDate}
                onChange={handleDateChange}
                locale={locale}
                data-slot="base"
            />
        </div>
    );
}
