import React from 'react'
import Allbooks from '../components/Allbooks';
function Allbookss(props){
  const {refreshy,refresh}=props
  return(
    <>
    <Allbooks refreshy={refreshy} refresh={refresh} />
    </>
  )
}
export default Allbookss;