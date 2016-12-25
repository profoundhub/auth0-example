export const options = {
    allowedConnections: ['twitter', 'facebook', 'linkedin', 'github', 'Username-Password-Authentication'],    
    theme: {
        logo: 'http://memberclouds.com/members/wp-content/uploads/2015/08/MC-logo07-copy.png',
        // primaryColor: 'red'
    },
    auth: {
        sso: true
    },
    additionalSignUpFields: [{
      /*
        name: "address",
        placeholder: "enter your address",        
        prefill: "Your address",
        validator: function(address: any) {
          return {
             valid: address.length >= 10,
             hint: "Must have 10 or more chars" // optional
          };
        }
      },
      {*/
        name: "github_handle",
        placeholder: "Enter your GitHub Handle"
      }],
      languageDictionary: {
        // emailInputPlaceholder: "something@youremail.com",
        title: "Welcome!"
      }  
}