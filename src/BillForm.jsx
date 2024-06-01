import { useState } from "react";

function BillForm({ onSubmit }) {
  const [productId, setProductId] = useState("");
  const [description, setDescription] = useState("");
  const [unitValue, setUnitValue] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ productId, description, unitValue, quantity });
    setProductId("");
    setDescription("");
    setUnitValue("");
    setQuantity("");
  };

  return (
    <div className="factura">
      <h1>Factura</h1>
      <form onSubmit={handleSubmit}>
        <div className="factura__cliente factura__position">
          <div>
            <label htmlFor="billId">Número de Factura:</label>
            <input type="text" id="billId" autoComplete="off" required />
          </div>
          <div>
            <label htmlFor="clientName">Nombre del cliente</label>
            <input type="text" id="clientName" autoComplete="off" required />
          </div>
          <div>
            <label htmlFor="cedula">Cédula:</label>
            <input type="number" id="cedula" autoComplete="off" required />
          </div>
          <div>
            <label htmlFor="phoneNumber">Teléfono:</label>
            <input type="text" id="phoneNumber" autoComplete="off" required />
          </div>
        </div>
        <div className="factura__correo">
          <label htmlFor="email">Correo:</label>
          <input type="text" id="email" autoComplete="off" required />
        </div>
        <div className="factura__producto factura__position">
          <input
            type="number"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            id="productId"
            placeholder="ID Producto"
            autoComplete="off"
            required
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            placeholder="Descripción"
            autoComplete="off"
            required
          />
          <input
            type="number"
            value={unitValue}
            onChange={(e) => setUnitValue(e.target.value)}
            id="unitValue"
            placeholder="Valor Unitario"
            autoComplete="off"
            required
          />
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            id="quantity"
            placeholder="Cantidad"
            autoComplete="off"
            required
          />
        </div>

        <button type="submit" value="Agregar Producto" > Agregar producto </button>
      </form>
    </div>
  );
}

export default BillForm;
