import React from 'react';

const PricingCard = ({ title, price, features }) => (
  <div className="col-lg-4">
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">{title}</h5>
        <h6 className="card-price text-center">${price}<span className="period">/month</span></h6>
        <hr />
        <ul className="fa-ul">
          {features.map((feature, index) => (
            <li key={index}>
              <span className={`fa-li ${feature.available ? 'text-success' : 'text-muted'}`}>
                <i className={`fas ${feature.available ? 'fa-check' : 'fa-times'}`}></i>
              </span>
              {feature.text}
            </li>
          ))}
        </ul>
        <div className="d-grid">
        <button className="btn btn-primary text-uppercase">Button</button>
                 </div>
      </div>
    </div>
  </div>
);

const PricingSection = () => {
  const tiers = [
    {
      title: 'Free',
      price: 0,
      features: [
        { text: 'Single User', available: true },
        { text: '5GB Storage', available: true },
        { text: 'Unlimited Public Projects', available: true },
        { text: 'Community Access', available: true },
        { text: 'Unlimited Private Projects', available: false },
        { text: 'Dedicated Phone Support', available: false },
        { text: 'Free Subdomain', available: false },
        { text: 'Monthly Status Reports', available: false },
      ],
    },
    {
      title: 'Plus',
      price: 9,
      features: [
        { text: '5 Users', available: true },
        { text: '50GB Storage', available: true },
        { text: 'Unlimited Public Projects', available: true },
        { text: 'Community Access', available: true },
        { text: 'Unlimited Private Projects', available: true },
        { text: 'Dedicated Phone Support', available: true },
        { text: 'Free Subdomain', available: true },
        { text: 'Monthly Status Reports', available: false },
      ],
    },
    {
      title: 'Pro',
      price: 49,
      features: [
        { text: 'Unlimited Users', available: true },
        { text: '150GB Storage', available: true },
        { text: 'Unlimited Public Projects', available: true },
        { text: 'Community Access', available: true },
        { text: 'Unlimited Private Projects', available: true },
        { text: 'Dedicated Phone Support', available: true },
        { text: 'Unlimited Free Subdomains', available: true },
        { text: 'Monthly Status Reports', available: true },
      ],
    },
  ];

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {tiers.map((tier, index) => (
            <PricingCard key={index} title={tier.title} price={tier.price} features={tier.features} />
          ))}
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PricingSection />
      </header>
    </div>
  );
}

export default App;
