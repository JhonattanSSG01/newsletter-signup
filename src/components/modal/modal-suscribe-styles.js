import { css } from "lit";

export const modalStyles = css`
  .modal {
    background-color: #ffffff;
    border: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 2rem;
    width: 100%;
    max-width: 300px;
    position: fixed;  
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .modlal icon {
    font-size: 3rem;
  }

  .modal h1 {
    color: #242642;
    font-size: 2.5rem;
    line-height: 1;
    margin-bottom: 1rem;
  }

  .modal p {
    color: #242642;
    font-size: .8rem;
    margin-bottom: 1rem;
  }

  button {
    background-color: #232642;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.9rem 1.2rem;
    font-size: 0.9rem;
    cursor: pointer;
    font-weight: bold;
    width: 100%;
  }

  button:hover {
    background-color: rgb(56, 60, 98);
  }
`;