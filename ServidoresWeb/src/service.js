const data = require('./MOCK_DATA.json')

module.exports = {
  getUsers: () => data,

  getUser: (id) => {
    let identificador = Number(id)
    let user = data.filter((person) => person.id === identificador)[0]
    return user
  },

  createUser: (dataUser) => {
    let newUser = {
      id: data.length + 1,
      ...dataUser,
    }
    data.push(newUser)
    return newUser
  },

  editUser: (id, dataUser) => {
    let identificador = Number(id)
    let user = data.filter((person) => person.id === identificador)[0]
    if (user) {
      user.first_name = dataUser.first_name || user.first_name;
      user.last_name = dataUser.last_name || user.last_name; 
      user.email = dataUser.email || user.email;
      return user;
    } else {
      return null;
    }
  },

  delUser: (id) => {
    let identificador = Number(id)
    let user = data.findIndex((person) => person.id === identificador)
    if (user) {
      data.splice(user, 1)
      return user;
    } else {
      return null;
    }
  }

}
