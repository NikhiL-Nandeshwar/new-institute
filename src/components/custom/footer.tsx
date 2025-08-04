const Footer = () => {
  return (
    <footer className="bg-stone-50 border-t border-zinc-200 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Mohim Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
