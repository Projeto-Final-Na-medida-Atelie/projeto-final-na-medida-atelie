import styled from "styled-components"

export const DivContainerLogin = styled.div`
    background: #ffeaef;
    background: -moz-linear-gradient(
        top,
        #ffeaef 0%,
        #ffffff 65%,
        #ffffff 100%
    );
    background: -webkit-linear-gradient(
        top,
        #ffeaef 0%,
        #ffffff 65%,
        #ffffff 100%
    );
    background: linear-gradient(
        to bottom,
        #ffeaef 0%,
        #ffffff 65%,
        #ffffff 100%
    );
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100vw;

    .divFormulario {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        width: 50vw;

        h1 {
            font-family: "Nunito";
            font-style: normal;
            font-weight: 700;
            font-size: 2.8vw;
            line-height: 55px;
            margin-bottom: 50px;
            color: var(--BackgroundColor-Black);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            transition: 2s ease-in-out;
        }
    }
    .form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        transition: 0.3s ease-in-out;
        align-items: center;
        width: 400px;
        height: 460px;
        padding: 30px;
        border-radius: 6px;
        background: var(--White);
        border: 3px solid var(--BackgroundColor-Black);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 17px;
        label {
            width: 90%;
            margin: 0;
            font-family: "Nunito";
            font-weight: 500;
            color: var(--BackgroundColor-Black);
            font-weight: bold;
            font-size: 14px;
            margin: 2px 16px;
        }
        input {
            background: var(--Grey-1);
            border-radius: 5px;
        }
        .butonLogin {
            width: 279px;
            height: 65px;
            background-color: var(--BackgroundColor-Main);
            border: 2px solid var(--BackgroundColor-Black);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            font-weight: 600;
            font-size: 25px;

            margin-top: 10px;

            &:hover {
                text-decoration: underline;
            }
        }
        h2 {
            font-family: "Nunito";
            font-style: normal;
            font-weight: 700;
            font-size: 40px;
            line-height: 55px;
            color: var(--BackgroundColor-Black);
        }
        p {
            font-family: "Nunito";
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 26px;
            color: var(--BackgroundColor-Black);
        }
        a {
            color: var(--Color-Primary-Main);
        }
    }
    .loginForm {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .divResponsiva {
        display: flex;
        flex-direction: row;
    }
    @media (max-width: 1199px) {
        flex-direction: column;
        .divResponsiva {
            flex-direction: column;
            align-items: center;
        }
        .imgHomem {
            display: none;
        }
        .divFormulario {
            h1 {
                font-size: 2.4rem;
            }
        }
    }
    @media (max-width: 750px) {
        .divFormulario {
            h1 {
                font-size: 1.9rem;
            }
        }
        .form {
            width: 350px;
            height: 460px;
        }
    }

    @media (max-width: 480px) {
        .divFormulario {
            h1 {
                font-size: 1.2rem;
                text-align: center;
            }
            h2 {
                font-size: 32px;
            }
            p {
                text-align: center;
            }
        }
        .form {
            width: 310px;
            height: 460px;
            margin-bottom: 1rem;
            .butonLogin {
                width: 245px;
                height: 50px;
            }
        }
    }
`

export const BGImage = styled.div`
    background-image: url(${(props) => props.src});
    background-size: cover;
    display: none;
    position: relative;
    right: 0;
    width: 40vw;
    height: 100vh;
    z-index: 1;

    @media (min-width: 1200px) {
        display: block;
    }
`

export const ImgLogo = styled.img`
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    position: relative;
    top: 0;
    right: 0;

    width: 9rem;
    justify-self: flex-start;
    margin: 0.5rem 2rem;
    align-self: center;
    transition: 0.5s cubic-bezier(0.68, 0.09, 0.33, 1.01);
    :hover {
        transform: scale(1.1);
        transition: 0.5s cubic-bezier(0.68, 0.09, 0.33, 1.01);
    }

    @media (min-width: 1200px) {
        align-self: flex-start;
    }
`
