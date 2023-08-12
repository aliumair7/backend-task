class ErrorResponse {
  constructor(status, message, errors) {
    this.status = status;
    this.message = message;
    this.errors = errors;
  }
}

module.exports = ErrorResponse;
