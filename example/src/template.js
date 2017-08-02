export const sourcecode1 = `<vm-input v-model="input" placeholder="请输入内容"></vm-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>`

export const sourcecode2 = `<vm-input
  placeholder="请输入内容"
  v-model="input1"
  :disabled="true">
</vm-input>

<script>
export default {
  data() {
    return {
      input1: ''
    }
  }
}
</script>`
export const sourcecode3 = `<vm-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="textarea">
</vm-input>

<script>
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
</script>`
export const sourcecode4 = `<vm-input
  type="textarea"
  autosize
  placeholder="请输入内容"
  v-model="textarea2">
</vm-input>
<div style="margin: 20px 0;"></div>
<vm-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="请输入内容"
  v-model="textarea3">
</vm-input>

<script>
export default {
  data() {
    return {
      textarea2: '',
      textarea3: ''
    }
  }
}
</script>`