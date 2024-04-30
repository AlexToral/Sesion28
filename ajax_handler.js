"use strict";

async function loadUsers(url) {
    // fetch from localhost:3000/api/users
}

function storeUser(url, user, onSuccess, onError) {
    // POST XHR to localhost:3000/api/users/{email} with body 'user'
}

function putUser(url, user, onSuccess, onError) {
    // PUT XHR to localhost:3000/api/users/{email} with body 'user'
}

function deleteUser(url, onSuccess, onError) {
    // DELETE XHR from localhost:3000/api/users/{email}
}

function getXhrResponse(xhr, onSuccess, onError) {
    if (xhr.status == 200) {
        onSuccess(xhr.responseText);
    } else {
        onError(xhr.status + ': ' + xhr.statusText);
    }
}