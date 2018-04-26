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
    <h1>\r\n\
        现在的时间是：');
;_p(__e( (new Date()).toLocaleString() ));
;_p('    </h1>\r\n\
</body>\r\n\
</html>');

return __p.join("");
};})();