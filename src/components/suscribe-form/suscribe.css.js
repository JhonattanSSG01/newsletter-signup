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
    border-radius: 10px;
    overflow: auto
  }

  .information {
    max-width: 500px;
    padding: 0 1rem;
  }

  h1 {
    color: #242642;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: #242642;
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

  .form .input {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .input label {
    font-size: 0.8rem;
    font-weight: bold;
  }

  .input .error {
    color: red;
    font-size: 0.8rem;
  }

  input[type="email"] {
    padding: 0.9rem 1.2rem;
    border: 1px solid #bdbbbf;
    border-radius: 5px;
    width: calc(100% - 2.4rem);
    font-size: 0.9rem;
  }

  .banner {
    width: 100%;
  }

  .banner img {
    width: auto;
    height: 40vh;
    object-fit: cover;
    width: 100%;
    border-radius: 10px;
  }

  @media (min-width: 768px) {
    .container {
      width: 70vw;
      height: 60vh;
      min-height: 500px;
      max-width: 800px;
      flex-direction: row;
      padding: 2rem;
      border-radius: 15px;
    }

    article {
      text-align: left;
      width: 50%;
    }

    .form {
      align-items: flex-start;
    }

    .banner {
      margin-top: 0;
      margin-left: 2rem;
      max-width: 400px;
      width: 40%;
      height: 100%;
    }

    .banner img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }
`;
