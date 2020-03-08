const getDate = (timestamp, dateReverse) => {
    const dateObj = (timestamp) ? new Date(parseInt(timestamp)) : new Date();
    const Y = dateObj.getFullYear();
    const m = dateObj.getMonth() + 1;
    const d = dateObj.getDate();
    const H = dateObj.getHours();
    const M = dateObj.getMinutes();
    const S = dateObj.getSeconds();
    let date;
    if (dateReverse)
        date = Y + '-' + ((m < 10) ? '0' + m : m) + '-' + ((d < 10) ? '0' + d : d);
    else
        date = ((d < 10) ? '0' + d : d) + '-' + ((m < 10) ? '0' + m : m) + '-' + Y + ' ';

    const hours = ((H < 10) ? '0' + H : H) + ':' + ((M < 10) ? '0' + M : M) + ':' + ((S < 10) ? '0' + S : S);
    return [date, hours];
}
export { getDate };