"use client"

import { MdTextFields } from 'react-icons/md'
import { ElementsType, FormElement } from "../FormElements"

const type:ElementsType = "TextField";

export const TextFieldFormElement:FormElement = {
    type, 
    construct: (id:string) => ({
        id,
        type,
        extraAttributes:{
            label: "Text Field",
            helperText: "Helper Text",
            required: false,
            placeholder: "Value here...",
        }
    }),
    desinerBtnElement: {
        icon: MdTextFields,
        label: "Text Field",
    },
    designerComponent: () => <div>Designer Component</div>,
    formComponent: () => <div>Form Component</div>,
    propertiesComponent: () => <div>Props Component</div>,
}