<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends MY_Controller
{
	
	function __construct()
	{
		parent::__construct();
		$this->load->model('Home_Model');
	}

	

	public function index()
	{
		$content = array(
			'view' => 'home2',
			'data' => $this->data
		);
		$this->load_template($this->header, $content, $this->footer);
	}


}
?>