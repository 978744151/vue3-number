<template>
  <div class="number-grow-warp">
    <span
      ref="numberGrow"
      :data-time="time"
      class="number-grow"
      :data-value="value"
      >0</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, getCurrentInstance } from "vue";
type ValueType = number;
// type interValueProps = NodeJS.Timer | null
interface ISwitchProps {
  time: ValueType;
  value: ValueType;
}
export default defineComponent({
  name: "developNumber",
  props: {
    time: {
      type: Number,
      default: 2,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    console.log(456);
  },
  setup(props: ISwitchProps) {
    onMounted(() => {
      numberGrow((getCurrentInstance() as any).ctx.$refs.numberGrow);
    });
    const numberGrow = (ele: any) => {
      const step = (props.value * 10) / (props.time * 1000);
      let current: ValueType = 0;
      let start: ValueType = 0;
      let t: any = setInterval(() => {
        start += step;
        if (start > props.value) {
          clearInterval(Number(t));
          start = props.value;
          t = null;
        }
        if (current === start) {
          return;
        }
        current = start;
        ele.innerHTML = current
          .toFixed(0)
          .toString()
          .replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, "$1,");
      }, 0.1);
    };
    return {
      numberGrow,
    };
  },
});
</script>

<style>
.number-grow-warp {
  transform: translateZ(0);
}
.number-grow {
}
</style>
