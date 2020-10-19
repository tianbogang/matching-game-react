import React, { useState, useEffect, useMemo, forwardRef, useImperativeHandle } from 'react';
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
    const duration = useMemo(() => { return timeSpan(tick) }, [tick]);

    useImperativeHandle(ref, () => ({
        start: () => setActive(true),
        stop: () => setActive(false),
        timeUsed: () => { return duration }
    })
    );

    return ( <span font-scale="1.5">{duration}</span> );
};

export default forwardRef(StopWatch);