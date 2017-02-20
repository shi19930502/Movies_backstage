var ajax = function(params) {
    var paramStr = "";
    var fetchObj;
    for (var key in params.data) {
        paramStr += key + "=" + params.data[key] + "&";
    }
    if (params.type != "post" && params.type != "POST") {
        params.url += "?" + paramStr;
        fetchObj = fetch(params.url, {
            credentials: 'include'
        });
    } else {
        fetchObj = fetch(params.url, {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: paramStr,
            credentials: 'include'
        });
    }
    fetchObj.then(function(res) {
        if (res.ok) {
            res.text().then(function(data) {
                try {
                    params.success(JSON.parse(data));
                } catch (e) {
                    console.log(e)
                    params.success(data);
                }

            });
        }
    });

}
var confirmID = function(ary1, ary2) {
    let newAry = [];
    for (var i = 0; i < ary1.length; i++) {
        for (var j = 0; j < ary2.length; j++) {
            if (ary1[i] == ary2[j]) {
                newAry.push(ary1[i])
            }
        }
    }
    return newAry;
}
export {
    ajax,
    confirmID
}