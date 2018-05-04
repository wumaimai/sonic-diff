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
        <!--sonicdiff-data1-->\r\n\
        <h1>\r\n\
            新中国成立的时间是：');
;_p(__e(data.dataDate));
;_p('        </h1>\r\n\
        <!--sonicdiff-data1-end-->\r\n\
    </div>\r\n\
    <div>\r\n\
        <!--sonicdiff-data2-->\r\n\
            <h2>\r\n\
                现在的时间是:');
;_p(__e( (new Date()).toLocaleString() ));
;_p('            </h2>\r\n\
        <!--sonicdiff-data2-end-->\r\n\
    </div>\r\n\
    \r\n\
</body>\r\n\
</html>');

return __p.join("");
};})();