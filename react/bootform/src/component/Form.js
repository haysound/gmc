import React from "react";
export default function Form() {
  return (
    <div class="bg text-center">
      <div class="centered">
        <p class="firstLine">Personal Form</p>
        <p class="secondLine">Created by Alok</p>
        <div class="mb-12 text">
          <label for="exampleFormControlInput1" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="John"
          />
        </div>
        <div class="mb-12 text">
          <label for="exampleFormControlInput1" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Mark"
          />
        </div>
        <div class="mb-12 text">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-12 text">
          <label for="exampleFormControlTextarea1" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-12 text">
          <label for="inputPassword5" class="form-label">
            Password
          </label>
          <input
            type="password"
            id="inputPassword5"
            class="form-control"
            aria-describedby="passwordHelpBlock"
          />
          <div id="passwordHelpBlock" class="form-text">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}
