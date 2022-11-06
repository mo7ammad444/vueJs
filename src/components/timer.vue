<template>
    <div class="base-timer text-center text-a1a1a1 my-2 pb-3">
      <span class="base-timer__label">{{ formattedTimeLeft }}</span>
    </div>
  </template>
  
  <script>
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 10;
  const ALERT_THRESHOLD = 5;
  
  const COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD
    }
  };
  
  const TIME_LIMIT = 160;
  
  export default {
    data() {
      return {
        timePassed: 0,
        timerInterval: null
      };
    },
  
    computed: {
      circleDasharray() {
        return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(0)} 283`;
      },
  
      formattedTimeLeft() {
        const timeLeft = this.timeLeft;
        const minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
  
        if (seconds < 10) {
          seconds = `0${seconds}`;
        }
  
        return `${minutes}:${seconds}`;
      },
  
      timeLeft() {
        return TIME_LIMIT - this.timePassed;
      },
  
      timeFraction() {
        const rawTimeFraction = this.timeLeft / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
      },
  
      remainingPathColor() {
        const { alert, warning, info } = COLOR_CODES;
  
        if (this.timeLeft <= alert.threshold) {
          return alert.color;
        } else if (this.timeLeft <= warning.threshold) {
          return warning.color;
        } else {
          return info.color;
        }
      }
    },
  
    watch: {
      timeLeft(newValue) {
        if (newValue === 0) {
          this.onTimesUp();
        }
      }
    },
  
    mounted() {
      this.startTimer();
    },
  
    methods: {
      onTimesUp() {
        clearInterval(this.timerInterval);
      },
  
      startTimer() {
        this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
      }
    }
  };
  </script>
  
