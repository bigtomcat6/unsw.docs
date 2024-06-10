<!--template>
  <RouteLink :to="src">
    {{ title }}
  </RouteLink>
</template-->

<template>
  <div class="task-container">
      <div class="task-header">
          <h1 class="task-header-title">{{ title }}</h1>
          <!--button class="continue-btn">继续</button-->
          <RouteLink :to="src">
            <Icon icon="mingcute:right-fill"
            style="height: 40px; font-size: 24px;" />
          </RouteLink>
      </div>
      <!--div class="task-details">
          <span>测试任务</span>
          <span class="task-status">3.0 / 3.0 (100.0%)</span>
          <span class="task-time">开始: 2024/5/20 AEST 上午12:00:47</span>
          <span class="task-deadline">结束时间: 2024/6/11 AEST 上午11:00:00</span>
      </div-->
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Mobius'
    },
    src: {
      type: String,
      default: './'
    },
  }
}
</script>

<style scoped lang="scss">
.task-container {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  /* Adding subtle shadow */

  .task-header {
    // display: block;
    // visibility: visible;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin-bottom: 20px;

    // padding: 20px;

    // .task-header-title {
    //   width: 100%;
    //   margin-right: 30%;
    // }
  }
}

h1 {
    font-size: 1.25rem;
    color: #333;
    padding: 0;
    margin: 0;
}

.continue-btn {
    // width: 80px;
    // position: absolute;
    // top: 0;
    // right: 0;
    // padding: 10px 20px;
    background-color: #007BFF;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
}

.task-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
}

.task-status {
    background-color: #17A2B8; /* Blue */
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
}

.task-time {
    background-color: #28A745; /* Green */
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
}

.task-deadline {
    background-color: #DC3545; /* Red */
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
}

.rule-btn {
    display: none; /* Hide rule button as it's not visible in the new screenshot */
}

a {
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
  border-color: var(--vp-button-brand-border);

  padding: 0 20px;
  font-size: 15px;
  border-radius: 10px;

  line-height: 50px;

  display: inline-block;
  font-weight: 600;
  text-align: center;
  border: 1px solid transparent;
  transition: var(--t-color);
  transition-property: border, color, background-color;

  margin: 5px;
}
</style>