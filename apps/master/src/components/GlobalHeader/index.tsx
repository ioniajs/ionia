import * as React from "react";
import AvatarDropdown from "./AvatarDropdown";
import LangSelector from "./LangSelector";
import "./index.less";

export interface GlobalHeaderProps {}

const GlobalHeader: React.FC<GlobalHeaderProps> = () => {
  return (
    <div className="io-global__header">
      <span className="io-global__header--item">
        <AvatarDropdown />
      </span>
      <span className="io-global__header--item">
        <LangSelector />
      </span>
    </div>
  );
};

export default GlobalHeader;
