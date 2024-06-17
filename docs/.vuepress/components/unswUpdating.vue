<template>
  &nbsp;
  <Badge type="warning" text="Updating" />
  &NoBreak;
  <Badge type="tip" :text="text" />
</template>

<script>
export default {
  computed: {
    text() {

      // const date = new Date();
      // const hours = date.getHours().toString().padStart(2, '0');
      // const minutes = date.getMinutes().toString().padStart(2, '0');
      // const seconds = date.getSeconds().toString().padStart(2, '0');
      // const Text = `${hours}:${minutes}:${seconds}`;
      // return Text;

      return formatWeeks(getWeeks(new Date('2024/05/26'), new Date()));
    }
  }
}


function getWeeks(StartDate, EndDate) {
  var date1 = new Date(StartDate);
  var date2 = new Date(EndDate);
  var date3 = date2.getTime() - date1.getTime();
  var days = Math.floor(date3 / (24 * 3600 * 1000));
  var weeks = Math.ceil(days / 7);
  return weeks;
}

function formatWeeks(weeks) {
  if (weeks < 0 || weeks > 10) return "";

  switch(weeks) {
    case 0: return "O-Week";
    case 11:
    case 12:
    case 13: return "Exam Week";
    default: return "Week " + weeks;
  }
}
</script>