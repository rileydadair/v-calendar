<template>
  <div class="chl-datepicker">
    <vc-date-picker
      ref="datepicker"
      v-model="date"
      mode="date"
      :masks="masks"
      :attributes="attributes"
      :min-date="new Date()"
      :max-date="new Date(2021, 0, 5)"
    >
      <template v-slot="{ inputValue, togglePopover }">
        <div class="flex items-center">
          <button
            class="p-2 bg-blue-100 border border-blue-200 hover:bg-blue-200 text-blue-600 rounded-l focus:bg-blue-500 focus:text-white focus:border-blue-500 focus:outline-none"
            @click="togglePopover({ placement: 'bottom' })"
          >

            <!-- Customer Side -->
            <input
              :value="inputValue"
              class="bg-white text-gray-700 w-full py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
              readonly
              tabindex="-1"
            />
            <!-- End Customer Side -->

            <!-- <span v-if="selectedId" class="selectedValue">{{ selectedId }}</span> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              class="w-4 h-4 fill-current"
            >
              <path
                d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"
              ></path>
            </svg>
          </button>
        </div>
      </template>
    </vc-date-picker>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DatePicker',
  data() {
    return {
      date: {},
      masks: {
        input: 'MM-DD-YY',
      },
    }
  },
  computed: {
    ...mapState(['days', 'selectedId']),
    // getInputDate() {
    //   if (this.selectedId) {
    //     const split = this.selectedId.split('-');
    //     const formattedDate = [split[1], split[2], split[0]].join('-');
    //     return formattedDate;
    //   } else {
    //     return '';
    //   }
    // },
    attributes() {
      return this.days.map(date => ({
        highlight: {
            color: 'transparent',
            fillMode: 'light',
            contentClass: 'booked'
          },
        dates: date,
      }));
    }
  },
  methods: {
    // onDayClick(day) {
    //   console.log(day)
    //   // Check if date exists with id
    //   const index = this.days.findIndex(d => {
    //     return d.toString() == day.date.toString();
    //   });
    //   if (index >= 0) {
    //     this.updateSelectedDay(day.id, day.el);
    //   }
    // },
    // onDayFocusin(day) {
    //   console.log(day.id)
    // },
    // updateSelectedDay(id, el) {
    //   this.$store.commit('updateDatePickerId', id);
    // }
  }
}
</script>

<style lang="scss">
  .chl-datepicker {
    button {
      cursor: pointer;
    }

    input {
      pointer-events: none;
      outline: 0;
      border: 0;
      vertical-align: middle;
    }

    .selectedValue {
      min-width: 150px;
    }

    button {
      background-color: white;
      /* outline: 0; */
      border: 1px solid #cbd5e0;
      border-radius: 4px;
      padding: 10px;
    }

    .vc-day-content:not(.booked, .selected) {
      color: var(--gray-400);
      /* pointer-events: none; */
    }

    /* .vc-day-content.booked,
    .vc-day-content.selected {
      pointer-events: auto !important;
    } */

    svg {
      width: 20px;
      height: 20px;
      fill: #179BD5;
      vertical-align: middle;
    }
  }
</style>
