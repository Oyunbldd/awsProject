import { CognitoUserPool } from "amazon-cognito-identity-js";
const poolData= {
    UserPoolId:'ap-southeast-1_hxIAusO0I',
    ClientId:'7s3bjqssng6pa9gva1dlaohp1c',
};
export default new CognitoUserPool(poolData);