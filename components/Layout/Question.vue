<template>
  <div class="questionContainer" @click="collapsed = !collapsed">
    <div :class="questionClass">
      <table>
        <tr>
          <td style="min-width: 1.5rem">
            <span v-if="!collapsed">➤</span>
            <span v-else>▼</span>
          </td>
          <td>
            <p :class="questionClassText">
              {{ question }}
            </p>
          </td>
        </tr>
      </table>
      <p v-if="!collapsed" class="answer">{{ answer }}</p>
    </div>
  </div>
</template>
 


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      collapsed: true,
    };
  },
  props: {
    question: {
      type: String,

      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  computed: {
    questionClass() {
      if (this.collapsed) {
        return "questionCollapsed questionCommon";
      } else {
        return "questionFull questionCommon";
      }
    },
    questionClassText() {
      if (this.collapsed) {
        return "questionCollapsedText questionCommonText";
      } else {
        return "questionFullText questionCommonText";
      }
    },
  },
});
</script>

<style>
.questionCollapsed {
  text-align: left;
  font-weight: bold;
  font-size: 20px;
}

.questionCollapsed:hover {
  background-color: rgba(37, 46, 46, 0.123);
}

.questionFull {
  text-align: left;
  font-weight: bold;
  font-size: 20px;
}

.questionCommon {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 1rem;
  border: solid 1px rgba(0, 0, 0, 0.219);
}

.questionCollapsedText {
}

.questionFullText {
}

.questionCommonText {
}

.questionContainer {
  padding: 0.5rem;
}

.answer {
  /* empty */
  font-weight: normal;
}

p {
  margin-bottom: 0px;
}
</style>
