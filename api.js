const host = "https://webdev-hw-api.vercel.app/api/v2/todos";

export function getTodos({ token }) {

return fetch(host, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      if (response.status === 401) {
        password = prompt("Введите верный пароль");
        fetchTodosAndRender();
        throw new Error("Нет авторизации");
      }

      return response.json();
    });
}


export function deleteTodo ( { token, id }) {
    return fetch("https://webdev-hw-api.vercel.app/api/v2/todos/" + id, {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          return response.json();
        });
}


export function addTodo ({ text, token }) {
   return fetch(host, {
        method: "POST",
        body: JSON.stringify({
          text,
        }),
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          return response.json();
        });
}

// https://github.com/GlebkaF/webdev-hw-api/blob/main/pages/api/user/README.md
export function login ({ login, password }) {
    return fetch("https://wedev-api.sky.pro/api/user/login", {
         method: "POST",
         body: JSON.stringify({
           login,
           password,
         }),
       }).then((response) => {
           return response.json();
         });
 }