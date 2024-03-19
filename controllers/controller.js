function postAuthors(req,res){
    res.send(`Hello from ${req.method} Authors`)
 }
 
 function getAuthors(req,res){
    res.send(`Hello from ${req.method} Authors`)
 };
 
 
 function putAuthors(req,res){
   const id = req.params.id
   console.log(`Author with id:${id} successfully updated`)
     res.send(`Hello from ${req.method} Authors`)
  };
  
  function deleteAuthors(req,res){
   const id = req.params.id
   console.log(`Author with id:${id} successfully deleted`)
     res.send(`Hello from ${req.method} Authors`)
  }
 
 
  module.exports = {
     getAuthors,
     putAuthors,
     deleteAuthors,
     postAuthors
 
  }