import { useState } from "react";
import { Icon } from '@iconify/react';

const Password = ({ name, onChange, password }) => {

    const [passwordShown, setPasswordShown] = useState(true);
    const togglePassword = () => {
        setPasswordShown(!passwordShown)
    }

    return (
        <>
            <label htmlFor="input" className="label_style">{password}</label>
            <input type={passwordShown ? "password" : "text"} className=" input_style" name={name} onChange={onChange} /> <Icon className="relative left-[18rem] hover:cursor-pointer bottom-9" onClick={togglePassword} icon={passwordShown ? "mdi:eye-off-outline" : "mdi:eye-outline"} />
        </>
    )
}

export default Password