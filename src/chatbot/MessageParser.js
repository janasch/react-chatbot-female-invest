// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
        const membership = ['member', 'membership', 'join', 'cancel'];
        const pricing = ['cost', 'costs', 'price', 'prices', 'pricing'];


        const lowerCaseMessage = message.toLowerCase();
    
        if (
            lowerCaseMessage.includes("hello" ) ||
            lowerCaseMessage.includes("hi")
            ) {
          this.actionProvider.greet();
        }

        else if (membership.some(v => lowerCaseMessage.includes(v))) {
            this.actionProvider.giveMembershipOptions();
        }
    
        else if (lowerCaseMessage.includes("membership")) {
          this.actionProvider.handleJavascriptList();
        }

    else if (lowerCaseMessage.includes("login")) {
        this.actionProvider.proposeLogin();
      }

      else if (pricing.some(v => lowerCaseMessage.includes(v))) {
        this.actionProvider.explainPricing();
      }

      else {
          this.actionProvider.respondWithDefault();
      }
    }
  }
  
  export default MessageParser;