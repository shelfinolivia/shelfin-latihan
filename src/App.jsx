import { useEffect, useState } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Note from "./Note"
import Login from "./pages/Login"
import Registrasi from "./pages/Registrasi"
import { getToken } from "./Api"
import { useAuth } from './context/Auth'
// import { setTokens } from "./token"

function App() {
    // panggil nilai isLoggedin dari context
    const { isLoggedin } = useAuth()

    const [token, setToken] = useState(null);

    const handleLogin = (tokens) => {
        setToken(tokens)
    }

    const handleLogout = () => {
        setToken(null)
        localStorage.removeItem('token');
    }

    useEffect(() => {
        const tokens = getToken()
        setToken(tokens);
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout token={token}/>}>
                    {isLoggedin ? (
                        <Route>
                            <Route path={"/Note"} element={<Note />} />
                            <Route path="/Login" element={<Navigate to={"/Note"} />} />
                        </Route>
                    ) : (
                        <>
                            <Route path={"/Registrasi"} element={<Registrasi />} />
                            <Route path={"Login"} element={<Login onLogin={handleLogin} />} />
                            <Route path="*" element={<Navigate to={"/Login"} />} />
                        </>)}


                </Route>

                {/* {token !== null ? 
                    <Route>
                        <Route path={"/Note"} element={<Note />} /> 
                        <Route path="*" element={<Navigate to={"/Note"}/>}/>
                    </Route>
                : <Route path={"/Note"} element={<h1 className=" text-white grid place-items-center mt-[16rem] font-bold text-[4rem]">Not Found</h1>} />}
                {
                    token !== null ? null : 
                   <Route>
                     <Route path={"/Registrasi"} element={<Registrasi />} />
                     <Route path={"/Login"} element={<Login onLogin={handleLogin}/>} />
                   </Route>
                }
                </Route>
                <Route path="*" element={<Navigate to={"/Login"}/>}/> */}
            </Routes>

        </BrowserRouter>

    )
}

export default App