import React, { createContext, useContext, useState } from 'react';

//1. Context 생성
const GlobalContext = createContext()

//2. Provider 생성
    const Ex_cont_provider = ({ children }) => {
        const [count, setCount] = useState(0)


        return (
            <>
                <GlobalContext.Provider value={{ count, setCount }}>
                    {children}
                </GlobalContext.Provider>
            </>
        );

    };

export default Ex_cont_provider;

//3. 커스텀 훅으로 설정
export const useGlobal = () => useContext(GlobalContext)