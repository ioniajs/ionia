import * as React from "react";

import "./index.less";

export interface TitleProps { }

const Logo: React.FC<TitleProps> = () => {
    return (
        <div className="io-master__logo">
            <h1 className="logo">JEECMS</h1>
            <i className="iconfont icon-navigation" />
        </div>
    );
};

export default Logo;
