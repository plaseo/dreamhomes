import React from 'react'
import Header from './Header'


//the purpose of a pagewrapper is to provide a consistent structure and behavior to different parts of the application
//it can include common elements like headers, footers, navigatio bars, side bars, i.e. elements that appear on multiple pages
function PageWrapper(props) {

  return (
    <div>
        <Header user={props.user} setUser = {props.setUser}/>
        
        <div>{props.children}</div>
    </div>
  )
}

export default PageWrapper