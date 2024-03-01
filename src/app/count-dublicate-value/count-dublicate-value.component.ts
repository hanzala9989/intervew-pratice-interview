import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

class UserFormObject {
  username: string | undefined;
  password: string;
  isAdmin: boolean;
}
@Component({
  selector: 'app-count-dublicate-value',
  templateUrl: './count-dublicate-value.component.html',
  styleUrls: ['./count-dublicate-value.component.scss']
})

export class CountDublicateValueComponent implements OnInit {
  arrayList = ['a', 'b', 'c', 'a', 'c', 'd', 'a', 'b', 'a']
  inputString: string = 'hanzala'

  userFormObject: any;
  userList: UserFormObject[] = [];
  editIndex: boolean = false;
  updateObject: UserFormObject;
  constructor() { }

  ngOnInit(): void {
    this.userFormObject = new UserFormObject();
    this.countDublicateElement();
    // console.log(this.countDublicateElement());
    this.reverseString();
    console.log(this.reverseString());

    forkJoin({

    }).subscribe(data=>{

    });

  }

  isAdminChange(event:any){
    this.userFormObject.isAdmin = event.value;
  }

  adduser() {
    if (this.userFormObject) {
      this.userList.push(this.userFormObject);
      this.userFormObject = new UserFormObject();
    }
  }

  deleteUser(element: UserFormObject) {
    const index = this.userList.indexOf(element)

    if (index != -1) {
      this.userList.splice(index, 1);
    }
  }

  editUser(element: UserFormObject) {
    this.editIndex = true;
    this.updateObject = element;
    this.userFormObject = {... this.updateObject};
  }



  addorupdateData() {
    if (this.editIndex) {
      const index = this.userList.indexOf(this.updateObject);
      if (index != -1) {
        this.userList[index] = { ...this.userFormObject };
      }
    } else {
      this.adduser();
    }
  }

  reverseString(): string {
    let reverserString: string = '';
    const res = this.inputString.split('');
    const revRes: string[] = [];
    res.forEach((ele, i) => {
      revRes.push(res[res.length - i - 1]);
    })

    reverserString = revRes.join('').toString();
    return reverserString
  }

  countDublicateElement() {
    const resultObject: any = {};
    this.arrayList.forEach((ele: any) => {
      resultObject[ele] = (resultObject[ele] || 0) + 1;;
    });

    return resultObject;
  }

}
