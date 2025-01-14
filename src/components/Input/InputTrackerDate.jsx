import React, { useState, useEffect, forwardRef } from "react";
import { DatePicker as OriginalDatePicker } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";

// Forward ref untuk menghindari warning
const DatePicker = forwardRef((props, ref) => {
    return <OriginalDatePicker {...props} ref={ref} />;
});

export default function InputTrackerDate() {
    const { locale } = useLocale(); // Mendapatkan lokal dari aplikasi
    const [currentDate, setCurrentDate] = useState(today(getLocalTimeZone())); // State untuk tanggal saat ini
    const [isAutoUpdate, setIsAutoUpdate] = useState(true); // State untuk kontrol auto-update

    useEffect(() => {
        if (!isAutoUpdate) return;

        const timer = setInterval(() => {
            setCurrentDate(today(getLocalTimeZone())); // Perbarui tanggal setiap menit
        }, 1000 * 60);

        return () => clearInterval(timer); // Membersihkan interval saat komponen di-unmount
    }, [isAutoUpdate]);

    const handleDateChange = (newDate) => {
        setIsAutoUpdate(false); // Hentikan auto-update jika tanggal diubah manual
        setCurrentDate(newDate); // Perbarui tanggal dengan input pengguna
    };

    return (
        <div>
            <DatePicker
                className="max-w-[284px]"
                label="Current Date"
                value={currentDate}
                onChange={handleDateChange}
                locale={locale}
                data-slot="base" // Pastikan slot sesuai
            />
        </div>
    );
}
