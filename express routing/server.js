var express=require('express')
var app=express()
 
var cookiParser=require('cookie-parser')

 var users=[
  {
    username:"nani",
    password:"123"
  },
  {
    username:"sonu",
    password:"345"
  }
 ]

var body=require('body-parser')
var cors=require('cors')

app.use(cors())    
app.use(cookiParser())

app.use(body.urlencoded({extended:false})) // form data submit
app.use(body.json()) // json data ajax call

// static file request middleware


 // custom middleware

  // app.use(function (req,res,next){
  //   res.send("This is custom middleware")
  //    res.next()
  // })


//  app.get('/',function(req,res){
//     res.send("Request received from root")
//   })


   // sendFile

  //  app.get('/',function(req,res){
  //   res.sendFile(__dirname+"/home.html")
  //  })
  
  //  app.get('/about',function(req,res){
  //   res.sendFile(__dirname+"/about.html")
  //  })

  //  app.get('/careers',function(req,res){
  //   res.sendFile(__dirname+"/careers.html")
  //  })
  //  app.get('/style.css',function(req,res){
  //    res.sendFile(__dirname+"/style.css")
  //  })



  // res.redirect

    // app.get("/",function(req,res){
    //   res.redirect("/abc")
    // })

    app.get("/abc",function(req,res){
      res.send("Hello this is from /abc route")
    })


     app.use(express.static(__dirname+"/Publicc")) 


    //login

    

    app.get("/",function(req,res){

      if(req.cookies.username){
        res.redirect('/home.html')
      }
      else{

        res.redirect("/login.html")
      }
    }) 

    app.get("/login",function(req,res){
      var x= users.find((user)=>{
        if(user.username===req.query.username && user.password===req.query.password){
            return true
        }
      })

      if(x){
        console.log(x)
        res.cookie("username",req.query.username)
        res.cookie("password",req.query.password)
        res.redirect("/home.html")
      }
      else{
        console.log(false)
        res.redirect("/errorlogin.html")
      }
    })

  // app.get('/add',function(req,res){
  //   res.send("Request received from /add route")
  // })

    //Parameterized or dynamic routing 

    app.get('/add/:x/:y',function(req,res){
        console.log(req)
        res.send('Request received from params ')
    })
     

    function midd(req,res,next){
      res.send("Middleware is a nothing but a function. which will excute before the excution of the route ")
    }

    app.get('/add', midd,function(req,res){
      console.log(req.query)
      res.send('Addition is::'+(+req.query.num1+ +req.query.num2))

    })


   

    app.post('/add',function(req,res){
      console.log(req.body)
      console.log(req.body.num1)
      console.log(req.body.num2)

      res.json(`Addition is:: ${+req.body.num1+ +req.body.num2}`)
     
    })


app.listen(4300,()=>{
    console.log("server running on 4300 port....!")
})


