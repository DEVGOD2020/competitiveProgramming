class TaskManager {
    constructor(tasks) {
        this.taskPQ = new PriorityQueue( 
            (a, b) => {
                if(a === undefined || b === undefined){return 0;}
                if(a[2] === b[2]){
                    return b[1] - a[1];
                }
                return b[2] - a[2];
            }
        );
        this.taskUser = new Map();
        this.taskPri = new Map();
        for(let [user,task,pri] of tasks){
            this.taskPQ.enqueue( [user,task,pri] );
            this.taskUser.set( task, user);
            this.taskPri.set( task, pri);
        }
    }

    add(user, task, pri){
        this.taskPQ.enqueue( [user,task,pri] );
        this.taskUser.set( task, user );
        this.taskPri.set( task, pri );
    }

    edit(task, pri){
        const user = this.taskUser.get(task);
        this.taskPQ.enqueue( [user,task,pri] );
        this.taskPri.set(task,pri);
    }

    rmv(task){
        const user = this.taskUser.get(task);
        this.taskPri.set(task,-1);
    }

    execTop(){
        let ans = -1;
        while(this.taskPQ.size()){
            const [user,task,pri] = this.taskPQ.dequeue();
            if( this.taskPri.get(task) === pri && this.taskUser.get(task) === user){
                this.taskPri.set(task,-1);
                this.taskUser.set(task,-1);
                ans = user;
                break;
            }
        }
        return ans;
    }
}
