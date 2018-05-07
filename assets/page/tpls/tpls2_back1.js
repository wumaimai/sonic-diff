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
;_p('    <title>tpl2</title>');
;_p( (require('./common/common_header'))() );
;_p('</head>\r\n\
<body>\r\n\
    <div>\r\n\
        <!--sonicdiff-data1-->\r\n\
        <h1>我什么都不会变:');
;_p(__e( data.chinaDate ));
;_p('</h1>\r\n\
        <!--sonicdiff-data1-end-->\r\n\
    </div>\r\n\
\r\n\
    <div>\r\n\
        <!--sonicdiff-data2-->\r\n\
        <h2>我只是数据发生变化</h2>');
 if(data.templateFlag){ ;_p('            <p>我的模板小小的改变了一下</p>');
 } ;_p('        <!--sonicdiff-data2-end-->\r\n\
    </div>\r\n\
\r\n\
    <div>\r\n\
        <!--sonicdiff-data3-->');
 var tokens = data.tplsData ;_p('        ');
 for(var i = 0; i < tokens.length; i++){ ;_p('            <p>我是第');
;_p(__e( i ));
;_p('个token:');
;_p(__e( tokens[i].token ));
;_p('</p>');
 } ;_p('        <!--sonicdiff-data3-end-->\r\n\
    </div>\r\n\
    <div>\r\n\
        \r\n\
    </div>\r\n\
</body>\r\n\
</html>');

return __p.join("");
};})();