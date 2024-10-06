<template>
  &nbsp;
  <Badge type="warning" :text="(ongoing as boolean) ? 'Under Construction' : 'active'" />
  &NoBreak;
  <Badge v-if="showBadge && !ongoing" type="tip" :text="text" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      weeks: '',
      showBadge: false,
    }
  },
  props: {
    ongoing: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    text() {

      // const date = new Date();
      // const hours = date.getHours().toString().padStart(2, '0');
      // const minutes = date.getMinutes().toString().padStart(2, '0');
      // const seconds = date.getSeconds().toString().padStart(2, '0');
      // const Text = `${hours}:${minutes}:${seconds}`;
      // return Text;

      return this.weeks;
    }
  },
  created() {
    const weeks: string = formatWeeks(getWeeks(new Date('2024/09/08'), new Date()));
      if (weeks ==  '') this.showBadge = false;
      else              this.showBadge = true;
    
    this.weeks = weeks;
  },
})


function getWeeks(StartDate: Date, EndDate: Date): number {
  const date1 = new Date(StartDate);
  const date2 = new Date(EndDate);

  // 获取时区偏移量，包括考虑夏令时
  const getTimezoneOffsetInMs = (date: Date) => date.getTimezoneOffset() * 60 * 1000;

  // 计算日期的毫秒时间
  const time1 = date1.getTime() - getTimezoneOffsetInMs(date1); // 校正为 UTC 时间
  const time2 = date2.getTime() - getTimezoneOffsetInMs(date2); // 校正为 UTC 时间

  const dateDiff = time2 - time1;
  const days = Math.floor(dateDiff / (24 * 3600 * 1000));
  const weeks = Math.ceil(days / 7);
  return weeks;
}

function formatWeeks(weeks: number): string {
  if (weeks < 0 || weeks > 13) return "";

  switch(weeks) {
    case 0: return "O-Week";
    case 11:
    case 12:
    case 13: return "Exam Week";
    default: return "Week " + weeks;
  }
}
</script>