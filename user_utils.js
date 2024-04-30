"use strict";

let userContainer = document.getElementById('userList');
const usersUrl = 'http://localhost:3000/api/users/';

function userToHTML(user) {
    return `
    <div class="media col-12 mt-2">
        <div class="media-left align-self-center mr-3">
            <img src="${user.image}">
        </div>
        <div class="media-body">
            <h4>${user.firstName} ${user.lastName}</h4>
            <p>Correo: ${user.email}</p>
            <p>Fecha de nacimiento: ${user.date}</p>
            <p>Sexo: ${user.sex}</p>
        </div>
        <div class="media-right align-self-center">
            <div class="row">
                <a href="#" class="btn btn-primary"><i class="fas fa-search"></i></a>
            </div>
            <div class="row">
                <a onclick="preloadEditModal('${user.email}')" href="#" class="btn btn-primary mt-2" data-toggle="modal" data-target="#editModal"><i class="fas fa-pencil-alt"></i></a>
            </div>
            <div class="row">
                <a onclick="preloadDeleteModal('${user.email}')" href="#" class="btn btn-primary mt-2" data-toggle="modal" data-target="#deleteModal"><i class="fas fa-trash-alt"></i></i></a>
            </div>
        </div>
    </div>
    `
}

function usersToHTML(users) {
    userContainer.innerHTML = users.map(userToHTML).join("\n");
}

async function preloadEditModal(email) {
    // Load user with given email and preload emailEditModal with it
}

function preloadDeleteModal(email) {
    // preload user email on 'emailDeleteModal'
}

function editUser() {
    // get edit modal user info and put it into the server
}

function removeUser() {
    // get delete modal user email and remove it from the server
}