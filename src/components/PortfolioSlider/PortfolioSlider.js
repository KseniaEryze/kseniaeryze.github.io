
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit, FaSave, FaPlus, FaMinus,FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { addPortfolioItem, editPortfolioItem, removePortfolioItem } from '../../store/action/portfolioActions';
import { addDocumentItem, editDocumentItem, removeDocumentItem } from '../../store/action/documentActions'; 
import './PortfolioSlider.css';

const PortfolioSlider = ({ isMaster, type }) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => type === 'documents' ? state.documents.items : state.portfolio.items);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleEditClick = (index) => {
        if (editingIndex === index) {
            setEditingIndex(null);
        } else {
            setEditingIndex(index);
        }
    };

    const handleAddItem = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            if (type === 'documents') {
                dispatch(addDocumentItem(reader.result));
            } else {
                dispatch(addPortfolioItem(reader.result));
            }
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleEditItem = (index, e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            if (type === 'documents') {
                dispatch(editDocumentItem(index, reader.result));
            } else {
                dispatch(editPortfolioItem(index, reader.result));
            }
            setEditingIndex(null);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveItem = (index) => {
        if (type === 'documents') {
            dispatch(removeDocumentItem(index));
        } else {
            dispatch(removePortfolioItem(index));
        }
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + items.length) % items.length);
    };

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % items.length);
    };

    return (
        <div className="portfolio-slider">
            {isMaster && editMode  ?  
                    <button onClick={toggleEditMode} className="edit-toggle-button">
                        <FaMinus />
                    </button> : 
                    <button onClick={toggleEditMode} className="edit-toggle-button">
                        <FaPlus />
                    </button>
                   
                }
            <div className="slider-controls">
                
                { items.length > 4 && (
                    <>
                        <button onClick={handlePrev} className="nav-button left">
                           <FaAngleLeft/>
                        </button>
                        <button onClick={handleNext} className="nav-button right">
                            <FaAngleRight/>
                        </button>
                    </>
                )}
            </div>
            <div className="slider-content">
                {editMode ? (
                    items.slice(currentIndex, currentIndex + 4).map((item, index) => (
                        <div key={currentIndex + index} className="slider-item">
                            <img src={item} alt={`${type} ${currentIndex + index}`} className="slider-image" />
                            {isMaster && (
                                <div className="slider-actions">
                                    <label className="file-input-label">
                                        {editingIndex === index ? <FaSave /> : <FaEdit />}
                                        <input
                                            type="file"
                                            className="file-input"
                                            onChange={(e) => handleEditItem(index, e)}
                                        />
                                    </label>
                                    <button onClick={() => handleRemoveItem(index)}>
                                        <FaMinus />
                                    </button>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    items.slice(currentIndex, currentIndex + 4).map((item, index) => (
                        <div key={currentIndex + index} className="slider-item">
                            <img src={item} alt={`${type} ${currentIndex + index}`} className="slider-image" />
                        </div>
                    ))
                )}
            </div>
            {isMaster && editMode && (
                <label className="add-button">
                    <FaPlus /> Добавить {type === 'documents' ? 'документ' : 'работу'}
                    <input
                        type="file"
                        className="file-input"
                        onChange={handleAddItem}
                    />
                </label>
            )}
        </div>
    );
};

export default PortfolioSlider;