function onload_cmb($cmbname,$url,$name_id,$id){
 $.ajax({     
      type:"get",
      url:$url+$name_id+'='+$id,         
      success: function(data){
       $('.'+$cmbname).html(data);

      }
});
 return $id;
}