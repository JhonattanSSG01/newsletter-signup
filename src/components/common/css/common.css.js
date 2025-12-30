import { css } from "lit";

export const commonStyles = css`
 :host {
    width: 100%;
  }
    
  ul {
    text-align: left;
    margin-bottom: 1rem;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
    list-style-type: none;
    align-items: center;
    display: flex;
    gap: 0.5rem;
  }

  .btn {
    width: 100%;
    margin-bottom: 1rem;
    background-color: #232642;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.9rem 1.2rem;
    font-size: 0.9rem;
    cursor: pointer;
    font-weight: bold;
  }

  .btn:hover {
    background-color: rgb(56, 60, 98);
  }
`;