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
                            <form action="" method="post" id="singup-form" enctype="multipart/form-data">
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
                                                            <div class="mdc-select demo-width-class mdc-select--outlined singup-form-select-birthday-month">
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
                                            <div class="mdc-select demo-width-class mdc-select--outlined singup-form-select-gender">
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
                                        <div class="mdc-select demo-width-class mdc-select--outlined singup-form-select-document-type">
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
                                                    <input type="file" name="singup-form-file-document" id="singup-form-file-document" required>
                                                    <button class="mdc-button" id="file-upload-action-button">
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

<script>
export default {
    
}
</script>
