// main.js
function getUrlParam(name) {
    //构造一个含有目标参数的正则表达式对象
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //匹配目标参数
    var r = window.location.search.substr(1).match(reg);
    //返回参数值
    if (r != null) {
        return decodeURI(r[2]);
    }
    console.error("找不到parameter: " + name);
    set_info("找不到parameter " + name);
    return "神秘网站";
    //return null;
}
function set_info(content) {
    sys_info = content;
    if (content === "") {
        document.getElementById("sys_info").innerHTML = "系统提示: " + content;
    }
    document.getElementById("sys_info").innerHTML = "系统提示: " + content;
}
function go_to(url) {
    console.log("向用户发出跳转到 ", url , "的请求");
    const res = window.confirm("确定要跳转吗? ");
    if (res) {
        window.location.href = url;
    } else {
        console.info("用户已取消跳转");
    }

}

var to_name = getUrlParam("to_name");
var to_url = getUrlParam("url");
document.getElementById("t_title").innerHTML = "跳转到: " + to_name;
document.getElementById("to_id1").innerHTML = to_name;
document.getElementById("to_id1").title = "完整链接: " + to_url;
document.getElementById("to_url1").innerHTML = to_url;
var sys_info = "";



