import { css } from "lit";

export const modalStyles = css`
  :host([is-open-modal]) dialog {
    width: calc(100% - 4rem);
    height: calc(100% - 4rem);
    background-color: #ffffff;
    border: none;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .modal icon {
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
    font-size: 0.8rem;
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
    background-color: #383c62;
  }

  @media (min-width: 768px) {
    .modal {
      max-width: 300px;
      max-height: 350px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
