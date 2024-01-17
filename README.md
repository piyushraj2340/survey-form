# Survey-Form


## Description
Welcome to our cutting-edge MERN Stack Survey Form Application, where seamless functionality meets modern design to provide an unparalleled surveying experience. Built on the powerful MERN (MongoDB, Express.js, React, Node.js) stack, our application combines the strengths of these technologies to deliver a robust, efficient, and Admin-friendly solution for creating and managing surveys.


### Deployment Link
- [Deployment Link](https://survey-form-eta-three.vercel.app/): use this link to access the application


#### Setup and Running Locally
Follow these steps to set up and configure your machine:

**Prerequisites**
Make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/): You need Node.js to run JavaScript on the server. You can download and install it from the official website.

- [MongoDB](https://www.mongodb.com/): MongoDB is used as the database for this application. Install MongoDB and make sure it's up and running. You can download MongoDB from their official website.

##### Installation

follow the steps to run the application on local machine

1. **Clone the Repository:**

   Open your terminal and navigate to the directory where you want to store the project. Then, run the following command to clone the repository:

   ```
   git clone <[repository-url](https://github.com/piyushraj2340/survey-form.git)>
   ```

2. **Navigate to the Project Folder:**

   Change your current directory to the project folder:

   ```
   cd <project-folder>
   ```

3. **Install Dependencies:**

   Use npm to install the project dependencies:

   ```
   npm install
   ```

##### Configuration

1. **Database Configuration:**

   In the project, you might need to configure the MongoDB connection. Look for a configuration file (e.g., `/src/db/db.js`) or environment variables (e.g., `.env` create file in root folder of the project) to add your MongoDB connection details. Update the MongoDB URI to point to your local MongoDB instance if necessary.

##### Running the Application

1. **Start the Server:**

   To run the application, execute the following command:

   ```
   npm start
   ```

   This command will start the Node.js server.

2. **Access the Application:**

   Once the server is running, you can access the application by opening your web browser and navigating to:

   ```
   http://localhost:8000
   ```

   The application should now be accessible in your web browser, and you can begin interacting with it.


###### API Endpoints and Usage

1. Create a Admin (POST /admin/signup)

- **Description:** This endpoint allows you to add a new Admin to the database.

- **Request: (body)**
  ```json
    {
        "userName": "Admin User Name",
        "password": "Admin Password"
    }
  ```

2. Login (POST /admin/login)

- **Description:** This endpoint allows you to sign-in the database.

- **Request:**
  ```json
    {
        "userName": "Admin User Name",
        "password": "Admin Password"

    }
  ```


3. Add new survey to database (Post /api/v1/survey-form)

- **Description:** This endpoint allows you to add new survey into the database.

- **Response:**
  ```json
    {
        "name": "Enter Your Name",
        "email": "Enter Your Email",
        "phone": "Enter Your Phone",
        "gender": "Enter Your Gender",
        "nationality": "Enter Your Nationality",
        "address": "Enter Your Address",
        "message": "Enter Your Message"
    }
  ```

4. GET a list of all survey (GET /api/v1/survey-form)

- **Description:** This endpoint allows you to Get the list of survey. Note that only admin will allow to view the data: you need to login too see the data.

5. GET a single survey data (GET /api/v1/survey-form/:id)

- **Description:** This endpoint allows you to Get the individual data of survey. Note that only admin will allow to view the data: you need to login too see the data.

6. Edit a single survey data (PATCH /api/v1/survey-form/:id)

- **Description:** This endpoint allows you to Edit the individual data of survey. Note that only admin will allow to view the data: you need to login too see the data.

7. Delete a single survey data (DELETE /api/v1/survey-form/:id)

- **Description:** This endpoint allows you to Delete the individual data of survey. Note that only admin will allow to view the data: you need to login too see the data.


###### Design Selection and Challenges Faced During Development

1. User Authentication and Authorization:

- **Design Selection:** To secure the application, user authentication and authorization were implemented using JWT (JSON Web Tokens). The POST /admin/signup endpoint allows for the creation of a new admin, and the POST /admin/login endpoint handles admin logins. Only authenticated admins have access to survey data-related endpoints.

- **Challenges Faced:** Implementing a secure and user-friendly authentication system required careful consideration of token generation, storage, and validation. Handling login errors and ensuring secure password storage were key challenges.


2. Survey Form Structure:

- **Design Selection:** The survey form structure was designed to include fields such as name, email, phone, gender, nationality, address, and message. The POST /api/v1/survey-form endpoint allows the addition of new survey entries, while the POST /api/v1/survey-form/:id endpoint facilitates editing.

- **Challenges Faced:** Deciding on the optimal structure of the survey form to accommodate various data types and ensure a seamless editing process posed challenges. Balancing flexibility and validation was crucial.

3. Admin Access Control:

- **Design Selection:** Admin access control was implemented to restrict access to survey data. Only authenticated admins can view, edit, or delete survey entries.

- **Challenges Faced:** Managing access control and ensuring that unauthorized users cannot manipulate survey data required thorough testing and validation checks. Handling edge cases, such as invalid admin credentials, was a challenge.

4. Data Validation and Error Handling:

- **Design Selection:** Robust data validation mechanisms were put in place to ensure that only valid survey data is stored in the database. Error responses provide clear feedback to users.

- **Challenges Faced:** Implementing comprehensive data validation required careful consideration of various input scenarios. Developing informative error messages and handling edge cases enhanced the user experience.
