export default class UserService {
    url = 'https://jsonplaceholder.typicode.com/users'

    async users() {
        return await fetch(this.url)
            .then(value => value.json())
    }

    async user(id) {
        return await fetch(this.url + `/${id}`)
            .then(value => value.json())
    }

}