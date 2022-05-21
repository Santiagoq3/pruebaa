import { useState } from 'react';
import React from 'react';

interface HandleNameChangeInterface {
    target: HTMLInputElement;
}
interface IinputTransaction{
    concept: string,
    amount:string
}

export const useForm = ( initialState = {
    concept: "",
    amount: ""
} ) => {
    
    const [values, setValues] = useState<IinputTransaction>(initialState);

    const reset = ( newFormState = initialState ) => {
        setValues( newFormState );
    }


    const handleInputChange = ( e : React.ChangeEvent<HTMLInputElement> ) => {

        setValues({
            ...values,
            [ e.target.name ]: e.target.value
        });

    }

    return [ values, handleInputChange, reset ];

}