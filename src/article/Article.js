import React from "react";
import { TitleArticle } from "./ArticleTitle";
import ContentArticle from "./ContentArticle";

const Article = function({author}){
    const ui = <div style={{marginBottom:'1rem'}}>
            <TitleArticle text="Coretan Developer" />
            <ContentArticle author={author}>
                <p>Berusaha dengan keras juga bagus, keren. Tapi menyerah juga merupakan sebuah keberanian.</p>
            </ContentArticle>
        </div>

    return ui
}

export default Article