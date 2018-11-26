const moment = require( 'moment' );

const currentTime = () => {
    return moment().format('dddd, MMMM Do, YYYY');
}
export default {
    currentTime
}