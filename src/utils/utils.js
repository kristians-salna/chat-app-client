/**
 * Navigates user between routes.
 *
 * @param {string} path.
 * @param {Function} push. Push method from the history object.
 *
 * @return {Object}.
 */
export const navigateTo = (path, { push }) => {
    if (path) push(path);
};
/**
 * Used to determine which messages are the using clients.
 *
 * @param {Object} a.
 * @param {Object} b.
 *
 * @return {Boolean}
 */
export const isSelf = (a, b) => {
    return a.name === b.name
};
/**
 * Caches image on the browser level.
 *
 * @param {string} url.
 *
 * @return {void}
 */
export const cacheImage = (url) => {
    const image = new Image();
    image.src = url;
};
/**
 * Adds a zero to value in case value is a single digit.
 *
 * @param {Number} value. A given value.
 *
 * @return {String | Number}
 */
export const addTrailingZero = (value) => {
    if (value < 10) return `0${value}`;
    return value;
};
/**
 * Formats milliseconds value into a readable time.
 *
 * @return {String}
 */
export const formatDate = (date) => {
    const _date = new Date(date);
    return `${addTrailingZero(_date.getHours())}:${_date.getMinutes()}`;
};