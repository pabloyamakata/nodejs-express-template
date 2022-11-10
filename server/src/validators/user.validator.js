import { check } from 'express-validator';

const userValidator = [
    check('username')
        .exists()
        .withMessage('Username property must exist')
        .isString()
        .withMessage('Username must be a string')
        .notEmpty()
        .withMessage('Username cannot be empty'),
    check('email')
        .exists()
        .withMessage('Email property must exist')
        .isEmail()
        .withMessage('Input must be of type email')
        .isLength({ max: 100 })
        .withMessage('Email cannot contain more than 100 characters'),
    check('password')
        .exists()
        .withMessage('Password property must exist')
        .isStrongPassword()
        .withMessage('Password must be at least 8 characters long and contain 1 lowercase letter, 1 uppercase letter, 1 number and 1 symbol')
];

export default userValidator;
