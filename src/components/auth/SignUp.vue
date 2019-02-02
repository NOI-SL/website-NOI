<template>
    <div class="container-flud main-section about" id="page-signup">
        <section id="section-1">
            <div class="back"></div>
            <div class="content">
                <div class="container">
                    <div class="mdc-elevation--z2 signup-form-container">
                        <div class="heading">
                            <p class="heading-text">Sign Up</p>
                        </div>
                        <div class="desc">
                            <p class="desc-text">Sign up for the National Olympiad in Informatics program.</p>
                            <p class="required-text">* Required</p>
                        </div>
                        <div class="form-content">
                            <form method="post" id="signup-form" enctype="multipart/form-data" v-on:submit="Form_OnSubmit($event)" novalidate="true">
                                <p class="section-heading-text">Basic information</p>
                                <div class="form-content-item form-content-item--coluumns-2">
                                    <div class="form-content-subitem">
                                        <div class="demo-text-field text-field-first-name mdc-text-field mdc-text-field--outlined">
                                            <input type="text" id="signup-form-textfield-first-name" name="first_name" class="mdc-text-field__input" v-on:keypress="LettersValidation_keypress($event)" required>
                                            <div class="mdc-notched-outline">
                                                <div class="mdc-notched-outline__leading"></div>
                                                <div class="mdc-notched-outline__notch">
                                                    <label for="signup-form-textfield-first-name" class="mdc-floating-label">First Name</label>
                                                </div>
                                                <div class="mdc-notched-outline__trailing"></div>
                                            </div>
                                        </div>
                                        <p id="signup-form-textfield-first-name-helper-text" class="mdc-text-field-helper-text" aria-hidden="true">
                                            Enter your first name.
                                        </p>
                                    </div>
                                    <div class="form-content-subitem">
                                        <div class="demo-text-field text-field-last-name mdc-text-field mdc-text-field--outlined">
                                            <input type="text" id="signup-form-textfield-last-name" name="last_name" class="mdc-text-field__input" v-on:keypress="LettersValidation_keypress($event)" required>
                                            <div class="mdc-notched-outline">
                                                <div class="mdc-notched-outline__leading"></div>
                                                <div class="mdc-notched-outline__notch">
                                                    <label for="signup-form-textfield-last-name" class="mdc-floating-label">Last Name</label>
                                                </div>
                                                <div class="mdc-notched-outline__trailing"></div>
                                            </div>
                                        </div>
                                        <p id="signup-form-textfield-last-name-helper-text" class="mdc-text-field-helper-text" aria-hidden="true">
                                            Enter your last name.
                                        </p>
                                    </div>
                                </div>
                                <div class="form-content-item form-content-item--coluumns-1">
                                    <div class="form-content-subitem">
                                        <div class="demo-text-field text-field-full-name mdc-text-field mdc-text-field--outlined">
                                            <input type="text" id="signup-form-textfield-full-name" name="full_name" class="mdc-text-field__input" v-on:keypress="LettersValidation_keypress($event)" required>
                                            <div class="mdc-notched-outline">
                                                <div class="mdc-notched-outline__leading"></div>
                                                <div class="mdc-notched-outline__notch">
                                                    <label for="signup-form-textfield-full-name" class="mdc-floating-label">Full Name</label>
                                                </div>
                                                <div class="mdc-notched-outline__trailing"></div>
                                            </div>
                                        </div>
                                        <p id="signup-form-textfield-full-name-helper-text" class="mdc-text-field-helper-text" aria-hidden="true">
                                            The name that should be mentioned in the certificate.
                                        </p>
                                    </div>
                                </div>
                                <div class="form-content-item form-content-item--coluumns-2">
                                    <div class="form-content-subitem">
                                        <div class="birthday-section">
                                            <div class="birthday-section-inner">
                                                <div class="label-text"><p>Date of birth</p></div>
                                                <div class="birthday">
                                                    <div class="birthday-inner">
                                                        <div class="day">
                                                            <div class="demo-text-field text-field-birthday-day mdc-text-field mdc-text-field--outlined">
                                                                <input type="text" id="signup-form-textfield-birthday-day" name="dob_day" class="mdc-text-field__input" v-on:keypress="NumericValidation_keypress($event)" required>
                                                                <div class="mdc-notched-outline">
                                                                    <div class="mdc-notched-outline__leading"></div>
                                                                    <div class="mdc-notched-outline__notch">
                                                                        <label for="signup-form-textfield-birthday-day" class="mdc-floating-label">Day</label>
                                                                    </div>
                                                                    <div class="mdc-notched-outline__trailing"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="month">
                                                            <div class="mdc-select demo-width-class mdc-select--outlined signup-form-select-birthday-month" v-on:focusout="DOBMonth_focusOut()" v-on:focusin="DOBMonth_focusIn()" >
                                                                <input type="hidden" name="dob_month" id="signup-form-select-birthday-month" required>
                                                                <i class="mdc-select__dropdown-icon"></i>
                                                                <div class="mdc-select__selected-text"></div>
                                                                <div class="mdc-select__menu mdc-menu mdc-menu-surface demo-width-class">
                                                                    <ul class="mdc-list">
                                                                        <li class="mdc-list-item mdc-list-item--selected" data-value="" aria-selected="true"></li>
                                                                        <li class="mdc-list-item" data-value="1">
                                                                            January
                                                                        </li>
                                                                        <li class="mdc-list-item" data-value="2">
                                                                            February
                                                                        </li>
                                                                        <li class="mdc-list-item" data-value="3">
                                                                            March
                                                                        </li>
                                                                        <li class="mdc-list-item" data-value="4">
                                                                            April
                                                                        </li>
                                                                        <li class="mdc-list-item" data-value="5">
                                                                            May
                                                                        </li>
                                                                        <li class="mdc-list-item" data-value="6">
                                                                            June
                                                                        </li>
                                                                        <li class="mdc-list-item" data-value="7">
                                                                            July
                                                                        </li>
                                                                        <li class="mdc-list-item" data-value="8">
                                                                            August
                                                                        </li>
                                                                        <li class="mdc-list-item" data-value="9">
                                                                            September
                                                                        </li>
                                                                        <li class="mdc-list-item" data-value="10">
                                                                            October
                                                                        </li>
                                                                        <li class="mdc-list-item" data-value="11">
                                                                            November
                                                                        </li>
                                                                        <li class="mdc-list-item" data-value="12">
                                                                            December
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="mdc-notched-outline">
                                                                    <div class="mdc-notched-outline__leading"></div>
                                                                    <div class="mdc-notched-outline__notch">
                                                                    <label class="mdc-floating-label">Month</label>
                                                                    </div>
                                                                    <div class="mdc-notched-outline__trailing"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="year">
                                                            <div class="demo-text-field text-field-birthday-year mdc-text-field mdc-text-field--outlined">
                                                                <input type="text" id="signup-form-textfield-birthday-year" name="dob_year" class="mdc-text-field__input" v-on:keypress="NumericValidation_keypress($event)" required>
                                                                <div class="mdc-notched-outline">
                                                                    <div class="mdc-notched-outline__leading"></div>
                                                                    <div class="mdc-notched-outline__notch">
                                                                        <label for="signup-form-textfield-birthday-year" class="mdc-floating-label">Year</label>
                                                                    </div>
                                                                    <div class="mdc-notched-outline__trailing"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-content-subitem">
                                        <div class="gend">
                                            <div class="mdc-select demo-width-class mdc-select--outlined signup-form-select-gender" v-on:focusout="Gender_focusOut()" v-on:focusin="Gender_focusIn()">
                                                <input type="hidden" name="gender" id="signup-form-select-gender" required>
                                                <i class="mdc-select__dropdown-icon"></i>
                                                <div class="mdc-select__selected-text"></div>
                                                <div class="mdc-select__menu mdc-menu mdc-menu-surface demo-width-class">
                                                    <ul class="mdc-list">
                                                        <li class="mdc-list-item mdc-list-item--selected" data-value="" aria-selected="true"></li>
                                                        <li class="mdc-list-item" data-value="male">
                                                            Male
                                                        </li>
                                                        <li class="mdc-list-item" data-value="female">
                                                            Female
                                                        </li>
                                                        <li class="mdc-list-item" data-value="other">
                                                            Other
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mdc-notched-outline">
                                                    <div class="mdc-notched-outline__leading"></div>
                                                    <div class="mdc-notched-outline__notch">
                                                    <label class="mdc-floating-label">Gender</label>
                                                    </div>
                                                    <div class="mdc-notched-outline__trailing"></div>
                                                </div>
                                            </div>
                                            <p id="signup-form-select-gender-helper-text" class="mdc-select-helper-text" aria-hidden="true">
                                                Select your gender.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p class="section-heading-text">School information</p>
                                <div class="form-content-item form-content-item--coluumns-1">
                                    <div class="form-content-subitem">
                                        <div class="demo-text-field text-field-school mdc-text-field mdc-text-field--outlined">
                                            <input type="text" id="signup-form-textfield-school" name="school_name" class="mdc-text-field__input" required>
                                            <div class="mdc-notched-outline">
                                                <div class="mdc-notched-outline__leading"></div>
                                                <div class="mdc-notched-outline__notch">
                                                    <label for="signup-form-textfield-school" class="mdc-floating-label">School Name</label>
                                                </div>
                                                <div class="mdc-notched-outline__trailing"></div>
                                            </div>
                                        </div>
                                        <p id="signup-form-textfield-school-helper-text" class="mdc-text-field-helper-text" aria-hidden="true">
                                            Enter your school name.
                                        </p>
                                    </div>
                                </div>
                                <p class="section-heading-text">Contact information</p>
                                <div class="form-content-item form-content-item--coluumns-1">
                                    <div class="form-content-subitem">
                                        <div class="address-container">
                                            <div class="label-text">
                                                <p>Address</p>
                                            </div>
                                            <div class="address-fields">
                                                <div>
                                                    <div class="demo-text-field text-field-address-1 mdc-text-field mdc-text-field--outlined">
                                                        <input type="text" id="signup-form-textfield-address-1" name="address_1" class="mdc-text-field__input" required>
                                                        <div class="mdc-notched-outline">
                                                            <div class="mdc-notched-outline__leading"></div>
                                                            <div class="mdc-notched-outline__notch">
                                                                <label for="signup-form-textfield-address-1" class="mdc-floating-label">Address 1</label>
                                                            </div>
                                                            <div class="mdc-notched-outline__trailing"></div>
                                                        </div>
                                                    </div>
                                                    <p id="signup-form-textfield-address-1-helper-text" class="mdc-text-field-helper-text" aria-hidden="true">
                                                        Address 1.
                                                    </p>
                                                </div>
                                                <div>
                                                    <div class="demo-text-field text-field-address-2 mdc-text-field mdc-text-field--outlined">
                                                        <input type="text" id="signup-form-textfield-address-2" name="address_2" class="mdc-text-field__input">
                                                        <div class="mdc-notched-outline">
                                                            <div class="mdc-notched-outline__leading"></div>
                                                            <div class="mdc-notched-outline__notch">
                                                                <label for="signup-form-textfield-address-2" class="mdc-floating-label">Address 2</label>
                                                            </div>
                                                            <div class="mdc-notched-outline__trailing"></div>
                                                        </div>
                                                    </div>
                                                    <p id="signup-form-textfield-address-2-helper-text" class="mdc-text-field-helper-text" aria-hidden="true">
                                                        Address 2.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-content-item form-content-item--coluumns-2 contact">
                                    <div class="form-content-subitem">
                                        <div class="demo-text-field text-field-contact-no mdc-text-field mdc-text-field--outlined">
                                            <input type="text" id="signup-form-textfield-contact-no" name="contact_number" class="mdc-text-field__input" v-on:keypress="ContactNoValidation_keypress($event)" required>
                                            <div class="mdc-notched-outline">
                                                <div class="mdc-notched-outline__leading"></div>
                                                <div class="mdc-notched-outline__notch">
                                                    <label for="signup-form-textfield-contact-no" class="mdc-floating-label">Contact No (E.g : 077-658-4010)</label>
                                                </div>
                                                <div class="mdc-notched-outline__trailing"></div>
                                            </div>
                                        </div>
                                        <p id="signup-form-textfield-contact-no-helper-text" class="mdc-text-field-helper-text" aria-hidden="true">
                                            Enter your contact no. (E.g : 077-658-4010)
                                        </p>
                                    </div>
                                    <div class="form-content-subitem">
                                        <div class="demo-text-field text-field-email mdc-text-field mdc-text-field--outlined">
                                            <input type="text" id="signup-form-textfield-email" name="email" class="mdc-text-field__input" required>
                                            <div class="mdc-notched-outline">
                                                <div class="mdc-notched-outline__leading"></div>
                                                <div class="mdc-notched-outline__notch">
                                                    <label for="signup-form-textfield-email" class="mdc-floating-label">Email</label>
                                                </div>
                                                <div class="mdc-notched-outline__trailing"></div>
                                            </div>
                                        </div>
                                        <p id="signup-form-textfield-email-helper-text" class="mdc-text-field-helper-text" aria-hidden="true">
                                            Enter your email.
                                        </p>
                                    </div>
                                </div>
                                <p class="section-heading-text">Document information</p>
                                <p class="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, ad quo? Placeat, at. Earum libero delectus quis sit quidem consequuntur, nihil unde sunt at neque nesciunt, quae repellendus quo in.</p>
                                <div class="form-content-item form-content-item--coluumns-2 document">
                                    <div class="form-content-subitem">
                                        <div class="mdc-select demo-width-class mdc-select--outlined signup-form-select-document-type" v-on:focusout="DocumentType_focusOut()" v-on:focusin="DocumentType_focusIn()">
                                            <input type="hidden" name="document_type" id="signup-form-select-document-type" required>
                                            <i class="mdc-select__dropdown-icon"></i>
                                            <div class="mdc-select__selected-text"></div>
                                            <div class="mdc-select__menu mdc-menu mdc-menu-surface demo-width-class">
                                                <ul class="mdc-list">
                                                    <li class="mdc-list-item mdc-list-item--selected" data-value="" aria-selected="true"></li>
                                                    <li class="mdc-list-item" data-value="Postal ID">
                                                        Postal ID
                                                    </li>
                                                    <li class="mdc-list-item" data-value="National ID">
                                                        National ID
                                                    </li>
                                                    <li class="mdc-list-item" data-value="Passport">
                                                        Passport 
                                                    </li>
                                                    <li class="mdc-list-item" data-value="Letter">
                                                        Letter 
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="mdc-notched-outline">
                                                <div class="mdc-notched-outline__leading"></div>
                                                <div class="mdc-notched-outline__notch">
                                                <label class="mdc-floating-label">Document Type</label>
                                                </div>
                                                <div class="mdc-notched-outline__trailing"></div>
                                            </div>
                                        </div>
                                        <p id="signup-form-select-document-type-helper-text" class="mdc-select-helper-text" aria-hidden="true">
                                            Select your document type.
                                        </p>
                                    </div>
                                    <div class="form-content-subitem">
                                        <div class="demo-text-field text-field-document-no mdc-text-field mdc-text-field--outlined">
                                            <input type="text" id="signup-form-textfield-document-no" name="document_number" class="mdc-text-field__input">
                                            <div class="mdc-notched-outline">
                                                <div class="mdc-notched-outline__leading"></div>
                                                <div class="mdc-notched-outline__notch">
                                                    <label for="signup-form-textfield-document-no" class="mdc-floating-label">Postal ID / National ID / Passport number.</label>
                                                </div>
                                                <div class="mdc-notched-outline__trailing"></div>
                                            </div>
                                        </div>
                                        <p id="signup-form-textfield-document-no-helper-text" class="mdc-text-field-helper-text" aria-hidden="true">
                                            Enter your Postal ID / National ID / Passport number.
                                        </p>
                                    </div>
                                    <div class="form-content-subitem">
                                        <div class="file-upload-section">
                                            <div class="file-upload-container">
                                                <div class="uploaded-file-container">
                                                    <input type="file" name="file_document" id="signup-form-file-document" v-on:invalid="FileUpload_invalid($event)" v-on:change="FileUpload_change($event)" required>
                                                    <button class="mdc-button" id="file-upload-action-button" v-on:click="FileUploadButton_click($event)">
                                                        <i class="material-icons mdc-button__icon" aria-hidden="true">cloud_upload</i>
                                                        <span class="mdc-button__label">Upload Document</span>
                                                    </button>
                                                    <div id="uploaded-file-container-i"></div>
                                                    <p id="signup-form-textfield-upload-document-helper-text" class="mdc-text-field-helper-text" aria-hidden="true">
                                                        Upload a scanned copy of your Postal ID / National ID / Passport.
                                                    </p>
                                                    <!-- <div class="uploaded-file-container-inner">
                                                        <div class="icon"><span class="material-icons">attachment</span></div>
                                                        <div class="name"><p>file name.zip</p></div>
                                                        <div class="delet-icon"><button type="button"><span class="material-icons">cancel</span></button></div>
                                                    </div> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-content-item">
                                    <div class="recapcha">
                                        <input type="hidden" id="recaptcha_token" name="recaptcha_token">
                                    </div>
                                    <div class="submit-button">
                                        <p style="text-align:right"><button type="submit" id="signup-form-submit-button" class="mdc-button mdc-button--raised mdc-ripple-upgraded">Sign Up</button></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div role="progressbar" id="progressbar" class="mdc-linear-progress mdc-linear-progress--indeterminate">
                            <div class="mdc-linear-progress__buffering-dots"></div>
                            <div class="mdc-linear-progress__buffer"></div>
                            <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
                                <span class="mdc-linear-progress__bar-inner"></span>
                            </div>
                            <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                <span class="mdc-linear-progress__bar-inner"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="mdc-snackbar" id="message-snackbar">
            <div class="mdc-snackbar__surface">
                <div class="mdc-snackbar__label" id="snackbar-label" role="status" aria-live="polite">
                    Some error. Please try again !
                </div>
                <div class="mdc-snackbar__actions">
                    <button class="mdc-icon-button mdc-snackbar__dismiss material-icons" title="Dismiss">close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script v-on:load="formLoad()">

import {MDCTextField} from '@material/textfield';
import {MDCTextFieldHelperText} from '@material/textfield/helper-text';
import {MDCSelect} from '@material/select';
import {MDCRipple} from '@material/ripple';
import {MDCSnackbar} from '@material/snackbar';
import {MDCLinearProgress} from '@material/linear-progress';

// form send data
import axios from 'axios';

var textField_FirstName,textField_LastName,textField_FullName,textField_BirthdayDay,textField_BirthdayYear, textField_School, textField_Address1, textField_Address2, textField_ContactNo, textField_Email, textField_DocumentNo; // textFields
var select_BirthdayMonth_Element, select_Gender_Element, select_DocumentType_Element; // selectElements
var select_BirthdayMonth, select_Gender, select_DocumentType; // selectFields
var helperText_FirstName, helperText_LastName, helperText_FullName, helperText_Gender, helperText_School, helperText_Address1, helperText_Address2, helperText_ContactNo, helperText_Email, helperText_DocumentNo, helperText_DocumentType, helperText_DocumentUpload;  // helperTexts
// file upload
var fileUploadActionButton, fileUpload, fileUploadContainer;
// snack bar
var snackbar, snackbar_label;
// progressbar
var progressbar;

var SnackBarShowMessage = (message) => {
    snackbar_label.innerText = message;
    snackbar.open();
}

var Fields_Validation_By_Class = (element, class_name = 'mdc-text-field--invalid') => {
    element.root_.classList.add(class_name);
}

// validate functions
var DOB_Validate = (day, month, year) => {
    if (((day == null || day == '') || (month == null || month == '')) || year == '') {
        console.log('dob error');
        SnackBarShowMessage('Please fill the date of birth.');
        return false;
    }else {
        const min_date = new Date('1999/7/1');
        const max_date = new Date('2019/7/1');
        var date = new Date(year + '/' + month + '/' + day);
        if ((min_date <= date && max_date >= date)) {
            return true;
        }else {
            SnackBarShowMessage('Your date of birth must in between 1999/7/1 and 2019/7/1.');
            return false;
        }
    }
}

var Email_Validate = (email) => {
    var regx_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email == null || email == '') {
        console.log('email empty');
        SnackBarShowMessage('Please fill the email.');
        return false;
    }else if (regx_email.test(email)) {
        return true;
    }else {
        console.log('email format error');
        SnackBarShowMessage('Please fill a valid email.')
        return false;
    }
}

var Document_validate = (doc_type, doc_number) => {
    if (doc_type == null || doc_type == ''){
        console.log('doc type error');
        Fields_Validation_By_Class(select_DocumentType,'mdc-select--invalid');
        SnackBarShowMessage('Please select the document type.')
        return false;
    }else if ((doc_type == 'Postal ID' || doc_type == 'National ID') || doc_type == 'Passport') {
        if (doc_number == null || doc_number == '') {
            console.log('doc number error');
            Fields_Validation_By_Class(textField_DocumentNo);
            SnackBarShowMessage('Please fill the '+doc_type+' number.');
            return false;
        }else {
            return true;
        }
    }else {
        if (doc_type == 'Letter') {
            return true;
        }
    }
}

var ContactNo_Validate = (number) => {
    if (number == null || number == '') {
        console.log('contact no not fill error');
        SnackBarShowMessage('Please fill the contact number.');
        return false;
    }else {
        var regx = /^\d{3}-\d{3}-\d{4}$/;
        if (regx.test(number)) {
            return true;
        }else {
            console.log('contact no format error');
            SnackBarShowMessage('Please fill a valid contact number (E.g : 077-658-4010).');
            return false;
        }
    }
}

var Form_validate = () => {
    if (textField_FirstName == null || textField_FirstName.value == '') {
        console.log('first name error');
        Fields_Validation_By_Class(textField_FirstName);
        SnackBarShowMessage('Please fill the first name.');
        return false;
    }else if (textField_LastName.value == null || textField_LastName.value == '') {
        console.log('last name error');
        Fields_Validation_By_Class(textField_LastName);
        SnackBarShowMessage('Please fill the last name.');
        return false;
    }else if (textField_FullName.value == null || textField_FullName.value == '') {
        console.log('full name error');
        Fields_Validation_By_Class(textField_FullName);
        SnackBarShowMessage('Please fill the full name.');
        return false;
    }else if (!DOB_Validate(textField_BirthdayDay.value, select_BirthdayMonth.value, textField_BirthdayYear.value)) {
        console.log('date error');
        Fields_Validation_By_Class(textField_BirthdayDay);
        Fields_Validation_By_Class(textField_BirthdayYear);
        Fields_Validation_By_Class(select_BirthdayMonth, 'mdc-select--invalid');
        return false;
    }else if (select_Gender.value == '') {
        console.log('gender error');
        Fields_Validation_By_Class(select_Gender,'mdc-select--invalid');
        SnackBarShowMessage('Please select the gender.');
        return false;
    }else if (textField_School.value == null || textField_School.value == '') {
        console.log('school error');
        Fields_Validation_By_Class(textField_School);
        SnackBarShowMessage('Please fill the school name.')
        return false;
    }else if (textField_Address1.value == null || textField_Address1.value == '') {
        console.log('address error');
        Fields_Validation_By_Class(textField_Address1);
        SnackBarShowMessage('Please fill the address.')
        return false;
    }else if (!ContactNo_Validate(textField_ContactNo.value)) {
        console.log('contact no error');
        Fields_Validation_By_Class(textField_ContactNo);
        return false;
    }else if (!Email_Validate(textField_Email.value)) {
        console.log('email error');
        Fields_Validation_By_Class(textField_Email);
        return false;
    }else if (!Document_validate(select_DocumentType.value,textField_DocumentNo.value)) {
        console.log('doc type error');
        return false
    }else if (fileUpload.value == null || fileUpload.value == '') {
        console.log('upload file error');
        fileUploadContainer.classList.add('file-upload-container--invlid');
        SnackBarShowMessage('Please choose the file.')
        return false;
    }else {
        return true;
    }
}

export default {
    data() {
        return {
            // first_name: null,
            // last_name: null,
            // full_name: null,
            // dob_day: null,
            // dob_month: '',
            // dob_year: null,
            // gender: '',
            // school_name: null,
            // address_1: null,
            // address_2: null,
            // contact_number: null,
            // email: null,
            // document_type: '',
            // document_number: null,
            // file_document: null

        }
    },
    methods : {
        DOBMonth_focusOut : () => {
            if (select_BirthdayMonth.value === "") {
                select_BirthdayMonth_Element.classList.add('mdc-select--invalid');
            }else if(select_BirthdayMonth_Element.classList.contains('mdc-select--invalid')){
                select_BirthdayMonth_Element.classList.remove('mdc-select--invalid');
            }else if (select_BirthdayMonth.value !== "") {
                select_BirthdayMonth_Element.classList.remove('mdc-select--invalid');
            }
        },
        DOBMonth_focusIn : () => {
            if(select_BirthdayMonth_Element.classList.contains('mdc-select--invalid')){
                select_BirthdayMonth_Element.classList.remove('mdc-select--invalid');
            }else if (select_BirthdayMonth.value !== "") {
                select_BirthdayMonth_Element.classList.remove('mdc-select--invalid');
            }
        },
        Gender_focusOut : () => {
             if (select_Gender.value === "") {
                select_Gender_Element.classList.add('mdc-select--invalid');
            }else if(select_Gender_Element.classList.contains('mdc-select--invalid')){
                select_Gender_Element.classList.remove('mdc-select--invalid');
            }else if (select_Gender.value !== "") {
                select_Gender_Element.classList.remove('mdc-select--invalid');
            }
        },
        Gender_focusIn : () => {
            if(select_Gender_Element.classList.contains('mdc-select--invalid')){
                select_Gender_Element.classList.remove('mdc-select--invalid');
            }else if (select_Gender.value !== "") {
                select_Gender_Element.classList.remove('mdc-select--invalid');
            }
        },
        DocumentType_focusOut : () => {
            if (select_DocumentType.value === "") {
                select_DocumentType_Element.classList.add('mdc-select--invalid');
            }else if(select_DocumentType_Element.classList.contains('mdc-select--invalid')){
                select_DocumentType_Element.classList.remove('mdc-select--invalid');
            }else if (select_DocumentType.value !== "") {
                select_DocumentType_Element.classList.remove('mdc-select--invalid');
            }
        },
        DocumentType_focusIn : () => {
            if(select_DocumentType_Element.classList.contains('mdc-select--invalid')){
                select_DocumentType_Element.classList.remove('mdc-select--invalid');
            }else if (select_DocumentType.value !== "") {
                select_DocumentType_Element.classList.remove('mdc-select--invalid');
            }
        },
        FileUploadButton_click : (event) => {
            event.preventDefault();
            fileUpload.click();
        },
        FileUpload_invalid : (event) => {
            if (event.target.value == null) {
                fileUploadContainer.classList.add('file-upload-container--invlid');
            }else if (fileUploadContainer.classList.contains('file-upload-container--invlid')){
                fileUploadContainer.classList.remove('file-upload-container--invlid');
            }
        },
        FileUpload_change : (event) => {
            var fileName = "";
            if (event.target.value == null) {
                fileUploadContainer.classList.add('file-upload-container--invlid');
            }else {
                if (fileUploadContainer.classList.contains('file-upload-container--invlid')){
                    fileUploadContainer.classList.remove('file-upload-container--invlid');
                }
                fileName = event.target.value.replace('C:\\fakepath\\', '');
                fileUploadActionButton.style.display = 'none';
                const container = document.querySelector('#uploaded-file-container-i');
                var file_container_inner = document.createElement('div');
                file_container_inner.classList.add('uploaded-file-container-inner');

                var icon_div = document.createElement('div');
                icon_div.classList.add('icon');
                var icon_span = document.createElement('span');
                icon_span.classList.add('material-icons');
                icon_span.innerText = 'attachment';
                icon_div.appendChild(icon_span);
                file_container_inner.appendChild(icon_div);

                var name_div = document.createElement('div');
                name_div.classList.add('name');
                var name_div_p = document.createElement('p');
                name_div_p.innerText = fileName;
                name_div.appendChild(name_div_p);
                file_container_inner.appendChild(name_div);

                var del_div = document.createElement('div');
                del_div.classList.add('delet-icon');
                var del_div_btn = document.createElement('button');
                del_div_btn.setAttribute('type','button');
                del_div_btn.setAttribute('id','upload-cancel-btn');
                var del_div_btn_span = document.createElement('span');
                del_div_btn_span.classList.add('material-icons');
                del_div_btn_span.innerText = 'cancel';
                del_div_btn.appendChild(del_div_btn_span);
                del_div.appendChild(del_div_btn);
                file_container_inner.appendChild(del_div);

                container.appendChild(file_container_inner);
                document.querySelector('#upload-cancel-btn').addEventListener('click', () => {
                    fileUploadActionButton.style.display = 'unset';
                    container.innerHTML = '';
                    fileUpload.value = null;
                    fileUploadContainer.classList.add('file-upload-container--invlid');
                });
            }
        },
        NumericValidation_keypress : (event) => {
            var regex = new RegExp("^[0-9]+$");
            var char = event.which || event.keyCode;
            var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
            if(!regex.test(key) && !((char == 8)? true:(char == 9)? true : false)){
                event.preventDefault();
            }
        },
        ContactNoValidation_keypress : (event) => {
            var regex = new RegExp("^[0-9-]+$");
            var char = event.which || event.keyCode;
            var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
            if(!regex.test(key) && !((char == 8)? true:(char == 9)? true : false)){
                event.preventDefault();
            }
        },
        LettersValidation_keypress : (event) => {
            var regex = new RegExp("^[a-zA-Z]+$");
            var char = event.which || event.keyCode;
            var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
            if(!regex.test(key) && !((char == 8)? true:(char == 9)? true : (char == 32)? true : false)){
                event.preventDefault();
            }
        },
        SignupButton_click : (event) => {

        },
        Form_OnSubmit : (e) => {
            e.preventDefault();
            if (Form_validate()) {
                let formData = new FormData(document.getElementById('sign-form'));
                document.getElementById('signup-form-submit-button').disabled = true; // submit button disable
                progressbar.open(); // progressbar open
                axios.post( 
                    'http://api.noi.lk:3000/api/v1/signup',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                }).then((response) => {
                    document.getElementById('signup-form-submit-button').disabled = false;//submit button enable
                    progressbar.close();// progressbar close
                }).catch((error) => {
                    // document.getElementById('signup-form-submit-button').disabled = false;//submit button enable
                    // progressbar.close(); // progressbar close
                }); 
            }
            
        }
    },
    mounted : () => {
        textField_FirstName = new MDCTextField(document.querySelector('.text-field-first-name'));
        textField_LastName = new MDCTextField(document.querySelector('.text-field-last-name'));
        textField_FullName = new MDCTextField(document.querySelector('.text-field-full-name'));
        textField_BirthdayDay = new MDCTextField(document.querySelector('.text-field-birthday-day'));
        textField_BirthdayYear = new MDCTextField(document.querySelector('.text-field-birthday-year'));
        select_BirthdayMonth_Element = document.querySelector('.signup-form-select-birthday-month');
        select_BirthdayMonth = new MDCSelect(select_BirthdayMonth_Element);

        textField_BirthdayDay.listen('click' , () => {
            textField_BirthdayYear.root_.classList.remove('mdc-text-field--invalid');
            select_BirthdayMonth.root_.classList.remove('mdc-select--invalid');
        });

        textField_BirthdayYear.listen('click' , () => {
            textField_BirthdayDay.root_.classList.remove('mdc-text-field--invalid');
            select_BirthdayMonth.root_.classList.remove('mdc-select--invalid');
        });


        select_BirthdayMonth.listen('MDCSelect:change', () => {
            if (select_BirthdayMonth.value === "") {
                select_BirthdayMonth_Element.classList.add('mdc-select--invalid');
            }else if(select_BirthdayMonth_Element.classList.contains('mdc-select--invalid')){
                select_BirthdayMonth_Element.classList.remove('mdc-select--invalid');
            }else if (select_BirthdayMonth.value !== "") {
                select_BirthdayMonth_Element.classList.remove('mdc-select--invalid');
            }
            textField_BirthdayYear.root_.classList.remove('mdc-text-field--invalid');
            textField_BirthdayDay.root_.classList.remove('mdc-text-field--invalid');
        // alert(`Selected option at index ${select_BirthdayMonth.selectedIndex} with value "${select_BirthdayMonth.value}"`);
        });

        select_Gender_Element = document.querySelector('.signup-form-select-gender');
        select_Gender= new MDCSelect(select_Gender_Element);
        select_Gender.listen('MDCSelect:change', () => {
            if (select_Gender.value === "") {
                select_Gender_Element.classList.add('mdc-select--invalid');
            }else if(select_Gender_Element.classList.contains('mdc-select--invalid')){
                select_Gender_Element.classList.remove('mdc-select--invalid');
            }else if (select_Gender.value !== "") {
                select_Gender_Element.classList.remove('mdc-select--invalid');
            }
            
        // alert(`Selected option at index ${select_Gender.selectedIndex} with value "${select_Gender.value}"`);
        });

        textField_School = new MDCTextField(document.querySelector('.text-field-school'));
        textField_Address1 = new MDCTextField(document.querySelector('.text-field-address-1'));
        textField_Address2 = new MDCTextField(document.querySelector('.text-field-address-2'));
        textField_ContactNo = new MDCTextField(document.querySelector('.text-field-contact-no'));
        textField_Email = new MDCTextField(document.querySelector('.text-field-email'));
        textField_DocumentNo = new MDCTextField(document.querySelector('.text-field-document-no'));

        select_DocumentType_Element = document.querySelector('.signup-form-select-document-type');
        select_DocumentType = new MDCSelect(select_DocumentType_Element);
        select_DocumentType.listen('MDCSelect:change', () => {
            if (select_DocumentType.value === "") {
                select_DocumentType_Element.classList.add('mdc-select--invalid');
            }else if(select_DocumentType_Element.classList.contains('mdc-select--invalid')){
                select_DocumentType_Element.classList.remove('mdc-select--invalid');
            }else if (select_DocumentType.value !== "") {
                select_DocumentType_Element.classList.remove('mdc-select--invalid');
            }

            textField_DocumentNo.value = '';
            textField_DocumentNo.root_.classList.remove('mdc-text-field--invalid');
        });

        fileUploadActionButton = document.querySelector('#file-upload-action-button');
        fileUpload = document.querySelector('#signup-form-file-document');
        fileUploadContainer = document.querySelector('.file-upload-container');


        helperText_FirstName = new MDCTextFieldHelperText(document.querySelector('#signup-form-textfield-first-name-helper-text'));
        helperText_LastName = new MDCTextFieldHelperText(document.querySelector('#signup-form-textfield-last-name-helper-text'));
        helperText_FullName = new MDCTextFieldHelperText(document.querySelector('#signup-form-textfield-full-name-helper-text'));
        helperText_Gender = new MDCTextFieldHelperText(document.querySelector('#signup-form-select-gender-helper-text'));
        helperText_School = new MDCTextFieldHelperText(document.querySelector('#signup-form-textfield-school-helper-text'));
        helperText_Address1 = new MDCTextFieldHelperText(document.querySelector('#signup-form-textfield-address-1-helper-text'));
        helperText_Address2 = new MDCTextFieldHelperText(document.querySelector('#signup-form-textfield-address-2-helper-text'));
        helperText_ContactNo = new MDCTextFieldHelperText(document.querySelector('#signup-form-textfield-contact-no-helper-text'));
        helperText_Email = new MDCTextFieldHelperText(document.querySelector('#signup-form-textfield-email-helper-text'));
        helperText_DocumentNo = new MDCTextFieldHelperText(document.querySelector('#signup-form-textfield-document-no-helper-text'));
        helperText_DocumentType = new MDCTextFieldHelperText(document.querySelector('#signup-form-select-document-type-helper-text'));
        helperText_DocumentUpload = new MDCTextFieldHelperText(document.querySelector('#signup-form-textfield-upload-document-helper-text'));
    
        snackbar = new MDCSnackbar(document.querySelector('#message-snackbar'));
        snackbar_label = document.querySelector('#snackbar-label');
        snackbar.listen('MDCSnackbar:closed', () => {
            snackbar_label.innerText = 'Some error. Please try again !';
        });

        const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
        progressbar = new MDCLinearProgress(document.querySelector('#progressbar'));
        progressbar.close();

        // reCAPTCHA
        grecaptcha.ready(function() {
            grecaptcha.execute('6LfJjI4UAAAAACjEIuGGUDaUjQ6gJ6Iwi3IZJS5J', {action: 'signup'}).then(function(token) {
                console.log(token);
                document.getElementById('recaptcha_token').value = token;
            });
        });
    }
}
</script>

