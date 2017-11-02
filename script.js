/* global $ */ 
$(document).ready(function(){
    
    var displayedword = []
           $('#submit').click(function(){
               if(displayedword.indexOf(($('#search_box').val()).toLowerCase())>-1){
                    alert("Word is already displayed");
               }else{
                   $.ajax({
                   type: "GET",
                   data:{q:($('#search_box').val()).toLowerCase()},
                   url: 'request.php',
                   cache:false,
                   success:function(d){
                        $("#results").append(d);
                        $("#results").append("<hr/ width=800px>");
                   },
               })
               displayedword.push(($('#search_box').val()).toLowerCase());
               }
           })
       });