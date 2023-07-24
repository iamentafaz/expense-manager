import dayjs from 'dayjs';

export const convertFireBaseDateToFullDate = (date) => {
    const fireBaseTime = new Date(
        date.seconds * 1000 + date.nanoseconds / 1000000,
    );
    date = dayjs(fireBaseTime.toDateString()).format('LL');
    return date;
};
