<template>
  <div class="chl-calendar">
    <vc-calendar ref="calendar" :attributes="attributes" @dayclick="onDayClick" @dayfocusin="onDayFocusin" :min-date="new Date()"></vc-calendar>
    <!-- <div class="day-id" v-if="selectedId">{{ selectedId }}</div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Calendar',
  data() {
    return {
      calendarId: null,
      selectedEl: null,
      isUpdating: false
    }
  },
  computed: {
    ...mapState(['days', 'selectedId', 'selectedDatePickerId']),
    attributes() {
      return this.days.map(date => ({
        highlight: {
            color: 'transparent',
            fillMode: 'light',
            contentClass: 'highlight-class'
          },
        dates: date,
      }));
    }
  },
  watch: {
    selectedDatePickerId(id) {
      const split = id.split('-');
      this.isUpdating = true;
      
      const year = split[0];
      let month = split[1];
      // if (month.startsWith('0')) {
      //   const regex = /0/gi;
      //    month = month.replace(regex, '');
      //   console.log(month);
      // }
      const day = split[2];

      this.$refs.calendar.focusDate({
        year: Number(year),
        month: Number(month),
        day: Number(day)
      });
    }
  },
  methods: {
    onDayClick(day) {
      const index = this.days.findIndex(d => {
        return d.toString() == day.date.toString();
      });
      this.updateSelectedDay(day.id, day.el);
    },
    onDayFocusin(day) {
      if (this.isUpdating === false) return;
      this.updateSelectedDay(day.id, day.el);
      this.isUpdating = false;
    },
    updateSelectedDay(id, el) {
      if (this.selectedEl) {
        this.selectedEl.classList.remove('selected');
      }
      this.$store.commit('updateCalendarId', id);
      // this.$store.commit('updateSelectedId', id);
      this.selectedEl = el;
      this.selectedEl.classList.add('selected');
    }
  }
}
</script>

<style lang="scss">
  .chl-calendar {

    .vc-day-content {
      pointer-events: none !important;

      &.highlight-class {
        pointer-events: auto !important;
      }
    }

    .vc-day-content:not(.highlight-class) {
      color: var(--gray-400);
    }
  }

  .vc-title {
    pointer-events: none;
  }

  .vc-container {
    width: 545px !important;
  }
  
  .vc-grid-cell {
    min-height: 64px !important;
  }

  .vc-day-content {
    min-height: 64px;
  }
  
  .vc-day-content, .vc-highlight {
    border-radius: 4px !important;
    border: 2px solid white !important;
    height: 100% !important;
    width: 100% !important;
    pointer-events: auto;
  }

  .vc-day-content.selected {
    background-color: #179BD5 !important;
    color: #fff !important;
  }
</style>
