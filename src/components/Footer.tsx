"use client";

export default function Footer() {
  return (
    <footer className="py-24 bg-espresso text-cream">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div>
             <span className="font-fancy text-3xl tracking-tighter mb-8 block">Velvet <span className="text-mocha">Brew</span></span>
             <p className="text-cream/30 text-sm font-light max-w-xs leading-loose uppercase tracking-[0.2em]">
               Roasting since 2012. Dedicated to the craft and the community. 
             </p>
          </div>

          <div>
            <h4 className="font-fancy text-xs uppercase tracking-[0.4em] text-mocha mb-8">Location</h4>
            <div className="space-y-4 text-sm font-light tracking-widest text-cream/60">
              <p>42 Artisanal Way, <br />Coffee District, Melbourne</p>
              <p>Mon - Sun: 7:00 AM - 9:00 PM</p>
            </div>
          </div>

          <div>
            <h4 className="font-fancy text-xs uppercase tracking-[0.4em] text-mocha mb-8">Connect</h4>
            <ul className="space-y-4 text-xs font-medium uppercase tracking-[0.3em] text-cream/40">
              <li><a href="#" className="hover:text-mocha transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-mocha transition-colors">TikTok</a></li>
              <li><a href="#" className="hover:text-mocha transition-colors">Events</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-cream/5">
          <p className="text-[10px] text-cream/20 uppercase tracking-[0.2em]">© 2026 Velvet Brew Coffee Co. Handcrafted Quality.</p>
          <div className="font-fancy text-2xl text-cream/10 italic">Cozy vibes served daily</div>
        </div>
      </div>
    </footer>
  );
}
