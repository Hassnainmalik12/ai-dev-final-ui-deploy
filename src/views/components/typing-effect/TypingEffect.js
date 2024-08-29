import React, { useState, useEffect, useRef } from 'react';
const TypingEffect = ({ text = '' }) => {
    const [textColor, setTextColor] = useState('white');
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const textRef = useRef(null);
    const cursorRef = useRef(null);

    useEffect(() => {
        if (isTyping) {
            if (index < text.length) {
                const typingInterval = setInterval(() => {
                    setDisplayedText(prev => prev + text[index]);
                    setIndex(prev => prev + 1);
                }, 100);

                return () => clearInterval(typingInterval);
            } else {
                const switchToErasing = setTimeout(() => {
                    setIsTyping(false);
                    setTextColor('#2ecc71'); // Change color to green after typing
                }, 1000); // Delay before switching to erasing

                return () => clearTimeout(switchToErasing);
            }
        } else {
            if (displayedText.length > 0) {
                const erasingInterval = setInterval(() => {
                    setDisplayedText(prev => prev.slice(0, -1));
                }, 100);

                return () => clearInterval(erasingInterval);
            } else {
                const switchToTyping = setTimeout(() => {
                    setIsTyping(true);
                    setIndex(0);
                    setTextColor('white'); // Reset color to white for the next cycle
                }, 1000); // Delay before switching to typing

                return () => clearTimeout(switchToTyping);
            }
        }
    }, [isTyping, index, text, displayedText]);

    useEffect(() => {
        const updateCursorPosition = () => {
            if (textRef.current && cursorRef.current) {
                const textRect = textRef.current.getBoundingClientRect();
                const cursorRect = cursorRef.current.getBoundingClientRect();

                // Update cursor position based on text width
                cursorRef.current.style.left = `${textRect.left + textRect.width}px`;
                cursorRef.current.style.top = `${textRect.top}px`;
            }
        };

        updateCursorPosition();
        window.addEventListener('resize', updateCursorPosition);
        return () => window.removeEventListener('resize', updateCursorPosition);
    }, [displayedText, textColor]);

    return (
        <div style={{ position: 'relative', display: 'inline-block', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
            <span ref={textRef} className={"custom-font"} style={{ color: textColor, fontSize: '64px', lineHeight:'64px'}}>{displayedText}</span> {/* Adjust font size */}
            <span
                ref={cursorRef}
                style={{
                    color: textColor === 'white' ? '#2ecc71' : 'white',
                    fontSize: '2.5em',
                    verticalAlign: 'baseline',
                    animation: 'blink 1s step-start infinite',
                }}
            >
                |
            </span>
            <style>
                {`
                @keyframes blink {
                    0% { opacity: 1; }
                    50% { opacity: 0; }
                    100% { opacity: 1; }
                }
                `}
            </style>
        </div>
    );
};

export default TypingEffect;