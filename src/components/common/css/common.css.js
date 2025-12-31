import { css } from "lit";

export const commonStyles = css`
 :host {
    width: 100%;
  }
    
  ul {
    text-align: left;
    margin-bottom: 1rem;
    padding: 0;
    color: #242642;
  }

  li {
    margin-bottom: 0.5rem;
    list-style-type: none;
    align-items: center;
    display: flex;
    gap: 0.5rem;
    font-size: clamp(0.9rem, 2vw, 1rem);
  }

  .btn {
    width: 100%;
    margin-bottom: 1rem;
    background-color: #232642;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 0.9rem 1.2rem;
    font-size: 0.9rem;
    cursor: pointer;
    font-weight: bold;
  
  }

  
  @media (min-width: 768px) {
    .btn {
      position: relative;
      transform: translate(0);
      transform-style: preserve-3d;
    }

    .btn:hover {
      background: linear-gradient(90deg, #e04a81, #f79424);
    }
  
    .shadow:hover:before {
      content:"";
      position: absolute;
      inset: -2px;
      transform: translateZ(-1px);
      z-index: -1;
      background: linear-gradient(90deg, #e04a81, #f79424);
      filter: blur(10px);
    }
  }

`;