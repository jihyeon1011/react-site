import React, { useRef } from 'react';

const Ex_ref5 = () => {
    const itemsRef = useRef([]);

    const addItem = () => {
        // "Item 1", "Item 2", "Item 3", ...생성
        const newItem = `Item ${itemsRef.current.length + 1}`;
        
        //배열에 직접 추가 (setState X)
        itemsRef.current = [...itemsRef.current, newItem];
        
        //콘솔에서 배열 확인
        console.log(itemsRef.current);
    }

    return (
        <>
        <button onClick={addItem}>Add Item</button>
        <ul>
            {itemsRef.current.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        </>
    );
};

export default Ex_ref5;