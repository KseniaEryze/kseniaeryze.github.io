import React from 'react';
import MasterItem from './MasterItem';


const MasterList = ({ masters }) => {
    return (
        <>
        <div className="master-list">
            <h3>50 мастеров красоты в Минске, Фрунзенский район</h3>
                {masters.map((master) => (
                    <MasterItem key={master.id} master={master} />
                ))}
        </div>
        <button className=''>Посмотреть ещё</button>
        </>
        
    );
};

export default MasterList;