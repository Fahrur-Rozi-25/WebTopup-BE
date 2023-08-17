import axios from "axios";

const apiKey = "xnd_public_development_RZtKrXCHmfPyUpMSvPj51fdiLQHB4HYub1ybWpL8yR6lEJidvvQhB1tySP2c";
const url = "https://api.xendit.co/customers";

const headers = {
  "Authorization": `Basic ${Buffer.from(apiKey).toString('base64')}`,
  "Content-Type": "application/json",
};

const reqBody = {
  "reference_id": "demo_1475801962607",
  "type": "INDIVIDUAL",
  "individual_detail": {
    "given_names": "John",
    "surname": "Doe"
  },
  "email": "customer@website.com",
  "mobile_number": "+628121234567890"
};

axios.post(url, reqBody, { headers })
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response.data);
  });
