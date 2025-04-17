export const formatDate = (date, config) => {
    const defaultDate = { day: 'numeric', month: 'long', year: 'numeric' };
    const options = config ? config : defaultDate;
  
    return new Date(date).toLocaleDateString('en-GB', options);
  };