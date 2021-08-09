import { Skeleton, Space } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';

const SkeletonLoad = () => {
  return (
    <div className="skeleton-load">
      <Space>
        <Skeleton active rows={4} />
      </Space>
    </div>
  );
};

export default SkeletonLoad;
