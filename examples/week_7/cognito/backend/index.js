const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const PORT = 3000;

const jwt = require("jsonwebtoken");
const jwksClient = require('jwks-rsa');

// AWS SDK

const {
    CognitoIdentityProviderClient,
    SignUpCommand,
    ConfirmSignUpCommand,
    InitiateAuthCommand
} = require("@aws-sdk/client-cognito-identity-provider")

const region = "us-east-1";

const cognitoClient = new CognitoIdentityProviderClient({region});
const userPoolId = "us-east-1_Fq3rwkbAV";
const clientId = "3bluao9vm10dd1bflrfvvb524u";
// const clientSecret = "oj7maghan671ilrnjpfvgfgv52bcsqorrisfrrc1ljvdvptp0en";

app.post("/register", async (req, res) => {
    const {username, password, email} = req.body;

    const params = {
        ClientId: clientId,
        Username: username,
        Password: password,
        UserAttributes: [
            {
                Name: "email",
                Value: email
            }
        ]
    };

    try{
        const command = new SignUpCommand(params);
        const result = await cognitoClient.send(command);
        res.send({message: "user registered successfully", user: result.UserSub})
    }catch(error){
        res.status(400).send(error.message || JSON.stringify(error));
    }
});


app.post("/confirm", async (req, res) => {
    const {username, confirmationCode} = req.body;
    const params = {
        ClientId: clientId,
        Username: username,
        ConfirmationCode: confirmationCode
    }

    try {
        const command = new ConfirmSignUpCommand(params);
        const result = await cognitoClient.send(command);
        res.send({message: "Confirmation Successful", result});
    } catch (error) {
        res.status(400).send(error.message || JSON.stringify(error));
    }
})

// login user
app.post("/login", async (req, res) => {
    const {username, password} = req.body;

    const params = {
        AuthFlow: "USER_PASSWORD_AUTH",
        ClientId: clientId,
        AuthParameters: {
            USERNAME: username,
            PASSWORD: password
        }
    };

    try {
        const command = new InitiateAuthCommand(params);
        const result = await cognitoClient.send(command);
        res.send({message: "login successful", session: result.AuthenticationResult})
    } catch (error) {
        res.status(400).send(error.message || JSON.stringify(error));
    }
})


// Cognito JWK setup
const client = jwksClient({
    jwksUri: `https://cognito-idp.${region}.amazonaws.com/${userPoolId}/.well-known/jwks.json`
})

function getKey(header, callback) {
    client.getSigningKey(header.kid, (err, key) => {
        const signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
    })
}

// protected route
app.get("/protected", (req, res) => {
    const token = req.headers.authorization.split(" ")[1];

    if (!token){
        return res.status(401).send({message: "no token provided"});
    }

    jwt.verify(token, getKey, {algorithms: ["RS256"]}, (err, decoded) => {
        if(err){
            return res.status(401).send({message: "Invalid Token"});
        }

        res.send({message: "You accessed protected data", decoded});
    })
})


app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})