# Smart Login System

Smart Login System is a simple web application that provides user authentication functionalities using HTML, CSS, JavaScript (ES6+), Bootstrap 5, and Font Awesome 6.

## Features

- **Sign Up:** Users can create a new account by providing their name, email, and password.
- **Login:** Registered users can log in using their email and password.
- **Validation:** Input validation for required fields during sign up and login.
- **LocalStorage:** User data is stored locally using `localStorage` for simplicity in this demo.
- **Welcome Page:** Upon successful login, users are greeted with a personalized welcome message.

## Usage

1. **Sign Up**
   - Enter your name, email, and password in the sign-up form.
   - Click the "Sign Up" button to create a new account.
   - Existing users are notified if the email is already registered.

2. **Login**
   - Enter your registered email and password in the login form.
   - Click the "Login" button to access the welcome page.
   - Incorrect login attempts are indicated with an error message.

3. **Welcome Page**
   - After successful login, users are redirected to a welcome page displaying a personalized welcome message.
   - The welcome message includes the user's name retrieved from `localStorage`.

## Technologies Used

- **HTML:** Structure of web pages and forms.
- **CSS:** Styling for responsive design and visual appeal.
- **JavaScript:** Functionality for user authentication, input validation, and localStorage management.
- **Bootstrap:** CSS framework for layout and components.
- **Font Awesome:** Icons used for buttons and visual elements.
- **Google Fonts:** Custom fonts used for typography.
