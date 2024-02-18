import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const Authcontextprovider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])

    const login = () => {
        setUser({ id: 1, name: "ganesh", profilePicture: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" });
    }

    return (<AuthContext.Provider value={{ user, login }}>
        {children}
    </AuthContext.Provider>)


}
