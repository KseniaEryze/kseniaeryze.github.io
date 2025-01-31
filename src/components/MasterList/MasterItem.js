import React from 'react';
import star from '../../assets/star.png';
import feedback from '../../assets/feedback.png';

const MasterItem = ({ master }) => {
    return (
        <div className="master-item">
            <img src={master.image} alt={master.name} className="master-avatar" />
            <div className="master-info">
                <div className='master-info_header'>
                    <h4>{master.name}</h4> 
                    <button className="button-feedback">Связаться<img src={feedback}/></button> 
                </div>
                
                <div className="master-rating">
                    <img src={star} alt="Star" /> <span>{master.rating} </span>
                    <img src={feedback} alt="Feedback" /> <span>{master.reviews} отзыва</span>
                </div>
                <div className='master-description'>
                    <p>{master.description}</p>
                    <p className='additional_text'>{master.view}...</p>
                </div>
                
            </div>
           
        </div>
    );
};

export default MasterItem;