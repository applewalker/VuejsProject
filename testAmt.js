 Vue.prototype.testAmt = function (val) { // @input 用
      // 判断金额且最多两位小数
      val = val + ''
      if (window.debug) console.log(val)
      val = val.replace(/[^\d.]*/g, '') // 替换非数字，只留下数字和.
      // val = val.replace(/\.{2,}/g, '.') // 保证只出现一个.
      // if (window.debug) console.log(val)
      val = val.replace(/^\./g, '') // 第一个不是.   清除
      // if (window.debug) console.log(val)
      val.match(/^0{0,}\.{0,}0{2,}/) ? val = val.replace(/^0{0,}\.{0,}0{2,}/, '0') : ''// 匹配000 0.00 清为'0'
      // if (window.debug) console.log(val)
      val.match(/^0+[1-9]+/) ? val = val.replace(/^0+/g, '') : ''
      // if (window.debug) console.log(val)
      val = val.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.') // 保证.只出现一次
      /* eslint-disable */
      // if (window.debug) console.log(val)
      val = val.replace(/\.\d{2,}$/, val.substr(val.indexOf('.'), 3)) // 只能输入两位小数
      /* eslint-disable */
      // if (window.debug) console.log(val)
      return val
    }
