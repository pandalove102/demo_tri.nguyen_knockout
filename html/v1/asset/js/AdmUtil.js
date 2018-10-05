//
// UTIL
//==========================================================

var AdmUtil = {
    loadPage: loadPage,
	//AJAX
    AjaxPost: AjaxPost,
    AjaxGet: AjaxGet,
    // HTML
    setVal: setVal,
    getVal: getVal,
    changeUrlWhenAddUrlParam: changeUrlWhenAddUrlParam,
	parseJSON: parseJSON,
	renderTemplate: renderTemplate,
	decodeEntities: decodeEntities,

    //DATE
    compareDateCurrent: compareDateCurrent,
    compareDateCurrentByMillisecond: compareDateCurrentByMillisecond,
    compare2Date: compare2Date,
    getDateCurrent: getDateCurrent,
    invertDate: invertDate,

    uuid: guid,

    //MATH
    roundNumber: roundNumber,
    getRandomInt: getRandomInt,

    //backbone
    applyBinding: applyBinding,
    initKnockoutController: initKnockoutController
    
}
/**
 * load page
 * @param {type} url
 * @param {type} $target
 * @returns {undefined}
 */
function loadPage($target, url, params, data) {
    var deferred = jQuery.Deferred();
    var keys = "";
    if (typeof params != 'undefined' && params != null) {
        keys = Object.keys(params);
        if (keys.length > 0) {
            Object.keys(params).map(function (key) {
                changeUrlWhenAddUrlParam(key, params[key]);
            })
        }
    }


    url = url + "?" + decodeURIComponent(window.location.search).replace("?", "");
    // window.history.replaceState('', '', url.replace("getList", ""));
    $.ajax({
        type: 'POST',
        url: url,
        data: data,
        success: function (data) {
            $target.html(data);
            deferred.resolve(keys);
        }
    });
    // return promise so that outside code cannot reject/resolve the deferred
    return deferred.promise();
}

/**
 * @author tri.nguyen
 * 
 * @param {type} url
 * @param {type} params
 * @returns {jqXHR}
 */
function AjaxGet(url, params, option, ischangeurl) {
    if (!_.isUndefined(params) && !_.isUndefined(params.data)) {
        var keys = "";
        if (_.isUndefined(ischangeurl) || (!_.isUndefined(ischangeurl) && ischangeurl == true)) {
            if (typeof params != 'undefined' && params != null) {
                keys = Object.keys(params);
                if (keys.length > 0) {
                    Object.keys(params).map(function (key) {
                        changeUrlWhenAddUrlParam(key, params[key]);
                    })
                }
            }
        }



        if (url.indexOf("?") != -1) {
            url = url + "&";
        } else {
            url = url + "?";
        }
        var param = (!_.isUndefined(params) && !_.isUndefined(params.data)) ? $.param(params.data) : "";
        var extend = {
            url: _BASE_URL + "/" + url + param,
            type: "GET",
            dataType: 'json',
            success: function () {
                //NProgress.start();
            }
        }

        console.log(_BASE_URL + "/" + url + param);

        if (option != undefined && _.isObject(option) && !_.isNull(option)) {
            extend = _.extend(option, extend);
        }

        return $.ajax(extend);
    } else {
        console.log("chay vo day");
        var keys = "";
        if (typeof params != 'undefined' && params != null) {
            keys = Object.keys(params);
            if (keys.length > 0) {
                Object.keys(params).map(function (key) {
                    changeUrlWhenAddUrlParam(key, params[key]);
                })
            }
        }


        if (url.indexOf("?") != -1) {
            url = url + "&";
        } else {
            url = url + "?";
        }
        var extend = {
            url: base_url + "/" + url + decodeURIComponent(window.location.search).replace("?", ""),
            type: "POST",
            dataType: 'json',
            success: function () {
                //NProgress.start();
            }
        }

        if (option != undefined && _.isObject(option)) {
            extend = _.extend(option, extend);
        }

        return $.ajax(extend);
    }





}
/**
 * @author tri.nguyen
 * @param {url} url
 * @param {type} option
 * @param {type} params
 * @returns {jqXHR}
 */
function AjaxPost(url, option, params) {
    NProgress.start();
    var keys = "";

    if (typeof params != 'undefined' && params != null) {
        keys = Object.keys(params);
        if (keys.length > 0) {
            Object.keys(params).map(function (key) {
                changeUrlWhenAddUrlParam(key, params[key]);
            })
        }
    }
    if (url.indexOf("?") != -1) {
        url = url + "&";
    } else {
        url = url + "?";
    }

    var extend = {
        url: base_url + "/" + url + decodeURIComponent(window.location.search).replace("?", ""),
        type: "POST",
        dataType: 'json',
        success: function () {
            NProgress.start();
        }
    }

    if (option != undefined && _.isObject(option)) {
        extend = _.extend(option, extend);
    }

    setTimeout(function () {
        NProgress.done();
    }, 2000);
    return $.ajax(extend).done(function () {
        NProgress.done();
    });
}

/*
 |--------------------------------------------------------------------------
 | get val
 |--------------------------------------------------------------------------
 |
 | @author  
 | @Date    06/09/2107
 |
 */
function getVal(name) {
    return $("[name=\"" + name + "\"]").val();
}
/*
 |--------------------------------------------------------------------------
 | set val
 |--------------------------------------------------------------------------
 |
 | @author  
 | @Date    06/09/2107
 |
 */
function setVal(name, val) {
    $("[name=\"" + name + "\"]").val(val);
}

/**
 * change url
 * 
 * @param {type} paramName
 * @param {type} paramValue
 * @returns {undefined}
 */
function changeUrlWhenAddUrlParam(paramName, paramValue) {
    window.history.replaceState('', '', addUrlParam(paramName, paramValue));
}

/**
 * load page
 * @param {type} url
 * @param {type} $target
 * @returns {undefined}
 */
// function loadPage($target, url, params, data) {
//     var deferred = jQuery.Deferred();
//     var keys = "";
//     if (typeof params != 'undefined' && params != null) {
//         keys = Object.keys(params);
//         if (keys.length > 0) {
//             Object.keys(params).map(function (key) {
//                 changeUrlWhenAddUrlParam(key, params[key]);
//             })
//         }
//     }


//     url = url + "?" + decodeURIComponent(window.location.search).replace("?", "");
//     //window.history.replaceState('', '', url.replace("getList", ""));
//     $.ajax({
//         type: 'GET',
//         url: url,
//         data: data,
//         success: function (data) {
//             $target.html(data);
//             deferred.resolve(keys);
//         }
//     });
//     // return promise so that outside code cannot reject/resolve the deferred
//     return deferred.promise();
// }

/**
 * Add a URL parameter (or changing it if it already exists)
 * @param {search} string  this is typically document.location.search
 * @param {key}    string  the key to set
 * @param {val}    string  value 
 */
function addUrlParam(paramName, paramValue)
{
    var url = window.location.href;
    var hash = location.hash;
    url = url.replace(hash, '');
    if (url.indexOf(paramName + "=") >= 0)
    {
        var prefix = url.substring(0, url.indexOf(paramName));
        var suffix = url.substring(url.indexOf(paramName));
        suffix = suffix.substring(suffix.indexOf("=") + 1);
        suffix = (suffix.indexOf("&") >= 0) ? suffix.substring(suffix.indexOf("&")) : "";
        url = prefix + paramName + "=" + paramValue + suffix;
    } else
    {
        if (url.indexOf("?") < 0)
            url += "?" + paramName + "=" + paramValue;
        else
            url += "&" + paramName + "=" + paramValue;
    }
    return url + hash;
}

/**
 * @date    30/09/2017
 * @param {type} template
 * @param {type} target
 * @param {type} remove
 * @param {type} params
 * @returns {undefined}
 */
function renderTemplate(template, target, remove, params) {
    var template = $(template).html();
    
    var compile = _.template(template);

    var extend = {
        convertTimestamp2ISO: function (val) {
            return AdmUtil.convertTimestamp2ISO(val)
        },
        compareDateCurrent: function (date) {
            return AdmUtil.compareDateCurrent(date);
        },
        invertDate: function (strDate, isInvert) {
            return AdmUtil.invertDate(strDate, isInvert);
        },
        getRandomInt: function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        },
        addGetParam2Url: function ($url, $params) {
            return AdmUtil.addGetParam2Url($url, $params);
        }
    };

    if (params != undefined && _.isObject(params)) {
        extend = _.extend(params, extend);
    }

    var $target = $(target);
    if (!_.isUndefined(remove) && _.isBoolean(remove) && remove) {
        $target.html("")
    }
    $target.append(compile(extend));
}

/**
 * @param {type} timestamp
 * @param {type} separator
 * @returns {String}
 */
function convertTimestamp2ISO(timestamp) {
    var dateObj = new Date(timestamp);
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var newdate = day + "/" + month + "/" + year;
    return newdate;
}

/**
 * @date    29/09/2017
 * @param {type} date
 * @returns {Number}
 */
function compareDateCurrent(dates) {
    var q = new Date(DATE_CURRENT);
    var m = q.getMonth();
    var d = q.getDate();
    var y = q.getFullYear();
    console.log(d, m, y);
    var date = new Date(y, m, d);


    var parts = dates.split("/");
    console.log(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
    var d1 = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));

    if (date < d1)
    {
        return 1;
    } else if (date.getTime() == d1.getTime())
    {
        return 0;
    } else {
        return -1;
    }

}

/**
 * 
 * @returns {String}
 */
function getDateCurrent() {
    var q = new Date(DATE_CURRENT);
    var m = q.getMonth() + 1;
    var d = q.getDate();
    var y = q.getFullYear();
    return y + "-" + m + "-" + d;
}

/**
 * 
 * @param {type} $strDate
 * @param {type} isInvert
 *      true convert 12/12/1027 --> 2017-12-12
 *      false convert 2017-12-12 --> 12/12/1027
 * @returns {undefined}
 */
function invertDate($strDate, isInvert) {
    if (_.isString($strDate) && !_.isEmpty($strDate)) {
        if (!_.isUndefined(isInvert) && _.isBoolean(isInvert)) {
            var dates = $strDate.split("/");
            return dates[2] + "-" + dates[1] + "-" + dates[0];
        } else {
            console.log($strDate);
            var dates = $strDate.split("-");
            console.log(dates);
            return dates[2] + "/" + dates[1] + "/" + dates[0];
        }
    }
    return "";

}

/**
 * @description random range
 * @param {type} min
 * @param {type} max
 * @returns {Number}
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

/**
 * @description add param to url
 * @param {type} $url
 * @param {type} $params
 * @returns {unresolved}
 */
function addGetParam2Url($url, $params)
{
    var keys = _.keys($params);
    for (i = 0; i < keys.length; i++) {
        var key = keys[i];
        var $param = $params[key];
        if (_.isString($param)) {
            if ($param === "auto") {
                $param = HaloUtil.urlParam(key);
            }

            if ($url.indexOf("?") != -1) {
                $url += "&" + key + "=" + $param;
            } else {
                $url += "?" + key + "=" + $param;
            }
        }
    }
    return $url;
}

/**
 * parseJSON
 * @param {type} params
 * @returns {Array|Object}
 */
function parseJSON(params) {
    if (!_.isNull(params) && _.isString(params) && !_.isEmpty(params)) {
        return JSON.parse((decodeEntities(params)));
    }
    return null;
}

/**
 * @author locnt
 * @param {type} timestamp
 * @returns {Number}
 */
function compareDateCurrentByMillisecond(timestamp) {

    var current_date = TIME_MILLIONSECONDS;
    console.log(current_date, timestamp);
    if (current_date < timestamp)
    {
        return 1;
    } else if (current_date == timestamp)
    {
        return 0;
    } else {
        return -1;
    }

}

/**
 * 
 * @param {type} startdate "11-01-2013"
 * @param {type} todate "11-01-2013"
 * @returns {undefined}
 */
function compare2Date(startdate, todate) {
    var d1 = new Date(startdate);
    var d2 = new Date(todate);
    if (d1 < d2) {
        return true;
    }
    return false;
}

/**
 * @author locnt
 * @description round deciment
 * @param {type} value
 * @param {type} decimals
 * @returns {unresolved}
 */
function roundNumber(value, decimals) {
    if (_.isUndefined(decimals)) {
        decimals = 2;
    }
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

/**
 * @param {type} str
 * @param {type} safeEscape
 * @returns {decodeEntities.el.innerText|.document@call;createElement.innerText|el.innerText|decodeEntities.el.textContent|.document@call;createElement.textContent|el.textContent}
 */
function decodeEntities(str, safeEscape) {

    var el = document.createElement('div');
    if (str && typeof str === 'string') {

        str = str.replace(/\</g, '&lt;');
        el.innerHTML = str;
        if (el.innerText) {

            str = el.innerText;
            el.innerText = '';
        } else if (el.textContent) {

            str = el.textContent;
            el.textContent = '';
        }

        if (safeEscape)
            str = str.replace(/\</g, '&lt;');
    }
    return str;
}

/**
 * binding for model view
 * @param {type} modelView
 * @param {type} targetId
 * @returns {undefined}
 */
function applyBinding(modelView, targetId) {
    ko.applyBindings(modelView, $('#' + targetId)[0]);
}

function initKnockoutController(callback) {
    window.onhashchange = function () {
        callback(window.location.href);
    };

    window.addEventListener("beforeunload", function (e) {
        // do something
        callback(window.location.href);
    }, false);
}

/*
 |--------------------------------------------------------------------------
 | escape GENERATE UUID
 |--------------------------------------------------------------------------
 |
 | @author  LOC NGUYE
 | @Date    06/09/2107
 |
 */
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
}