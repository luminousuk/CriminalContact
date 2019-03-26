export class CcError extends Error {
  constructor(public message: string, public toastTitle: string = "Error") {
    super(message);
    Object.setPrototypeOf(this, CcError.prototype);
  }
}
