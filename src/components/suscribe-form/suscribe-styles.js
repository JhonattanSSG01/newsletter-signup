import { css } from "lit";

export const suscribeStyles = css`
  .container {
    display: flex;
    flex-direction: column-reverse;
    background-color: #ffff;
    border-radius: 10px;
    margin: 0 auto;
    height: 100vh;
    min-height: 500px;
    max-width: 1000px;
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

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .8rem;
    margin-top: 1rem;
  }

  .form .input {
    width: 100%;
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
    margin-bottom: 1rem;
  }

  button:hover {
    background-color: rgb(56, 60, 98);
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
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 2rem;
      height: 60vh;
      border-radius: 15px;
      width: 70vw
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
