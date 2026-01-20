import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../global.css'
import {useCart} from '../components/CartContext'
// Pass "isVisible" and "onClose" as props to control it from outside
const Added_Card = ({ isVisible, onClose, productName, productPrice }) => {
  const { toggleCart } = useCart();

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <StyledWrapper>
      <div className="card fixed bottom-8 right-8 z-9999 animate-slide-in border border-gray-500">
        <div className="card-wrapper pb-3">
          <div className="card-icon ml-5 mr-3">
            <div className="icon-cart-box flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} viewBox="0 0 576 512">
                <path fill="#000" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
            </div>
          </div>
          <div className="card-content">
            <div className="card-title-wrapper">
              <span className="card-title">Added to cart!</span>
              <span className="card-action" onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" height={15} width={15} viewBox="0 0 384 512">
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </span>
            </div>
            <div className="product-name">{productName}</div>
            <div className="product-price">{productPrice}</div>
            <button className="button" onClick={() => { toggleCart(); onClose(); }}>
              View cart
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: fixed;
    bottom: 2rem;
    right: 2rem;  
    width: 360px;
    height: 150px;
    background-color: #fff;
    border-radius: 15px;
    z-index: 9999;
    margin: 0;
    display: flex;
    align-items: center;
  }

  .card-wrapper {
    display: inline-flex;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
  }

  .card-icon {
    width: 20%;
  }

  .card-icon .icon-cart-box {
    background-color: #1a1a1a2f;
    width: 3em;
    height: 3em;
    border-radius: 50%;
    text-align: center;
    padding: 15px 0px;
    margin: 0 auto;
  }

  .card-content {
    width: 80%;
  }

  .card-title-wrapper {
    display: inline-flex;
    flex-wrap: nowrap;
    align-items: baseline;
    width: 100%;
  }

  .card-title {
    width: 95%;
    font-size: 1em;
    font-weight: 600;
    color: #1b1b1b;
    padding: 20px 0 0 10px;
  }

  .card-action {
    width: 5%;
    text-align: right;
    padding: 0 30px;
  }

  .card-action svg {
    cursor: pointer;
    fill: rgba(0, 0, 0, 0.2);
    transition: 0.3s ease-in-out;
  }

  .card-action svg:hover {
    fill: rgba(0, 0, 0, 0.6);
  }

  .product-name {
    font-size: 0.8em;
    color: #2c2c2c;
    padding: 10px 0 0 10px;
  }

  .product-name:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .product-price {
    font-size: 0.9em;
    font-weight: 600;
    color: #333;
    padding: 0 0 10px 10px;
  }
  .button {
    position: relative;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    padding-block: 0.5rem;
    padding-inline: 1.25rem;
    background-color: rgb(5, 5, 5);
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffff;
    gap: 10px;
    font-weight: bold;
    border: 3px solid #ffffff4d;
    outline: none;
    overflow: hidden;
    font-size: 15px;
    cursor: pointer;
    height: 35px;
  }

  .icon {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease-in-out;
  }

  .button:hover {
    transform: scale(1.05);
    border-color: #fff9;
  }

  .button:hover .icon {
    transform: translate(4px);
  }

  .button:hover::before {
    animation: shine 1.5s ease-out infinite;
  }

  .button::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -100px;
    opacity: 0.6;
  }

  @keyframes shine {
    0% {
      left: -100px;
    }

    60% {
      left: 100%;
    }

    to {
      left: 100%;
    }
  }`;

export default Added_Card;
