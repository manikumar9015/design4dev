const Footer = () => {
  return (
    <footer className="border-t dark:border-gray-700 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2024 StudyTogether. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
