export const validateUserLoginForm = (values) => {
    const { username, password } = values;
    const errors = {};

    if (!username) {
        errors.username = 'Required';
    }
    if (!password) {
        errors.password = 'Required';
    }

    if (username.length < 6) {
        errors.username = 'Must be at least 6 characters.';
    }
    else if (username.length > 15) {
        errors.username = 'Must be 15 characters or less.';
    }

    if (password.length < 8) {
        errors.password = 'Must be at least 8 characters.';
    }

    return errors;
};