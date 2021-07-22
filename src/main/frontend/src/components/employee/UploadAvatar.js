import React, { useState } from 'react';
import { Space, Avatar, Button, Upload, Modal } from 'antd';
import { UploadOutlined, UserOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import 'antd/dist/antd.css';
import api from '../../api';
import allActions from '../../redux/actions/index';

const UploadAvatar = ({ setImageUrl }) => {
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [fileList, setFileList] = useState([]);

    const handlePreview = (file) => {
        setPreviewImage(file.thumbUrl);
        setPreviewVisible(true);
    };
    const handleUpload = ({ fileList }) => {
        setFileList(fileList);

        
    };

    const handleSubmit = event => {
        event.preventDefault();

        let formData = new FormData();
        // add one or more of your files in FormData
        // again, the original file is located at the `originFileObj` key
        formData.append("file", fileList[0].originFileObj);

    };

    const handleCancel = () => setPreviewVisible(false);

    const uploadButton = (
        <div>
            <PlusCircleOutlined />
            <div className="ant-upload-text">Upload</div>
        </div>
    );

    return (
        <div>
            <Upload
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                onPreview={handlePreview}
                onChange={handleUpload}
                beforeUpload={() => false} // return false so that antd doesn't upload the picture right away
            >
                {uploadButton}
            </Upload>

            <Button onClick={handleSubmit} // this button click will trigger the manual upload
            >
                Submit
        </Button>

            <Modal
                visible={previewVisible}
                footer={null}
                onCancel={handleCancel}
            >
                <img alt="example" style={{ width: "100%" }} src={previewImage} />
            </Modal>
        </div>
    );
};

export default UploadAvatar;