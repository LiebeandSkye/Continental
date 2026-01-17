import React from 'react';
import styled from 'styled-components';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <StyledWrapper>
      <div className="tabs">
        {pages.map((number) => (
          <div className="tab-group" key={number}>
            <input 
              id={`tab${number}`} 
              name="tab" 
              type="radio" 
              checked={currentPage === number}
              onChange={() => onPageChange(number)}
            />
            <label htmlFor={`tab${number}`}>
              <span>{number}</span>
            </label>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* CSS styling ig */
  .tabs { display: flex; gap: 16px; padding: 40px 0; justify-content: center; }
  .tab-group input { appearance: none; display: none; }
  .tab-group label {
    display: flex; align-items: center; justify-content: center;
    width: 48px; height: 48px; border: 1px solid #cccccc;
    border-radius: 12px; cursor: pointer; font-weight: 700;
    position: relative; transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .tab-group label::after {
    content: ""; position: absolute; bottom: -32px; left: 50%;
    width: 8px; height: 8px; border-radius: 50%;
    background-color: black; transform: translateX(-50%);
    scale: 0; opacity: 0; transition: all 0.48s 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .tab-group label::before {
    content: ""; position: absolute; top: -24px; left: 50%;
    width: 48px; height: 48px; border-radius: 12px;
    background-color: black; transform: translate(-50%, -50%);
    z-index: -1; opacity: 0; scale: 0;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .tab-group label:hover { border-color: black; color: black; }
  .tab-group input:checked + label { border-color: transparent; color: #ffffff; scale: 1.1; }
  .tab-group input:checked + label::after { bottom: -16px; opacity: 1; scale: 1; }
  .tab-group input:checked + label::before { opacity: 1; scale: 1; top: 50%; }
  @media (max-width: 480px) {
    .tab-group label {
      width: 35px;
      height: 35px;
      font-size: 14px;
    }
`;

export default Pagination;