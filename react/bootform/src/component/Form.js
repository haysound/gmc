import React from "react";
export default function Form() {
  return (
    <div class="bg text-center">
      <div class="centered">
        <p class="firstLine">
          E &nbsp; M &nbsp; A &nbsp; I &nbsp; L &nbsp; . &nbsp; M &nbsp; E
        </p>
        <p class="secondLine">The Simplest Email Client Ever</p>
        <p>
          <input
            class="InputStyle"
            placeholder="Email me when it's ready "
            type="text"
          />
        </p>
      </div>
      <div class="social-btn">
        <a href="#" title="Facebook">
          <i class="fa fa-facebook"></i>
        </a>
        <a href="#" title="Twitter">
          <i class="fa fa-twitter"></i>
        </a>
      </div>
    </div>
  );
}
