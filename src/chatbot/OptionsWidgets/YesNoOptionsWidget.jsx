import "./YesNoOptionsWidget.css";

const YesNoOptions = (props) => {
  const options = [
    { text: "Yes",
    handler: props.actionProvider.proposeLogin,
    id: 1 },
    { text: "No",
    handler: props.actionProvider.proposeSignUp,
    id: 2 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="yesNo-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="yesNo-options-container">{optionsMarkup}</div>;
};

export default YesNoOptions;