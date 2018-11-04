CREATE TABLE IF NOT EXISTS  User (
    user_ID varchar(10),
    password  varchar(20),
   user_type  enum('customer','admin'),
   last_login  datetime,
   name  varchar(20),
  PRIMARY KEY (user_ID)
) ;

CREATE TABLE IF NOT EXISTS   Contact_Detail  (

 user_ID  varchar(10),
 contact_no  int (10),
PRIMARY KEY ( user_ID ),
FOREIGN KEY ( user_ID ) REFERENCES  User ( user_ID ) on delete cascade on update cascade

);

CREATE TABLE IF NOT EXISTS   Customer  (
   cus_ID  varchar(10),
   home_no  int(10),
   city  varchar(10),
   state  varchar(10),
   postal_code  int(10),
   type  enum('wholesalers',' retailers' , 'end_customers'),
  PRIMARY KEY ( cus_ID ),
  FOREIGN KEY ( cus_ID ) REFERENCES  User ( user_ID ) on delete cascade on update cascade
);

CREATE TABLE IF NOT EXISTS   Store  (
   store_ID  varchar(10),
   city  enum('Colombo', 'Negombo', 'Galle', 'Matara', 'Jaffna', 'Trinco'),
  PRIMARY KEY ( store_ID )
);

CREATE TABLE IF NOT EXISTS   product  (
   product_ID  varchar(10),
   exp_date  date,
   man_date  date,
   fragileness  BOOLEAN,
   capacity  INT(10),
   price  float(10,3),
  PRIMARY KEY ( product_ID )
);

CREATE TABLE IF NOT EXISTS   Train_Transport  (
   train_ID  varchar(10),
   arrive_time  time,
   departure_time  time,
   total_capacity  int(20),
   remain_capacity  int(20),
   trip_ID  varchar(10),
  PRIMARY KEY ( trip_ID )
);

CREATE TABLE IF NOT EXISTS  Orders  (
   order_ID  varchar(10),
   cus_ID  varchar(10),
   order_date  date,
   route  varchar(30),
   delivery_date  date,
   total_capacity  int(10),
   total_price  float(10,3),
   payment_detail  enum('cc','cash','ondelivery'),
   store_ID  varchar(10),
   trip_ID  varchar(10),
  PRIMARY KEY ( order_ID ),
  FOREIGN KEY ( cus_ID ) REFERENCES  Customer ( cus_ID ) on delete cascade on update cascade,
  FOREIGN KEY ( store_ID ) REFERENCES  Store ( store_ID ) on delete cascade on update cascade,
  FOREIGN KEY ( trip_ID ) REFERENCES  Train_Transport ( trip_ID ) on delete cascade on update cascade
);

CREATE TABLE IF NOT EXISTS   Order_Product  (
  order_ID  varchar(10),
  product_ID  varchar(10),
 PRIMARY KEY ( order_ID , product_ID ),
 FOREIGN KEY ( product_ID ) REFERENCES  product ( product_ID ) on delete cascade on update cascade,
 FOREIGN KEY ( order_ID ) REFERENCES  Orders ( order_ID ) on delete cascade on update cascade
 
);


CREATE TABLE IF NOT EXISTS   Employer  (
   emp_ID  varchar(10),
   name  varchar(20),
   store_ID  varchar(10),
   work_hour  int(10),
   last_term  time,
   type  enum('drivers', 'driver_assistant'),
  PRIMARY KEY ( emp_ID ),
   FOREIGN KEY ( store_ID ) REFERENCES  Store ( store_ID ) on delete cascade on update cascade
);

CREATE TABLE IF NOT EXISTS   Truck  (
   truck_ID  varchar(10),
   store_ID  varchar(10),
   availability  boolean,
  PRIMARY KEY ( truck_ID ),
   FOREIGN KEY ( store_ID ) REFERENCES  Store ( store_ID ) on delete cascade on update cascade
);

CREATE TABLE IF NOT EXISTS   Route_Detail  (
   route_ID  varchar(10),
   store_ID  varchar(10),
  PRIMARY KEY ( route_ID ),
   FOREIGN KEY ( store_ID ) REFERENCES  Store ( store_ID ) on delete cascade on update cascade
);

CREATE TABLE IF NOT EXISTS   Route_covering_city  (
  route_ID  varchar(10),
  city  varchar(20),
 PRIMARY KEY ( route_ID ),
  FOREIGN KEY ( route_ID ) REFERENCES  Route_Detail ( route_ID ) on delete cascade on update cascade
);



CREATE TABLE  Truck_schedule  (
   sch_ID  varchar(10),
   truck_ID  varchar(10),
   driver_ID  varchar(10),
   assistant_ID varchar(10),
   route_ID  varchar(10),
   store_ID varchar(10),
  PRIMARY KEY ( sch_ID ),
  FOREIGN KEY ( store_ID ) REFERENCES  Store ( store_ID ) on delete cascade on update cascade,
  FOREIGN KEY ( truck_ID ) REFERENCES  Truck ( truck_ID ) on delete cascade on update cascade,
  FOREIGN KEY ( assistant_ID ) REFERENCES  Employer ( emp_ID ) on delete cascade on update cascade,
  FOREIGN KEY ( driver_ID ) REFERENCES  Employer ( emp_ID ) on delete cascade on update cascade,
  FOREIGN KEY ( route_ID ) REFERENCES  Route_Detail ( route_ID ) on delete cascade on update cascade
);




