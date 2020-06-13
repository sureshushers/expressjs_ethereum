pragma solidity ^0.5.17;

contract InboxContract{

  string message;

  constructor() public {
      message = "hi there";
  }

 event messageConfirmed(
    string message
  );

  event getMessageEvent(
       string message
      );

  function getMessage()public returns(string memory){
    emit getMessageEvent(message);
    return message;
  }

  function setMessage(string memory _message)public {
    message=_message;
   emit messageConfirmed(message);
  }
}
