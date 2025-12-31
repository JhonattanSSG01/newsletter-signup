import { css } from "lit";

export const suscribeStyles = css`
  .container {
    height: calc(100% - 1rem);
    margin: 0 auto;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column-reverse;
    background-color: #ffff;
    overflow: auto
  }

  .side-info {
    max-width: 500px;
    padding: 0 1rem;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-family: "Roboto Bold", sans-serif;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .8rem;
    margin-top: 1rem;
  }

  .form > .text-label {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-family: "Roboto Bold", sans-serif;
  }

  label {
    font-size: 0.8rem;
    font-weight: bold;
  }

  .error {
    color: red;
    font-size: 0.8rem;
  }

  input[type="email"] {
    width: calc(100% - 2.4rem);
    padding: 0.9rem 1.2rem;
    border: 1px solid #bdbbbf;
    border-radius: 5px;
    font-size: 0.9rem;
    outline: none;
  }

  .input-error {
    border: 2px solid#f49898 !important;
    background-color: #fae1e1;
  }

  .input-error::placeholder {
    color:#ef7f7f;
    opacity: 1;
  }

  .input-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .banner {
    width: 100%;
    height: 300px;
    min-height: 200px;
    max-height: 300px;
    background: url("./src/assets/images/illustration-sign-up-mobile.svg") no-repeat center;
    background-size: cover;
    border-radius: 0 0 15px 15px;
  }

  @media (min-width: 768px) {
    .container {
      width: 70vw;
      height: 60vh;
      max-width: 800px;
      min-height: 500px;
      padding: 2rem;
      border-radius: 15px;
      flex-direction: row;
      gap: 2rem;
    }

    .side-info {
      text-align: left;
      width: 50%;
    }

    .form {
      align-items: flex-start;
    }

    .banner {
      width: 50%;
      height: 100%;
      min-height: 0;
      max-height: none;
      background: url("./src/assets/images/illustration-sign-up-desktop.svg") no-repeat;
      background-size: cover;
      border-radius: 15px;
    }
  }
`;
