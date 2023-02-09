
//import { v4 as uuidv4 } from "uuid";
const { v4: uuidv4 } = require('uuid')
const HTTP_CODES = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  PARTIAL_CONTENT: 206,
  BAD_REQUEST: 400,
  UNAUTHORISED: 401,
  NO_ACCESS: 403,
  NOT_FOUND: 404,
  RESOURCE_MOVED: 410,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  TEMPORARAY_DOWN: 503,
  TIME_OUT: 504,
};

module.exports={

  INVALID_ID:{
    message:"User ID Not Found",
    status: HTTP_CODES.NOT_FOUND
  },
  
  CREATE_SUCESS: {
    message: "Successfully created😊😊",
    status: HTTP_CODES.CREATED,
  },
  ADD_SUCESS: {
    message: "Successfully added😊😊",
    status: HTTP_CODES.SUCCESS,
  },
  UPDATE_SUCESS: {
    message: "Successfully updated😊😊",
    status: HTTP_CODES.SUCCESS,
  },
  DELETE_SUCESS: {
    message: "Successfully deleted😊😊",
    status: HTTP_CODES.SUCCESS,
  },
  COPY_SUCESS: {
    message: "Successfully copied😊😊",
    status: HTTP_CODES.SUCCESS,
  },
  APPROVE_SUCESS: {
    message: "Successfully approved😊😊",
    status: HTTP_CODES.SUCCESS,
  },

  //Error
  REFERENCE_ID_NOT_FOUND_ERROR: {
    operationId: uuidv4(),
    code: "2011",
    message: "Reference Id not found😒😒",
    status: HTTP_CODES.NOT_FOUND,
  },
  OPERATION_ID_NOT_FOUND_ERROR: {
    operationId: uuidv4(),
    code: "2019",
    message: "Operation Id not found😒😒",
    status: HTTP_CODES.NOT_FOUND,
  },
  DUPLICATE_FIELD_ERROR: {
    operationId: uuidv4(),
    code: "2004",
    message: "Field already exists😒😒",
    status: HTTP_CODES.BAD_REQUEST,
  },
  DUPLICATE_RETURN_KEY_ERROR: {
    operationId: uuidv4(),
    code: "2004",
    message: "Duplicate return key😒😒",
    status: HTTP_CODES.BAD_REQUEST,
  },
  POSITION_MISSING_ERROR: {
    operationId: uuidv4(),
    code: "2011",
    message: "Position is missing😒😒",
    status: HTTP_CODES.BAD_REQUEST,
  },
  STRING_ONLY_SPACE_ERROR: {
    operationId: uuidv4(),
    code: "2023",
    message: "Input should not be only space😒😒",
    status: HTTP_CODES.BAD_REQUEST,
  },
  CONTAINS_SPECIAL_CHARACTER_ERROR: {
    operationId: uuidv4(),
    code: "2024",
    message: "Rule name should not contain any special characters😒😒",
    status: HTTP_CODES.BAD_REQUEST,
  },
  CRITERIA_NOT_FULFILLED_ERROR: {
    operationId: uuidv4(),
    code: "2020",
    message: "Criteria for approving the rule is not fulfilled😒😒",
    status: HTTP_CODES.BAD_REQUEST,
  },
  VERSION_UPDATE_ERROR: {
    operationId: uuidv4(),
    code: "2010",
    message: "Couldnot update the version😒😒",
    status: HTTP_CODES.NOT_IMPLEMENTED,
  },
  CONCURRENCY_ERROR: {
    operationId: uuidv4(),
    code: "2009",
    message: "This file is edited from the last time you used😒😒",
    status: HTTP_CODES.RESOURCE_MOVED,
  },
  CANNOT_EDIT_THE_FIELD: {
    operationId: uuidv4(),
    code: "2008",
    message: "Cannot edit this field😒😒",
    status: HTTP_CODES.NO_ACCESS,
  },
  EMPTY_FIELD_ERROR: {
    operationId: uuidv4(),
    code: "2007",
    message: "Field value is empty😒😒",
    status: HTTP_CODES.BAD_REQUEST,
  },

  INVALID_INPUT_FORMAT_ERROR: {
    operationId: uuidv4(),
    code: "2002",
    message: "Input fields format is invalid😒😒",
    status: HTTP_CODES.BAD_REQUEST,
  },

  REQUIRED_ERROR: {
    operationId: uuidv4(),
    code: "2003",
    message: "Field key is required😒😒",
    status: HTTP_CODES.BAD_REQUEST,
  },

  DUPLICATE_NAME_ERROR: {
    operationId: uuidv4(),
    code: "2004",
    message: "Name already exists😒😒",
    status: HTTP_CODES.BAD_REQUEST,
  },

  VALIDATION_FAILED: {
    operationId: uuidv4(),
    code: "2005",
    message: "Validation Failed😒😒",
    status: HTTP_CODES.BAD_REQUEST,
  },

  DB_CONNECTION_FAILED: {
    operationId: uuidv4(),
    code: "1000",
    message: "Database connectivity failed😒😒",
  },

  INTERNAL_SERVER_ERROR: {
    operationId: uuidv4(),
    code: "5001",
    message: "Internal server error😒😒",
    status: HTTP_CODES.INTERNAL_SERVER_ERROR,
  },

  AUDIT_LOGS_FORMAT_ERROR: {
    operationId: uuidv4(),
    code: "1102",
    message: "Audit logs formatting failed😒😒",
    status: HTTP_CODES.INTERNAL_SERVER_ERROR,
  },
  FIELD_NOT_PRESENT_ERROR: {
    operationId: uuidv4(),
    code: "2002",
    message: "Field not found😒😒",
    status: HTTP_CODES.BAD_REQUEST,
  },
  INVALID_SYNTAX_ERROR: {
    operationId: uuidv4(),
    code: "2002",
    message: "Syntax is Invalid😒😒",
    status: HTTP_CODES.BAD_REQUEST,
  },
  CANNOT_DELETE_ERROR: {
    operationId: uuidv4(),
    code: "2002",
    message: "Cannot delete😒😒",
    status: HTTP_CODES.BAD_REQUEST,
  },
  POSITION_NOT_FOUND_ERROR: {
    operationId: uuidv4(),
    code: "2019",
    message: "Position not found😒😒",
    status: HTTP_CODES.NOT_FOUND,
  }
};

/**
 * 1100 used for normal backstage flow (Please continue using this sequence)
 * 2000 e-commerce sdk will follow this sequence
 * 3000 sequence is used for headless
 */
