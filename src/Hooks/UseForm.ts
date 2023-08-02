import { useState, ChangeEvent } from "react";
import { IForm } from '../interfaces/interfaces'

export const useForm = (initial:IForm) => {
    const [contact, setContact] = useState<IForm>(initial)

    const handleChange = ({ target }:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setContact({
            ...contact,
            [target.name]: target.value

          })
    }
    return { handleChange, contact }
}