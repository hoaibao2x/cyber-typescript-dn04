// let fullName = 'Nguyen A';
// let age = 23;
/**
 * Kiểu dữ liệu (type)
 */
// Kiểu dữ liệu cơ bản
let fullName = "string";
let age = 20;
let isLogin = true;
let localStore = null;
let propertyName = undefined;
let nv = {
    ma: 1,
    hoTen: "Nhan Vien",
    luong: 2000,
};
let result = 22;
let prod = {
    id: 1,
    name: "Prod 1",
    price: 2000,
    img: "https://i.pravatar.cc/",
};
let btn = {
    id: "btn1",
    className: "btn",
    innerHTML: "Click",
    gradient: "color",
};
class Phim {
    //? class implements thì mới chứa code sử lý
    create(newItem) {
        return 123;
    }
}
// Type của fnc
//! let tinhTong = (num1, num2) => {
//!     return num1 + num2;
//! }
let tinhTong = (num1, num2) => {
    return num1 + num2;
};
tinhTong(1, 4);
// Không có return
let showInfo = (name) => {
    console.log(`Hello ${name}`);
};
showInfo("My name");
let main = (callback) => {
    // Truyền giá trị name vào một hàm callback
    callback("typescript"); // Gọi hàm renderH1
};
let renderH1 = (name) => {
    console.log(`Hello ${name}`);
};
main(renderH1);
// Kiểu của mảng
let arrNum = [1, 2, 34];
let arString = ["a", "b", "c"];
let arrPro = [
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
let sv = [1, "Sinh viên"];
/**
 *  Class
 */
class ProductType {
    constructor() {
        this.id = "";
        this.name = "";
        this.img = "";
    }
    showInfo() {
        console.log(this.name);
    }
}
let pro1 = new ProductType();
pro1.id = "SP01";
pro1.name = "test";
pro1.showInfo();
//? any: Cho phép dùng các toán tử (+,-,*,/) và gọi hàm
let pro2 = undefined;
pro2.showInfo();
let prod3 = undefined;
// prod3.showInfo(); //! Error
// instanceof: Kiểm tra có phải là thể hiện của Class không
if (prod3 instanceof ProductType) {
    prod3.showInfo();
}
let prod4 = undefined;
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
    constructor() {
        this.ten = "";
        this.luongCB = 1000;
        this.heso = 1;
    }
    tinhLuong() {
        return this.luongCB * this.heso;
    }
}
class NhanVienKeToan extends NhanVien {
    tinhLuong() {
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
class List {
    constructor() {
        // Truyền dữ liệu động
        this.data = [];
    }
    create(newItem) {
        this.data.push(newItem);
    }
    getByID(id) {
        return this.data.find((item) => {
            return item.id === id;
        });
    }
}
let userList = new List();
let user = { id: "user01", username: "test", password: "123456" };
userList.create(user);
console.log(userList);
