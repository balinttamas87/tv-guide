import React from 'react';
import ServiceBox from './components/ServiceBox/ServiceBox';

function TVGuide({ services }: any) {
    return (
        <div>
            {services.map((service: any) => (
                <ServiceBox 
                    number={service.c}
                    format={service.sf}
                    genre={service.sg}
                    id={service.sid}
                    title={service.t}
                />
            ))}
        </div>
    );
}

export default TVGuide;