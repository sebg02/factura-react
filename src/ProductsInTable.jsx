import { useState } from 'react';

function ProductsInTable({ productId, description, unitValue, quantity }) {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    if (!isVisible) return null;

    return (
        <tr>
            <td>{productId}</td>
            <td>{description}</td>
            <td>{unitValue}</td>
            <td>{quantity}</td>
            <td>{unitValue * quantity}</td>
            <td><button onClick={toggleVisibility}>Eliminar</button></td>
        </tr>
    );
}

export default ProductsInTable;
