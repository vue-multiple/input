<template>
  <div :class="[
    type === 'textarea' ? 'vm-textarea' : 'vm-input',
    {
      'disabled': disabled,
    }
  ]" :style="inputStyle"
  >
    <template v-if="type !== 'textarea'">
      <!-- input 图标 -->
      <slot name="icon">
        <i class="vm-input__icon"
           :class="[
            icon,
            onIconClick ? 'clickable' : ''
          ]"
           v-if="icon"
           @click="handleIconClick">
        </i>
      </slot>
      <input
        v-if="type !== 'textarea'"
        class="vm-input__inner"
        :class="inputclass"
        v-bind="$props"
        :autocomplete="autoComplete"
        :value="currentValue"
        ref="input"
        :style="inputStyle"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keyup.enter="handleEnter"
      >
    </template>
    <textarea
      v-else
      class="vm-textarea__inner"
      :class="inputclass"
      :value="currentValue"
      @input="handleInput"
      ref="textarea"
      v-bind="$props"
      :style="textareaStyle"
      @focus="handleFocus"
      @blur="handleBlur">
    </textarea>
  </div>
</template>
<script>
  import emitter from '../mixins/emitter';
  import calcTextareaHeight from './calcTextareaHeight';
  import merge from '../utils/merge';

  export default {
    name: 'VmInput',

    componentName: 'VmInput',

    mixins: [emitter],

    data() {
      return {
        currentValue: this.value,
        textareaCalcStyle: {}
      };
    },

    props: {
      value: [String, Number],
      placeholder: String,
      resize: String,
      readonly: Boolean,
      autowidth:Boolean,
      autofocus: Boolean,
      icon: String,
      disabled: Boolean,
      inputclass: String,
      type: {
        type: String,
        default: 'text'
      },
      name: String,
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      rows: {
        type: Number,
        default: 2
      },
      autoComplete: {
        type: String,
        default: 'off'
      },
      form: String,
      maxlength: Number,
      minlength: Number,
      max: {},
      min: {},
      step: {},
      onIconClick: Function
    },

    computed: {
      inputStyle() {
          let o = {}
          this.autowidth&&(o.width = '100%')
        return o
      },
      textareaStyle() {
        return merge({}, this.textareaCalcStyle, { resize: this.resize });
      }
    },

    watch: {
      'value'(val, oldValue) {
        this.setCurrentValue(val);
      }
    },

    methods: {
      handleBlur(event) {
        this.$emit('blur', event);
      },
      inputSelect() {
        this.$refs.input.select();
      },
      resizeTextarea() {
        if (this.$isServer) return;
        var { autosize, type } = this;
        if (!autosize || type !== 'textarea') return;
        const minRows = autosize.minRows;
        const maxRows = autosize.maxRows;

        this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
      },
      handleFocus(event) {
        this.$emit('focus', event);
      },
      handleInput(event) {
        const value = event.target.value;
        this.$emit('input', value);
        this.setCurrentValue(value);
        this.$emit('change', value);
      },
      handleIconClick(event) {
          if (this.onIconClick) {
              this.onIconClick(event);
          }
          this.$emit('click', event);
      },
      handleEnter(event){
          this.$emit('enter', event);
      },
      setCurrentValue(value) {
        if (value === this.currentValue) return;
        this.$nextTick(_ => {
          this.resizeTextarea();
        });
        this.currentValue = value;
      }
    },

    created() {
    },

    mounted() {
      this.resizeTextarea();
    }
  };
</script>
