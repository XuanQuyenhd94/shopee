use master
go
create database shopee
go
use shopee
go
/*route - phần quyền admin - nhân viên*/
create table routers (
	id int identity(1,1) primary key,
	names nvarchar(50)
)
go
/*user - người dùng*/
create table users (
	email varchar(50) primary key ,
	idRouters int not null ,
	passwords varchar(50) not null,
	statuss bit default(0),

	/*khóa ngoại : email*/
)
go
/*infoUser - thông tin người dùng*/
create table infoUser (
	email varchar(50) primary key,
	phoneNumber varchar(50) not null,
	addressUser varchar(max) not null,
	avatar nvarchar(50),
	firstName nvarchar(50),
	lastName nvarchar(100),

	/*khóa ngoại : email*/
)
go
/*-----------------BUYER-------------------*/

/*buyer - người mua hàng*/
create table buyer (
	email varchar(50) primary key ,
	passwords varchar(50) not null,
	statuss bit default(0)
)
go
/*buyer info - thông tin người mua*/
create table infoBuyer (
	email varchar(50) primary key,
	phoneNumber varchar(50) not null,
	addressBuyer varchar(max) not null,
	avatar nvarchar(50),
	firstName nvarchar(50) not null,
	lastName nvarchar(100) not null,

	/*khóa ngoại : email*/
)
go
/*favorite */
create table favorite (
	email varchar(50) primary key,
	idProduct bigint not null,
	/*khóa ngoại*/
)
go
/*------------------------------------------------ DANH MỤC-----------*/
create table catalogies (
	id int identity(1,1) primary key ,
	names nvarchar(100),
	slug varchar(120),
	avatar nvarchar(200)
)
go
/*------------------------------------------------ NHÓM SẢN PHẨM------*/
create table groups (
	id int identity(1,1) primary key ,
	names nvarchar(100),
	idCatalogies int not null,	

	/*khóa ngoại catalogies*/
)
go
/*------------------------------------------------ ĐẶC TRƯNG CỦA NHÓM SẢN PHẨM*/
create table special (
	id int identity(1,1) primary key ,
	names nvarchar(50),
	idGroup int not null,

	/*khóa ngoại : group : 1 nhóm sản phẩm có nhiều đặc trưng riêng : 1- n*/
)
go
/*------------------------------------------------ SẢN PHẨM*/
create table product (
	id bigint identity(1,1) primary key,	
	names nvarchar(200),
	slug varchar(200),
	price int ,
	sale  int,
	idGroup int not null,

	/*khóa ngoại group | 1 sản phẩm thuộc 1 nhóm sản phẩm => có thể truy vấn đến 1 danh mục của nhóm sản phẩm ấy hoặc các đặc trưng của nhóm sản phẩm ấy*/
)
go
/*----------------------------------------------- CHI TIẾT SẢN PHẨM*/
create table detailProduct (
	idProduct bigint primary key,
	descriptions ntext,

	/*khóa ngoại product => truy vấn đến bảng product 1 sản phẩm - 1 chi tiết sản phẩm*/
)
go
/*------------------------------------------------ Giỏ hàng | lưu trữ thông tin giỏ hàng chưa được thanh toán*/
create table cart (	
	email varchar(50) not null,
	idProduct bigint not null,
	quantity int ,

	/*khóa chính (idproduct , email) => thỏa mãn 1 email có nhiều sản phẩm trong giỏ hàng | thanh toán sp nào mất sp đó trong giỏ hàng*/
	/*khóa ngoại buyer | product*/
)
go
/*----------------------------------------------- Watched | lưu trữ các sản phẩm đã xem nhưng chưa cho vào giỏ hàng*/
create table watched (
	id int identity(1,1) primary key,
	email varchar(50) not null,
	idProduct bigint not null,

	
	/*khóa ngoại buyer | product => thỏa mãn xóa lịch sử sản phẩm đã xem*/
)
go
/*---------------------------------------------- HÓA ĐƠN NHẬP | lưu trữ thông tin hóa đơn nhập*/
create table invoice(
	id bigint identity(1,1) primary key,	
	email varchar(50) not null,/*của user-admin*/
	total int ,
	/*khóa ngoại user*/
)
go
create table detailInvoice(
	id bigint identity(1,1) primary key,
	quantity int ,
	total int,
	idInvoice bigint not null,
	idProduct bigint not null,

	/*khóa ngoại invoice , product*/
)
go
/*--------------------------------------------- HÓA ĐƠN BÁN | lưu trữ thông tin hóa đơn bán*/
create table Bill (
	id bigint identity(1,1) primary key,
	email varchar(50) not null,/*của buyer*/
	total int ,

	/*khóa ngoại buyer*/

)
go
create table detailBill (
	id bigint identity(1,1) primary key,
	quantity int ,
	total int,
	idBill bigint not null,
	idProduct bigint not null,

	/*khóa ngoại bill , product*/
)
