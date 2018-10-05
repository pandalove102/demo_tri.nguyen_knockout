<?php

defined('BASEPATH') OR exit('No direct script access allowed');
/**
 * E100_model
 *
 * @package     ADM FRONTEND
 * @subpackage  STAFF
 * @category   	TYPE EVENT
 * @author      Tri Nguyen 
 * @link        http://example.com
 */
class Home_Model extends MY_Model {
	public function __construct() {
      parent::__construct();

    }
    public function get_find_all($param = array())
    {
    	// if(isset($this->session->userdata['b500'])) {
    	// 	$data= $this->session->userdata['b500'];
    	// 	return $data;
    	// }
    	$data = $this->queryApi(METHOD_GET, B500_FIND_ALL, SERVER_API_STAFF,$param);
    	// $this->session->set_userdata('b500', $data);
    	return $data;
    }

    public function get_find_all_b400($param = array()){
    	$data = $this->queryApi(METHOD_GET, B400_FIND_ALL, SERVER_API_STAFF,$param);
    	return $data;
    }

    public function approve_b200($param = array()){    	
    	$data = $this->queryApi(METHOD_POST, B200_APPROVE, SERVER_API_STAFF,$param);    	
    	return $data;
    }
    /**
     * INSERT B200
     * @author TRI NGUYEN
     * DATE: 29/08/2017
     *
     */
    public function create_b200($param = array())
    {
        $data = $this->queryApi(METHOD_POST, B200_CREATE, SERVER_API_STAFF, $param, 'json');
        return $data;
    }

    public function get_find_by_id_b200($param = array())
    {
        $data = $this->queryApi(METHOD_GET, B200_FIND_BY_ID, SERVER_API_STAFF, $param);
        return $data;
    }

    public function delete_b200($param = array())
    {
        $data = $this->queryApi(METHOD_POST, B200_DELETE, SERVER_API_STAFF, $param);
        return $data;
    }
    /**
     * Danh sách sinh viên đăng ký môn học kèm người cố vấn
     *
     * @author tri.nguyen
     * @date 23/11/2017
     * @return {array}
     */
    public function get_stu_reg_fw_advisor($param = array())
    {
        $data = $this->queryApi(METHOD_GET, FIND_STUDENT_REG_FW_ADVISOR, SERVER_API_STAFF, $param);
        return $data;
    }
    /**
     * Xét duyệt môn học đăng ký
     *
     * @author tri.nguyen
     * @date 23/11/2017
     * @return {array}
     */
    public function b300_approve_all($param = array())
    {
        $data = $this->queryApi(METHOD_POST, B300_APPROVE_ALL, SERVER_API_STAFF, $param);
        return $data;
    }
    /**
     * Danh sách sinh viên đăng ký. Danh cho P.ĐT và KT xét duyệt
     *
     * @author tri.nguyen
     * @date 24/11/2017
     * @return {array}
     */
    public function b300_stu_reg_of_account_office($param = array())
    {
        $data = $this->queryApi(METHOD_GET, FIND_STU_REG_OF_ACCOUNT_OFFICE, SERVER_API_STAFF, $param);
        return $data;
    }
    /**
     * Danh sách sinh viên đăng ký. Danh cho P.ĐT và KT xét duyệt
     *
     * For Medical
     * @author tri.nguyen
     * @date 24/11/2017
     * @return {array}
     */
    public function b300_stu_reg_of_account_office_sm($param = array())
    {
        $data = $this->queryApi(METHOD_GET, FIND_STU_REG_OF_ACCOUNT_OFFICE_SM, SERVER_API_STAFF, $param);
        return $data;
    }
    /**
     * Danh sách môn học được mở ở từng học kỳ trong năm
     *
     * @author tri.nguyen
     * @date 24/11/2017
     * @return {array}
     */
    public function find_course_open_semester($param = array())
    {
        $data = $this->queryApi(METHOD_GET, FIND_COURSE_OPEN_SEMESTER, SERVER_API_STAFF, $param);
        return $data;
    }
    
    /**
     * Danh sách học phí của sinh viên
     *
     * @author tri.nguyen
     * @date 08/12/2017
     * @return {array}
     */
    public function b300_find_fees($param = array())
    {
        $data = $this->queryApi(METHOD_GET, B300_FIND_FEES, SERVER_API_STAFF, $param);
        return $data;
    }
    /**
     * Add danh sách chương trình đào tạo
     *
     * @author tri.nguyen
     * @date 23/12/2017
     * @return {array}
     */
    public function find_course_not_program_academic($param = array())
    {
        $data = $this->queryApi(METHOD_GET, FIND_COURSE_NOT_PROGRAM_ACADEMIC, SERVER_API_SERVICE, $param);
        return $data;
    }
    /**
     * Import C100
     * @author Tri
     * @date 15/11/2017
     * 
     */
    public function insert_batch($param)
    {
        $data = $this->queryApi(METHOD_POST, C100_IMPORT, SERVER_API_STAFF, $param);
        return $data;
    }
    /**
     * Danh sach sinh vien dang ky mon học theo giang vien
     *
     * @author luan.tran
     * @date 23/12/2017
     * @return {array}
     */

    public function findStudentRegistedOfLecturer($param = array())
    {
        $data = $this->queryApi(METHOD_GET, B300_FIND_STUDENT_REG_LECTURER, SERVER_API_STAFF, $param);
        return $data;
    }
    /**
     * Danh sách môn học dành cho khoa Y (b200)
     *
     * @author tri.nguyen
     * @date 08/1/2018
     * @return {array}
     */

    public function findCourseClassOpenSM($param = array())
    {
        $data = $this->queryApi(METHOD_GET, findCourseClassOpenSM, SERVER_API_STAFF, $param);
        return $data;
    }

    /**
     * For update value by JSON
     *
     * @author tri.nguyen
     * @date 09/01/2018
     */
    public function b200_create_sm($param = array())
    {
        $data = $this->queryApi(METHOD_POST, b200_create_sm, SERVER_API_STAFF, $param, 'json');
        return $data;
    }

    /**
     * Insert b500
     *
     * @author tri.nguyen
     * @date 05/03/2018
     */
    public  function b500_create($param = array())
    {
        $data = $this->queryApi(METHOD_POST, B500_CREATE, SERVER_API_STAFF, $param);
        return $data;
    }
    /**
     * Delete b500
     *
     * @author tri.nguyen
     * @date 05/03/2018
     */
    public  function b500_delete($param = array())
    {
        $data = $this->queryApi(METHOD_POST, B500_DELETE, SERVER_API_STAFF, $param);
        return $data;
    }
    public  function b500_find_by_id($param = array())
    {
        $data = $this->queryApi(METHOD_GET, B500_FIND_ID, SERVER_API_STAFF, $param);
        return $data;
    }
}
?>