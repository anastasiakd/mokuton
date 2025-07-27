const getCurrentDate = () => new Date();
const getCurrentYear = () => getCurrentDate().getFullYear();

export default {
    getCurrentDate,
    getCurrentYear,
};