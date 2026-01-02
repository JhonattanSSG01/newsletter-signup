import { css } from "lit";

/* Extraer estilos comunes a un archivo separado */

export const modalStyles = css`
  :host([is-open-modal]) dialog {
    width: calc(100% - 4rem);
    height: calc(100% - 4rem);
    background-color: #ffffff;
    color: #242642;
    border: none;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    font-size: 2.5rem;
    line-height: 1;
    margin-bottom: 1rem;
    font-family: "Roboto Bold", sans-serif;
  }

  .description {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  strong{
   font-family: 'Roboto Bold', sans-serif;
  }

  .icon{
    width: 50px;
    height: 50px;
  }

  @media (min-width: 768px) {
    :host([is-open-modal]) dialog {
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
