import {APIGatewayProxyHandlerV2} from "aws-lambda";

export const get: APIGatewayProxyHandlerV2 = async (event) => {
  console.log(event);
  return {
    statusCode: 200,
    body: JSON.stringify({ result: true })
  };
};
