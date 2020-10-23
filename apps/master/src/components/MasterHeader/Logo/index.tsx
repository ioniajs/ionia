import { useThemeStore } from "@ionia/libs";
import * as React from "react";

import "./index.less";

export interface TitleProps { }

const Logo: React.FC<TitleProps> = () => {

    const { menuStyles, setMenuStyles } = useThemeStore();

    return (
        <div className={`io-master__logo ${menuStyles.collapse ? 'collapse' : ''}`}>
            <h1 className="logo">JEECMS</h1>
            <i className="iconfont icon-navigation"
                onClick={() => setMenuStyles({
                    collapse: !menuStyles.collapse
                })} />
        </div>
    );
};

export default Logo;
