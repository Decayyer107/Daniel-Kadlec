import {DetailedHTMLProps, HTMLInputTypeAttribute, InputHTMLAttributes} from "react";

interface CustomInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

}

export default function Input(props: CustomInputProps){
    return(
      <input {...props} className={'bg-gray-900 border-1 border-gray-700 text p-4 rounded-[8px] ' + props.className}/>
    );
}