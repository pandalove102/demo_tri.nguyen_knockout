/*
 * @author: tri.nguyen
 * @date: 07/12/2017
 */
(function () {
    var $room_types = $(".main-room-types .room_types_list");

    HaloUtil.loadPage($room_types, base_url + "/room/ajax_load_room_types_list", null, {
        param: ""
    }).then(function () {

    });
    /*Load ajax room type information tab*/
    var $room_types_detail_tab = $(".main-room-types #pills-room-type-details-tab");

    HaloUtil.loadPage($room_types_detail_tab, base_url + "/room/ajax_load_room_types_detail_information", null, {
        param: ""
    }).then(function () {

    });
    // /*Load ajax room type information tab*/
    /*
     HaloUtil.loadPage($room_types_detail_tab, base_url + "/room/ajax_load_room_types_detail_galleries", null, {
     param: ""
     }).then(function () {
     
     });
     */
    // /*Load ajax room type information tab*/
    //  var $room_types_detail_tab = $(".main-room-types #pills-room-type-details-tab");

    //  HaloUtil.loadPage($room_types_detail_tab, base_url + "/room/ajax_load_room_types_detail_information", null, {
    //      param: ""
    //  }).then(function () {

    //  });
}).call(this);
