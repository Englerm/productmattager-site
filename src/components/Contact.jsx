// src/components/Contact.jsx
import { useState } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

return (
  <section id="contact" className="py-16" style={{ backgroundColor: '##ffffff' }}>
    <div className="container mx-auto px-6 max-w-7xl">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Get in Touch</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-center mt-12 max-w-4xl mx-auto">
        {/* Cartoon Image */}
        <div className="flex justify-center">
          <img
            src="/assets/images/matt-career-cartoon-no-bg.png"
            alt="Cartoon Matt climbing career steps"
            className="w-48 h-auto rounded"
          />
        </div>

        {/* Contact Info */}
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Contact Info</h3>
            <div className="flex items-center gap-2 mt-2">
              <FaEnvelope className="text-blue-600" />
              <a
                href="mailto:Matt@ProductMattager.com"
                className="text-blue-600 hover:underline"
              >
                Matt@ProductMattager.com
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Location</h3>
            <p>New York City Area</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Connect</h3>
            <div className="flex items-center gap-2 mt-2">
              <FaLinkedin className="text-blue-600" />
              <a
                href="https://www.linkedin.com/in/englermatthew"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Contact;
