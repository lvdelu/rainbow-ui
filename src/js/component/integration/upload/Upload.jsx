//require('../../../../../bower_components/bootstrap-fileinput/css/fileinput.css');
//require('../../../../../bower_components/bootstrap-fileinput/js/fileinput');

import "../../../../../plugin/bootstrap-fileinput/css/fileinput.css";
import "../../../../../plugin/bootstrap-fileinput/js/fileinput";

//require('../../../../../bower_components/blueimp-file-upload/js/vendor/jquery.ui.widget');
//require('../../../../../bower_components/blueimp-file-upload/js/jquery.iframe-transport');
//require('../../../../../bower_components/blueimp-file-upload/js/jquery.fileupload');//1056
//require('../../../../../bower_components/blueimp-file-upload/css/jquery.fileupload.css');

import Input from "../../input/Input";
import ELUtil from "../../../util/ELUtil";
import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Upload Component Class
//-----------------------------------------------------------------------------------------------
export default class Upload extends Input {
	
	/*
	<noscript>
	        	<input type="hidden" name="redirect" value="https://blueimp.github.io/jQuery-File-Upload/" />
	        </noscript>
	        
	        <button type="submit" className="btn btn-primary start">
	                    <i className="glyphicon glyphicon-upload"></i>
	                    <span>Start upload</span>
	                </button>
	                
	                <button type="reset" className="btn btn-warning cancel">
	                    <i className="glyphicon glyphicon-ban-circle"></i>
	                    <span>Cancel upload</span>
	                </button>
	                
	                <button type="button" className="btn btn-danger delete">
	                    <i className="glyphicon glyphicon-trash"></i>
	                    <span>Delete</span>
	                </button>
	                <input type="checkbox" className="toggle" />
	                <span className="fileupload-process"></span>
	
	render2: function(){
		return (
			 <div id="fileupload" className="form-control"
			 	action="//jquery-file-upload.appspot.com/" method="POST" enctype="multipart/form-data">
	        
	        <div className="fileupload-buttonbar">
	                <span className="btn btn-success fileinput-button fileupload">
	                    <i className="glyphicon glyphicon-plus"></i>
	                    <span>Add files...</span>
	                    <input type="file" name="files[]" multiple />
	                </span>
	                <div className="fileupload-progress">
			                <div className="progress progress-striped active" role="progressbar" aria-valuemin="11" aria-valuemax="100" style={{margin: '0px'}}>
			                    <div className="progress-bar progress-bar-success" style={{width: '12%'}}></div>
			                </div>
			            </div>
	        </div>
	    </div>
		);
	},*/
	
	renderInput(){
		return (
			<input id={this.componentId} type="file" name="files" multiple className="form-control" />
		);
	}
	
	componentDidMount(){
		var _self = this;
		
		$("#" + this.componentId).fileinput({
			showUpload: true,
			previewFileType: 'any'
		});
		
		/*
		$("#" + this.componentId).uploadify({
                auto:false, 
                //����true or false����ֵ����Ϊtrueʱѡ���ļ�����Զ��ϴ���Ϊfalseʱֻ���ѡ����ļ����ӽ����е������ϴ�����ʱֻ��ʹ��upload�ķ��������ϴ���������autoʱĬ��Ϊtrue
                buttonClass: "some-class", 
                //�����ϴ���ť��class
                buttonCursor: 'hand',
                //��������Ƶ���ť�ϵĿ�״����������ֵ'hand'��'arrow'(���κͼ�ͷ)
                buttonImage: 'img/browse-btn.png', 
                //����ͼƬ��ť��·��������İ�ť��һ��ͼƬʱ�������ʹ��Ĭ�ϵ���ʽ���㻹���Դ���һ�������ͣ״̬����Ҫ������״̬��ͼƬ����һ�𣬲���Ĭ�ϵķ����棬��ͣ״̬�ķ������棨ԭ�ĺ��ѱ�ﰡ��you can create a hover state for the button by stacking the off state above the hover state in the image������ֻ��һ���Ƚϱ�����ѡ���õķ������ǰ�ͼƬд��CSS���档
                buttonText: '<div>ѡ���ļ�</div>',
                //���ð�ť���֡�ֵ�ᱻ����html��Ⱦ������Ҳ���԰���html��ǩ
                checkExisting: '/uploadify/check-exists.php',
                //����һ���ļ�·�������ļ������Ҫ�ϴ����ļ����Ƿ��Ѿ�����Ŀ��Ŀ¼�С�����ʱ����1��������ʱ����0(Ӧ����Ҫ����Ϊ��̨���жϰ�)��Ĭ��Ϊfalse
                debug: false,
                //������ر�debugģʽ
                fileObjName:'filedata',
                //�����ں�̨�ű�ʹ�õ��ļ������ٸ����ӣ���php�У�������ѡ������Ϊ'the_files',�����ʹ��$_FILES['the_files']��ȡ����Ѿ��ϴ����ļ���
                fileSizeLimit:'100MB',
                //�����ϴ��ļ����������ֵ�����ֵ������һ�����ֻ����ַ�����������ַ���������һ����λ��B,KB,MB,GB���������������Ĭ�ϵ�λΪKB������Ϊ0ʱ��ʾ������
                fileTypeExts: '*.*',
                //���������ϴ����ļ���չ����Ҳ�����ļ����ͣ������ֶ������ļ��������ƹ����ּ���İ�ȫ��飬������Ӧ��ʼ���ڷ�����м���ļ����͡���������չ��ʱ�÷ֺŸ���('*.jpg;*.png;*.gif')
                fileTypeDesc: 'All Files',
                //��ѡ�ļ������������ֵ�������ļ���������е��ļ���������ѡ���С���chrome�²�֧�֣�����ʾΪ'�Զ����ļ�',ie and firefox�¿���ʾ������
                //formData: {
               ///     timestamp: '<?php echo $timestamp;?>',
               //     token: '<?php echo md5('unique_salt' . $timestamp);?>'
               // },
                //ͨ��get��post�ϴ��ļ�ʱ���˶����ṩ��������ݡ�����붯̬������Щֵ��������onUploadStartg�¼���ʹ��settings�ķ������á��ں�̨�ű���ʹ�� $_GET or $_POST arrays (PHP)��ȡ��Щֵ���������ο�д����http://www.uploadify.com/documentation/uploadify/formdata/
                height: 30,
                //���ð�ť�ĸ߶�(��λpx)��Ĭ��Ϊ30.(��Ҫ��ֵ��д�ϵ�λ������Ҫ��һ��������widthҲһ��)
                width: 120,
                //���ð�ť���(��λpx)��Ĭ��120
                itemTemplate:false,
                //ģ����󡣸����ӵ��ϴ������е�ÿһ��ָ�������htmlģ�塣ģ���ʽ�뿴����http://www.uploadify.com/documentation/uploadify/itemtemplate/
                method:'post',
                //�ύ�ϴ��ļ��ķ���������post��get����ֵ��Ĭ��Ϊpost
                multi: false,
                //�����Ƿ�����һ��ѡ�����ļ���trueΪ����false������
                overrideEvents: [],
                //��д�¼��������¼����Ƶ�������Ϊ�����������õ��¼������Ա��û���д����
                preventCaching:true,
                //�Ƿ񻺴�swf�ļ���Ĭ��Ϊtrue�����swf��url��ַ����һ����������������Ͳ��ᱻ���档(��Щ�����������swf�ļ��ͻᴥ������������¼�--by rainweb)
                progressData: 'percentage',
                //�����ļ��ϴ�ʱ��ʾ���ݣ��С�percentage�� or ��speed����������(�ٷֱȺ��ٶ�)
                queueID: false,
                //�����ϴ�����DOMԪ�ص�ID���ϴ�����Ŀ�����ӽ����ID��DOM�С�����Ϊfalseʱ����Զ����ɶ���DOM��ID��Ĭ��Ϊfalse
                queueSizeLimit: 999,
                //����ÿһ���ϴ������е��ļ�������ע�Ⲣ���������ܵ��ϴ��ļ�����������uploadLimit��.������ӽ������е��ļ������������ֵ�����ᴥ��onSelectError�¼���Ĭ��ֵΪ999
                removeCompleted: true,
                //�Ƿ��Ƴ����������Ѿ�����ϴ����ļ���falseΪ���Ƴ�
                removeTimeout: 3,
                //�����ϴ���ɺ�ɾ�����ļ����ӳ�ʱ�䣬Ĭ��Ϊ3�롣���removeCompletedΪfalse�Ļ�����û������
                requeueErrors: false,
                //�����ϴ���������Ϊ�������ϴ�ʧ�ܵ��ļ��Ƿ����¼���������ϴ�
                successTimeout: 30,
                //�����ļ��ϴ���ȴ���������Ӧ���������������ʱ�䣬���ᱻ��Ϊ�ϴ��ɹ���Ĭ��Ϊ30��
                swf: 'uploadify.swf',
                //swf�����·������д��
                uploader: 'uploadify.php',
                //�������˽ű��ļ�·������д��
                uploadLimit: 999
                //�ϴ��ļ����������ﵽ�򳬳��������ᴥ��onUploadError������Ĭ��999
            });*/

	}
	
	componentDidMount2(){
		var _self = this;
		
		//$("#" + componentId).fileupload('add', {files: filesList});
		
		$("#" + this.componentId).fileupload({
		    url: "files/upload",
		    autoUpload: Util.parseBool(_self.props.autoUpload),
		    //dataType: 'json',
		    formData: {param1:"p1", param2:"p2"},
		    
		    done: function(event, result){
		    	console.log("==done==" + JSON.stringify(result.result));
		    },
		    progressall: function (event, data) {
		    	console.log("==progressall==");
		    },
		    success: function(result, textStatus, jqXHR){
					console.log("==success==");
				},
				error: function(jqXHR, textStatus, errorThrown){
					console.log("==error==");
				},
				complete: function(result, textStatus, jqXHR){
					console.log("==complete==");
				}
		});
	}
	
};


/**
 * Upload component prop types
 */
Upload.propTypes = $.extend({}, Input.propTypes, {
	id: React.PropTypes.string.isRequired,
	url: React.PropTypes.string,
	autoUpload: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	multiple: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string])
});

/**
 * Get Upload component default props
 */
Upload.defaultProps = $.extend({}, Input.defaultProps, {
	autoUpload: true
});

