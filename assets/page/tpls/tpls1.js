;(function(){var __a={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'},
__b=/[&<>"']/g,
__e=function (s) {s = String(s);return s.replace(__b, function (m) {return __a[m]});};

module.exports = function (data, children) {
data=data||{},children=children||{};
var __p=[],_p=function(s){__p.push(s)};
;_p('<!DOCTYPE html>\r\n\
<html lang="en">\r\n\
<head>');
;_p( (require('./common/common_meta'))() );
;_p('    <title>tpl1</title>');
;_p( (require('./common/common_header'))() );
;_p('</head>\r\n\
<body>\r\n\
    <div>\r\n\
        <h1>\r\n\
            新中国成立的时间是：');
;_p(__e(data.dataResult.dataDate));
;_p('        </h1>\r\n\
`');
 if(data.templateFlag){ ;_p('            <h2>\r\n\
                现在的时间是:');
;_p(__e( (new Date()).toLocaleString() ));
;_p('            </h2>\r\n\
            <p>\r\n\
                然后没事随机生成一个token：');
;_p(__e( data.token ));
;_p('            </p>');
 } ;_p('    </div>');
 var tplsHtml = data.dataResult.tplsData; ;_p('    ');
 for(var i = 0; i < tplsHtml.length; i++){ ;_p('    <div id="data');
;_p(__e( tplsHtml[i].id ));
;_p('Content">');
;_p(__e( tplsHtml[i].html ));
;_p('    </div>');
 } ;_p('    \r\n\
\r\n\
    <script>');
 if(data.sonicStatus != 0){ ;_p('        /**\r\n\
         * sonic业务逻辑 diff数据处理，后置函数执行，状态上报\r\n\
         * @param sonicStatus\r\n\
         * @param reportSonicStatus\r\n\
         * @param sonicUpdateData\r\n\
         */\r\n\
        window.sonicStartTime = new Date;\r\n\
        //0-状态获取失败 1-sonic首次 2-页面刷新 3-局部刷新 4-完全cache\r\n\
        sonic.getSonicData(function(sonicStatus, reportSonicStatus, sonicUpdateData){\r\n\
            if(sonicStatus == 1){\r\n\
                //首次没有特殊的逻辑处理，直接执行sonic完成后的逻辑，比如上报等\r\n\
            }else if(sonicStatus == 2){\r\n\
\r\n\
            }else if(sonicStatus == 3){\r\n\
                console.log("局部刷新的时候需要更新页面的数据块和一些JS操作");\r\n\
                //局部刷新的时候需要更新页面的数据块和一些JS操作\r\n\
                var html = \'\';\r\n\
                var id = \'\';\r\n\
                var elementObj = \'\';\r\n\
                for(var key in sonicUpdateData){\r\n\
                    id = key.substring(1,key.length-1);\r\n\
                    html = sonicUpdateData[key];\r\n\
                    elementObj = document.getElementById(id+\'Content\');\r\n\
                    elementObj.innerHTML = html;\r\n\
                }\r\n\
\r\n\
            }else if(sonicStatus == 4){\r\n\
                \r\n\
            }\r\n\
        });');
 } ;_p('    </script>\r\n\
</body>\r\n\
</html>');

return __p.join("");
};})();