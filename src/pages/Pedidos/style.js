import styled from "styled-components"

export const PedidosBG = styled.div`
    font-family: "Nunito";
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PedidosMain = styled.form`
    padding: 17px 25px;
    display: flex;
    flex-direction: column;
    gap: 28px;
    width: 100%;
    max-width: 1280px;

    h1 {
        font-weight: 700;
        font-size: 40px;
        text-align: center;
    }
`

export const PedidosContainer = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    gap: 15px;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

export const PedidosCard = styled.div`
    border: 2px solid var(--Black);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 30%;
    min-height: 370px;
    border-radius: 10px;
    justify-content: space-between;
    height: 65vh;
    gap: 5px;

    h2 {
        font-weight: 700;
        font-size: 25px;
        text-align: center;
    }
`

export const FormSection = styled.div`
    display: flex;

    flex-direction: ${(props) =>
        props.direction === "column" ? "column" : "row"};
    width: 100%;

    justify-content: space-between;
    align-items: ${(props) => (props.type === "medidas" ? "center" : "unset")};
    flex: ${(props) => props.flex || "unset"};
    select,
    input {
        width: ${(props) => (props.direction === "column" ? "100%" : "50%")};
        height: ${(props) => props.direction && "100%"};
    }
    label {
        font-weight: 700;
        font-size: 13px;
        min-width: fit-content;
        display: flex;
        align-items: center;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0;

    @media (min-width: 768px) {
        justify-content: space-between;
    }
`
