import React from 'react';
import { Card,Dropdown,Avatar } from 'antd';
import { Icon } from '@ionia/libs';
import './index.less'

const ThemeColor = () =>{
    const card = (
        
            <Card className="io-theme-color-card" title="主题色">
                <div className="io-prev--colors">
                    <div className="io-prev--white"></div>
                    <div className="io-prev--cambridge-blue"></div>
                    <div className="io-prev--dark-blue"></div>
                    <div className="io-prev--light-green"></div>
                    <div className="io-prev--green"></div>
                </div>
                <div className="io-prev--text">
                    <p>经典白</p>
                    <p>科技蓝</p>
                    <p>极客蓝</p>
                    <p>希望青</p>
                    <p>清晰绿</p>
                </div>
                <div className="io-next--colors">
                    <div className="io-next--purple"></div>
                    <div className="io-next--yellow"></div>
                    <div className="io-next--orange"></div>
                    <div className="io-next--red"></div>
                    <div className="io-next--balck"></div>
                </div>
                <div className="io-prev--text">
                    <p>优质紫</p>
                    <p>阳光黄</p>
                    <p>活力橙</p>
                    <p>中国红</p>
                    <p>酷炫黑</p>
                </div>
            </Card>

    );

    return (
        
        <Dropdown overlay={card}>
            <span>
                <Icon name="icon-Themecolor"/>
            </span>
        </Dropdown> 
    )
}

export default ThemeColor;
