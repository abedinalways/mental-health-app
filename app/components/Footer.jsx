import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-[20rem] font-black text-lime-400 opacity-20 select-none pointer-events-none transform -translate-y-8">
            Zuno
          </div>
        </div>

       
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
            <div className="lg:col-span-1">
              <div className="text-2xl font-bold text-white">zuno</div>
            </div>

            
            <div className="lg:col-span-1">
              <h3 className="text-gray-400 font-medium mb-4">Explore</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    About Zuno
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Learn
                  </a>
                </li>
              </ul>
            </div>

     
            <div className="lg:col-span-1">
              <h3 className="text-gray-400 font-medium mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Terms of service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow us */}
            <div className="lg:col-span-1">
              <h3 className="text-gray-400 font-medium mb-4">Follow us</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-1">
              <h3 className="text-gray-400 font-medium mb-4">Newsletter</h3>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all duration-200"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-lime-400 transition-colors duration-200">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We only share your information in accordance with our privacy
                  policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-sm text-gray-400 leading-relaxed">
            Nullam quis risus eget urna mollis ornare vel eu leo. Integer
            posuere erat a ante venenatis dapibus posuere velit aliquet. Duis
            mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra
            augue.
          </p>
        </div>
      </div>
    </footer>
  );
}
