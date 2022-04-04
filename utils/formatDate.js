function formatDate(date) {
    if (date === "yyyy-mm-dd") {
      return "dd/mm/yyyy";
    } else {
      return null;
    }
  }
  
  module.exports = formatDate;
  