 
// $(document).ready(function() {
//     attachListeners();
// });


// function attachListeners() {

// 	$(".open-bar").on("click", function(e) {
//         e.preventDefault();
//         $.get("/lists.json", function(data) {     
//             $(".big-sidenav").html(`
//                 <div class = "colon-left leftSideBigNav darkGray lightGreyBackground";">
//                 <div class="close-bar"><div class="close-bar right-align"><a href="#"><i class=" close-bar material-icons darkGray">chevron_left</i></a></div>
//                 `+ listsNames(data) +`
//                 </div>
//             `)
//         });
//     });
            
//     // need debug
//     // $(".close-bar").on("click", function(e) {
//     //     e.preventDefault();
//     //     $(".main-frame").append(`helo`)
//     // });

//     $(".js-small-list").on("click", function(e) {
//         e.preventDefault();
      
//         $.get("/lists.json", function(data) { 
  
//             //render the links in a list
//         $(".filter").html(`
//         <div>
//         </br>
//         Sort by |
//         <a href= "#"> higher priority</a> | 
//         <a href= "#"> most recent</a> |  
//         <a href= "#"> oldest</a> 

//         <span class="delete_link"  > 
//         <a href= "#"> Delete list!</a>
//         </span>

//         </div>
//         `)
            
             
//         });
//     });


// }

//     //rendering the list of lists in the big side bar
//     var listsNames = function(data){
//     let listNamesArray = []
//         for (let i=0; i<data.length; i++) {
//         listNamesArray.push(`<div data-id=` + data[i]["id"] +`class="valign-wrapper js-list"><i class="material-icons rightMarginForIcons" style="color: ` + data[i]["color"] + `">brightness_1</i><a href="#">` + data[i]["name"] + `</a></div>`)
//         }
//     //extract the string from the array and remove the commas to inject it as it
//     listNamesString = listNamesArray.toString().replace(/,/g, "")
//     return listNamesString 
//     }

           

   
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //reformating priority to be human readable
//     // function hr_priority(data_priority){
//     //     if (data_priority===1){
//     //         return "High Priority"
//     //     }
//     //      else if(data_priority===2){
//     //         return "Medium Priority"
//     //     }
//     //     else {
//     //         return "Low Priority"
//     //     }
//     // }



   

   

  


//     //when a list in the big bar or small bar is clicked
//   // $(".js-list").on("click", function(e) {
//   //        e.preventDefault();
//   //   let id = $(this).data("id")   
//   //      debugger
//   //   $.get("/lists/" + id + ".json", function(data) {

//   //       for (var i=0; i<data["links"].length; i++) {
//   //           let data_priority = data["links"][i]["priority"] 
//   //           let data_priority_result = hr_priority(data_priority)
//   //           let d = new Date(data["links"][i]["created_at"]);
//   //           let hrDate = (d.getMonth() + 1) + "-" + d.getDate() + "-" + d.getFullYear()
//   //           $(".link").html(`
//   //               <div class="caption top-margin-show"> </br>
//   //                   <div class="font">` + data["links"][i]["name"] + ` 
//   //                   <a href= "#"> <i class="tiny material-icons link-icons-gray push-right">delete</i></a>
//   //                   <a href= "#"> <i class="tiny material-icons link-icons-gray red-text push-right">assistant_photo</i></a>
//   //                   <a href= "#"> <i class="tiny material-icons link-icons-gray push-right">edit</i></a>
//   //                   <a href= "#"> <i class="tiny material-icons link-icons-gray push-right">visibility</i></a>
//   //                   <a href= "` + data["links"][i]["url"] + `"target= "blank"> <i class="tiny material-icons link-icons-gray push-right">link</i></a>

//   //                   </div>
//   //               </div>
                
//   //               <iframe src="` + data["links"][i]["url"]  + `" style="border-color: ` + data["color"] +`;" class = "preview rounded iframe-placeholder" href=#>` + data["links"][i]["url"] + `</iframe>
                
//   //               <div class="link_date font>"></div>
//   //               <div class="link_date font>">` + hrDate + `</div>
//   //               `)        
//   //       };
//   //       $(".link").append(`<a class="plus" href=#><i class="large material-icons">add_circle_outline</i></a>
//   //               </div>`)

//   //   });
    
//   // });

  
             
        


