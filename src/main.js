import Vue from 'vue'
import VueRouter from 'vue-router'

// IMPORT Material
import {MDCList} from "@material/list";
import {MDCDrawer} from "@material/drawer";
import {MDCTextField} from '@material/textfield';
import {MDCTextFieldHelperText} from '@material/textfield/helper-text';
import {MDCSelect} from '@material/select';

// Smooth scroll
import SmoothScroll from 'smooth-scroll';

import App from './App.vue'
import Home from './components/home/Home.vue'
import NOI from './components/noi/NOI.vue'
import NOIRulesAndRegulations from './components/noi/rules_and_regulations/RulesAndRegulations.vue'
import NOIAwards from './components/noi/awards/Awards.vue'
import News from './components/news/News.vue'
import Resources from './components/resources/Resources.vue'
import IOI from './components/ioi/IOI.vue'
import Gallery from './components/gallery/Gallery.vue'
import About from './components/about/About.vue'
import Contact from './components/contact/Contact.vue'
import SingUp from './components/auth/SingUp.vue'
import SingUpResponse from './components/auth/SingUpResponse.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/noi', component: NOI },
  { path: '/noi/rulesandregulations', component: NOIRulesAndRegulations },
  { path: '/noi/awards', component: NOIAwards },
  { path: '/news', component: News},
  { path: '/resources' , component: Resources},
  { path: '/ioi' , component: IOI},
  { path: '/about', component: About },
  { path: '/contact', component: Contact},
  { path: '/singup', component:SingUp},
  { path: '/singup/success', component:SingUpResponse}
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router: router,
  components: { App }
})

// DROPDOWN action
document.querySelector('.mdc-list-item__text__content:not(.dropdown_icon)').addEventListener('click', function (event) {
  if (event.target.parentElement.className == 'mdc-list-item__content') {
    event.target.parentElement.className += ' mdc-list-item__content--activated';
    event.target.childNodes[2].innerText = 'keyboard_arrow_up';
  }else{
    if ( event.target.parentElement.className != 'mdc-list-item__text__content') {
      event.target.parentElement.className = 'mdc-list-item__content';
    }
    event.target.childNodes[2].innerText = 'keyboard_arrow_down';
  }
});

// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]');

document.querySelector('.mobile-responsive-button').addEventListener('click', function(){
  try {
    const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    drawer.open = !drawer.open;
  } catch (error) {
    console.log(error);
  }
});

const list = MDCList.attachTo(document.querySelector('.mdc-list'));

list.wrapFocus = true;


const textField_FirstName = new MDCTextField(document.querySelector('.text-field-first-name'));
const textField_LastName = new MDCTextField(document.querySelector('.text-field-last-name'));
const textField_FullName = new MDCTextField(document.querySelector('.text-field-full-name'));
const textField_BirthdayDay = new MDCTextField(document.querySelector('.text-field-birthday-day'));
const textField_BirthdayYear = new MDCTextField(document.querySelector('.text-field-birthday-year'));

const select_BirthdayMonth_Element = document.querySelector('.singup-form-select-birthday-month');
const select_BirthdayMonth = new MDCSelect(select_BirthdayMonth_Element);
select_BirthdayMonth_Element.addEventListener('focusout', () => {
  if (select_BirthdayMonth.value === "") {
    select_BirthdayMonth_Element.classList.add('mdc-select--invalid');
  }else if(select_BirthdayMonth_Element.classList.contains('mdc-select--invalid')){
    select_BirthdayMonth_Element.classList.remove('mdc-select--invalid');
  }else if (select_BirthdayMonth.value !== "") {
    select_BirthdayMonth_Element.classList.remove('mdc-select--invalid');
  }
});
select_BirthdayMonth_Element.addEventListener('focusin', () => {
  if(select_BirthdayMonth_Element.classList.contains('mdc-select--invalid')){
    select_BirthdayMonth_Element.classList.remove('mdc-select--invalid');
  }else if (select_BirthdayMonth.value !== "") {
    select_BirthdayMonth_Element.classList.remove('mdc-select--invalid');
  }
});
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


const select_Gender_Element = document.querySelector('.singup-form-select-gender');
const select_Gender= new MDCSelect(select_Gender_Element);
select_Gender_Element.addEventListener('focusout', () => {
  if (select_Gender.value === "") {
    select_Gender_Element.classList.add('mdc-select--invalid');
  }else if(select_Gender_Element.classList.contains('mdc-select--invalid')){
    select_Gender_Element.classList.remove('mdc-select--invalid');
  }else if (select_Gender.value !== "") {
    select_Gender_Element.classList.remove('mdc-select--invalid');
  }
});

select_Gender_Element.addEventListener('focusin', () => {
  if(select_Gender_Element.classList.contains('mdc-select--invalid')){
    select_Gender_Element.classList.remove('mdc-select--invalid');
  }else if (select_Gender.value !== "") {
    select_Gender_Element.classList.remove('mdc-select--invalid');
  }
});
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

const textField_School = new MDCTextField(document.querySelector('.text-field-school'));
const textField_Address1 = new MDCTextField(document.querySelector('.text-field-address-1'));
const textField_Address2 = new MDCTextField(document.querySelector('.text-field-address-2'));
const textField_ContactNo = new MDCTextField(document.querySelector('.text-field-contact-no'));
const textField_Email = new MDCTextField(document.querySelector('.text-field-email'));
const textField_DocumentNo = new MDCTextField(document.querySelector('.text-field-document-no'));

const select_DocumentType_Element = document.querySelector('.singup-form-select-document-type');
const select_DocumentType = new MDCSelect(select_DocumentType_Element);
select_DocumentType_Element.addEventListener('focusout', () => {
  if (select_DocumentType.value === "") {
    select_DocumentType_Element.classList.add('mdc-select--invalid');
  }else if(select_DocumentType_Element.classList.contains('mdc-select--invalid')){
    select_DocumentType_Element.classList.remove('mdc-select--invalid');
  }else if (select_DocumentType.value !== "") {
    select_DocumentType_Element.classList.remove('mdc-select--invalid');
  }
});

select_DocumentType_Element.addEventListener('focusin', () => {
  if(select_DocumentType_Element.classList.contains('mdc-select--invalid')){
    select_DocumentType_Element.classList.remove('mdc-select--invalid');
  }else if (select_DocumentType.value !== "") {
    select_DocumentType_Element.classList.remove('mdc-select--invalid');
  }
});
select_DocumentType.listen('MDCSelect:change', () => {
  if (select_DocumentType.value === "") {
    select_DocumentType_Element.classList.add('mdc-select--invalid');
  }else if(select_DocumentType_Element.classList.contains('mdc-select--invalid')){
    select_DocumentType_Element.classList.remove('mdc-select--invalid');
  }else if (select_DocumentType.value !== "") {
    select_DocumentType_Element.classList.remove('mdc-select--invalid');
  }
});

const fileUploadActionButton = document.querySelector('#file-upload-action-button');
const fileUpload = document.querySelector('#singup-form-file-document');
const fileUploadContainer = document.querySelector('.file-upload-container');
fileUploadActionButton.addEventListener('click', (event) => {
  event.preventDefault();
  fileUpload.click();
});
fileUpload.addEventListener('invalid', (event) => {
  if (event.target.value == null) {
    fileUploadContainer.classList.add('file-upload-container--invlid');
  }else if (fileUploadContainer.classList.contains('file-upload-container--invlid')){
    fileUploadContainer.classList.remove('file-upload-container--invlid');
  }
});
fileUpload.addEventListener('change', (event) => {
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
});

const helperText_FirstName = new MDCTextFieldHelperText(document.querySelector('#singup-form-textfield-first-name-helper-text'));
const helperText_LastName = new MDCTextFieldHelperText(document.querySelector('#singup-form-textfield-last-name-helper-text'));
const helperText_FullName = new MDCTextFieldHelperText(document.querySelector('#singup-form-textfield-full-name-helper-text'));
const helperText_Gender = new MDCTextFieldHelperText(document.querySelector('#singup-form-select-gender-helper-text'));
const helperText_School = new MDCTextFieldHelperText(document.querySelector('#singup-form-textfield-school-helper-text'));
const helperText_Address1 = new MDCTextFieldHelperText(document.querySelector('#singup-form-textfield-address-1-helper-text'));
const helperText_Address2 = new MDCTextFieldHelperText(document.querySelector('#singup-form-textfield-address-2-helper-text'));
const helperText_ContactNo = new MDCTextFieldHelperText(document.querySelector('#singup-form-textfield-contact-no-helper-text'));
const helperText_Email = new MDCTextFieldHelperText(document.querySelector('#singup-form-textfield-email-helper-text'));
const helperText_DocumentNo = new MDCTextFieldHelperText(document.querySelector('#singup-form-textfield-document-no-helper-text'));
const helperText_DocumentType = new MDCTextFieldHelperText(document.querySelector('#singup-form-select-document-type-helper-text'));
const helperText_DocumentUpload = new MDCTextFieldHelperText(document.querySelector('#singup-form-textfield-upload-document-helper-text'));
