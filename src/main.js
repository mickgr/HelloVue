Vue.use(VueMaterial)

Vue.component ('todo-item',{
    props:['task'],
    template: "<li class='todo-item'>{{task.name}}</li>"
})

var app = new Vue({
    el: '#app',
    data: {
        hello: "Hello Vue",
        todo: [
            {id: 1, name: "Kill bill"},
            {id: 2, name: "Sleep with the enemy"},
            {id: 3, name: "Kill bill 2"},
            {id: 4, name: "Sleep with the enemy 2"}
        ],
        newTaskName: ""
    },
    methods: {
        removeRandomly: () => {
            let filteredTodo = app.todo.filter(() => {return Math.random() < 0.5}) ;
            app.todo = filteredTodo;
        },
        add: (taskName)=>{
            let newTask = {id: app.todo.length+1, name: taskName};
            app.todo.push(newTask);
        }
    }
})
