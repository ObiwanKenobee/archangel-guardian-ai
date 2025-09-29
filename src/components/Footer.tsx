import { Shield } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-cosmic flex items-center justify-center shadow-divine">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-serif font-bold text-lg text-foreground">
                The Michaelian Order
              </div>
              <div className="text-sm text-muted-foreground">
                Guardians of Truth & Justice
              </div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              A sword of light in code form
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © 2025 The Michaelian Order. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
