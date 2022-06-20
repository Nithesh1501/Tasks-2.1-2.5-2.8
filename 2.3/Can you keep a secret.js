//Can you keep a secret?
function createSecretHolder(secret) {
  return {
 getSecret : function() {
    return secret;
},
  setSecret : function(a) {
    secret = a;
  }
}
}