import React from 'react';
import Form from './Form';
import { Helmet } from 'react-helmet-async';
import Sidebar from './Sidebar/Sidebar';
import { CodeBlock } from "react-code-blocks";

const Contact = () => {

    const myCustomTheme = {
        lineNumberColor: "#ccc",
        lineNumberBgColor: "#222",
        backgroundColor: "#ffffff00",
        textColor: "#ccc",
        substringColor: "#00ff00",
        keywordColor: "#0077ff",
        attributeColor: "#ffaa00",
        selectorTagColor: "#0077ff",
        docTagColor: "#aa00ff",
        nameColor: "#f8f8f8",
        builtInColor: "#0077ff",
        literalColor: "#ffaa00",
        bulletColor: "#ffaa00",
        codeColor: "#ccc",
        additionColor: "#00ff00",
        regexpColor: "#f8f8f8",
        symbolColor: "#ffaa00",
        variableColor: "#ffaa00",
        templateVariableColor: "#ffaa00",
        linkColor: "#aa00ff",
        selectorAttributeColor: "#ffaa00",
        selectorPseudoColor: "#aa00ff",
        typeColor: "#0077ff",
        stringColor: "#00ff00",
        selectorIdColor: "#ffaa00",
        quoteColor: "#f8f8f8",
        templateTagColor: "#ccc",
        deletionColor: "#ff0000",
        titleColor: "#0077ff",
        sectionColor: "#0077ff",
        commentColor: "#777",
        metaKeywordColor: "#f8f8f8",
        metaColor: "#aa00ff",
        functionColor: "#0077ff",
        numberColor: "#ffaa00",
    };

    const code = `const button = document.querySelector ( '#sendBtn' );

const message = {
    name : "" ,
    email : "" ,
    message : "" ,
    date: "Thu Feb 29 2024"
}


button.addEventListener ( 'click' ), () => {
    form.send ( message );
})
    `
    return (
        <div className='h-full w-full '>
            <Helmet>
                <title>Contact Me</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            <div className='flex h-full justify-between  flex-col md:flex-row '>
                <div className='w-80 h-full'>
                    <Sidebar></Sidebar>
                </div>
                <div className='flex w-full h-full justify-between'>
                    <div className='w-full flex justify-center items-center md:border-r md:border-r-slate-700'>
                        <Form></Form>
                    </div>
                    <div className='p-10 hidden md:block'>
                        <CodeBlock
                            text={code}
                            language='javascript'
                            showLineNumbers={true}
                            theme={myCustomTheme}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;