<?php
defined('BASEPATH') OR exit('No direct script access allowed');
 
class MY_Controller extends MX_Controller {
 
	function __construct() {
		parent::__construct();
  		
	}

	public $data = array();
	public $header = array();
	public $footer = array();
	
	public function load_template($header, $content, $footer)
	{
		# code...
		$template['header'] = $this->load->view('template/v1/html/header',$header, TRUE);
		if (isset($content['view'])) 
        {
            $template['content'] = $this->load->view($content['view'], $content, TRUE);
        }
		$template['footer'] = $this->load->view('template/v1/html/footer',$footer, TRUE);

		$this->load->view('template/v1/html/template', $template);
	}
}
?>