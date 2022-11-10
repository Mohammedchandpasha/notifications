const Notification = (props) => {
  //  Write your code here.
  const { className, messageText, imageUrl, iconSize } = props;
  return (
    <div className={className}>
      <img src={imageUrl} className={iconSize} />
      <p>{messageText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="notifications-container">
    <h1>Notifications</h1>
    <div className="message-container">
      <Notification
        className="information"
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        iconSize="icon"
        messageText="information Message"
      />
      <Notification
        className="success"
        imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        iconSize="icon"
        messageText="Success Message"
      />
      <Notification
        className="warning"
        imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        iconSize="icon"
        messageText="Warning Message"
      />
      <Notification
        className="error"
        imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        iconSize="icon"
        messageText="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
