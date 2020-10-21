import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { increment, decrement, reset} from '../../store/ModuleUser/ModuleUserActions';
import {UserState} from '../../store/ModuleUser/userState';
import * as fromUser from '../../store/ModuleUser/ModuleUserReducer';
import { Observable } from 'rxjs';
import {SidebarActionUserComponent} from '../sidebar-action-user/sidebar-action-user.component'



@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
}
)
export class ListUserComponent implements OnInit {
  headElements = ['Avatar', 'Tài khoản', 'Họ & Tên', 'Ngày sinh', 'Email', ''];
  private UserSateLocal: UserState;
  users = [
    {
      id: 1,
      avatar: 'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/79881193_470127877234942_3344401294348517376_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=efv58N37VyEAX9NeGkI&_nc_ht=scontent.fsgn5-5.fna&oh=eeeb5b13cd5b2c03c69e29a245ed1ae2&oe=5FB2C1DA',
      username: 'thaibinhblack',
      name: 'Nguyễn Thái Bình',
      email: 'thaibinhblack@gmail.com',
      birthday: '29/09/1996'
    }
  ]
  userEdit: any;
  isSidebar: Boolean;
  delete: Boolean;
  toggle: Boolean;
  constructor() { 
  }

  ngOnInit(): void {
    this.initValue();
  }

  initValue()
  {
    this.userEdit = {}
    this.isSidebar = false;
    this.delete = false;
    this.toggle = false;
  }

  EditData(data)
  {
    this.userEdit = data;
    this.isSidebar = true;
  }
  DeleteData(data)
  {
    this.userEdit = data
  }
  SuccessDeleteData()
  {
    const IndexDelete = this.users.findIndex((user) => user.id == this.userEdit.id);
    this.users.splice(IndexDelete,1);
    this.userEdit = {}
  }
  createUser(user)
  {
   
    const max = this.users.length > 0 ? this.users[this.users.length -1 ].id + 1  : 1;
    var user_new = {...user}
    user_new.id = max != undefined ? max : 1;
    console.log('push user: ',max)
    this.users.push(user_new)
  }

  updateUser(user_update)
  {
    const IndexUser = this.users.findIndex((user) => user.id == user_update.id);
    Object.assign(this.users[IndexUser],user_update);
  }
  closeSidebar(boolean)
  {
    // console.log('boolean' , boolean);
    this.isSidebar = boolean;
    this.userEdit = {}
  }

}
