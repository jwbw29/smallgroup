export const getCurrentSemester = () => {
  const today = new Date();
  const currentMonth = today.getMonth() + 1; // getMonth is zero-indexed
  if (currentMonth >= 8) {
    return `Fall`;
  } else if (currentMonth >= 1 && currentMonth <= 5) {
    return `Spring`;
  } else {
    return `Summer`;
  }
};
