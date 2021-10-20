import React, {useState} from 'react';
import { AiTwotoneDelete,AiOutlineExclamationCircle, AiFillPauseCircle} from "react-icons/ai";

import './style.css'
import './style-priority.css'
import api from '../../api/api';

function Notes({data, handleDelete, handleChangePriority}){
    const [changedNote, SetChangedNote] = useState('');
   
function handleEdit(e,priority){
  e.style.cursor = 'text';
  e.style.borderRaduis = '5px';

  if(priority){
    e.style.boxShadow ='0 0 5px white';
  } else {
    e.style.boxShadow ='0 0 5px gray';
  }
}    

async function handleSave(e,notes) {
  e.style.cursor = 'default';
e.style.boxShadow = 'none';

  if (changedNote && changedNote != notes){
    await api.post(`/contents/${data._id}`,{
      notes: changedNote,
    });
  }
}    
    return(
<>
<li className={data.priority ? "notepad-infos-priority":"notepad-infos"}>
            <div>
              <strong>{data.title}</strong>
              <div>
                <AiTwotoneDelete size="20"
                onClick={()=> handleDelete(data._id)}
                />

              </div>
            </div>
          <textarea 
          defaultValue= {data.notes}
          onClick ={e =>handleEdit(e.target,data.priority)}
          onChance={e =>SetChangedNote(e.target.value)}
          onBlur={e=> handleSave(e.target,data.notes)}
          />
          <span><AiOutlineExclamationCircle 
          size ="20"
          onClick ={()=> handleChangePriority(data._id)}
          />Prioridade!
          </span>
          </li>
    </>
    )
}

export default Notes;