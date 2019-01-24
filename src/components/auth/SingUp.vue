<template>
    <div class="container-flud main-section about" id="page-singup">
        <section id="section-1">
            <div class="back"></div>
            <div class="content">
                <div class="container">
                    <div class="mdc-elevation--z2 singup-form-container">
                        <div class="heading">
                            <p class="heading-text">Sing Up</p>
                        </div>
                        <div class="desc">
                            <p class="desc-text">Sign up for the National Olympiad in Informatics program.</p>
                            <p class="required-text">* Required</p>
                        </div>
                        <div class="form-content">
                            <form action="" method="post" id="singup-form" enctype="multipart/form-data" onload="formLoad()">
                                <p class="section-heading-text">Basic information</p>
                                <div class="form-content-item form-content-item--coluumns-2">
                                    <div class="form-content-subitem">
                                        <div class="demo-text-field text-field-first-name mdc-text-field mdc-text-field--outlined">
                                            <input type="text" id="singup-form-textfield-first-name" class="mdc-text-field__input" required>
                                            <div class="mdc-notched-outline">
                                                <div class="mdc-notched-outline__leading"></div>
                                                <div class="mdc-notched-outline__notch">
                                                    <label for="singup-form-textfield-first-name" class="mdc-floating-label">First Name</label>
                                                </div>
                                                <div class="mdc-notched-outline__trailing"></div>
                                            </div>
                                        </div>
                                        <p id="singup-form-textfield-first-name-helper-text" class="mdc-text-field-helper-text" aria-hidden="true">
                                            Enter your first name.
                                        </p>
                                    </div>
                                    <div class="form-content-subitem">
                                        <div class="demo-text-field text-field-last-name mdc-text-field mdc-text-field--outlined">
                                            <input type="text" id="singup-form-textfield-last-name" class="mdc-text-field__input" required>
                                            <div class="mdc-notched-outline">
                                                <div class="mdc-notched-outline__leading"></div>
                                                <div class="mdc-notched-outline__notch">
                                                    <label for="singup-form-textfield-last-name" class="mdc-floating-label">Last Name</label>
                                                </div>
                                                <div class="mdc-notched-outline__trailing"></div>
                                            </div>
                                        </div>
                                        <p id="singup-form-textfield-last-name-helper-text" class="mdc-text-field-helper-text" aria-hidden="true">
                                            Enter your last name.
                                        </p>
                                    </div>
                                </div>
                                <div class="form-content-item form-content-item--coluumns-1">
                                    <div class="form-content-subitem">
                                        <div class="demo-text-field text-field-full-name mdc-text-field mdc-text-field--outlined">
                                            <input type="text" id="singup-form-textfield-full-name" class="mdc-text-field__input" required>
                                            <div class="mdc-notched-outline">
                                                <div class="mdc-notched-outline__leading"></div>
                                                <div class="mdc-notched-outline__notch">
                                                    <label for="singup-form-textfield-full-name" class="mdc-floating-label">Full Name</label>
                                                </div>
                                                <div class="mdc-notched-outline__trailing"></div>
                                            </div>
                                        </div>
                                        <p id="singup-form-textfield-full-name-helper-text" class="mdc-text-field-helper-text" aria-hidden="true">
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
                                                                <input type="text" id="singup-form-textfield-birthday-day" class="mdc-text-field__input" required>
                                                                <div class="mdc-notched-outline">
                                                                    <div class="mdc-notched-outline__leading"></div>
                                                                    <div class="mdc-notched-outline__notch">
                                                                        <label for="singup-form-textfield-birthday-day" class="mdc-floating-label">Day</label>
                                                                    </div>
                                                                    <div class="mdc-notched-outline__trailing"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="month">
                                                            <div class="mdc-select demo-width-class mdc-select--outlined singup-form-select-birthday-month" v-on:focusout="DOBMonth_focusOut()" v-on:focusin="DOBMonth_focusIn()" >
                                                                <input type="hidden" name="singup-form-select-birthday-month" id="singup-form-select-birthday-month" required>
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
                                                                <input type="text" id="singup-form-textfield-birthday-year" class="mdc-text-field__input" required>
                                                                <div class="mdc-notched-outline">
                                                                    <div class="mdc-notched-outline__leading"></div>
                                                                    <div class="mdc-notched-outline__notch">
                                                                        <label for="singup-form-textfield-birthday-year" class="mdc-floating-label">Year</label>
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
                                            <div class="mdc-select demo-width-class mdc-select--outlined singup-form-select-gender" v-on:focusout="Gender_focusOut()" v-on:focusin="Gender_focusIn()">
                                                <input type="hidden" name="singup-form-select-gender" id="singup-form-select-gender" required>
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
                                            <p id="singup-form-select-gender-helper-text" class="mdc-select-helper-text" aria-hidden="true">
                                                Select your gender.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p class="section-heading-text">School information</p>
                                <div class="form-content-item form-content-item--coluumns-1">
                                    <div class="form-content-subitem">
                                        <div class="demo-text-field text-field-school mdc-text-field mdc-text-field--outlined">
                                            <input type="text" id="singup-form-textfield-school" class="mdc-text-field__input" required>
                                            <div class="mdc-notched-outline">
                                                <div class="mdc-notched-outline__leading"></div>
                                                <div class="mdc-notched-outline__notch">
                                                    <label for="singup-form-textfield-school" class="mdc-floating-label">School Name</label>
                                                </div>
                                                <div class="mdc-notched-outline__trailing"></div>
                                            </div>
                                        </div>
                                        <p id="singup-form-textfield-school-helper-text" class="mdc-text-field-helper-text" aria-hidden="true">
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
                                                        <input type="text" id="singup-form-textfield-address-1" class="mdc-text-field__input" required>
                                                        <div class="mdc-notched-outline">
                                                            <div class="mdc-notched-outline__leading"></div>
                                                            <div class="mdc-notched-outline__notch">
                                                                <label for="singup-form-textfield-address-1" class="mdc-floating-label">Address 1</label>
                                                            </div>
                                                            <div class="mdc-notched-outline__trailing"></div>
                                                        </div>
                                                    </div>
                                                    <p id="singup-form-textfield-address-1-helper-text" class="mdc-text-field-helper-text" aria-hidden="true">
                                                        Address 1.
                                                    </p>
                                                </div>
                                                <div>
                                                    <div class="demo-text-field text-field-address-2 mdc-text-field mdc-text-field--outlined">
                                                        <input type="text" id="singup-form-textfield-address-2" class="mdc-text-field__input">
                                                        <div class="mdc-notched-outline">
                                                            <div class="mdc-notched-outline__leading"></div>
                                                            <div class="mdc-notched-outline__notch">
                                                                <label for="singup-form-textfield-address-2" class="mdc-floating-label">Address 2</label>
                                                            </div>
                                                            <div class="mdc-notched-outline__trailing"></div>
                                                        </div>
                                                    </div>
                                                    <p id="singup-form-textfield-address-2-helper-text" class="mdc-text-field-helper-text" aria-hidden="true">
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
                                            <input type="text" id="singup-form-textfield-contact-no" class="mdc-text-field__input" required>
                                            <div class="mdc-notched-outline">
                                                <div class="mdc-notched-outline__leading"></div>
                                                <div class="mdc-notched-outline__notch">
                                                    <label for="singup-form-textfield-contact-no" class="mdc-floating-label">Contact No</label>
                                                </div>
                                                <div class="mdc-notched-outline__trailing"></div>
                                            </div>
                                        </div>
                                        <p id="singup-form-textfield-contact-no-helper-text" class="mdc-text-field-helper-text" aria-hidden="true">
                                            Enter your contact no.
                                        </p>
                                    </div>
                                    <div class="form-content-subitem">
                                        <div class="demo-text-field text-field-email mdc-text-field mdc-text-field--outlined">
                                            <input type="text" id="singup-form-textfield-email" class="mdc-text-field__input" required>
                                            <div class="mdc-notched-outline">
                                                <div class="mdc-notched-outline__leading"></div>
                                                <div class="mdc-notched-outline__notch">
                                                    <label for="singup-form-textfield-email" class="mdc-floating-label">Email</label>
                                                </div>
                                                <div class="mdc-notched-outline__trailing"></div>
                                            </div>
                                        </div>
                                        <p id="singup-form-textfield-email-helper-text" class="mdc-text-field-helper-text" aria-hidden="true">
                                            Enter your email.
                                        </p>
                                    </div>
                                </div>
                                <p class="section-heading-text">Document information</p>
                                <p class="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, ad quo? Placeat, at. Earum libero delectus quis sit quidem consequuntur, nihil unde sunt at neque nesciunt, quae repellendus quo in.</p>
                                <div class="form-content-item form-content-item--coluumns-2 document">
                                    <div class="form-content-subitem">
                                        <div class="mdc-select demo-width-class mdc-select--outlined singup-form-select-document-type" v-on:focusout="DocumentType_focusOut()" v-on:focusin="DocumentType_focusIn()">
                                            <input type="hidden" name="singup-form-select-document-type" id="singup-form-select-document-type" required>
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
                                        <p id="singup-form-select-document-type-helper-text" class="mdc-select-helper-text" aria-hidden="true">
                                            Select your document type.
                                        </p>
                                    </div>
                                    <div class="form-content-subitem">
                                        <div class="demo-text-field text-field-document-no mdc-text-field mdc-text-field--outlined">
                                            <input type="text" id="singup-form-textfield-document-no" class="mdc-text-field__input">
                                            <div class="mdc-notched-outline">
                                                <div class="mdc-notched-outline__leading"></div>
                                                <div class="mdc-notched-outline__notch">
                                                    <label for="singup-form-textfield-document-no" class="mdc-floating-label">Postal ID / National ID / Passport number.</label>
                                                </div>
                                                <div class="mdc-notched-outline__trailing"></div>
                                            </div>
                                        </div>
                                        <p id="singup-form-textfield-document-no-helper-text" class="mdc-text-field-helper-text" aria-hidden="true">
                                            Enter your Postal ID / National ID / Passport number.
                                        </p>
                                    </div>
                                    <div class="form-content-subitem">
                                        <div class="file-upload-section">
                                            <div class="file-upload-container">
                                                <div class="uploaded-file-container">
                                                    <input type="file" name="singup-form-file-document" id="singup-form-file-document" v-on:invalid="FileUpload_invalid($event)" v-on:change="FileUpload_change($event)" required>
                                                    <button class="mdc-button" id="file-upload-action-button" v-on:click="FileUploadButton_click($event)">
                                                        <i class="material-icons mdc-button__icon" aria-hidden="true">cloud_upload</i>
                                                        <span class="mdc-button__label">Upload Document</span>
                                                    </button>
                                                    <div id="uploaded-file-container-i"></div>
                                                    <p id="singup-form-textfield-upload-document-helper-text" class="mdc-text-field-helper-text" aria-hidden="true">
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
                                    <div class="recapcha"></div>
                                    <div class="submit-button">
                                        <p style="text-align:right"><button class="mdc-button mdc-button--raised mdc-ripple-upgraded">Sing Up</button></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script v-on:load="formLoad()">

import {MDCTextField} from '@material/textfield';
import {MDCTextFieldHelperText} from '@material/textfield/helper-text';
import {MDCSelect} from '@material/select';

var textField_FirstName,textField_LastName,textField_FullName,textField_BirthdayDay,textField_BirthdayYear, textField_School, textField_Address1, textField_Address2, textField_ContactNo, textField_Email, textField_DocumentNo; // textFields
var select_BirthdayMonth_Element, select_Gender_Element, select_DocumentType_Element; // selectElements
var select_BirthdayMonth, select_Gender, select_DocumentType; // selectFields
var helperText_FirstName, helperText_LastName, helperText_FullName, helperText_Gender, helperText_School, helperText_Address1, helperText_Address2, helperText_ContactNo, helperText_Email, helperText_DocumentNo, helperText_DocumentType, helperText_DocumentUpload;  // helperTexts
// file upload
var fileUploadActionButton, fileUpload, fileUploadContainer;


export default {
    data() {
        return {

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
        }
    },
    mounted : () => {
        textField_FirstName = new MDCTextField(document.querySelector('.text-field-first-name'));
        textField_LastName = new MDCTextField(document.querySelector('.text-field-last-name'));
        textField_FullName = new MDCTextField(document.querySelector('.text-field-full-name'));
        textField_BirthdayDay = new MDCTextField(document.querySelector('.text-field-birthday-day'));
        textField_BirthdayYear = new MDCTextField(document.querySelector('.text-field-birthday-year'));
        select_BirthdayMonth_Element = document.querySelector('.singup-form-select-birthday-month');
        select_BirthdayMonth = new MDCSelect(select_BirthdayMonth_Element);

        select_BirthdayMonth.listen('MDCSelect:change', () => {
        if (select_BirthdayMonth.value === "") {
            select_BirthdayMonth_Element.classList.add('mdc-select--invalid');
        }else if(select_BirthdayMonth_Element.classList.contains('mdc-select--invalid')){
            select_BirthdayMonth_Element.classList.remove('mdc-select--invalid');
        }else if (select_BirthdayMonth.value !== "") {
            select_BirthdayMonth_Element.classList.remove('mdc-select--invalid');
        }
        // alert(`Selected option at index ${select_BirthdayMonth.selectedIndex} with value "${select_BirthdayMonth.value}"`);
        });

        select_Gender_Element = document.querySelector('.singup-form-select-gender');
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

        select_DocumentType_Element = document.querySelector('.singup-form-select-document-type');
        select_DocumentType = new MDCSelect(select_DocumentType_Element);
        select_DocumentType.listen('MDCSelect:change', () => {
            if (select_DocumentType.value === "") {
                select_DocumentType_Element.classList.add('mdc-select--invalid');
            }else if(select_DocumentType_Element.classList.contains('mdc-select--invalid')){
                select_DocumentType_Element.classList.remove('mdc-select--invalid');
            }else if (select_DocumentType.value !== "") {
                select_DocumentType_Element.classList.remove('mdc-select--invalid');
            }
        });

        fileUploadActionButton = document.querySelector('#file-upload-action-button');
        fileUpload = document.querySelector('#singup-form-file-document');
        fileUploadContainer = document.querySelector('.file-upload-container');


        helperText_FirstName = new MDCTextFieldHelperText(document.querySelector('#singup-form-textfield-first-name-helper-text'));
        helperText_LastName = new MDCTextFieldHelperText(document.querySelector('#singup-form-textfield-last-name-helper-text'));
        helperText_FullName = new MDCTextFieldHelperText(document.querySelector('#singup-form-textfield-full-name-helper-text'));
        helperText_Gender = new MDCTextFieldHelperText(document.querySelector('#singup-form-select-gender-helper-text'));
        helperText_School = new MDCTextFieldHelperText(document.querySelector('#singup-form-textfield-school-helper-text'));
        helperText_Address1 = new MDCTextFieldHelperText(document.querySelector('#singup-form-textfield-address-1-helper-text'));
        helperText_Address2 = new MDCTextFieldHelperText(document.querySelector('#singup-form-textfield-address-2-helper-text'));
        helperText_ContactNo = new MDCTextFieldHelperText(document.querySelector('#singup-form-textfield-contact-no-helper-text'));
        helperText_Email = new MDCTextFieldHelperText(document.querySelector('#singup-form-textfield-email-helper-text'));
        helperText_DocumentNo = new MDCTextFieldHelperText(document.querySelector('#singup-form-textfield-document-no-helper-text'));
        helperText_DocumentType = new MDCTextFieldHelperText(document.querySelector('#singup-form-select-document-type-helper-text'));
        helperText_DocumentUpload = new MDCTextFieldHelperText(document.querySelector('#singup-form-textfield-upload-document-helper-text'));
    }
}
</script>

