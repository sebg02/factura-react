function Values({ subtotal, iva, total }) {
  return (
    <div className="resultados">
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>IVA (16%): ${iva.toFixed(2)}</p>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default Values;
