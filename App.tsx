import { Dispatch, SetStateAction, useState } from 'react';
import {Home} from './src/screens/Home'
import { Pag2 } from './src/screens/Pag2';
import { Pag3 } from './src/screens/Pag3';
import { Pag4} from './src/screens/Pag4';

export interface Ipagina{
setpageI: Dispatch<SetStateAction<number>>

}

export default function app(){
  const[page, setPage] = useState(1)
if (page == 1) {
  return <Home setpageI={setPage} />
}else if (page == 2) {
  return <Pag2 setpageI={setPage} />
}else if (page == 3) {
  return <Pag3 setpageI={setPage} />
}else if (page == 4) {
  return <Pag4 setpageI={setPage} />
}
}