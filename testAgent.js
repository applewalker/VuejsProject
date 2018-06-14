Vue.prototype.testAgent = function () { // 判断移动端
      let myTerminalType
      let ua = navigator.userAgent.toLowerCase()
      if (/\(i[^;]+;( U;)? CPU.+Mac OS X/gi.test(ua)) {
        // 苹果
        myTerminalType = 0
      } else if (/android|adr/gi.test(ua)) {
        // 安卓
        myTerminalType = 1
      }
      if (window.debug) {
        // confirm(ua + '|terminal type ' + myTerminalType)
        console.log(ua + '|terminal type ' + myTerminalType)
      }
      return myTerminalType
    }
