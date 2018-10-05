/*
 |--------------------------------------------------------------------------
 | Diglog
 |--------------------------------------------------------------------------
 | $ component
 | @author  
 | @Date    27/10/2017
 |
 */
var Dialog = {
    /**
     * show dialog success
     * 
     * @returns {unresolved}
     */
    success: function (text) {
        // Remove current toasts using animation
        toastr.clear();
        // Display an info toast with no title
        toastr.success('Cập nhật thành công', {timeOut: 2000});
//        return swal({
//            text: 'Cập nhật thành công',
//            type: 'success',
//            timer: 3000,
//            showCloseButton: false,
//            showCancelButton: false,
//        }).then(
//                function () {},
//                // handling the promise rejection
//                        function (dismiss) {
//                            if (dismiss === 'timer') {
//                                console.log('I was closed by the timer')
//                            }
//                        })
    },
    message: function (text) {
        // Remove current toasts using animation
        toastr.clear();
        // Display an info toast with no title
        toastr.error(text, {timeOut: 2000});
    },
    /**
     * show dialog success
     * 
     * @returns {unresolved}
     */
    error: function (text) {
        toastr.clear();
        // Display an info toast with no title
        toastr.error('Cập nhật thất bại', {timeOut: 2000});

    },
    /**
     * show dialog delete
     * 
     * @returns {unresolved}
     */
    delete: function () {
        return swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function () {
            swal(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                    )
        })
    },
    deleteSuccess: function (text) {
        toastr.clear();
        toastr.success('Xóa thành công', {timeOut: 5000});
    },
    deleteError: function (text) {
        toastr.clear();
        toastr.error('Xóa thất bại. Vui lòng thử lại sau.', {timeOut: 5000});
    },
    bookError: function (text) {
        toastr.clear();
        toastr.error('Có lỗi xảy ra. Vui lòng thử lại !', {timeOut: 5000});

    },
    cancelSuccess: function (text) {
        toastr.clear();
        toastr.success('Cancel Successful', {timeOut: 5000});
    },
    cancelError: function (text) {
        toastr.clear();
        toastr.success('Cancel Error. Please try later !', {timeOut: 5000});
    },
    cancelValidate: function (text) {
        toastr.clear();
        toastr.error('Please enter a reason !', {timeOut: 5000});
    },
    addFeeValidate: function (text) {
        toastr.clear();
        toastr.error('Thông tin không đúng. Vui lòng kiểm tra lại !', {timeOut: 5000});
    },

    
    
}