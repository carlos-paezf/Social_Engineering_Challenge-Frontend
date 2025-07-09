import { format } from "date-fns";
import { es } from "date-fns/locale";


/**
 * The `formatPostDate` function takes a date string or Date object as input and returns a formatted
 * date string in Spanish locale.
 * @param {string | Date} dateString - The `dateString` parameter in the `formatPostDate` function can
 * accept a string representing a date or a Date object.
 * @returns The `formatPostDate` function returns a formatted date string in the format 'PPPp' using
 * the date provided as input. The date is formatted according to the Spanish locale (es).
 */
export const formatPostDate = ( dateString: string | Date ): string => {
    const date = typeof dateString === 'string'
        ? new Date( dateString )
        : dateString;

    return format( date, 'PPPp', { locale: es } );
};


/**
 * The function `sortByRecentDate` sorts an array of items based on their `postDate` property in
 * descending order.
 * @param {T[]} items - The `items` parameter is an array of objects where each object has a `postDate`
 * property that is either a string or a Date object.
 * @returns The `sortByRecentDate` function is returning a new array containing the items sorted in
 * descending order based on the `postDate` property of each item. The items are sorted by comparing
 * the `postDate` values as Date objects and sorting them from the most recent date to the oldest date.
 */
export const sortByRecentDate = <T extends { postDate: string | Date; }> ( items: T[] ): T[] => {
    return [ ...items ].sort( ( a, b ) => {
        return new Date( b.postDate ).getTime() - new Date( a.postDate ).getTime();
    } );
};


/**
 * The `formatDuration` function in TypeScript takes a duration in milliseconds and returns a formatted
 * string in the format "mm:ss".
 * @param {number} ms - The `ms` parameter in the `formatDuration` function represents the duration in
 * milliseconds that you want to format into minutes and seconds.
 * @returns The `formatDuration` function is returning a formatted string representing the duration in
 * minutes and seconds. The format is in the form of "minutes:seconds", where both minutes and seconds
 * are padded with leading zeros if necessary.
 */
export function formatDuration ( ms: number ): string {
    const totalSeconds = Math.floor( ms / 1000 );
    const minutes = Math.floor( totalSeconds / 60 );
    const seconds = totalSeconds % 60;

    return `${ pad( minutes ) }:${ pad( seconds ) }`;
}

/**
 * The function "pad" takes a number as input and returns a string representation of the number with a
 * leading zero if the number is less than 10.
 * @param {number} n - The parameter `n` in the `pad` function is a number that represents the value to
 * be padded.
 * @returns The function `pad` takes a number `n` as input and returns a string representation of that
 * number with a leading zero if the number is less than 10.
 */
function pad ( n: number ): string {
    return n < 10 ? `0${ n }` : `${ n }`;
}