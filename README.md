Caesar Cipher
-------------


Create a web-app, that is able to decode encoded text with Ceasar Cipher.

It should have one page consisting several things:
 - A text area to place the encrypted text
 - A number input to specify the shift
 - A paragraph to display the decoded message
 - A button to send the the request and display the decoded message

The decryption should be done by a backend service:
 - It should serve the html for the page
 - It should have a `POST` endpoint on the path: `/decode`
   - It should expect an object as post data like:
  ```json
    {
      "shift": 3,
      "text": "oruhp lsvxp groru vlw"
    }
  ```
   - It should response with something like this (with 200 status):
  ```json
    {
      "status": "ok",
      "text": "lorem ipsum dolor sit"
    }
  ```
   - It should accept shift number between -25 and 25
   - It should only translate the the real letters (a-z and A-Z) (you can use the `/[a-zA-Z]/` RegExp)
   - If any of the properties are missing of the post data or the shift is out of bound it should response an error like (with 400 status):
  ```json
    {
      "status": "error",
      "error": "Shift is out of bound"
    }
  ```

Other requirements:
 - The program should write loading till the XHR request is pending
 - If the input is invalid it should alert the user
 - The decryption unit should be in a separate file and it should be unit tested (it should not consist any express related code)
