import React from 'react';
import styled from 'styled-components';

// Accept isOpen and onClick from Nav.jsx
const Burger = ({ isOpen, onClick, className }) => {
    return (
        <StyledWrapper className={className}>
            <label className="burger" htmlFor="burger">
                {/* 1. 'checked' is driven by the isOpen prop
                  2. 'onChange' triggers the toggleMenu function in Nav.jsx 
                */}
                <input 
                    type="checkbox" 
                    id="burger" 
                    checked={isOpen} 
                    onChange={onClick} 
                />
                <span />
                <span />
                <span />
            </label>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .burger {
    position: relative;
    width: 30px; /* Adjusted size slightly for Nav balance */
    height: 20px;
    background: transparent;
    cursor: pointer;
    display: block;
  }

  .burger input {
    display: none;
  }

  .burger span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: black; /* Change to white if your nav background is dark */
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }

  .burger span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
  }

  .burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  .burger span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
  }

  /* These animations fire when the isOpen prop becomes true */
  .burger input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    top: -2px;
    left: 5px;
  }

  .burger input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  .burger input:checked ~ span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 20px;
    left: 5px;
  }
`;

export default Burger;