/* global $ */ 

$(document).ready(function(){
    
    var displayedword = []
           $('#submit').click(function(){
               if(displayedword.indexOf(($('#search_box').val()).toLowerCase())>-1 || displayedword[0] =="all"){
                    alert("Word is already displayed");
               }else if($('#search_box').val() === ""){
                   alert("No value is entered");
                   
               }else{
                   $.ajax({
                   type: "GET",
                   data:{q:($('#search_box').val()).toLowerCase()},
                   url: 'request.php',
                   cache:false,
                   success:function(d){
                       if(d != ''){
                            $("#results").append(d);
                            $("#results").append("<hr/ width=900px>");
                            displayedword.push(($('#search_box').val()).toLowerCase());
                       }else{
                           alert("Word not in dictionary")
                       }
                   },
               })
              
               }
           })
           
           
           document.getElementById("submitall").onclick = function(){
                var fileRequest = new XMLHttpRequest();

                var url = "request.php";
                fileRequest.onreadystatechange = getXml;
                fileRequest.open('GET', url);
                fileRequest.send({q:''});
        
                function getXml() {
                     if (fileRequest.readyState === 4 && fileRequest.status === 200) {
                         var getdata = fileRequest.responseXML;
                         var dataitems = getdata.getElementsByTagName("word");

                         var datalist = document.createElement("ol");
                        $('#results').html("");
                         document.querySelector('#results').appendChild(datalist);
                         
                         for(var x = 0;x<dataitems.length;x++){
                             var items = document.createElement("li");
                             var head = document.createElement("h3");
                             var tail= document.createElement("p");
                             items.appendChild(head);
                             items.appendChild(tail);
                             var data = document.createTextNode(dataitems[x].children[0].childNodes[0].nodeValue);
                             head.appendChild(data);
                             data = document.createTextNode(dataitems[x].children[1].childNodes[0].nodeValue);
                             tail.appendChild(data);
                             datalist.appendChild(items);
                         }
                         
                          displayedword.push("all");
                }
              };
           }
           
       });