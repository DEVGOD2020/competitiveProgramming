class Router {
    constructor(memLimit) {
        this.data = new Deque();
        this.blah = new Map();
        this.set = new Set();
        this.memLimit = memLimit;
    }
    addPacket(source, destination, timestamp) {
        const key = `${[source, destination, timestamp]}`
        if (this.set.has(key)) { return false; }
        this.data.pushBack(
            [source, destination, timestamp]
        );
        this.set.add(key);
        if (this.blah.get(destination) == undefined) {
            this.blah.set(destination, new Deque());
        }
        this.blah.get(destination).pushBack(timestamp);
        if (this.data.size() > this.memLimit) {
            this.forwardPacket();
        }
        return true;
    }
    forwardPacket() {
        const pack = this.data.popFront();
        if (pack === null) { return []; }
        this.set.delete(`${pack}`);
        this.blah.get(pack[1]).popFront();
        return pack;
    }
    getCount(destination, startTime, endTime) {
        if (this.blah.get(destination) === undefined) {
            return 0;
        }
        let arr = this.blah.get(destination)._backElements;

        let start = _.sortedIndex(arr, startTime);
        let end = _.sortedLastIndex(arr, endTime);

        return Math.max(end,
            this.blah.get(destination)._backOffset
        ) -
            Math.max(start,
                this.blah.get(destination)._backOffset
            );
    }
};
