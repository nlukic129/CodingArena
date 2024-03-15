//
/**
 * Regular expression for validating usernames.
 *
 * The username must:
 * - Contain only alphanumeric characters, underscores, and hyphens.
 * - Have a length between 3 and 16 characters.
 *
 * @remarks
 * Examples of valid usernames: "john_doe", "johndoe123", "user-name"
 * Examples of invalid usernames: "j", "john_doe123456789", "user name"
 */
export const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;

/**
 * Regular expression for validating passwords.
 *
 * The password must:
 * - Contain at least 8 characters.
 * - Have at least one uppercase letter, one lowercase letter, and one digit.
 * - Can contain special characters.
 *
 * @remarks
 * Examples of valid passwords: "Password123", "Secure@123", "P@ssw0rd"
 * Examples of invalid passwords: "password", "12345678", "pass"
 */
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

/**
 * Regular expression for validating email addresses.
 *
 * The email address must:
 * - Have a valid format, including an "@" symbol and a domain.
 *
 * @remarks
 * Examples of valid email addresses: "john@example.com", "jane.doe@gmail.com", "info@company.co"
 * Examples of invalid email addresses: "john", "jane.doe", "info@company"
 */
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
