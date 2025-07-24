import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minglenght: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);
export default User;
// This code defines a Mongoose schema for a User model in a Node.js application.
// The schema includes fields for email, full name, password, and profile picture.
// It also sets the timestamps option to true, which automatically adds createdAt and updatedAt fields to the documents.
// The User model is then exported for use in other parts of the application.
// The email field is required and must be unique, the fullName field is also required, and the password field must have a minimum length of 6 characters.
// The profilePicture field is optional and defaults to an empty string if not provided.
// The User model can be used to create, read, update, and delete user documents in a MongoDB database.
// The code uses Mongoose, a popular ODM (Object Data Modeling) library for MongoDB and Node.js.
