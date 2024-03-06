import PropTypes from "prop-types";
function CustomButton({ imageLink, classInfo, content }) {
  return (
    <>
      <button
        className={`w-full p-4 max-w-[382px] min-h-[59px] text-sm rounded-lg ${classInfo}`}
      >
        <div className="flex items-center justify-center">
          <img src={imageLink} alt="" />
          <p className="w-full pe-4 font-medium">{content}</p>
        </div>
      </button>
    </>
  );
}

CustomButton.propTypes = {
  imageLink: PropTypes.string,
  classInfo: PropTypes.string,
  content: PropTypes.string,
};

export default CustomButton;
