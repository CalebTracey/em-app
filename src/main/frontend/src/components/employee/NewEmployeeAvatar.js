import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import api from '../../api';
import allActions from '../../redux/actions/index';
import { useDispatch } from 'react-redux';


const NewEmployeeAvatar = () => {
    const [loading, setLoading] = useState(false)
    const [imageUrl, setImageUrl] = useState(null);
    const dispatch = useDispatch();

    const getBase64 = (img, callback) => {

        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }


    const handleChange = event => {
        event.preventDefault();
        if (event.target.files[0].status === 'uploading') {
            setLoading(true);
            return;
        }
        if (event.target.files[0].status  === 'done') {
            // Get this url from response in real world.
            getBase64(event.target.files[0], imageUrl => {

                setImageUrl(imageUrl);
                
                setLoading(false);
            }

            );
        }
    };

    return (
        <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={() => false}
            onChange={handleChange}
        >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> :
                <div>
                    {loading ? <LoadingOutlined /> : <PlusOutlined />}
                    <div style={{ marginTop: 8 }}>Upload</div>
                </div>}
        </Upload>
    );
}

export default NewEmployeeAvatar;