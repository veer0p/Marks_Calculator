// ContactPage.js
import React from 'react';

function ContactPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Address:</h2>
          <p>123 Main Street,</p>
          <p>City, State, Zip Code</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Phone:</h2>
          <p>123-456-7890</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Email:</h2>
          <p>info@example.com</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Social Media:</h2>
          <ul>
            <li>Facebook: <a href="https://facebook.com/example">Example</a></li>
            <li>Twitter: <a href="https://twitter.com/example">Example</a></li>
            <li>Instagram: <a href="https://instagram.com/example">Example</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
