const Footer = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="container-width px-6">
        <div className="text-center">
          <p className="text-primary-foreground/70 text-sm">
            © {new Date().getFullYear()} Vinay Telukuntla. All rights reserved.
          </p>
          <p className="text-accent text-sm font-medium mt-2">
            Let's build the future of banking, together.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
