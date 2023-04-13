import config from "../config";

const Pagos = () => {
  return (
    <div>
      <h1>Pagos con React y Stripe</h1>
      <h3>{config.stripeApiKey}</h3>
      <button>Pagar</button>
    </div>
  );
};

export default Pagos;
