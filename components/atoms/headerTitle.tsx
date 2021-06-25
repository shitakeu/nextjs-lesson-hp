import React, {forwardRef} from "react";

const HeaderTitle = React.forwardRef(({ title = "Home", onClick}) => {
    return (
      <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"  onClick={onClick} >
        {title}
      </a>
    );
  });

export default HeaderTitle;