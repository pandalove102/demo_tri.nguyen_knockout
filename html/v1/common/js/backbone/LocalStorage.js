var LocalStorage = {
    setItem: setItem,
    removeAll: removeAll,
    deleteItembyKey: deleteItembyKey,
    getItemTour: getItemTour,
    addItemByParameter: addItemByParameter,
    updateItemByParameter: updateItemByParameter,
    deleteItemByParameter: addItemByParameter,
    getItemByParameter: getItemByParameter
}

/**
 * 
 * @param {type} parameter
 * @param {type} data
 * @returns {undefined}
 */
function updateItemByParameter(parameter, data){
    if(HaloUtil.urlParam(parameter) != null){
        if(!_.isObject(data)){
             setItem(HaloUtil.urlParam(parameter), JSON.stringify(data));
        }else{
             setItem(HaloUtil.urlParam(parameter), data);
        }
    }
}
/**
 * @author locnt
 * @returns {undefined}
 */
function deleteItemByParameter(parameter){
    if(HaloUtil.urlParam(parameter) != null){
        deleteItembyKey(HaloUtil.urlParam(parameter));
    }
}
/**
 * @author locnt
 * @param {type} parameter
 * @returns {Object|Array}
 */
function getItemByParameter(parameter){
    if(HaloUtil.urlParam(parameter) != null){
        return getItemTour(HaloUtil.urlParam(parameter));
    }
    return null
}
/**
 * @author locnt
 * @param {type} parameter
 * @param {type} data
 * @returns {String}
 */
function addItemByParameter(parameter, data, status) {
    if(!_.isUndefined(parameter) && _.isString(parameter)){
        if(!_.isUndefined(status) && _.isBoolean(status)){
            deleteItemByParameter(parameter);
        }
        
        var uuid = HaloUtil.uuid();
        setItem(uuid, data);
        HaloUtil.changeUrlWhenAddUrlParam(parameter, uuid);
        return uuid;
    }
    return null;
}
/**
 * 
 * @param {type} key
 * @returns {undefined}
 */
function deleteItembyKey(key) {
    localStorage.removeItem(key);
}
/**
 * remove all
 * @returns {undefined}
 */
function removeAll() {
    localStorage.clear();
}
/**
 * @author locnt
 * @param {type} id
 * @param {type} data
 * @returns {undefined}
 */
function setItem(id, data) {
    if (_.isObject(data)) {
        localStorage.setItem(id, JSON.stringify(data));
    } else {
        localStorage.setItem(id, data);
    }
}

/**
 * @author locnt
 * @param {type} id
 * @returns {Array|Object}
 */
function getItemTour(id) {
    var retrievedObject = localStorage.getItem(id);
    if (!_.isNull(retrievedObject) && retrievedObject != "" && retrievedObject.length > 2) {
        return JSON.parse(retrievedObject);
    }
    return null;

}