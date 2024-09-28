import PricingImg from "../../../gallery/Pricing-comparison.webp";
import "./pricing.css"
const Pricing = () => {
  return (
    <div className="pricing-section">
      <div className="pricing-content">
        <h2>Unbeatable Pricing</h2>
        <p>
          Our service provides affordable, high-quality virtual assistants
          specifically trained for digital marketing agencies.
        </p>
        <p>
          They’re ready to deliver immediate value, cutting down on the usual
          costs and time associated with hiring and training. It’s the most
          efficient way to scale your agency and enhance your services without
          breaking the bank.
        </p>
      </div>
      <div className="pricing-image-container">
        <img src={PricingImg} alt="Pricing Comparison" />
      </div>
    </div>
  );
};

export default Pricing;
