import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { increment, decrement, reset } from '../../store/ModuleUser/ModuleUserActions';

@Component({
  selector: 'app-sidebar-action-user',
  templateUrl: './sidebar-action-user.component.html',
  styleUrls: ['./sidebar-action-user.component.css'],

})
export class SidebarActionUserComponent implements OnChanges {
  updateData: Boolean;
  disabled: Boolean;
  user: Object;
  urlImage: String;
  @Input() data: Object;
  @Input() isSidebarActive: Boolean;
  @Output() isSidebarActiveChange  = new EventEmitter<Boolean>();
  @Output() resetDataUpdate = new EventEmitter<Object>();
  @Output() createUserEmit = new EventEmitter<Object>();
  @Output() updateUserEmit = new EventEmitter<Object>();
  inputText;
  userForm = new FormGroup({
    username: new FormControl(''),
    avatar: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    birthday: new FormControl(new Date().toISOString().substr(0,10)),
  })
  va_ref = /^[a-zA-Z0-9 ]+$/;
  constructor() {

  } 
  //watch Input when change isSidebarActive
  ngOnChanges(changes) {
    if(Object.entries(this.data).length > 0)
    {
      this.user  = {...this.data};
      this.updateData = Object.entries(this.data).length == 0 ? false: true;
      this.urlImage = this.user['avatar'];
      this.userForm.controls["username"].setValue(this.user['username']);
      this.userForm.controls["name"].setValue(this.user['name']);
      this.userForm.controls["email"].setValue(this.user['email']);
      // this.userForm.controls["birthday"].setValue(new Date(user.birthday).toISOString().substr(0,10));
    }
    else
    {
      this.initValue();
    }
  }
  ngOnInit(): void {
    this.initValue();
  }

  
  //methods

  initValue()
  {
    console.log('init value');
    this.updateData = false;
    this.userForm = new FormGroup({
      username: new FormControl('',[
        Validators.required, Validators.minLength(8), Validators.pattern(this.va_ref)
      ]),
      avatar: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      birthday: new FormControl(new Date().toISOString().substr(0,10)),
    });
    this.disabled = false;
    this.urlImage = '';
  }
  onSubmit(event)
  {
    event.stopPropagation();
    event.preventDefault();
    if(this.updateData == false)
    { 
      this.createUser();
    }
    else
    {
      this.updateUser();
    }
  }
  createUser()
  {
    //call api
    const userObj = this.userForm.getRawValue();
    userObj.avatar = this.urlImage != '' ? this.urlImage : '';
    console.log('create user',userObj);
    this.createUserEmit.emit(userObj);
    this.initValue();

  }
  updateUser()
  {
    const userObj = this.userForm.getRawValue();
    userObj.id = this.data['id'];
    userObj.avatar = this.urlImage != '' ? this.urlImage : this.data['avatar'];
    console.log('update user',userObj);
    this.updateUserEmit.emit(userObj);
    // this.initValue();
  }
  closeSidebar()
  {
    console.log('closeSidebar ', false);
    this.isSidebarActiveChange.emit(false);
    // this.isSidebarActive = false;
  }

  handleFileInput(event)
  {
    var reader = new FileReader();
    reader.onload = (event:any) => {
     this.urlImage = event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);
  }
}
