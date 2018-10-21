var btnSubmit = document.forms["favourite-form"]["btn-submit"];
btnSubmit.onclick = function () {
    var classCheckFavourite = document.getElementsByClassName("check-favour");
    var myFavouriteGames = "";
    for (var i = 0; i < classCheckFavourite.length; i++) {
        if (classCheckFavourite[i].checked) {
            myFavouriteGames += classCheckFavourite[i].value + ",";
        }
    }
    alert(myFavouriteGames.substring(0,myFavouriteGames.length -2));
}
