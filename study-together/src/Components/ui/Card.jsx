const Card = ({ children, className = '' }) => {
  return (
    <div className={` text-white bg-custom-gray-2 rounded-xl shadow-lg p-6 ${className}`}>
      {children}
    </div>
  );
};

export default Card;