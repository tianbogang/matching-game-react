import React from 'react';

import { FiSmile, FiMeh, FiFrown } from "react-icons/fi";

const Emoji = ({mood}) => {
    if(mood === 1) {
        return <FiSmile color="green" size="28px" />;
    } else if(mood === 2) {
        return <FiFrown color="red" size="28px" />;
    } else {
        return <FiMeh color="Black" size="28px" />;
    }
}

export default Emoji;