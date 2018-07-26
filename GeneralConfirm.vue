
example
------------------
<div>
  ...
  <GeneralConfirm ref="generalConfirm"></GeneralConfirm>
  ...
</div>

<script>
    import GeneralConfirm from '/components/GeneralConfirm'
export default {
  ...
methods: {
  exampleFunc: function () {
    let that = this
    ...
    var affirm = function () {
        // 确认后的操作
    }
    var back = function () {
        // 取消后的操作
    }
    that.$refs.generalConfirm.initGeneralConfirm('标题', '提示信息文本', affirm, back)
    ...
  }
},
components: {
      ...
      GeneralConfirm,
      ...
    },
  ...
}
</script>


-------------------------------
/components/GeneralConfirm.vue
-------------------------------

<style scoped>
  .GeneralConfirm_loading {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 999999999;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .GeneralConfirm_warp {
    border-radius: 10px;
    /* position: fixed; */
    /* top: 30%; */
    font-size: 0.7rem;
    /* left: 10%; */
    width: 80%;
    /* height: auto; */
    /* height: 12rem; */
    z-index: 102;
    background-color: #ffffff;
  }

  .GeneralConfirm_title {
    text-align: center;
    padding: 0 1rem;
    height: 1.5rem;
    line-height: 1.5rem;
    border-bottom: 1px solid #999;
  }

  .GeneralConfirm_content {
    line-height: 1rem;
    text-align: center;
    border-bottom: 1px solid #999;
    padding: 1rem;
  }

  .GeneralConfirm_btndiv {
    padding: 0.5rem 1rem;
    line-height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .GeneralConfirm_btn_back {
    background: #e3e3e3;
    width: 45%;
    line-height: 1.5rem;
    border-radius: 5px;
  }

  .GeneralConfirm_btn_affirm {
    width: 45%;
    line-height: 1.5rem;
    border-radius: 5px;
    background-color: #a6e1ec;
  }

</style>

<template>
  <div class="GeneralConfirm_loading" v-show="GeneralConfirmShow" @touchmove.prevent @mousewheel.prevent>
    <div class="GeneralConfirm_warp">
      <div class="GeneralConfirm_title">{{GeneralConfirmTitle||'提示'}}</div>
      <div class="GeneralConfirm_content" v-html="GeneralConfirmMessage||'是否确认？'">
      </div>
      <div class="GeneralConfirm_btndiv">
        <button class="GeneralConfirm_btn_back" @click="GeneralConfirmGoback()">{{GeneralConfirmGobackMsg||'返回'}}
        </button>
        <button class="GeneralConfirm_btn_affirm" @click="GeneralConfirmAffirm()">{{GeneralConfirmAffirmMsg||'确认'}}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        GeneralConfirmShow: false, // 提示框显示标志
        GeneralConfirmTitle: '', // 标题
        GeneralConfirmMessage: '', // 提示内容
        GeneralConfirmfuncobj: {
          Goback: '',
          Affirm: ''
        },
        GeneralConfirmGobackMsg: '',
        GeneralConfirmAffirmMsg: ''
      }
    },
    methods: {
      GeneralConfirmShowfunc: function () {
        this.GeneralConfirmShow = true
      },
      GeneralConfirmHidefunc: function () {
        this.GeneralConfirmShow = false
      },
      GeneralConfirmGoback: function () {
        if (typeof (this.GeneralConfirmfuncobj.Goback) === 'function') {
          this.GeneralConfirmfuncobj.Goback()
        }
        this.GeneralConfirmHidefunc()
      },
      GeneralConfirmAffirm: function () {
        if (typeof (this.GeneralConfirmfuncobj.Affirm) === 'function') {
          this.GeneralConfirmfuncobj.Affirm()
        }
        this.GeneralConfirmHidefunc()
      },
      initGeneralConfirm: function (title, msg, affirmfunc, backfunc, AffirmMsg, GobackMsg) {
        let that = this
        that.GeneralConfirmTitle = title
        // console.log(that.GeneralConfirmTitle)
        that.GeneralConfirmMessage = msg
        // console.log(that.GeneralConfirmMessage)
        that.GeneralConfirmfuncobj.Goback = backfunc
        that.GeneralConfirmfuncobj.Affirm = affirmfunc
        that.GeneralConfirmAffirmMsg = AffirmMsg
        that.GeneralConfirmGobackMsg = GobackMsg
        that.GeneralConfirmShowfunc()
      }
    }
  }
</script>
