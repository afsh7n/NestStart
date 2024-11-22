/**
 * Enum for Swagger Consumes types.
 * Represents the content types that API endpoints can consume.
 */
export enum SwaggerConsumesEnum {
  JSON = 'application/json',
  MULTIPART = 'multipart/form-data',
  URLENCODED = 'application/x-www-form-urlencoded',
  XML = 'application/xml',
}

/**
 * Enum for Swagger Produces types.
 * Represents the content types that API endpoints can produce.
 */
export enum SwaggerProducesEnum {
  JSON = 'application/json',
  STREAM = 'application/octet-stream',
  XML = 'application/xml',
  TEXT = 'text/plain',
}

/**
 * Enum for Swagger Authorization Types.
 * Represents the supported authorization mechanisms in the API.
 */
export enum SwaggerAuthEnum {
  BEARER = 'bearer',
  BASIC = 'basic',
  API_KEY = 'apiKey',
  OAUTH2 = 'oauth2',
}

/**
 * Enum for Swagger Response Status Descriptions.
 * Represents common HTTP status descriptions for Swagger documentation.
 */
export enum SwaggerStatusEnum {
  OK = 'Operation successful.',
  CREATED = 'Resource successfully created.',
  NO_CONTENT = 'No content to return.',
  BAD_REQUEST = 'Invalid request parameters.',
  UNAUTHORIZED = 'Unauthorized access.',
  FORBIDDEN = 'Access forbidden.',
  NOT_FOUND = 'Resource not found.',
  INTERNAL_SERVER_ERROR = 'Internal server error.',
  SERVICE_UNAVAILABLE = 'Service unavailable.',
}

/**
 * Enum for Swagger Tags.
 * Represents the logical groupings for API endpoints in Swagger documentation.
 */
export enum SwaggerTagsEnum {
  AUTH = 'Authentication',
  USERS = 'Users',
  ADMIN = 'Administration',
  PRODUCTS = 'Products',
  ORDERS = 'Orders',
  SETTINGS = 'Settings',
}