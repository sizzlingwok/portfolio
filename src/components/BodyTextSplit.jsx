const BodyTextSplit = ({ text1, text2, text3, comboClass }) => {

  return (
      <div className={`text-container ${comboClass}`}>
        {text1 && <div className="text-description">{text1}</div>}
        {text2 && <div className="text-description">{text2}</div>}
        {text3 && <div className="text-description">{text3}</div>}
      </div>
  );
};

export default BodyTextSplit;
