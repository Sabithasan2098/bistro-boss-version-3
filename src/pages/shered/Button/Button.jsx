const Button = ({ Button, textColor, borderColor }) => {
  return (
    <div>
      <button
        style={{
          color: textColor,
          borderColor: borderColor,
        }}
        className="btn btn-outline border-0 border-b-4 uppercase bg-[#e8e8e8]"
      >
        {Button}
      </button>
    </div>
  );
};

export default Button;
