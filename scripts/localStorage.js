let favorites = [];

function LocalStorageByName(Name)
{
    favorites.push(firstName)
    localStorage.setItem.setItem('favorites',JSON.stringify(favorites))
};
function SaveToLocalStorage(){
    localStorage.setItem('favorites',JSON.stringify(favorites));
}
function CheckStorage(){
    const localStorageItem = localStorage.getItem('favorites');
    localStorageItem != null ? favorites = JSON.parse(localStorageItem) : favorites = [];
}

function GetStorage(){
    CheckStorage();
    return favorites
}

function RemoveFromStorage(firstName){
    let nameIndex = favorites.indexOf(firstName);
    favorites.splice(nameIndex,0);
    SaveToLocalStorage();
}

export {SaveToLocalStorage,GetStorage,RemoveFromStorage}