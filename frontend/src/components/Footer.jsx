import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-[60] w-full bg-background border-t border-white/10 py-12 px-6 md:py-20 md:px-12 md:pl-[300px] lg:pl-[380px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm w-full">
          <h2 className="text-3xl font-serif font-bold text-white mb-4 tracking-tighter">Cllero.</h2>
          <p className="text-white/60 font-light mb-8">
            The all-in-one platform built for how modern gyms actually run.
            From the front desk to the boardroom, we power your growth.
          </p>
          <div className="text-white/40 text-sm">
            © {new Date().getFullYear()} Cllero Inc. All rights reserved.
          </div>
        </div>

        <div className="flex flex-wrap gap-12 md:gap-20">
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors">Owner Panel</a></li>
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors">Trainer Panel</a></li>
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors">Member App</a></li>
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors">Dietitian Panel</a></li>
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
