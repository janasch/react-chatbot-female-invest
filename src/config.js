import { createChatBotMessage } from "react-chatbot-kit";
import YesNoOptions from "./chatbot/OptionsWidgets/YesNoOptionsWidget";
import LinkList from "./chatbot/LinkList/LinkList";

const config = {
    botName: "Kamala",
  initialMessages: [createChatBotMessage(`Hi there! I'm Kamala, your friendly chatbot.\r\n I am here to support you. How can I help?`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#b4b1d2",
    },
    chatButton: {
      backgroundColor: "#2f215f",
    },
  },
    widgets: [
      {
        widgetName: "yesNoOptions",
       widgetFunc: (props) => <YesNoOptions {...props} />,
      },
      {
        widgetName: "loginLink",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
        options: [
          {
            text: "Login",
            url: "https://femaleinvestb2c.b2clogin.com/femaleinvestb2c.onmicrosoft.com/B2C_1A_ForcePasswordReset_signup_signin/oauth2/v2.0/authorize?response_type=code+id_token&response_mode=form_post&redirect_uri=https%3A%2F%2Ffemaleinvest.com%2Fapi%2Fauth%2Fcallback%2Fazureb2c-signin&scope=openid&client_id=fbdbfad1-1cc1-43ab-ab35-b61dc0526fb1/",
            id: 1,
          },
        ]
      },
    },
      {
        widgetName: "signUpLink",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
        options: [
          {
            text: "Become a member",
            url:
              "https://femaleinvest.com/membership",
            id: 1,
          },
        ]
      },
    },
    {
      widgetName: "pricingLink",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
      options: [
        {
          text: "Membership details",
          url:
            "https://femaleinvest.com/membership",
          id: 1,
        },
      ]
    },
  },
  ],
  };

export default config