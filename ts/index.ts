// let fullName = 'Nguyen A';
// let age = 23;

/**
 * Kiểu dữ liệu (type)
 */

// Kiểu dữ liệu cơ bản
let fullName: string = "string";
let age: number = 20;
let isLogin: boolean = true;
let localStore: null = null;
let propertyName: undefined = undefined;

// Tham chiếu: obj, arr, fnc
//? Obj
// Type: Định nghĩa kiểu dữ liệu cho đối tượng
type Employee = {
  ma: number;
  hoTen: string;
  luong: number;
  moTa?: string; // ?: optional properties
};

let nv: Employee = {
  ma: 1,
  hoTen: "Nhan Vien",
  luong: 2000,
};

// Union Type: Quy dịnh nhiều kiểu dữ liệu cho một biến
type responBE = string | number | boolean | undefined;

let result: responBE = 22;

/**
 * Interface gần giống type
 */

interface Product {
  id: number | string;
  name: string;
  price: number;
  img: string;
}

// Gộp interface
// Chỉ dùng để khai báo các thuộc tính optionals
interface Product {
  moTa?: string;
}

let prod: Product = {
  id: 1,
  name: "Prod 1",
  price: 2000,
  img: "https://i.pravatar.cc/",
};

//? Kế thừa interface
interface Button {
  id: number | string;
  className: string;
  innerHTML: string;
}

interface ButtonGradient extends Button {
  gradient: string;
}

let btn: ButtonGradient = {
  id: "btn1",
  className: "btn",
  innerHTML: "Click",
  gradient: "color",
};

// Quy định kiểu dữ liệu cho class
// CRUD
// any: Không có kiểu dữ liệu (điền dữ liệu nào cho biến cũng được)
// unknown
interface CRUD {
  // Phương thức
  // interface chỉ khai báo ten thuộc tính, phương thức (không chứa code thực thi)
  create: any;
  read: any;
  update: any;
  delete: any;
}

class Phim implements CRUD {
  //? class implements thì mới chứa code sử lý
  create(newItem: any): number {
    return 123;
  }
  read: any;
  update: any;
  delete: any;
}

// Type của fnc
//! let tinhTong = (num1, num2) => {
//!     return num1 + num2;
//! }

let tinhTong = (num1: number, num2: number): number => {
  return num1 + num2;
};
tinhTong(1, 4);

// Không có return
let showInfo = (name: string): void => {
  console.log(`Hello ${name}`);
};
showInfo("My name");

let main = (callback: (name: string) => void) => {
  // Truyền giá trị name vào một hàm callback
  callback("typescript"); // Gọi hàm renderH1
};

let renderH1 = (name: string): void => {
  console.log(`Hello ${name}`);
};

main(renderH1);

// Kiểu của mảng
let arrNum: number[] = [1, 2, 34];
let arString: string[] = ["a", "b", "c"];

let arrPro: Product[] = [
  {
    id: 1,
    name: "Prod 1",
    price: 2000,
    img: "https://i.pravatar.cc/",
  },
  {
    id: 2,
    name: "Prod 2",
    price: 1200,
    img: "https://i.pravatar.cc/",
  },
];

// Tuple: Dữ liệu mảng hỗn hợp
let sv: [number, string] = [1, "Sinh viên"];

/**
 *  Class
 */

class ProductType {
  id: string = "";
  name: string = "";
  img: string = "";
  showInfo(): void {
    console.log(this.name);
  }
}

let pro1 = new ProductType();
pro1.id = "SP01";
pro1.name = "test";
pro1.showInfo();

//? any: Cho phép dùng các toán tử (+,-,*,/) và gọi hàm
let pro2: any = undefined;
pro2.showInfo();

let prod3: unknown = undefined;
// prod3.showInfo(); //! Error

// instanceof: Kiểm tra có phải là thể hiện của Class không
if (prod3 instanceof ProductType) {
  prod3.showInfo();
}

let prod4: unknown = undefined;
// prod4++;
// typeof: Kiểm tra kiểu dữ liệu
if (typeof prod4 === "number") {
  prod4++;
}

/**
 * access modifier:
 * + public: có thể truy cập ở mọi nơi (instance, kế thừa, trong class đó)
 * + private: chỉ được dùng trong class đó (không dùng được trong instance, kế thừa)
 * + protected: chỉ được dùng trong class đó và các lớp con kết thừa (không dùng được instance)
 */

class NhanVien {
  ma: number | string;
  ten: string = "";
  protected luongCB: number = 1000;
  heso: number = 1;
  tinhLuong(): number {
    return this.luongCB * this.heso;
  }
}

class NhanVienKeToan extends NhanVien {
  tinhLuong(): number {
    return this.luongCB * this.heso;
  }
}

let nv2 = new NhanVien();
nv2.ma = "nv2";
nv2.ten = "Nguyen A";
// nv2.luongCB = 5000;
console.log(nv2.tinhLuong());

// Generic
// Phim, Người dùng

class List<T> {
  // Truyền dữ liệu động
  data: T[] = [];

  create(newItem: any): void {
    this.data.push(newItem);
  }

  getByID(id: any): any {
    return this.data.find((item: any) => {
      return item.id === id;
    });
  }
}

type User = {
  id: string;
  username: string;
  password: string;
};

let userList = new List<User>();
let user: User = { id: "user01", username: "test", password: "123456" };

userList.create(user);
console.log(userList);