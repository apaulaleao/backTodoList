import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';

import './button.css'

function RadioButton(){
    const CustomRadio = withStyles({
        root:{
            color:'#FFD3CA','$checked':{color:'#ebbf7a',},
        },
        checked:{},
    })((props)=> <Radio color ="default" {...props}/>);
        
    return(
        
    <div className ="radioOptions">
        <div>
        <CustomRadio/>
        <span>Todos</span>
        </div>
        
        <div>
        <CustomRadio/>
        <span>Prioridade</span>
        </div>

        <div>
        <CustomRadio/>
        <span>Normal</span>
        </div>
    </div>

    )
}

export default RadioButton;