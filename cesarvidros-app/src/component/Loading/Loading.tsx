import React, {createContext, ReactNode, useContext, useState} from "react";
import { Spin } from "antd";
import '../../styles/Loading/Loading.css'

interface LoadingContextType  {
    loading: boolean;
    startLoading: () => void
    stopLoading: () => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
}

export const LoadingProvider : React.FC<{children: ReactNode}> = ({children}) => {
    const [loading, setLoading] = useState(false);

    const startLoading = () => setLoading(true)
    const stopLoading = () => setLoading(false)

    return (
        <LoadingContext.Provider value={{loading, startLoading, stopLoading}}>
            {loading && (
                <div className="container-loading">
                    <Spin size="large" />
                    <p>...loading</p>
                </div>
            )}
            {children}
        </LoadingContext.Provider>
    )
}