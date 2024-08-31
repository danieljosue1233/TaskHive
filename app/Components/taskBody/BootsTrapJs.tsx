"use client";

import { useEffect } from "react"

const BootstrapJs = () => {
    useEffect (()=> {
        import('bootstrap/dist/js/bootstrap.bundle.min');
    }, [])
    return (
       <></>
    )
}

export default BootstrapJs;