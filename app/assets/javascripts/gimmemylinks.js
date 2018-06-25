

$(function() {
    attachListeners();
    
});

function attachListeners() {
    $(".open-bar").on("click", openBar);     
    $(".new-plus").on("click", openBar)
    
}

function createNewList(e){
    e.preventDefault();

    var values = {
        "authenticity_token": $('meta[name=csrf-token]').attr('content'),
        "list": {
            "name": $("#newListName").val(),
            "color": $("input:checked").val()
    }};

    var posting = $.post('/lists', values, function(response){
        var list = response
        $(".js-appendListName").append(`
            <div class="valign-wrapper">
            <i class="material-icons rightMarginForIcons" style="color: ` + list["color"] + `">brightness_1</i>
            <a href="#" class="js-list" data-id=` + list["id"] +`>` + list["name"] + `</a></div>
            `)
        $('#newListName').val("")
        attachJsListListener()
        
    });

}



function openBar(e) {
    e.preventDefault();

    $.get("/lists.json", function(data) {     
        let htmlData = `
            <div class="js-big-nav"><div class = "colon-left leftSideBigNav darkGray lightGreyBackground">
            <div class="js-appendListName"><div class="right-align"><a href="#"><i class="close-bar material-icons darkGray">chevron_left</i></a></div>
            `+ listsNames(data) +`
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
        $(".big-sidenav").html(htmlData)
        //we need to attach the listener from the opened bar (vs when the document is loaded and the chevron is not visible
        attachCloseBarListener() 
        attachJsListListener()
        attachNewListListener()
    });
    
}

function attachCloseBarListener() {
    $(".close-bar").on("click", closeBar);   
}

function closeBar(e){
    e.preventDefault();
    $(".big-sidenav").html(``)
    };


//rendering the list of lists in the big side bar
function listsNames(data){
let listNamesArray = []

    for (let i=0; i<data.length; i++) {
    let dataStartingPath = data[i]
    listNamesArray.push(`<div class="valign-wrapper"><i class="material-icons rightMarginForIcons" style="color: ` + dataStartingPath["color"] + `">brightness_1</i><a href="#" class="js-list" data-id=` + dataStartingPath["id"] +`>` + dataStartingPath["name"] + `</a></div>`)
    }
    //extract the string from the array and remove the commas to inject it as it
    listNamesString = listNamesArray.toString().replace(/,/g, "")
    return listNamesString 
}




function attachJsListListener(){
    $(".js-list").on("click", displayLinksFromBars);
    $(".js-list").on("click", closeBar);
}


function displayLinksFromBars(e) {
    e.preventDefault();
        //erase all data from that box before displaying a new serie of links
    $(".link").html(``)

    let listId = parseInt($(this).attr("data-id"))
    //render the info
    $.get("/lists.json", function(data) { 
        //render the filter heading
        $(".filter").html(`
        <div>
        </br>
        Sort by |
        <a href= "#"> higher priority</a> | 
        <a href= "#"> most recent</a> |  
        <a href= "#"> oldest</a> 

        </br>
        <a href= "/lists/`+listId+`" data-method="delete"><i id="can" class="material-icons">delete</i>delete this list</a>
    
        </div>

        `)

        //render the links
        //we want the links array for the data whose ["id"] == listId
        for (let j=0; j<data.length; j++){
            if (data[j]["id"] === listId){
                let dataStartingPath = data[j]["links"]
                let linksLength = data[j]["links"].length
                $(".link").append(`</br></br></br>Viewing list: `+data[j]["name"]+``)
                for (let i=0; i<linksLength; i++) {
                    let linkId = dataStartingPath[i]["id"]
                    let data_priority = dataStartingPath[i]["priority"] 
                    let d = new Date(dataStartingPath[i]["created_at"]);
                    let hrDate = (d.getMonth() + 1) + "-" + d.getDate() + "-" + d.getFullYear()
                    let showUrl = "/lists/"+listId+"/links/"+linkId
                     // render the new link page if no link yet
                    if (linksLength===0){
                        $(".link").append(`<a list-id="`+ listId +`" user-id="`+ data[j]["user_id"] +`" class="plus" href=/lists/`+listId+`/links/new><i class="large material-icons">add_circle_outline</i></a>
                        </div>`) 
                    }
                    $(".link").append(`

                        <div class="caption top-margin-show"> </br>
                            <div class="font"><a href=` + showUrl + ` data-id="`+ dataStartingPath[i]["id"] +`">` + dataStartingPath[i]["name"] + `<a>
                            <a href= "/lists/`+listId+`/links/`+linkId+`" data-method="delete"> <i class="small material-icons link-icons-gray push-right">delete</i></a>
                            <a href= "#"> <i id="flag-`+ linkId +`" class="small material-icons link-icons-gray push-right">assistant_photo</i></a>
                            <a href=` + showUrl + `> <i data-id="`+ linkId +`" class="small material-icons link-icons-gray push-right">edit</i></a>
                            <a href=` + showUrl + `> <i data-id="`+ linkId +`" class="small material-icons link-icons-gray push-right">visibility</i></a>
                            <a href= "` + dataStartingPath[i]["url"] + `"target= "blank"> <i class="small material-icons link-icons-gray push-right">link</i></a>
                            </div>
                        </div>       
                        <iframe src="` + dataStartingPath[i]["url"]  + `" style="border-color: ` + data["color"] +`;" class = "preview rounded iframe-placeholder" href=#>` + dataStartingPath[i]["url"] + `</iframe>
                        
                        <div class="link_date font>"></div>
                        <div class="link_date font>">` + hrDate + `</div>
                    `)
                    attachFlagListener(data_priority, linkId)         
                };
                $(".link").append(`<a list-id="`+ listId +`" user-id="`+ data[j]["user_id"] +`" class="plus" href=/lists/`+listId+`/links/new><i class="large material-icons">add_circle_outline</i></a>
                    </div>`) 
                // attachCreateLinkListener(e,listId, data[j]["user_id"])
                // attachShowEditLinkListener()

            }
        }    
    });
};


function attachNewListListener(){
    $("form.js-newList").submit(createNewList)
}

function attachFlagListener(data_priority, linkId){
    $(".link").on("load", flagColor(data_priority, linkId));
}

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


$.get("/lists.json", function(data) {

    var newUser = new User(data[0].user)
    $("#user").html(newUser.renderUserInfo())

})

function User(dataObj){

    this.email = dataObj.email
}

User.prototype.renderUserInfo = function() {
    const name = this.email.split("@")[0]
    return `
        ${name}
    `
}


