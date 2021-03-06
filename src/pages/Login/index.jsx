/* eslint-disable react-hooks/exhaustive-deps */
import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement
} from "@chakra-ui/react"
import Api from "../../Api"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useContext, useEffect, useState } from "react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { motion } from "framer-motion"
import custom from "../../assets/Images/custom.png"
import logo from "../../assets/Images/logo.svg"
import { BGImage, DivContainerLogin, ImgLogo } from "./style"
import { toast } from "react-toastify"
import { useHistory } from "react-router-dom"
import { UserContext } from "../../providers/user"

export default function Login() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    const { pegarToken, pegarDadosUser } = useContext(UserContext)

    useEffect(() => {
        const chamadaAsync = async () => {
            if (pegarToken()) {
                const dataUser = await pegarDadosUser()

                dataUser.isAdmin
                    ? history.push("/admin")
                    : history.push("/painel")
            }
        }

        chamadaAsync()
    }, [])

    const validacoesYup = yup.object().shape({
        email: yup
            .string()
            .required(" Preencher campo Email é obrigatorio!")
            .email("Email inválido"),
        password: yup.string().required("Preencher campo senha é obrigatório!")
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(validacoesYup) })

    const formErrorStyle = {
        color: "var(--Red)",
        fontWeight: "bold",
        fontSize: "14px",
        margin: "2px 16px",
        width: "90%"
    }

    const formErrorLabelStyle = {
        margin: "2px 16px"
    }

    const registro = (data) => {
        setIsLoading(true)

        Api.post("/login", data)
            .then((res) => {
                window.localStorage.setItem("@user/token", res.data.accessToken)
                window.localStorage.setItem("@user/id", res.data.user.id)

                res.data.user.isAdmin
                    ? history.push("/admin")
                    : history.push("/painel")
            })
            .catch(() => {
                toast.error("Credencias inválidas")
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <>
            {!pegarToken() && (
                <DivContainerLogin>
                    <motion.div
                        initial={{ x: 100, y: 100 }}
                        animate={{ x: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <BGImage src={custom} />
                    </motion.div>

                    <div className="divResponsiva">
                        <ImgLogo
                            src={logo}
                            alt="Na Medida Ateliê"
                            title="Página Inicial"
                            onClick={() => history.push("/")}
                        />

                        <div className="divFormulario">
                            <div>
                                <h1>É um prazer ver você novamente!</h1>
                            </div>
                            <motion.div
                                initial={{ x: 500, y: 500 }}
                                animate={{ x: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <form onSubmit={handleSubmit(registro)}>
                                    <FormControl className="form">
                                        <div className="loginForm">
                                            <h2>Login</h2>
                                        </div>

                                        <FormLabel
                                            sx={formErrorLabelStyle}
                                            htmlFor="email"
                                        >
                                            Email
                                        </FormLabel>
                                        <Input
                                            id="email"
                                            sx={{
                                                borderColor:
                                                    "2px solid var(--Grey-4)"
                                            }}
                                            type="email"
                                            placeholder="Insira seu Email"
                                            isInvalid={errors.email}
                                            errorBorderColor="red.500"
                                            {...register("email")}
                                        />
                                        {errors.email && (
                                            <FormHelperText
                                                sx={formErrorStyle}
                                                color="#e53e3e"
                                            >
                                                {errors.email.message}
                                            </FormHelperText>
                                        )}
                                        <FormLabel
                                            sx={formErrorLabelStyle}
                                            htmlFor="password"
                                        >
                                            Senha
                                        </FormLabel>
                                        <InputGroup>
                                            <InputRightElement>
                                                <IconButton
                                                    bg="transparent"
                                                    onClick={handleClick}
                                                    _active={false}
                                                    _hover={false}
                                                    icon={
                                                        show ? (
                                                            <ViewIcon />
                                                        ) : (
                                                            <ViewOffIcon />
                                                        )
                                                    }
                                                />
                                            </InputRightElement>
                                            <Input
                                                id="password"
                                                sx={{
                                                    borderColor:
                                                        "2px solid var(--Grey-4)"
                                                }}
                                                type={
                                                    show ? "text" : "password"
                                                }
                                                errorBorderColor="red.500"
                                                isInvalid={errors.password}
                                                placeholder="•••••••••••••••••••••"
                                                {...register("password")}
                                            />
                                        </InputGroup>
                                        {errors.password && (
                                            <FormHelperText
                                                sx={formErrorStyle}
                                                color="#e53e3e"
                                            >
                                                {errors.password.message}
                                            </FormHelperText>
                                        )}
                                        <Button
                                            isLoading={isLoading}
                                            className="butonLogin"
                                            type="submit"
                                        >
                                            Login
                                        </Button>
                                        <p>
                                            Não possui uma conta?
                                            <a
                                                href="/register"
                                                title="Página de Cadastro"
                                            >
                                                {" "}
                                                Cadastre-se
                                            </a>
                                        </p>
                                    </FormControl>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </DivContainerLogin>
            )}
        </>
    )
}
