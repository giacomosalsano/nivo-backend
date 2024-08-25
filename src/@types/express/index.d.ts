/* eslint-disable no-unused-vars */
declare namespace Express {
  export interface Request {
    frame: {
      id: string
      email: string
    }
  }
}
