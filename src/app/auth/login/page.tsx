import React from 'react'
import style from './login.module.css'
import Image from 'next/image'


function Login() {



    return (
        <>
            <p>edit login page</p>
            <h1 className={style.header}>Login</h1>

            {/* <Image src="/globe.svg" alt='globe' /> */}

            <Image className={style.image} src='/globe.svg' alt='globe' width={20} height={20} />


        </>
    )
}

export default Login