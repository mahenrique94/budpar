-- USER
db.user.insert({
   name : "MATHEUS HENRIQUE",
   login : "MAHENRIQUE94",
   password : "MAHMAH10",
   datecreate : new Date(),
   dateupdate : new Date() 
});

-- BUDGET
db.budget.insert({
   degree : {
        companyname : "MATHEUS HENRIQUE",
        address : {
            street : "JARDIM IGACABA",
            number : "26",
            zipcode : "13840-000",
            complement : "CASA",
            district : "CAIAPOS",
            city : "MOGI GUACU",
            state : "SP",
            country : "BRASIL"
        }
   },
   graduation : {
        companyname : "MATHEUS HENRIQUE",
        address : {
            street : "JARDIM IGACABA",
            number : "26",
            zipcode : "13840-000",
            complement : "CASA",
            district : "CAIAPOS",
            city : "MOGI GUACU",
            state : "SP",
            country : "BRASIL"
        }
   },
   costs : [
       {name : "ALUGUEL", value : 100},
       {name : "BIFE", value : 1000}
   ],
   teachers : [
       {name : "EDUARDO"},
       {name : "JOAO"}
   ],
   datecreate : new Date(),
   dateupdate : new Date()
});

db.budget.insert({
   degree : {
        companyname : "ALICE",
        address : {
            street : "JARDIM MARAVILHAS",
            number : "1000",
            zipcode : "13840-000",
            complement : "",
            district : "FANTASIA",
            city : "PAIS DAS MARAVILHAS",
            state : "SP",
            country : "BRASIL"
        }
   },
   graduation : {
        companyname : "MATHEUS HENRIQUE",
        address : {
            street : "JARDIM IGACABA",
            number : "26",
            zipcode : "13840-000",
            complement : "CASA",
            district : "CAIAPOS",
            city : "MOGI GUACU",
            state : "SP",
            country : "BRASIL"
        }
   },
   costs : [
       {name : "ALUGUEL", value : 15000}
   ],
   teachers : [
       {name : "CHAPELEIRO"}
   ],
   datecreate : new Date(),
   dateupdate : new Date()
});