var ServicesHotel = {
    
    create_room_rule: function (params) {
        return AdmUtil.AjaxPost("room/ajax_create_room_rule",
                {
                    data: params
                }
        );
    },
    find_room_type_by_id: function (params) {
        return AdmUtil.AjaxGet("room/ajax_find_room_type_by_id", {data: params} ,null, false );
    }
}