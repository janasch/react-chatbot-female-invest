// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Hi there.")
        this.updateChatbotState(greetingMessage)
      }


      giveMembershipOptions(){
        const message = this.createChatBotMessage("Are you already a member of Female Invest?",
        {widget: "yesNoOptions",
      });

        this.updateChatbotState(message)
      }

      proposeLogin = () => {
        const message = this.createChatBotMessage(
          "Fantastic, login and explore the mebership section:",
          {
            widget: "loginLink",
          }
        );
    
        this.updateChatbotState(message);
      };

      proposeSignUp= () => {
        const message = this.createChatBotMessage(
          "Alright, do you want to become a part of our community?",
          {
            widget: "signUpLink",
          }
        );
    
        this.updateChatbotState(message);
      };

      explainPricing= () => {         
        const message = this.createChatBotMessage(
          "You can start your membership at around $13 monthly. For more information, see:",
        {widget: "pricingLink"}
        );
        this.updateChatbotState(message);
      };

      respondWithDefault = () => {
        const message = this.createChatBotMessage(
          "I am not sure what you mean... Can you please try rephrase?",
        
        );
    
        this.updateChatbotState(message);
      };


      updateChatbotState(message) {
 
        // NOTE: This function is set in the constructor, and is passed in
        // from the top level Chatbot component. The setState function here
        // actually manipulates the top level state of the Chatbot, so it's
        // important that we make sure that we preserve the previous state.
         
            
           this.setState(prevState => ({
                ...prevState, messages: [...prevState.messages, message]
            }))
          }


  }
  
  export default ActionProvider;