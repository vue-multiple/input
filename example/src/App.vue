<template>
    <div id="app">
        <demonstration
                tag="h2"
                title="Input 输入框"
                description="通过鼠标或键盘输入字符"
                :show-content="false">
        </demonstration>
        <demonstration
                title="基础用法"
                anchor="demo-code-title"
                :highlight="sourcecode1">
            <template slot="description">
                简单描述一下示例代码标题
            </template>
            <template slot="source">
                <div class="source">
                    <vm-input v-model="input"
                              placeholder="请输入内容"
                              :maxlength="10"></vm-input>
                </div>
            </template>
            <template slot="explanation">
                对你的代码进行描述
            </template>
        </demonstration>
        <demonstration
                title="禁用状态"
                anchor="demo-code-title"
                :highlight="sourcecode2">
            <template slot="description">
            </template>
            <template slot="source">
                <div class="source">
                    <vm-input v-model="input1" placeholder="请输入内容" :disabled="true"></vm-input>
                </div>
            </template>
            <template slot="explanation">
                通过 disabled 属性指定是否禁用 input 组件
            </template>
        </demonstration>
        <demonstration
                title="带 icon 的输入框"
                anchor="demo-code-title"
                :highlight="sourcecode5">
            <template slot="description">
                带有图标标记输入类型
            </template>
            <template slot="source">
                <div class="source">
                    <vm-input v-model="input2" placeholder="请输入内容" icon="vm-icon-search" :onIconClick="handleIconClick"></vm-input>
                </div>
            </template>
            <template slot="explanation">
                可以通过 icon 属性在 input 组件尾部增加显示图标，可以通过 on-icon-click 钩子函数来在点击图标后执行需要的逻辑。
            </template>
        </demonstration>
        <demonstration
                title="文本域"
                anchor="demo-code-title"
                :highlight="sourcecode3">
            <template slot="description">
                用于输入多行文本信息，通过将 type 属性的值指定为 textarea。
            </template>
            <template slot="source">
                <div class="source">
                    <div class="textareaBox">
                        <vm-input type="textarea"
                                  v-model="textarea"
                                  placeholder="请输入内容"
                                  :rows="3">
                        </vm-input>
                    </div>
                </div>
            </template>
            <template slot="explanation">
                文本域高度可通过 rows 属性控制
            </template>
        </demonstration>
        <demonstration
                title="可自适应文本高度的文本域"
                anchor="demo-code-title"
                :highlight="sourcecode4">
            <template slot="description">
                通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 autosize 还可以设定为一个对象，指定最小行数和最大行数。
            </template>
            <template slot="source">
                <div class="source">
                    <div class="textareaBox">
                        <vm-input type="textarea"
                                  v-model="textarea2"
                                  placeholder="请输入内容"
                                  autosize>
                        </vm-input>
                    </div>
                    <div style="margin: 20px 0;"></div>
                    <div class="textareaBox">
                        <vm-input type="textarea"
                                  v-model="textarea3"
                                  placeholder="请输入内容"
                                  :autosize="{ minRows: 2, maxRows: 4}">
                        </vm-input>
                    </div>
                </div>
            </template>
            <template slot="explanation">
                对你的代码进行描述
            </template>
        </demonstration>
        <div class="input-demo__item">
            <h3 id="attributes">
                <a href="./#attributes" aria-hidden="true" class="header-anchor">¶</a>
                Input Attributes
            </h3>
            <table class="table">
                <thead>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
                </thead>
                <tbody>
                <tr>
                    <td>type</i></td>
                    <td>类型</td>
                    <td>string</td>
                    <td>text/textarea</td>
                    <td>text</td>
                </tr>
                <tr>
                    <td>value</i></td>
                    <td>绑定值</td>
                    <td>string, number</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>maxlength</i></td>
                    <td>最大输入长度</td>
                    <td>number</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>minlength</i></td>
                    <td>最小输入长度</td>
                    <td>number</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>placeholder</i></td>
                    <td>输入框占位文本</td>
                    <td>string</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>disabled</i></td>
                    <td>禁用</td>
                    <td>boolean</td>
                    <td>—</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>icon</i></td>
                    <td>输入框尾部图标</td>
                    <td>string</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>rows</i></td>
                    <td>输入框行数，只对 type="textarea" 有效</td>
                    <td>number</td>
                    <td>—</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>autosize</i></td>
                    <td>自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }</td>
                    <td>boolean/object</td>
                    <td>—</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>autowidth</i></td>
                    <td>宽度是否是100%</td>
                    <td>boolean</td>
                    <td>true, false</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>auto-complete</i></td>
                    <td>原生属性，自动补全</td>
                    <td>string</td>
                    <td>on, off</td>
                    <td>off</td>
                </tr>
                <tr>
                    <td>name</i></td>
                    <td>原生属性</td>
                    <td>string</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>readonly</i></td>
                    <td>原生属性，是否只读</td>
                    <td>boolean</td>
                    <td>—</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>max</i></td>
                    <td>原生属性，设置最大值</td>
                    <td>—</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>min</i></td>
                    <td>原生属性，设置最小值</td>
                    <td>—</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>step</i></td>
                    <td>原生属性，设置输入字段的合法数字间隔</td>
                    <td>—</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>autofocus</i></td>
                    <td>原生属性，自动获取焦点</td>
                    <td>boolean</td>
                    <td>true, false</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>form</i></td>
                    <td>原生属性</td>
                    <td>string</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>inputclass</i></td>
                    <td>input 类名,宽度100%需要autowidth属性配置，</td>
                    <td>string</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>on-icon-click</i></td>
                    <td>点击 Input 内的图标的钩子函数</td>
                    <td>function</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="input-demo__item">
            <h3 id="event">
                <a href="./#event" aria-hidden="true" class="header-anchor">¶</a>
                Input Events
            </h3>
            <table class="table">
                <thead>
                <th>事件名称</th>
                <th>说明</th>
                <th>回调参数</th>
                </thead>
                <tbody>
                <tr>
                    <td>blur</td>
                    <td>在 Input 失去焦点时触发</td>
                    <td>(event: Event)</td>
                </tr>
                <tr>
                    <td>focus</td>
                    <td>在 Input 获得焦点时触发</td>
                    <td>(event: Event)</td>
                </tr>
                <tr>
                    <td>change</td>
                    <td>在 Input 值改变时触发</td>
                    <td>(value: string | number)</td>
                </tr>
                <tr>
                    <td>enter</td>
                    <td>当 Input 获得焦点时，按enter键时触发</td>
                    <td>(event: Event)</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script type="es6">
    import {sourcecode1, sourcecode2, sourcecode3, sourcecode4, sourcecode5} from './template'

    export default {
        data () {
            return {
                input: '',
                input1: '',
                input2: '',
                textarea: '',
                textarea2: '',
                textarea3: '',
                sourcecode1,
                sourcecode2,
                sourcecode3,
                sourcecode4,
                sourcecode5
            }
        },
        methods:{
            handleIconClick(e){
                console.log(e)
            }
        }
    }
</script>

<style lang="less" type="text/less" rel="stylesheet/less">
    @import "./styles/font.less";
    #app {
        margin: 60px auto;
    }

    .textareaBox {
        width: 400px;
    }

    .input-demo__item {
        width: 1000px;
        margin: 0 auto;
        h2, h3 {
            font-weight: 400;
            color: #1f2f3d;
        }

        h2 {
            font-size: 28px;
            margin: 0
        }

        h3 {
            font-size: 22px;
            margin: 45px 0 15px;
        }

        h3, h2 {

            &
            :hover {

                a {
                    opacity: .4;
                }

            }
            a {
                float: left;
                margin-left: -20px;
                opacity: 0;
                cursor: pointer;
                color: #4078c0;
                text-decoration: none;

                &
                :hover {
                    opacity: .4;
                }

            }
        }
        p {
            font-size: 14px;
            color: #5e6d82;
            line-height: 1.5em;

            a {
                color: #2d8cf0;
                background: 0 0;
                text-decoration: none;
                outline: 0;
                cursor: pointer;
                transition: color .2s ease;

                &
                :hover {
                    color: #57a3f3;
                }

            }
        }
        .new {
            font-style: normal;
            color: #FF4949;

            code {
                background-color: #FF4949 !important;
                color: #fff !important;
            }

        }
        .table {
            border-collapse: collapse;
            width: 100%;
            background-color: #fff;
            color: #5e6d82;
            font-size: 14px;
            margin-bottom: 45px;
            line-height: 1.5em;

            th {
                text-align: left;
                border-top: 1px solid #eaeefb;
                background-color: #eff2f7;
                white-space: nowrap;
            }

            th, td {
                border-bottom: 1px solid #eaeefb;
                padding: 10px;
                max-width: 250px;
            }

        }
    }
</style>
