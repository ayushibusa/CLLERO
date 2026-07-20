import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DemoModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gymName: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('http://localhost:5000/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(data.errors ? data.errors.map(err => err.msg).join(', ') : data.message);
      }
    } catch (error) {
      setStatus('error');
      setErrorMsg('Failed to connect to the server. Please try again later.');
    }
  };

  return (
    <AnimatePresence>
      <div key="demo-modal" className="fixed inset-0 z-[100] overflow-y-auto">
        
        {/* Fixed Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm"
        />

        {/* Scrollable Container */}
        <div className="min-h-full w-full flex items-center justify-center p-4 py-12 relative z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-surface border border-text/10 rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 pointer-events-auto"
          >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-text/50 hover:text-text transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 className="text-3xl font-bold text-text mb-2">Book a Demo</h2>
          <p className="text-text/60 mb-8">See how Cllero can transform your gym's operations.</p>

          {status === 'success' ? (
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 text-center">
              <svg className="w-12 h-12 text-accent mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-text mb-2">Request Received!</h3>
              <p className="text-text/70">Our team will contact you shortly to schedule your demo.</p>
              <button
                onClick={onClose}
                className="mt-6 w-full py-3 bg-surface border border-text/20 rounded-full font-medium hover:bg-surface/80"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm text-text/70 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-background border border-text/10 rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-text/70 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-background border border-text/10 rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm text-text/70 font-medium">Gym Name</label>
                <input
                  type="text"
                  name="gymName"
                  required
                  value={formData.gymName}
                  onChange={handleChange}
                  className="w-full bg-background border border-text/10 rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm text-text/70 font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-background border border-text/10 rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm text-text/70 font-medium">Message (Optional)</label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-background border border-text/10 rounded-xl px-4 py-3 text-text focus:outline-none focus:border-accent/50 transition-colors resize-none"
                ></textarea>
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-accent hover:bg-accent/90 disabled:opacity-50 text-background font-semibold rounded-xl transition-all shadow-[0_0_15px_rgba(255,107,0,0.2)] mt-2"
              >
                {status === 'loading' ? 'Submitting...' : 'Request Demo'}
              </button>
            </form>
          )}
        </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default DemoModal;
