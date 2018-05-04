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
<body onload="init()">\r\n\
    <div>\r\n\
        <!--sonicdiff-data1-->\r\n\
        <p id="data1"></p>\r\n\
        <!--sonicdiff-data1-end-->\r\n\
    </div>\r\n\
    <div>\r\n\
        <!--sonicdiff-data2-->\r\n\
        <p id="data2"></p>\r\n\
        <!--sonicdiff-data2-end-->\r\n\
    </div>\r\n\
    <div>\r\n\
        <!--sonicdiff-data3-->\r\n\
        <p id="data3"></p>\r\n\
        <!--sonicdiff-data3-end-->\r\n\
    </div>\r\n\
    <div>\r\n\
        <!--sonicdiff-data4-->\r\n\
        <p id="data4"></p>\r\n\
        <!--sonicdiff-data4-end-->\r\n\
    </div>\r\n\
    <div>\r\n\
        <!--sonicdiff-data5-->\r\n\
        <p id="data5"></p>\r\n\
        <!--sonicdiff-data5-end-->\r\n\
    </div>\r\n\
    <div>\r\n\
        <!--sonicdiff-data6-->\r\n\
        <p id="data6"></p>\r\n\
        <!--sonicdiff-data6-end-->\r\n\
    </div>\r\n\
    <div>\r\n\
        <!--sonicdiff-data7-->\r\n\
        <p id="data7"></p>\r\n\
        <!--sonicdiff-data7-end-->\r\n\
    </div>\r\n\
    <div>\r\n\
        <!--sonicdiff-data8-->\r\n\
        <p id="data8"></p>\r\n\
        <!--sonicdiff-data8-end-->\r\n\
    </div>\r\n\
    <div>\r\n\
        <!--sonicdiff-data9-->\r\n\
        <p id="data9"></p>\r\n\
        <!--sonicdiff-data9-end-->\r\n\
    </div>\r\n\
    <div>\r\n\
        <!--sonicdiff-data10-->\r\n\
        <p id="data10"></p>\r\n\
        <!--sonicdiff-data10-end-->\r\n\
    </div>\r\n\
\r\n\
\r\n\
    <script>\r\n\
        function init(){\r\n\
            var token = \'\';\r\n\
            var id = \'\';\r\n\
            var elementObj = \'\';\r\n\
            var results = \'');
;_p( JSON.stringify(data.tplsData) );
;_p('\';\r\n\
            results = JSON.parse(results);\r\n\
            for(var key in results){\r\n\
                var result = results[key]\r\n\
                id = result.id;\r\n\
                token = result.token;\r\n\
                elementObj = document.getElementById(\'data\'+id);\r\n\
                elementObj.innerText = token;\r\n\
            }\r\n\
        }\r\n\
    </script>\r\n\
</body>\r\n\
</html>');

return __p.join("");
};})();