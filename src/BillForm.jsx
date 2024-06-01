import { useState } from "react";

function BillForm({onSubmit}) {
    const [productId, setProductId] = useState("");
    const [description, setDescription] = useState('');
    const [unitValue, setUnitValue] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ productId, description, unitValue, quantity });
        setProductId("");
        setDescription('');
        setUnitValue("");
        setQuantity("");
    }


    return (
        <>
            <h1>Factura</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="billId">Número de Factura:</label>
                    <input type="text" id="billId" required/>
                </div>
                <div>
                    <label htmlFor="clientName">Nombre del cliente</label>
                    <input type="text" id="clientName" required/>
                </div>            
                <div>
                    <label htmlFor="cedula">Cédula:</label>
                    <input type="number" id="cedula" required/>
                </div>            
                <div>
                    <label htmlFor="phoneNumber">Teléfono:</label>
                    <input type="text" id="phoneNumber" required/>
                </div>            
                <div>
                    <label htmlFor="email">Correo:</label>
                    <input type="text" id="email" required/>
                </div>
                <div>
                    <input type="number" value={productId} 
                    onChange={(e) => setProductId(e.target.value)}
                    id="productId" placeholder="ID Producto" required/>
                    <input type="text" value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    id="description" placeholder="Descripción" required/>
                    <input type="number" value={unitValue} 
                    onChange={(e) => setUnitValue(e.target.value)}
                    id="unitValue" placeholder="Valor Unitario" required/>
                    <input type="number" value={quantity} 
                    onChange={(e) => setQuantity(e.target.value)}
                    id="quantity" placeholder="Cantidad" required/>
                </div>

                <input type="submit" value="Agregar Producto" />
                
            </form>
        </>
    )
}



export default BillForm;