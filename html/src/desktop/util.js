import cookie from 'react-cookie';
import { browserHistory } from 'react-router';
import { Modal } from 'antd';

!function(){
  const FETCH_ABORT = 'abort';
  function createScript(src, attrs, callback) {
    let doc = document,
      { head } = doc,
      script = doc.createElement('script');
    script.src = src;
    callback && script.addEventListener('load', callback, false);
    attrs && Object.keys(attrs).forEach(key => {
      if(attrs[key])
        script.setAttributeNS('', key, attrs[key]);
    });
    head.insertBefore(script, head.firstChild);
  }

  /*金额格式化（三位一个逗号）*/
  const formatNum = (str)=>{
    if(str != NaN && str != undefined){
      var newStr = "";
      var count = 0;
      str = str.toString();
      if(str.indexOf(".")==-1){
        for(var i=str.length-1;i>=0;i--){
          if(count % 3 == 0 && count != 0){
            newStr = str.charAt(i) + "," + newStr;
          }else{
            newStr = str.charAt(i) + newStr;
          }
          count++;
        }
        newStr = newStr; //自动补小数点后两位
      }else{
        for(var i = str.indexOf(".")-1;i>=0;i--){
          if(count % 3 == 0 && count != 0){
            newStr = str.charAt(i) + "," + newStr;
          }else{
            newStr = str.charAt(i) + newStr; //逐个字符相接起来
          }
          count++;
        }
        newStr = newStr + (str + "00").substr((str + "00").indexOf("."),3);
      }
    }
    return newStr
  }

  window.Hmall = {

  };
}();
