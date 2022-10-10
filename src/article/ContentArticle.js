import React from "react"

function ContentArticle({author,children}){
    const ui = <div style={{textAlign:'justify', padding: "0px 10rem 0px 10rem"}}>
        {children}
        <h4 style={{textAlign:'center'}}>{author}</h4>
    </div>

    return ui
}

export default ContentArticle