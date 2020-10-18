import React, { useState, useEffect, useMemo, forwardRef, useImperativeHandle } from 'react';
import moment from 'moment';

const StopWatch = forwardRef((props, ref) => {
    const [active, setActive] = useState(false);
    const [tick, setTick] = useState(0);

    useEffect(() => {
        if(active) {
            setTimeout(() => setTick(tick + 1), 1000);    
        }
    });

    function timeSpan(duration) {
        let t = new Date(0,0,0,0,0,0);
        t.setSeconds(duration);
        return moment(t).format('HH:mm:ss');
    }
    const duration = useMemo(() => { return timeSpan(tick) }, [tick]);

    useImperativeHandle(ref, () => ({
        start: () => setActive(true),
        stop: () => setActive(false),
        timeUsed: () => { return duration }
    })
    );

    return ( <span font-scale="1.5">{duration}</span> );
});

export default StopWatch;