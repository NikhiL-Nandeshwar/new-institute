const Footer = () => {
  return (
    <div className="text-center text-sm text-gray-600 bg-stone-50 border-t border-zinc-200 p-4 space-y-1">
      <div>©{new Date().getFullYear()} Mohim Academy. All rights reserved.</div>
      <div>
        Managed by{" "}
        <a
          href="https://nexspire.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary"
        >
          NexSpire Technologies
        </a>
      </div>
    </div>
  );
};

export default Footer;
