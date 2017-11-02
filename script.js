/* global $ */ 
$(document).ready(function(){
           $('#submit').click(function(){
               $.ajax({
                   type: "GET",
                   data:{q:"definition"},
                   url: 'request.php',
                   cache:false,
                   success:function(d){
                       alert(d);
                   }
               })
           })
       });