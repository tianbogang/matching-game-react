import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import moment from 'moment';

const StopWatch = (props, ref) => {
    const [active, setActive] = useState(false);
    const [tick, setTick] = useState(0);

    useEffect(() => {
        if(active) {
            setTimeout(() => setTick(tick + 1), 1000);    
        }
    });

    function timeSpan(tickCount) {
        let time = new Date(0,0,0,0,0,0);
        time.setSeconds(tickCount);
        return moment(time).format('HH:mm:ss');
    }

    useImperativeHandle(ref, () => ({
        start: () => setActive(true),
        stop: () => setActive(false),
        timeUsed: () => { return timeSpan(tick) }
    })
    );

    return ( <span font-scale="1.5">{ timeSpan(tick) }</span> );
};

export default forwardRef(StopWatch);