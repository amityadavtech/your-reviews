import React from 'react';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Boost Your Business with Real Reviews</h1>
      <p>Get genuine customer reviews and increase trust for your brand.</p>

      <h2>How It Works</h2>
      <ol>
        <li><strong>Step 1:</strong> Choose Your Plan</li>
        <li><strong>Step 2:</strong> Place Your Order</li>
        <li><strong>Step 3:</strong> Receive Reviews</li>
      </ol>

      <h2>Our Pricing</h2>
      <div>
        <h3>Basic Plan</h3>
        <p>₹5,000 - Basic reviews</p>

        <h3>Standard Plan</h3>
        <p>₹10,000 - More reviews & advanced options</p>

        <h3>Premium Plan</h3>
        <p>₹20,000 - Premium reviews & custom services</p>
      </div>

      <h2>Frequently Asked Questions</h2>
      <p><strong>How long does it take to get reviews?</strong><br />
      It typically takes 7-14 days depending on the plan you choose.</p>

      <p><strong>Are the reviews real?</strong><br />
      Yes, all reviews are verified and authentic.</p>

      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" /><br />
        <input type="email" placeholder="Your Email" /><br />
        <textarea placeholder="Your Message"></textarea><br />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
