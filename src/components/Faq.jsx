import { useState } from "react";

export default function Faq(){

    const [selected, setSelected] = useState(null);

    const toggle = (i) =>{
        if(selected === i){
            return setSelected(null)
        }

        setSelected(i);
    };

    return (
        <div className="faq-section" id="faq">
            <div className="faq-title">
                    <h2 className="faq">
                        FAQ
                    </h2>
            </div>
            <div className="wrapper">
                <div className="faq-wrap">
                    {data.map((item,i) => (
                        <div className="faq-block" key={item.id}>
                            <div className="faq-top" onClick={() => toggle(i)}>
                                <h2 className="faq-title">
                                    {item.question}
                                </h2>
                                <span>{selected === i ? '-': '+'}</span>
                            </div>
                            <div className={selected === i ? 'faq-content show' : 'faq-content'}>
                                {item.answer}
                            </div>
                            <div className="faq-bottom"></div>   
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    );
}

const data = [
    {
        id:"0",
        question: 'WHAT IS AN NFT?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id:"1",
        question: 'WHAT IS METAMASK?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id:"2",
        question: 'HOW TO MINT?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id:"3",
        question: 'IS THERE A WHITELIST?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }

]