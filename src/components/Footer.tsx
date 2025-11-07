import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-foreground mb-2">Madras Engineering College</h3>
              <p className="text-sm text-muted-foreground">
                A Launchpad College for Technocrats to Learn, Build & Excel.
              </p>
            </div>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="w-4 h-4 text-primary" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter className="w-4 h-4 text-primary" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Linkedin className="w-4 h-4 text-primary" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#programs" className="text-sm text-muted-foreground hover:text-primary transition-colors">Programs</a></li>
              <li><a href="#placements" className="text-sm text-muted-foreground hover:text-primary transition-colors">Placements</a></li>
              <li><a href="#campus" className="text-sm text-muted-foreground hover:text-primary transition-colors">Campus Life</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Computer Science</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Mechanical</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Electrical</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Civil</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Chennai Campus</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Tambaram Road, Vellarai (Chennai Metropolitan Area), Tamil Nadu - 602105, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+91 70020 80020</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center mb-2">
            © Madras Engineering College. All Rights Reserved | Mandatory Disclosure
          </p>
          <p className="text-xs text-muted-foreground text-center">
            Affiliated to Anna University, Chennai
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
