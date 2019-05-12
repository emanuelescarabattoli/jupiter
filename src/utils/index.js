import React from "react";

import MessageError from "../components/MessageError/";


export const getErrorMessage = errors => errors && errors.reduce((message, error) => message ? `; ${capitalize(error.filed)}: ${arrayToString(error.messages)}` : `${capitalize(error.field)}: ${arrayToString(error.messages)}`, "") || "";

export const arrayToString = array => array && array.reduce((total, element) => total ? `, ${element}` : element, "") || "";

export const capitalize = word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

export const stringOrPlaceholder = (string, placeholder) => string || placeholder;

export const displayErrorMessage = message => message && <MessageError>{message}</MessageError>;