import { Skeleton, Space } from 'antd';
import React from 'react';

const SkeletonLoad = () => {
  return (
    <div className="skeleton-load">
      <Space>
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </Space>
    </div>
  );
};

export default SkeletonLoad;
