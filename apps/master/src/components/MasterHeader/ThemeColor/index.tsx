import React from 'react';
import { Card,Dropdown,Avatar } from 'antd';

const ThemeColor = () => {
    const card = (
        <Card title="主题色" style={{width:368.2,height:203.2}}>
            <span>1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
            <span>1</span>
        </Card>
    );

    return (
        <Dropdown overlay={card}>
            <i className="iconfont icon-setting"/>
        </Dropdown>
    )
}

export default ThemeColor;
