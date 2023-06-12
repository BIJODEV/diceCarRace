function handleCredentialResponse(response) {
    // Handle the response from the credential picker.
    console.log(response.credential);
  }
  
  google.accounts.id.initialize({
    client_id: '41790384339-c1tedjaiv70mge0793gm25c242lm3o44.apps.googleusercontent.com',
    callback: handleCredentialResponse
  });
  
  google.accounts.id.renderButton(
    document.getElementById('google-signin-button'),
    { theme: 'outline', size: 'large' }
  );
  
