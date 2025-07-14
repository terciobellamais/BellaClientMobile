// Dev
// const path = "http://localhost:8080";

// Prod
const path = "http://34.57.23.67:8080";

export const login = `${path}/api/v1/auth/login`;
export const logout = `${path}/api/customers/logout`;
export const register = `${path}/api/v1/users`;
export const validateToken = `${path}/api/customers/validate-token`;

export const sendCode = `${path}/api/v1/auth/add-phone`;
export const verifyCode = `${path}/api/v1/auth/add-phone/verify-code`;
export const isPhoneVerified = `${path}/api/v1/auth/phone/is-verified`;
