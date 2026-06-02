"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";

type CTAFormProps = {
  title: string;
  subtitle: string;
};

const flodeskStyles = String.raw`[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e *,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e *::before,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e *::after {
  box-sizing: border-box;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e [tabindex="-1"]:focus {
  outline: none !important;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e h1,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e h2,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e h3,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e h4,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e h5,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e h6 {
  margin-top: 0;
  margin-bottom: 0.7em;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e p {
  margin-top: 0;
  margin-bottom: 1rem;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e ol,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e ul,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e dl {
  margin-top: 0;
  margin-bottom: 1.4rem;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e ol ol,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e ul ul,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e ol ul,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e ul ol {
  margin-bottom: 0;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e strong {
  font-weight: bolder;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e small {
  font-size: 80%;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e sub,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e sub {
  bottom: -0.25em;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e sup {
  top: -0.5em;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e {
  color: #000000;
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e a:hover {
  color: #4396fd;
  text-decoration: none;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e img {
  border-style: none;
  vertical-align: middle;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e svg:not(:root) {
  overflow: hidden;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e area,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e button,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e [role="button"],
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e input,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e label,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e select,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e summary,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e textarea {
  touch-action: manipulation;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e label {
  display: inline-block;
  font-weight: bolder;
  margin-bottom: 0.7rem;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e button:focus {
  outline: 1px dotted;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e input,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e button,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e select,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e optgroup,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e textarea {
  margin: 0;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e button,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e input {
  overflow: visible;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e button,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e select {
  text-transform: none;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e button,
html[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e [type="button"],
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e [type="reset"],
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e [type="submit"] {
  -webkit-appearance: button;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e button::-moz-focus-inner,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e [type="button"]::-moz-focus-inner,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e [type="reset"]::-moz-focus-inner,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e [type="submit"]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e input[type="radio"],
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e input[type="checkbox"] {
  padding: 0;
  box-sizing: border-box;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e input[type="date"],
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e input[type="time"],
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e input[type="datetime-local"],
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e input[type="month"] {
  -webkit-appearance: listbox;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e textarea {
  resize: vertical;
  overflow: auto;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e [type="number"]::-webkit-inner-spin-button,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e [type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e [type="search"] {
  outline-offset: -2px;
  -webkit-appearance: none;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e [type="search"]::-webkit-search-cancel-button,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e [type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e ::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e [hidden] {
  display: none !important;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-control {
  width: 100%;
  display: block;
  outline: none;
  position: relative;
  -webkit-appearance: none;
  appearance: none;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-control:focus {
  outline: none;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-control::placeholder {
  color: transparent !important;
  opacity: 0 !important;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-control:disabled {
  opacity: 1;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-label {
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  text-overflow: ellipsis;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-control:not(:placeholder-shown)+.fd-form-label {
  opacity: 0;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-description {
  margin: 5px 0 0 0;
  font-size: 0.8em;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-feedback {
  margin: 5px 0 0 0;
  font-size: 0.8em;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-suggestion {
  margin: 6px 0 0 0;
  font-size: 0.9em;
  text-align: center;
  word-break: break-word;
  line-height: 1.4;
  overflow-wrap: break-word;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-suggestion__link {
  font: inherit;
  color: inherit;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  max-width: 100%;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  text-align: inherit;
  transition: text-decoration-color 0.2s ease;
  word-break: break-word;
  line-height: inherit;
  white-space: normal;
  overflow-wrap: break-word;
  letter-spacing: inherit;
  vertical-align: baseline;
  text-decoration: underline;
  text-decoration-color: currentColor;
  text-underline-offset: calc((1lh - 1cap) / 2 - 0.08em - 0.8px);
  -webkit-text-decoration-skip-ink: none;
  text-decoration-skip-ink: none;
  text-decoration-thickness: 0.08em;
}

@media (hover: hover) {
  [data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-suggestion__link:hover {
    text-decoration-color: currentColor;
  }
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-suggestion__link:focus {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-suggestion__link:focus:not(.fd-focus-visible) {
  outline: none;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-group {
  margin: 0 0 15px;
  position: relative;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-group.fd-has-success .fd-form-feedback,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-group.fd-has-success .fd-form-check {
  color: #02dba8 !important;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-group.fd-has-success .fd-form-control {
  color: #02dba8 !important;
  border-color: #02dba8 !important;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-group.fd-has-success .fd-form-feedback {
  display: block;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-group.fd-has-error .fd-form-feedback,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-group.fd-has-error .fd-form-check {
  color: #C84E41 !important;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-group.fd-has-error .fd-form-control {
  color: #C84E41 !important;
  border-color: #C84E41 !important;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-group.fd-has-error .fd-form-feedback {
  display: block;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-btn {
  cursor: pointer;
  display: inline-flex;
  outline: none;
  max-width: 100%;
  -webkit-appearance: none;
  appearance: none;
  font-style: normal;
  text-align: center;
  align-items: center;
  text-shadow: none;
  white-space: normal;
  justify-content: center;
  text-decoration: none;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-btn:hover {
  outline: none;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-btn:focus {
  outline: none;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-btn:disabled {
  opacity: 0.8;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-check {
  cursor: pointer;
  margin: 0;
  display: flex;
  position: relative;
  align-items: center;
  padding-left: 30px;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-check__input {
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  opacity: 0;
  z-index: -1;
  position: absolute;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-check__checkmark {
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  display: block;
  position: absolute;
  background-size: 18px;
  background-image: url("data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' %3e %3cpath d='M1 4C1 2.34315 2.34315 1 4 1H16C17.6569 1 19 2.34315 19 4V16C19 17.6569 17.6569 19 16 19H4C2.34315 19 1 17.6569 1 16V4Z' fill='white' fill-opacity='1' /%3e %3cpath fill='black' fill-rule='evenodd' clip-rule='evenodd' d='M0.25 4C0.25 1.92893 1.92893 0.25 4 0.25H16C18.0711 0.25 19.75 1.92893 19.75 4V16C19.75 18.0711 18.0711 19.75 16 19.75H4C1.92893 19.75 0.25 18.0711 0.25 16V4ZM4 1.75C2.75736 1.75 1.75 2.75736 1.75 4V16C1.75 17.2426 2.75736 18.25 4 18.25H16C17.2426 18.25 18.25 17.2426 18.25 16V4C18.25 2.75736 17.2426 1.75 16 1.75H4Z' /%3e %3c/svg%3e");
  background-repeat: no-repeat;
  background-position: center center;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-check__label {
  flex: 1 1;
  margin: 0;
  font-size: 14px;
  text-align: left;
  word-break: break-word;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-check__input:checked+.fd-form-check__checkmark::after {
  opacity: 1;
  z-index: 1;
  visibility: visible;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-check__checkmark::after {
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  content: "";
  display: block;
  opacity: 0;
  z-index: 1;
  position: absolute;
  transition: opacity 0.4s, z-index 0.4s;
  visibility: inherit;
  background-size: 12px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='black' width='12' height='10' viewBox='0 0 11.51 8.2' %3e %3ctitle%3echeck%3c/title%3e %3cpath d='M4.05%2c8.2A.74.74%2c0%2c0%2c1%2c3.52%2c8L.22%2c4.68A.75.75%2c0%2c0%2c1%2c1.28%2c3.62l3.3%2c3.3A.75.75%2c0%2c0%2c1%2c4.58%2c8%2c.74.74%2c0%2c0%2c1%2c4.05%2c8.2Z' /%3e %3cpath d='M4.06%2c8.2A.74.74%2c0%2c0%2c1%2c3.53%2c8a.75.75%2c0%2c0%2c1%2c0-1.06l6.7-6.7a.75.75%2c0%2c0%2c1%2c1.06%2c1.06L4.59%2c8A.74.74%2c0%2c0%2c1%2c4.06%2c8.2Z' /%3e %3c/svg%3e");
  background-repeat: no-repeat;
  background-position: center center;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-check__input:focus {
  outline: none;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-content {
  position: relative;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-has-success .fd-form-content {
  display: none;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-has-captcha .fd-form-content>*:not(.fd-form-captcha) {
  opacity: 0;
  visibility: hidden;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-captcha {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: flex-start;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-success {
  width: 100%;
  display: none;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-has-success .fd-form-success {
  display: block;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-success>*:last-child {
  margin-bottom: 0;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-error {
  display: none;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-has-error .fd-form-error {
  display: block;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-error>*:last-child {
  margin-bottom: 0;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-focus-visible,
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .fd-form-check__input.fd-focus-visible+.fd-form-check__checkmark {
  outline: none;
  box-shadow: 0 0 0 2px #fbefeb, 0 0 0 calc(2px + 2px) #6d615d !important;
  transition: box-shadow 0.2s !important;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__container {
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  max-width: 620px;
  background: #fbefeb;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__wrapper {
  display: flex;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__form {
  color: #333333;
  width: 100%;
  margin: 0;
  padding: 70px;
  font-size: 16px;
  text-align: center;
  font-family: Helvetica, sans-serif;
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: 0.1px;
  text-transform: none;
}

@media (max-width: 767px) {
  [data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__form {
    padding: 25px;
    word-wrap: anywhere;
    word-break: break-word;
    white-space: normal;
    overflow-wrap: break-word;
  }
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__title {
  color: #000000;
  width: 100%;
  margin: 0 0 25px 0;
  display: block;
  font-size: 37px;
  text-align: center;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0px;
  text-transform: none;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__title * {
  line-height: inherit;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__subtitle {
  width: 100%;
  margin: 0 0 30px 0;
  display: block;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__subtitle * {
  line-height: inherit;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e[data-ff-stage="success"] .ff-6a16b4c98716daddb27dc00e__content {
  display: none;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__fields {
  margin: 0 0 15px;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__fields>*:last-child {
  margin-bottom: 0;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__field {
  font-size: 13px;
  text-align: left;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  letter-spacing: 0.1px;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__control {
  color: #000000;
  border: 1px solid #dddddd;
  height: 46px;
  padding: 12px 20px;
  font-size: 13px;
  background: transparent;
  text-align: left;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  line-height: 20px;
  border-radius: 0px;
  letter-spacing: 0.1px;
  text-transform: none;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__label {
  color: #000000;
  border: 1px solid transparent;
  padding: 12px 20px;
  font-size: 13px;
  text-align: left;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-transform: none;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__footer {
  text-align: center;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__button {
  color: #ffffff;
  width: 100%;
  border: 1px solid #000000;
  display: inline-block;
  padding: 12px 20px;
  font-size: 13px;
  background: #000000;
  text-align: center;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  line-height: 20px;
  border-radius: 0px;
  letter-spacing: 0.1px;
  text-transform: none;
}

@media (max-width: 767px) {
  [data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__button {
    width: 100%;
  }
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__success {
  display: none;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e[data-ff-stage="success"] .ff-6a16b4c98716daddb27dc00e__success {
  display: block;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__success-message {
  color: #333333;
  width: 100%;
  display: block;
  font-size: 16px;
  word-wrap: anywhere;
  min-height: 1.6em;
  text-align: center;
  word-break: break-word;
  font-family: Helvetica, sans-serif;
  font-weight: 300;
  line-height: 1.6;
  white-space: normal;
  overflow-wrap: break-word;
  letter-spacing: 0.1px;
  pointer-events: auto;
  text-transform: none;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__error {
  margin: 15px 0 0 0;
}

/* Landing page theme overrides around the live Flodesk form */
[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__container {
  max-width: none;
  border-radius: 1.5rem;
  background: linear-gradient(180deg, #ffffff 0%, #f7faef 100%);
  box-shadow: 0 20px 50px rgba(34, 58, 14, 0.07);
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__form {
  padding: 2rem;
}

@media (min-width: 768px) {
  [data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__form {
    padding: 2.5rem;
  }
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__title {
  display: none;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__subtitle {
  display: none;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__field {
  margin-bottom: 1rem;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__control {
  height: 3.5rem;
  border: 1px solid rgba(47, 79, 19, 0.13);
  border-radius: 1rem;
  background: #fdfdf9;
  font-size: 0.95rem;
  line-height: 1.4;
  padding: 0.95rem 1.15rem;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__control:focus {
  border-color: #4a7a20;
  box-shadow: 0 0 0 4px rgba(74, 122, 32, 0.12);
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__label {
  padding: 0.95rem 1.15rem;
  color: #465242;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__button {
  min-height: 3.5rem;
  border: 1px solid #4a7a20;
  border-radius: 999px;
  background: #4a7a20;
  font-size: 1rem;
  font-weight: 600;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__button:hover {
  background: #2f4f13;
  border-color: #2f4f13;
}

[data-ff-el="root"].ff-6a16b4c98716daddb27dc00e .ff-6a16b4c98716daddb27dc00e__success-message {
  font-size: 1rem;
  color: #2f4f13;
  font-weight: 500;
}`;

const flodeskMarkup = String.raw`<div class="ff-6a16b4c98716daddb27dc00e" data-ff-el="root" data-ff-version="3" data-ff-type="inline" data-ff-name="inlineNoImage" data-ff-stage="default">
  <div data-ff-el="config" data-ff-config="eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJyZWRpcmVjdCIsIm1lc3NhZ2UiOiIiLCJyZWRpcmVjdFVybCI6Imh0dHA6Ly8xMjcuMC4wLjE6MzAwMC90aGFua3MifSwiY29pIjpmYWxzZSwic2hvd0ZvclJldHVyblZpc2l0b3JzIjp0cnVlLCJub3RpZmljYXRpb24iOmZhbHNlLCJnZHByIjp7ImFjY2VwdHNNYXJrZXRpbmciOmZhbHNlLCJwcml2YWN5UG9saWN5Ijp7ImVuYWJsZWQiOmZhbHNlLCJtYW5kYXRvcnkiOmZhbHNlfX0sInRyYWNraW5nQ29uZmlnIjp7Im1ldGFQaXhlbElkIjoiIiwiY29va2llQmFubmVyRW5hYmxlZCI6ZmFsc2UsImdvb2dsZUFuYWx5dGljc0lkIjoiIn19" style="display: none"></div>
  <div class="ff-6a16b4c98716daddb27dc00e__container">
    <div class="ff-6a16b4c98716daddb27dc00e__wrapper">
      <form class="ff-6a16b4c98716daddb27dc00e__form" action="https://form.flodesk.com/forms/6a16b4c98716daddb27dc00e/submit" method="post" data-ff-el="form">
        <div class="ff-6a16b4c98716daddb27dc00e__title">
          <div style="word-break:break-word">
            <div data-paragraph="true">free 1:1 consultation call</div>
          </div>
        </div>
        <div class="ff-6a16b4c98716daddb27dc00e__subtitle">
          <div style="word-break:break-word">
            <div data-paragraph="true">book a free digital marketing consultation call with me and get a customize digital marketing strategy</div>
          </div>
        </div>
        <div class="ff-6a16b4c98716daddb27dc00e__content fd-form-content" data-ff-el="content">
          <div class="ff-6a16b4c98716daddb27dc00e__fields" data-ff-el="fields">
            <div class="ff-6a16b4c98716daddb27dc00e__field fd-form-group">
              <input id="ff-6a16b4c98716daddb27dc00e-firstName" class="ff-6a16b4c98716daddb27dc00e__control fd-form-control" type="text" maxlength="255" name="firstName" placeholder="First name" data-ff-tab="firstName::email" required />
              <label for="ff-6a16b4c98716daddb27dc00e-firstName" class="ff-6a16b4c98716daddb27dc00e__label fd-form-label">
                <div><div>First name</div></div>
              </label>
            </div>
            <div class="ff-6a16b4c98716daddb27dc00e__field fd-form-group">
              <input id="ff-6a16b4c98716daddb27dc00e-email" class="ff-6a16b4c98716daddb27dc00e__control fd-form-control" type="text" maxlength="255" name="email" placeholder="Email address" data-ff-tab="email:firstName:fields.whatsapp" required />
              <label for="ff-6a16b4c98716daddb27dc00e-email" class="ff-6a16b4c98716daddb27dc00e__label fd-form-label">
                <div><div>Email address</div></div>
              </label>
            </div>
            <div class="ff-6a16b4c98716daddb27dc00e__field fd-form-group">
              <input id="ff-6a16b4c98716daddb27dc00e-77HAH8x7tl" class="ff-6a16b4c98716daddb27dc00e__control fd-form-control" type="text" maxlength="255" name="fields.whatsapp" placeholder="WhatsApp Number" data-ff-tab="fields.whatsapp:email:fields.businessName" required />
              <label for="ff-6a16b4c98716daddb27dc00e-77HAH8x7tl" class="ff-6a16b4c98716daddb27dc00e__label fd-form-label">
                <div><div>WhatsApp Number</div></div>
              </label>
            </div>
            <div class="ff-6a16b4c98716daddb27dc00e__field fd-form-group">
              <input id="ff-6a16b4c98716daddb27dc00e-20OxZLOEUa" class="ff-6a16b4c98716daddb27dc00e__control fd-form-control" type="text" maxlength="255" name="fields.businessName" placeholder="Business Name" data-ff-tab="fields.businessName:fields.whatsapp:fields.websiteOrFacebookLink" required />
              <label for="ff-6a16b4c98716daddb27dc00e-20OxZLOEUa" class="ff-6a16b4c98716daddb27dc00e__label fd-form-label">
                <div><div>Business Name</div></div>
              </label>
            </div>
            <div class="ff-6a16b4c98716daddb27dc00e__field fd-form-group">
              <input id="ff-6a16b4c98716daddb27dc00e-yglJlG0kJT" class="ff-6a16b4c98716daddb27dc00e__control fd-form-control" type="text" maxlength="255" name="fields.websiteOrFacebookLink" placeholder="Website or Facebook link" data-ff-tab="fields.websiteOrFacebookLink:fields.businessName:submit" required />
              <label for="ff-6a16b4c98716daddb27dc00e-yglJlG0kJT" class="ff-6a16b4c98716daddb27dc00e__label fd-form-label">
                <div><div>Website or Facebook link</div></div>
              </label>
            </div>
            <input type="text" maxlength="255" name="confirm_email_address" style="display: none" />
          </div>
          <div class="ff-6a16b4c98716daddb27dc00e__footer" data-ff-el="footer">
            <button type="submit" class="ff-6a16b4c98716daddb27dc00e__button fd-btn" data-ff-el="submit" data-ff-tab="submit">
              <div><span data-draw-element="editable">Subscribe</span></div>
            </button>
          </div>
        </div>
        <div class="ff-6a16b4c98716daddb27dc00e__success fd-form-success" data-ff-el="success">
          <div class="ff-6a16b4c98716daddb27dc00e__success-message">
            <div><div><div data-paragraph="true">Thank you for subscribing!</div></div></div>
          </div>
        </div>
        <div class="ff-6a16b4c98716daddb27dc00e__error fd-form-error" data-ff-el="error"></div>
      </form>
    </div>
  </div>
</div>`;

export default function CTAForm({ title, subtitle }: CTAFormProps) {
  const router = useRouter();

  useEffect(() => {
    const root = document.querySelector(".ff-6a16b4c98716daddb27dc00e[data-ff-el='root']");
    if (!root) return;

    let redirected = false;
    const redirectAfterSuccess = () => {
      if (redirected) return;
      const stage = root.getAttribute("data-ff-stage");
      if (stage === "success") {
        redirected = true;
        window.setTimeout(() => {
          router.push("/thanks");
        }, 1600);
      }
    };

    redirectAfterSuccess();

    const observer = new MutationObserver(() => {
      redirectAfterSuccess();
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-ff-stage", "class"],
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [router]);

  return (
    <section id="booking-form" className="px-4 py-20 sm:px-6 lg:px-8">
      <link rel="preload" href="https://assets.flodesk.com/flodesk-sans.css" as="style" />
      <link rel="stylesheet" href="https://assets.flodesk.com/flodesk-sans.css" />
      <style dangerouslySetInnerHTML={{ __html: flodeskStyles }} />
      <Script id="flodesk-loader" strategy="afterInteractive">
        {`(function(w, d, t, h, s, n) {
  w.FlodeskObject = n;
  var fn = function() {
    (w[n].q = w[n].q || []).push(arguments);
  };
  w[n] = w[n] || fn;
  var f = d.getElementsByTagName(t)[0];
  var v = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
  var sm = d.createElement(t);
  sm.async = true;
  sm.type = 'module';
  sm.src = h + s + '.mjs' + v;
  f.parentNode.insertBefore(sm, f);
  var sn = d.createElement(t);
  sn.async = true;
  sn.noModule = true;
  sn.src = h + s + '.js' + v;
  f.parentNode.insertBefore(sn, f);
})(window, document, 'script', 'https://assets.flodesk.com', '/universal', 'fd');`}
      </Script>
      <Script id="flodesk-handle" strategy="afterInteractive">
        {`(function() {
  var attempts = 0;
  var maxAttempts = 60;
  var timer = window.setInterval(function() {
    attempts += 1;
    var root = document.querySelector('.ff-6a16b4c98716daddb27dc00e');
    if (typeof window.fd === 'function' && root) {
      window.fd('form:handle', {
        formId: '6a16b4c98716daddb27dc00e',
        rootEl: '.ff-6a16b4c98716daddb27dc00e',
      });
      window.clearInterval(timer);
    } else if (attempts >= maxAttempts) {
      window.clearInterval(timer);
    }
  }, 250);
})();`}
      </Script>

      <div className="mx-auto max-w-5xl rounded-[2rem] border border-[var(--border)] bg-[var(--surface-strong)] p-8 shadow-[var(--shadow)] sm:p-10 lg:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--brand)]">Book Your Free Call</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">{subtitle}</p>
        </div>

        <div className="mt-10" dangerouslySetInnerHTML={{ __html: flodeskMarkup }} />
      </div>
    </section>
  );
}
