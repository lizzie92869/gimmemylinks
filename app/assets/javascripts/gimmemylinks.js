//upon load of the document retrieve the api information, create a new js-user 
$.get("/lists.json", function(data) {
    //the user is instantiated through the use of the first list, user key(provided by the belongs to relationship)
    let newUser = new User(data[0].user)
    //get the div and place the info user modified as specified in the renderUserName function
    $("#user").html(newUser.renderUserName())

})

//define a model object of a User which only takes the email 
function User(dataObj){
    this.email = dataObj.email
}
// add a function on the prototype to extract the name part of the email
User.prototype.renderUserName = function() {
    const name = this.email.split("@")[0]
    return `${name}`
}

// function List(dataObj){
//     this.name = dataObj.name
//     this.color = dataObj.color
//     this.user_id = dataObj.user_id
// }

// List.prototype.listData = function (data, listId) {
//     return data.find(list => {
//        return list.id===listId
//     })
// } 

// function Link(dataObj){
//     this.user_id = dataObj.user_id
//     this.list_id = dataObj.list_id
//     this.name = dataObj.name
//     this.url = dataObj.url
//     this.priority = dataObj.priority
// }






$(function() {
    attachListeners();
    
});
// attach the listeners of the element that display on the document
function attachListeners() {
    $(".open-bar").on("click", openBar);     
    $(".new-plus").on("click", openBar)
    
}
//when click on the right chevron or the small + sign, the side bar shows up whithout page refresh
//removed: <button id="hp-list">only lists HP</button>
function openBar(e) {
    e.preventDefault();
    //get the api data for all lists
    $.get("/lists.json", function(data) { 
        //define a variable holding the bar, the left chevron, the lists names, the form to create a new list    
        let htmlData = ` 
            <div class="js-big-nav"><div class = "colon-left leftSideBigNav darkGray lightGreyBackground">
            <div class="js-appendListName"><div class="right-align"><a href="#"><i class="close-bar material-icons darkGray">chevron_left</i></a></div>
            ${listsNames(data)}
            </div>
            
            </br></br></br></br></br></br>
            <h6>Enter a new list:</h6>
            <form action="/lists" method="post" class="js-newList" id="js-clearList">
                <input id="newListName" type="text" name="name" >
                <h6>Choose a color:</h6>
                
                <label class="container1"> 
                  <input type="radio" checked="checked" name="color" value="#CCFF38" class="newListColor">
                  <span class="checkmark" id="green"></span>
                </label>
                <label class="container1"> 
                  <input type="radio" name="color" value="#604560" class="newListColor">
                  <span class="checkmark" id="purple"></span>
                </label>
                <label class="container1">  
                  <input type="radio" name="color" value="#E4E0D5" class="newListColor">
                  <span class="checkmark" id="taupe"></span>
                </label>
                <label class="container1"> 
                  <input type="radio" name="color" value="#51CDA7" class="newListColor">
                  <span class="checkmark" id="teal"></span>
                </label>
                <label class="container1"> 
                  <input type="radio" name="color" value="#BCB7B3" class="newListColor">
                  <span class="checkmark" id="mgrey"></span>
                </label>
                <label class="container1"> 
                  <input type="radio" name="color" value="#FF3333" class="newListColor">
                  <span class="checkmark" id="red"></span>
                </label>
                <label class="container1"> 
                  <input type="radio" name="color" value="#F9FFFC" class="newListColor">
                  <span class="checkmark" id="mint"></span>
                </label>
                </br></br>
                <input type="submit" id="submitNewListButton">
            </form>
            </div>`
        // insert this variable in the parent div
        $(".big-sidenav").html(htmlData)
        //we need to attach the listener to close the bar, open a list and create a new list from here 
        //as the elements triggering those events are only visible after the openbar() executes
        attachCloseBarListener() 
        attachJsListListener()
        attachNewListListener()
        attachButtonListener()
    }); 
}

function attachButtonListener(){
    $("#hp-list").on("click", filterList);
}

function filterList(e){
    e.preventDefault();
    $.get("/lists.json", function(data) { 
        
    // let listNamesArray = []
    //     data.forEach(function(list){
    //         let linksLenght = list.links.length
    //         if (linksLenght > 0){
    //             let links = list.links
    //             if (links.some(link => link.priority < 2)){
    //                 listNamesArray.push(list)  
    //             } 
    //         }
    //     });

    let listNamesArray = data.filter(list=>{
        let linksLenght = list.links.length;
        let links = list.links;
        return (linksLenght > 0 && links.some(link => link.priority < 2))
    });

//removed: <button id="hp-list">only lists HP</button>
    let htmlData = ` 
            <div class="js-big-nav"><div class = "colon-left leftSideBigNav darkGray lightGreyBackground">
            <div class="js-appendListName"><div class="right-align"><a href="#"><i class="close-bar material-icons darkGray">chevron_left</i></a></div>
            ${listsNames(listNamesArray)}
            </div>
            
            </br></br></br></br></br></br>
            <h6>Enter a new list:</h6>
            <form action="/lists" method="post" class="js-newList" id="js-clearList">
                <input id="newListName" type="text" name="name" >
                <h6>Choose a color:</h6>
                
                <label class="container1"> 
                  <input type="radio" checked="checked" name="color" value="#CCFF38" class="newListColor">
                  <span class="checkmark" id="green"></span>
                </label>
                <label class="container1"> 
                  <input type="radio" name="color" value="#604560" class="newListColor">
                  <span class="checkmark" id="purple"></span>
                </label>
                <label class="container1">  
                  <input type="radio" name="color" value="#E4E0D5" class="newListColor">
                  <span class="checkmark" id="taupe"></span>
                </label>
                <label class="container1"> 
                  <input type="radio" name="color" value="#51CDA7" class="newListColor">
                  <span class="checkmark" id="teal"></span>
                </label>
                <label class="container1"> 
                  <input type="radio" name="color" value="#BCB7B3" class="newListColor">
                  <span class="checkmark" id="mgrey"></span>
                </label>
                <label class="container1"> 
                  <input type="radio" name="color" value="#FF3333" class="newListColor">
                  <span class="checkmark" id="red"></span>
                </label>
                <label class="container1"> 
                  <input type="radio" name="color" value="#F9FFFC" class="newListColor">
                  <span class="checkmark" id="mint"></span>
                </label>
                </br></br>
                <input type="submit" id="submitNewListButton">
            </form>
            </div>`
        // insert this variable in the parent div
        $(".big-sidenav").html(htmlData)
        //we need to attach the listener to close the bar, open a list and create a new list from here 
        //as the elements triggering those events are only visible after the openbar() executes
        attachCloseBarListener() 
        attachJsListListener()
        attachNewListListener()
        attachButtonListener()    
    });
}
        
       



//create the string to append for the lists names
function listsNames(data){
// let listNamesArray = []
//     data.forEach(function(list){
//         listNamesArray.push(`<div class="valign-wrapper"><i class="material-icons rightMarginForIcons" style="color: ` + list["color"] + `">brightness_1</i><a href="#" class="js-list" data-id=` + list["id"] +`>` + list["name"] + `</a></div>`)
//     })
//     //extract the string from the array and remove the commas to inject it as it
//     listNamesString = listNamesArray.toString().replace(/,/g, "")
//     return listNamesString 
    let listNamesArray = data.map(function(list){
        return `<div class="valign-wrapper"><i class="material-icons rightMarginForIcons" style="color: ` + list["color"] + `">brightness_1</i><a href="#" class="js-list" data-id=` + list["id"] +`>` + list["name"] + `</a></div>`
    })
    //extract the string from the array and remove the commas to inject it as it
    listNamesString = listNamesArray.toString().replace(/,/g, "")
    return listNamesString    
}




//on click of the left chevron, executes closebar()
function attachCloseBarListener() {
    $(".close-bar").on("click", closeBar);   
}

//the function remove any element appended to the parent div
function closeBar(e){
    e.preventDefault();
    $(".big-sidenav").html(``)
    };

//when a list is click we want to display the links of the list but also close the bar for a better preview
function attachJsListListener(){
    $(".js-list").on("click", displayLinksFromBars);
    $(".js-list").on("click", closeBar);
}

let listData = (data, listId) =>{
    return data.find(list => {
       return list.id===listId
    })
} 

let linkData = (data, list) =>{
    let listId = list.id
    let listColor = list.color
    return list.links.map(link => {
        
        let linkId = link.id
        let linkName = link.name
        let linkUrl = link.url
        let showUrl = "/lists/"+listId+"/links/"+linkId
        let d = new Date(link.created_at);
        let hrDate = (d.getMonth() + 1) + "-" + d.getDate() + "-" + d.getFullYear()
        let data_priority = link.priority

        $(".link").append(`
            <div class="caption top-margin-show"> </br>
                <div class="font"><a href=` + showUrl + ` data-id="`+ linkId +`">` + linkName + `<a>
                <a href= "/lists/`+listId+`/links/`+linkId+`" data-method="delete"> <i class="small material-icons link-icons-gray push-right">delete</i></a>
                <a href= "#"> <i id="flag-`+ linkId +`" class="small material-icons link-icons-gray push-right">assistant_photo</i></a>
                <a href=` + showUrl + `> <i data-id="`+ linkId +`" class="small material-icons link-icons-gray push-right">edit</i></a>
                <a href=` + showUrl + `> <i data-id="`+ linkId +`" class="small material-icons link-icons-gray push-right">visibility</i></a>
                <a href= "` + linkUrl + `"target= "blank"> <i class="small material-icons link-icons-gray push-right">link</i></a>
                </div>
            </div>       
            <iframe src="` + linkUrl  + `" style="border-color: ` + listColor +`;" class = "preview rounded iframe-placeholder" href=#>` + linkUrl + `</iframe>
            <div class="link_date font>">` + hrDate + `</div>
        `)
        //listen for the flag to show up to ask for its color
        attachFlagListener(data_priority, linkId) 
        
    })
}

function renderFilterHeading(listId){
$(".filter").html(`
        <div>
        </br>
        Sort by |
        <a href= "#" id="high-priority" data-id=`+listId+`> higher priority</a> | 
        <a href= "#"> most recent</a> |  
        <a href= "#"> oldest</a> 
        </br>
        <a href= "/lists/`+listId+`" data-method="delete"><i id="can" class="material-icons">delete</i>delete this list</a>
    
        </div>
        `) 
}

//the function render the filter in a specific div and append the links through a loop to the next div
function displayLinksFromBars(e) {
    e.preventDefault();
    //erase all data from that box before displaying a new serie of links
    $(".link").html(``)
    //hold the id of the list that has been clicked on. "this" is the link clicked
    let listId = parseInt($(this).attr("data-id"))
    //render the filter heading
    renderFilterHeading(listId)

    //get the lists and their links from the API
 
    $.get("/lists.json", function(data) {
        //return the list where list.id===listId
        let list = listData(data, listId)
        let listName = list.name
        $(".link").append(`</br></br></br>Viewing list: `+listName+``)
        //append all the links with the styling    
        let links = linkData(data, list) 
        //append the + sign to add a new link
        $(".link").append(`
            <a list-id="`+ listId +`" user-id="`+ list.user+`" class="plus" href=/lists/`+listId+`/links/new><i class="large material-icons">add_circle_outline</i></a>
            </div>
        `) 
        //to think about
        // attachHighPriorityListener()
        // attachMostRecentListener()
        // attachOldestListener()
  
    });
};




// listen for the submit of the form for a new list
function attachNewListListener(){
    $("form.js-newList").submit(createNewList)
}

//create the list and append the list name without refreshing the page
function createNewList(e){
    e.preventDefault();
    // we should have writte let values = $(this).serialize(); but
    // to create a new list Devise requiere the token of the user
    //so we have to write the whole object we pass to the post request
    let values = {
        "authenticity_token": $('meta[name=csrf-token]').attr('content'),
        "list": {
            "name": $("#newListName").val(),
            "color": $("input:checked").val()
    }};
    // post to the api with $.post(url, data, success callback function), append the new list to the list of lists and empty input field
    let posting = $.post('/lists', values, function(response){
        let list = response
        $(".js-appendListName").append(`
            <div class="valign-wrapper">
            <i class="material-icons rightMarginForIcons" style="color: ` + list["color"] + `">brightness_1</i>
            <a href="#" class="js-list" data-id=` + list["id"] +`>` + list["name"] + `</a></div>
            `)
        $('#newListName').val("")
        attachJsListListener()
        
    });

}
// listen for the flag to show up to ask for the color
function attachFlagListener(data_priority, linkId){
    $(".link").on("load", flagColor(data_priority, linkId));
}
// add a css class to define the color of the flag 
function flagColor(data_priority, linkId){
    if (data_priority===1){
        $("#flag-"+linkId).addClass('red-text');
    }

    else if(data_priority===2){
         $("#flag-"+linkId).addClass('yellow-text');
    }
    else {
         $("#flag-"+linkId).addClass('white-text');
    }
}

//upon load of the document retrieve the api information, create a new js-user 
$.get("/lists.json", function(data) {
    //the user is instantiated through the use of the first list, user key(provided by the belongs to relationship)
    let newUser = new User(data[0].user)
    //get the div and place the info user modified as specified in the renderUserName function
    $("#user").html(newUser.renderUserName())

})

//define a model object of a User which only takes the email 
function User(dataObj){
    this.email = dataObj.email
}
// add a function on the prototype to extract the name part of the email
User.prototype.renderUserName = function() {
    const name = this.email.split("@")[0]
    return `${name}`
}

function List(dataObj){
    this.name = dataObj.name
    this.color = dataObj.color
    this.user_id = dataObj.user_id
}

List.prototype.listData = function (data, listId) {
    return data.find(list => {
       return list.id===listId
    })
} 

function Link(dataObj){
    this.user_id = dataObj.user_id
    this.list_id = dataObj.list_id
    this.name = dataObj.name
    this.url = dataObj.url
    this.priority = dataObj.priority
}